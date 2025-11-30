# Purpose: Supabase webhook handlers for auth events
# /backend/webhooks/supabase_webhooks.py
import os
import hmac
import hashlib
import json
import logging
from typing import Any, Dict, Optional

from fastapi import APIRouter, BackgroundTasks, Header, HTTPException, Request, status
from fastapi.responses import JSONResponse

# Optionally used to verify JWT if your payload contains tokens
from jose import jwt, JWTError

# Import your application services (implemented in later sets)
# These should be async functions. If your services are sync, use run_in_threadpool.
from users import services as user_services
from analytics import events as analytics_events

logger = logging.getLogger("neocred.webhooks")
router = APIRouter(prefix="/webhooks", tags=["webhooks"])

# env settings
WEBHOOK_SECRET = os.environ.get("SUPABASE_WEBHOOK_SECRET", None)
SUPABASE_JWT_SIGNING_KEY = os.environ.get("SUPABASE_JWT_SIGNING_KEY", None)  # optional

if WEBHOOK_SECRET is None:
    logger.warning("SUPABASE_WEBHOOK_SECRET not set. Webhook signature validation will be disabled!")


def _verify_signature(body: bytes, signature_header: Optional[str]) -> bool:
    """
    Verify HMAC-SHA256 signature. Supabase webhook should be configured to add this header.
    - header should be a hex string of HMAC-SHA256(WEBHOOK_SECRET, body)
    """
    if not WEBHOOK_SECRET:
        # No secret configured — be strict in prod, but allow in dev with warning
        logger.warning("No webhook secret configured; skipping signature verification.")
        return True

    if not signature_header:
        logger.warning("Signature header missing.")
        return False

    try:
        provided_sig = signature_header.strip()
        mac = hmac.new(WEBHOOK_SECRET.encode("utf-8"), msg=body, digestmod=hashlib.sha256)
        expected_sig = mac.hexdigest()
        # use constant-time compare
        return hmac.compare_digest(provided_sig, expected_sig)
    except Exception as e:
        logger.exception("Error verifying signature: %s", e)
        return False


def _verify_jwt_token(token: str) -> Optional[Dict[str, Any]]:
    """
    Optional JWT verification if payload contains a token and you have signing key.
    Returns payload dict if valid, else None.
    """
    if not SUPABASE_JWT_SIGNING_KEY:
        logger.debug("SUPABASE_JWT_SIGNING_KEY not set; skipping JWT verification.")
        return None

    try:
        payload = jwt.decode(token, SUPABASE_JWT_SIGNING_KEY, algorithms=["HS256"])
        return payload
    except JWTError as e:
        logger.warning("JWT verification failed: %s", e)
        return None


async def _handle_user_created(user_obj: Dict[str, Any]):
    """
    Called asynchronously to handle new user signups.
    Expected user_obj fields: id, email, raw_user_meta_data, app_metadata, etc.
    """
    try:
        # Create or update user in backend DB (profiles table)
        await user_services.create_or_update_user_from_supabase(user_obj)

        # Track analytics event
        await analytics_events.track_event(
            user_id=user_obj.get("id"),
            event_type="signup",
            metadata={
                "email": user_obj.get("email"),
                "provider": user_obj.get("app_metadata", {}).get("provider") or user_obj.get("provider"),
                "invite": user_obj.get("raw_user_meta_data", {}).get("invite_code") if user_obj.get("raw_user_meta_data") else None,
            },
        )
        logger.info("Processed user.created for user: %s", user_obj.get("id"))
    except Exception as exc:
        logger.exception("Error handling user.created webhook: %s", exc)


async def _handle_user_signed_in(user_obj: Dict[str, Any]):
    """
    Called when user signs in (OAuth or password).
    """
    try:
        # Ensure user exists / update last_login
        await user_services.create_or_update_user_from_supabase(user_obj, update_last_login=True)

        # Track analytics event
        await analytics_events.track_event(
            user_id=user_obj.get("id"),
            event_type="login",
            metadata={
                "email": user_obj.get("email"),
                "provider": user_obj.get("app_metadata", {}).get("provider") or user_obj.get("provider"),
            },
        )
        logger.info("Processed user.signed_in for user: %s", user_obj.get("id"))
    except Exception as exc:
        logger.exception("Error handling user.signed_in webhook: %s", exc)


async def _handle_user_updated(user_obj: Dict[str, Any], changes: Dict[str, Any]):
    """
    Called when user profile is updated. Sync relevant fields.
    """
    try:
        await user_services.create_or_update_user_from_supabase(user_obj, changes=changes)
        await analytics_events.track_event(
            user_id=user_obj.get("id"),
            event_type="profile_updated",
            metadata={"changes": changes},
        )
        logger.info("Processed user.updated for user: %s", user_obj.get("id"))
    except Exception as exc:
        logger.exception("Error handling user.updated webhook: %s", exc)


@router.post("/supabase", status_code=200)
async def supabase_webhook(
    request: Request,
    background_tasks: BackgroundTasks,
    x_supabase_signature: Optional[str] = Header(None),  # name used for signature header; update if different
):
    """
    Endpoint to receive Supabase auth webhooks (signup, signin, update).
    - Validates HMAC signature (if configured).
    - Parses event and schedules async handlers.
    """

    raw_body = await request.body()
    # 1) Verify signature
    ok_sig = _verify_signature(raw_body, x_supabase_signature)
    if not ok_sig:
        logger.warning("Invalid or missing webhook signature.")
        # Return 401 to indicate forbidden webhook call
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid webhook signature")

    # 2) Parse JSON
    try:
        payload = await request.json()
    except Exception as e:
        logger.exception("Invalid JSON payload on webhook: %s", e)
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid JSON payload")

    # Example assumed payload structure:
    # {
    #   "event": "user.created" | "user.signed_in" | "user.updated",
    #   "user": { ... },
    #   "token": "<optional jwt>"
    # }
    event_type = payload.get("event") or payload.get("type") or payload.get("event_type")
    user_obj = payload.get("user") or payload.get("record") or payload.get("data")
    token = payload.get("token")  # optional jwt included by Supabase (if configured)

    if not event_type or not user_obj:
        logger.warning("Webhook payload missing event or user: %s", payload)
        return JSONResponse({"status": "ignored", "reason": "missing event/user"}, status_code=200)

    # 3) Optional JWT verification (best-effort)
    if token:
        verified_payload = _verify_jwt_token(token)
        if verified_payload is None:
            logger.warning("JWT present but invalid; proceeding without jwt trust.")
        else:
            # you may attach verified claims to user_obj for downstream logic
            user_obj["_jwt_claims"] = verified_payload

    # 4) Route event to background handlers
    # Normalize event names (accept multiple possible variants)
    normalized = event_type.lower()
    if normalized in ("user.created", "auth.user.created", "user.signup", "user.signed_up"):
        background_tasks.add_task(_handle_user_created, user_obj)
    elif normalized in ("user.signed_in", "auth.user.signed_in", "user.login", "user.logged_in"):
        background_tasks.add_task(_handle_user_signed_in, user_obj)
    elif normalized in ("user.updated", "auth.user.updated", "profile.updated"):
        changes = payload.get("changes", {}) or {}
        background_tasks.add_task(_handle_user_updated, user_obj, changes)
    else:
        # Generic event fallback
        background_tasks.add_task(
            analytics_events.track_event,
            user_id=user_obj.get("id"),
            event_type=event_type,
            metadata={"payload": payload},
        )
        logger.info("Received unhandled webhook event: %s", event_type)

    return JSONResponse({"status": "accepted"}, status_code=200)
