from app.intelligence.health_engine import HealthEngine
from app.intelligence.revenue_engine import RevenueEngine
from app.intelligence.risk_engine import RiskEngine
from app.intelligence.recommendation_engine import RecommendationEngine


class AnalysisService:

    def analyze(

        self,

        customer,

        prediction

    ):

        probability = prediction["churn_probability"]

        health = HealthEngine.calculate(customer)

        clv = RevenueEngine.estimated_clv(customer)

        revenue = RevenueEngine.revenue_at_risk(

            clv,

            probability

        )

        risk = RiskEngine.category(probability)

        priority = RiskEngine.priority(risk)

        recommendations = RecommendationEngine.generate(

            probability

        )

        return {

            "health_score": health,

            "estimated_clv": clv,

            "revenue_at_risk": revenue,

            "risk_category": risk,

            "customer_priority": priority,

            "recommendations": recommendations

        }