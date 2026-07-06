"""
Customer Tier Engine
"""

from typing import Dict

from app.config.business_rules import (
    SILVER_LIMIT,
    GOLD_LIMIT,
    PLATINUM_LIMIT
)


class CustomerTierEngine:

    @staticmethod
    def calculate(total_spend: float) -> Dict:

        if total_spend >= PLATINUM_LIMIT:

            tier = "Platinum"

        elif total_spend >= GOLD_LIMIT:

            tier = "Gold"

        elif total_spend >= SILVER_LIMIT:

            tier = "Silver"

        else:

            tier = "Bronze"

        return {

            "customer_tier": tier

        }