# Purpose: GraphQL schema definition
import strawberry

@strawberry.type
class Query:
    @strawberry.field
    def hello(self) -> str:
        return "Hello from NeoCred GraphQL!"

schema = strawberry.Schema(query=Query)