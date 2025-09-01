"""Enterprise Database Management"""
from sqlalchemy import create_engine, Column, Integer, String, DateTime, Text, Boolean, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from datetime import datetime
from config import settings
import logging

logger = logging.getLogger(__name__)

# Database setup
engine = create_engine(
    settings.database_url,
    pool_pre_ping=True,
    pool_recycle=300,
    echo=settings.debug
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Database Models
class NewsArticle(Base):
    __tablename__ = "news_articles"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(500), nullable=False, index=True)
    summary = Column(Text)
    link = Column(String(1000), unique=True, index=True)
    source = Column(String(100), index=True)
    published = Column(DateTime, index=True)
    relevance_score = Column(Float, default=0.0)
    tags = Column(String(500))  # JSON string
    created_at = Column(DateTime, default=datetime.utcnow, index=True)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    is_active = Column(Boolean, default=True)

class ChatSession(Base):
    __tablename__ = "chat_sessions"
    
    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String(100), unique=True, index=True)
    user_message = Column(Text, nullable=False)
    bot_response = Column(Text, nullable=False)
    tool_suggested = Column(String(200))
    response_time = Column(Float)
    tokens_used = Column(Integer)
    created_at = Column(DateTime, default=datetime.utcnow, index=True)
    user_ip = Column(String(45))  # IPv6 support

class APIMetrics(Base):
    __tablename__ = "api_metrics"
    
    id = Column(Integer, primary_key=True, index=True)
    endpoint = Column(String(200), nullable=False, index=True)
    method = Column(String(10), nullable=False)
    status_code = Column(Integer, nullable=False)
    response_time = Column(Float, nullable=False)
    user_ip = Column(String(45))
    user_agent = Column(String(500))
    created_at = Column(DateTime, default=datetime.utcnow, index=True)

class SystemHealth(Base):
    __tablename__ = "system_health"
    
    id = Column(Integer, primary_key=True, index=True)
    service_name = Column(String(100), nullable=False, index=True)
    status = Column(String(20), nullable=False)  # healthy, degraded, unhealthy
    response_time = Column(Float)
    error_message = Column(Text)
    checked_at = Column(DateTime, default=datetime.utcnow, index=True)

# Database dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Create tables
def create_tables():
    try:
        Base.metadata.create_all(bind=engine)
        logger.info("Database tables created successfully")
    except Exception as e:
        logger.error(f"Error creating database tables: {e}")

# Database utilities
def save_chat_session(db: Session, session_id: str, user_message: str, 
                     bot_response: str, tool_suggested: str = None, 
                     response_time: float = None, tokens_used: int = None,
                     user_ip: str = None):
    try:
        chat_session = ChatSession(
            session_id=session_id,
            user_message=user_message[:1000],  # Limit length
            bot_response=bot_response[:2000],
            tool_suggested=tool_suggested,
            response_time=response_time,
            tokens_used=tokens_used,
            user_ip=user_ip
        )
        db.add(chat_session)
        db.commit()
        return chat_session
    except Exception as e:
        logger.error(f"Error saving chat session: {e}")
        db.rollback()
        return None

def save_news_article(db: Session, title: str, summary: str, link: str, 
                     source: str, published: datetime = None, 
                     relevance_score: float = 0.0, tags: str = None):
    try:
        # Check if article already exists
        existing = db.query(NewsArticle).filter(NewsArticle.link == link).first()
        if existing:
            return existing
        
        article = NewsArticle(
            title=title[:500],
            summary=summary,
            link=link,
            source=source,
            published=published or datetime.utcnow(),
            relevance_score=relevance_score,
            tags=tags
        )
        db.add(article)
        db.commit()
        return article
    except Exception as e:
        logger.error(f"Error saving news article: {e}")
        db.rollback()
        return None

def log_api_metrics(db: Session, endpoint: str, method: str, status_code: int,
                   response_time: float, user_ip: str = None, user_agent: str = None):
    try:
        metrics = APIMetrics(
            endpoint=endpoint[:200],
            method=method,
            status_code=status_code,
            response_time=response_time,
            user_ip=user_ip,
            user_agent=user_agent[:500] if user_agent else None
        )
        db.add(metrics)
        db.commit()
    except Exception as e:
        logger.error(f"Error logging API metrics: {e}")
        db.rollback()

def update_system_health(db: Session, service_name: str, status: str, 
                        response_time: float = None, error_message: str = None):
    try:
        health = SystemHealth(
            service_name=service_name,
            status=status,
            response_time=response_time,
            error_message=error_message
        )
        db.add(health)
        db.commit()
    except Exception as e:
        logger.error(f"Error updating system health: {e}")
        db.rollback()