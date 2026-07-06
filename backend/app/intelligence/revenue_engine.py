"""
==========================================================
CustomerPulse AI
Revenue Intelligence Engine
==========================================================

Calculates:

• Estimated Customer Lifetime Value (CLV)
• Annual Revenue Projection
• Revenue At Risk
• Revenue Risk Category

Author : Rajith Shetty
==========================================================
"""

from app.config.business_rules import (
    SUBSCRIPTION_MULTIPLIER,
    CONTRACT_MULTIPLIER,
    LOW_REVENUE_RISK,
    MEDIUM_REVENUE_RISK,
    HIGH_REVENUE_RISK,
)


class RevenueEngine:

    @staticmethod
    def calculate(customer: dict, churn_probability: float):

        total_spend = customer.get("Total Spend", 0)

        tenure = max(customer.get("Tenure", 1), 1)

        subscription = customer.get("Subscription Type", "Basic")

        contract = customer.get("Contract Length", "Monthly")

        # ---------------------------------------
        # Customer Lifetime Value
        # ---------------------------------------

        estimated_clv = round(
            total_spend * (tenure / 12),
            2
        )

        # ---------------------------------------
        # Annual Revenue Projection
        # ---------------------------------------

        annual_revenue = round(
            total_spend
            * SUBSCRIPTION_MULTIPLIER.get(subscription, 1.0)
            * CONTRACT_MULTIPLIER.get(contract, 12),
            2
        )

        # ---------------------------------------
        # Revenue At Risk
        # ---------------------------------------

        revenue_at_risk = round(
            annual_revenue * churn_probability,
            2
        )

        # ---------------------------------------
        # Revenue Category
        # ---------------------------------------

        if revenue_at_risk >= HIGH_REVENUE_RISK:

            category = "Critical"

        elif revenue_at_risk >= MEDIUM_REVENUE_RISK:

            category = "High"

        elif revenue_at_risk >= LOW_REVENUE_RISK:

            category = "Medium"

        else:

            category = "Low"

        return {

            "estimated_clv": estimated_clv,

            "annual_revenue": annual_revenue,

            "revenue_at_risk": revenue_at_risk,

            "revenue_category": category,

        }