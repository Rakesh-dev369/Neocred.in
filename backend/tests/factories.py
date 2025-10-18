"""Factory Boy Test Data Factories"""
import factory
from factory import fuzzy
from database.models import User, ChatSession, FinancialData
from datetime import datetime

class UserFactory(factory.Factory):
    class Meta:
        model = User
    
    id = factory.Sequence(lambda n: n)
    email = factory.Faker('email')
    full_name = factory.Faker('name')
    hashed_password = factory.Faker('password')
    is_active = True
    created_at = factory.LazyFunction(datetime.now)

class ChatSessionFactory(factory.Factory):
    class Meta:
        model = ChatSession
    
    id = factory.Sequence(lambda n: n)
    user_id = factory.SubFactory(UserFactory)
    session_data = factory.LazyFunction(lambda: {"messages": []})
    created_at = factory.LazyFunction(datetime.now)

class FinancialDataFactory(factory.Factory):
    class Meta:
        model = FinancialData
    
    id = factory.Sequence(lambda n: n)
    user_id = factory.SubFactory(UserFactory)
    data_type = fuzzy.FuzzyChoice(['sip', 'loan', 'investment', 'insurance'])
    data_json = factory.LazyFunction(lambda: {"amount": 10000, "duration": 12})
    created_at = factory.LazyFunction(datetime.now)