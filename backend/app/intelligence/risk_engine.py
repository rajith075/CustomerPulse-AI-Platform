"""
Enterprise Risk Engine
"""

from typing import Dict


class RiskEngine:

    @staticmethod
    def calculate(

        churn_percentage: float,

        health_score: float,

        revenue_at_risk: float,

    ) -> Dict:

        score = (

            churn_percentage * 0.40 +

            (100 - health_score) * 0.30 +

            min(revenue_at_risk / 1000, 100) * 0.30

        )

        score = round(score, 2)

        if score >= 80:

            risk = "Critical"

            priority = "Immediate"

        elif score >= 60:

            risk = "High"

            priority = "High"

        elif score >= 40:

            risk = "Medium"

            priority = "Medium"

        else:

            risk = "Low"

            priority = "Normal"

        return {

            "risk_score": score,

            "risk_level": risk,

            "priority": priority

        }