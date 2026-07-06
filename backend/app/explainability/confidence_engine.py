"""
CustomerPulse AI
Enterprise Confidence Engine
"""

from typing import Dict


class ConfidenceEngine:

    @staticmethod
    def calculate(
        prediction_probability: float,
        top_feature_importance: float,
    ) -> Dict:

        confidence = (
            prediction_probability * 70 +
            min(top_feature_importance * 100, 100) * 0.30
        )

        confidence = round(confidence, 2)

        if confidence >= 95:
            level = "Very High"

        elif confidence >= 85:
            level = "High"

        elif confidence >= 70:
            level = "Medium"

        else:
            level = "Low"

        return {

            "confidence_score": confidence,

            "confidence_level": level

        }