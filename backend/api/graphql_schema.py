"""GraphQL Schema with Strawberry (Optional)"""
import strawberry
from typing import List, Optional
from datetime import datetime

@strawberry.type
class User:
    id: int
    email: str
    full_name: Optional[str]
    is_active: bool
    created_at: datetime

@strawberry.type
class ChatSession:
    id: int
    user_id: Optional[int]
    created_at: datetime

@strawberry.type
class FinancialData:
    id: int
    user_id: Optional[int]
    data_type: str
    created_at: datetime

@strawberry.type
class Query:
    @strawberry.field
    async def users(self) -> List[User]:
        # Implement user fetching logic
        return []
    
    @strawberry.field
    async def user(self, id: int) -> Optional[User]:
        # Implement single user fetching
        return None
    
    @strawberry.field
    async def chat_sessions(self, user_id: int) -> List[ChatSession]:
        # Implement chat session fetching
        return []

@strawberry.type
class Mutation:
    @strawberry.mutation
    async def create_user(self, email: str, full_name: Optional[str] = None) -> User:
        # Implement user creation
        return User(id=1, email=email, full_name=full_name, is_active=True, created_at=datetime.now())

schema = strawberry.Schema(query=Query, mutation=Mutation)