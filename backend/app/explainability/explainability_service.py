from app.explainability.shap_engine import ShapEngine
from app.explainability.feature_importance import FeatureImportance
from app.explainability.explanation_builder import ExplanationBuilder
from app.explainability.recommendation_builder import RecommendationBuilder
from app.explainability.confidence_engine import ConfidenceEngine

from app.services.prediction_service import PredictionService


class ExplainabilityService:

    def __init__(self):

        self.prediction_service = PredictionService()

        self.shap_engine = ShapEngine(
            self.prediction_service.model
        )

    def explain(
        self,
        customer,
        prediction
    ):

        # =====================================================
        # Prepare Features (Single Source of Truth)
        # =====================================================

        processed_features = self.prediction_service.prepare_features(
            customer
        )

        # =====================================================
        # Generate SHAP Values
        # =====================================================

        shap_report = self.shap_engine.explain(
            processed_features
        )

        # =====================================================
        # Rank Feature Importance
        # =====================================================

        feature_df = FeatureImportance.rank(

            shap_report["feature_names"],

            shap_report["shap_values"]

        )

        # =====================================================
        # Generate Business Explanations
        # =====================================================

        explanations = ExplanationBuilder.build(
            feature_df
        )

        # =====================================================
        # Build Recommendations
        # =====================================================

        recommendations = RecommendationBuilder.build(
            explanations
        )

        # =====================================================
        # Calculate Confidence
        # =====================================================

        confidence = ConfidenceEngine.calculate(

            prediction_probability=prediction[
                "churn_probability"
            ],

            top_feature_importance=feature_df.iloc[0][
                "importance"
            ]

        )

        # =====================================================
        # Final Explainability Report
        # =====================================================

        return {

            "top_features": explanations,

            "recommendations": recommendations,

            "confidence": confidence

        }