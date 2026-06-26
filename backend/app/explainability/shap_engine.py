import shap


class ShapEngine:

    def __init__(self, model):

        """
        Initialize the SHAP explainer using the
        trained CatBoost model.
        """

        self.model = model

        self.explainer = shap.TreeExplainer(
            self.model
        )

    def explain(self, processed_features):

        """
        Generate SHAP values using the already
        preprocessed feature set produced by
        PredictionService.
        """

        shap_values = self.explainer.shap_values(
            processed_features
        )

        return {

            "feature_names": list(
                processed_features.columns
            ),

            "processed_features": processed_features,

            "shap_values": shap_values

        }