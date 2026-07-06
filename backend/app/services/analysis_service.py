from app.intelligence.health_engine import HealthEngine
from app.intelligence.revenue_engine import RevenueEngine
from app.intelligence.risk_engine import RiskEngine
from app.intelligence.recommendation_engine import RecommendationEngine


class AnalysisService:

    def analyze(
        self,
        customer,
        prediction,
    ):

        probability = prediction["churn_probability"]

        # ----------------------------------------
        # Customer Health
        # ----------------------------------------

        health = HealthEngine.calculate(
            support_calls=customer["Support Calls"],
            payment_delay=customer["Payment Delay"],
            usage_frequency=customer["Usage Frequency"],
            tenure=customer["Tenure"],
            churn_percentage=probability * 100,
            subscription_type=customer["Subscription Type"],
            contract_length=customer["Contract Length"],
        )

        # ----------------------------------------
        # Revenue Intelligence
        # ----------------------------------------

        revenue = RevenueEngine.calculate(
            customer,
            probability,
        )

        # ----------------------------------------
        # Enterprise Risk
        # ----------------------------------------

        risk = RiskEngine.calculate(
            churn_percentage=probability * 100,
            health_score=health["customer_health"],
            revenue_at_risk=revenue["revenue_at_risk"],
        )

        # ----------------------------------------
        # AI Recommendation
        # ----------------------------------------

        recommendations = RecommendationEngine.calculate(
            risk_level=risk["risk_level"],
            subscription=customer["Subscription Type"],
        )

        # ----------------------------------------
        # Final Business Report
        # ----------------------------------------

        return {

            "health_score": health,

            "estimated_clv": revenue["estimated_clv"],

            "annual_revenue": revenue["annual_revenue"],

            "revenue_at_risk": revenue["revenue_at_risk"],

            "revenue_category": revenue["revenue_category"],

            "risk_score": risk["risk_score"],

            "risk_level": risk["risk_level"],

            "customer_priority": risk["priority"],

            "recommendations": recommendations,

        }