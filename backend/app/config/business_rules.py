"""
==========================================================
CustomerPulse AI
Business Rules Configuration
==========================================================

Centralized thresholds, weights and constants used by all
business intelligence engines.

Changing values here updates the entire application.

Author: Rajith Shetty
==========================================================
"""

# ==========================================================
# Customer Health
# ==========================================================

MAX_HEALTH_SCORE = 100
MIN_HEALTH_SCORE = 0

SUPPORT_CALL_WEIGHT = 4.0
PAYMENT_DELAY_WEIGHT = 1.5
CHURN_WEIGHT = 0.35

TENURE_REWARD = 0.8
USAGE_REWARD = 2.0

# ==========================================================
# Subscription Bonus
# ==========================================================

SUBSCRIPTION_HEALTH_BONUS = {
    "Basic": 0,
    "Standard": 4,
    "Premium": 8,
}

# ==========================================================
# Contract Bonus
# ==========================================================

CONTRACT_HEALTH_BONUS = {
    "Monthly": -4,
    "Quarterly": 2,
    "Annual": 8,
}

# ==========================================================
# Revenue Multipliers
# ==========================================================

SUBSCRIPTION_MULTIPLIER = {
    "Basic": 1.0,
    "Standard": 1.25,
    "Premium": 1.50,
}

CONTRACT_MULTIPLIER = {
    "Monthly": 12,
    "Quarterly": 4,
    "Annual": 1,
}

# ==========================================================
# Revenue Risk Thresholds
# ==========================================================

LOW_REVENUE_RISK = 5000
MEDIUM_REVENUE_RISK = 20000
HIGH_REVENUE_RISK = 50000

# ==========================================================
# Risk Thresholds
# ==========================================================

LOW_RISK = 30
MEDIUM_RISK = 60
HIGH_RISK = 85

# ==========================================================
# Customer Tier
# ==========================================================

SILVER_LIMIT = 1000
GOLD_LIMIT = 5000
PLATINUM_LIMIT = 10000

# ==========================================================
# Confidence
# ==========================================================

HIGH_CONFIDENCE = 95
MEDIUM_CONFIDENCE = 85