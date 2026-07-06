"""
==========================================================
CustomerPulse AI
Confidence Intelligence Engine
==========================================================

Calculates confidence score based on
CatBoost prediction probability.

Author: Rajith Shetty
==========================================================
"""

from typing import Dict

from app.config.business_rules import (
    HIGH_CONFIDENCE,
    MEDIUM_CONFIDENCE,
)


class ConfidenceEngine:

    @staticmethod
    def calculate(probability: float) -> Dict:

        confidence = round(probability * 100, 2)

        if confidence >= HIGH_CONFIDENCE:

            level = "Very High"

        elif confidence >= MEDIUM_CONFIDENCE:

            level = "High"

        elif confidence >= 70:

            level = "Medium"

        else:

            level = "Low"

        return {

            "confidence_score": confidence,

            "confidence_level": level

        }