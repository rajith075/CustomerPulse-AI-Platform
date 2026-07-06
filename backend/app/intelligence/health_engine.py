"""
==========================================================
CustomerPulse AI
Health Intelligence Engine
==========================================================
"""

from typing import Dict

from app.config.business_rules import *


class HealthEngine:

    @staticmethod
    def calculate(
        support_calls: int,
        payment_delay: int,
        usage_frequency: int,
        tenure: int,
        churn_percentage: float,
        subscription_type: str,
        contract_length: str,
    ) -> Dict:

        score = MAX_HEALTH_SCORE

        # -----------------------------
        # Penalties
        # -----------------------------

        score -= support_calls * SUPPORT_CALL_WEIGHT

        score -= payment_delay * PAYMENT_DELAY_WEIGHT

        score -= churn_percentage * CHURN_WEIGHT

        # -----------------------------
        # Rewards
        # -----------------------------

        score += tenure * TENURE_REWARD

        score += usage_frequency * USAGE_REWARD

        # -----------------------------
        # Subscription Bonus
        # -----------------------------

        score += SUBSCRIPTION_HEALTH_BONUS.get(
            subscription_type,
            0
        )

        # -----------------------------
        # Contract Bonus
        # -----------------------------

        score += CONTRACT_HEALTH_BONUS.get(
            contract_length,
            0
        )

        # -----------------------------
        # Clamp
        # -----------------------------

        score = round(score)

        score = max(
            MIN_HEALTH_SCORE,
            min(MAX_HEALTH_SCORE, score)
        )

        # -----------------------------
        # Status
        # -----------------------------

        if score >= 85:
            status = "Excellent"

        elif score >= 70:
            status = "Good"

        elif score >= 50:
            status = "Average"

        elif score >= 30:
            status = "Poor"

        else:
            status = "Critical"

        return {

            "customer_health": score,

            "health_status": status

        }