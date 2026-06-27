import joblib
import pandas as pd

from app.utils.path import (
    MODEL_PATH,
    FEATURE_PATH
)


class PredictionService:

    def __init__(self):

        print("🚀 Loading Production Model...")

        self.model = joblib.load(MODEL_PATH)

        self.feature_names = joblib.load(FEATURE_PATH)

        print("✅ Production Model Loaded")

    # =====================================================
    # Feature Engineering
    # =====================================================

    def preprocess(self, customer: dict):

        """
        Convert raw customer input into the exact
        feature vector expected by the CatBoost model.
        """

        df = pd.DataFrame([customer])

        df = pd.get_dummies(
            df,
            drop_first=True
        )

        df = df.reindex(
            columns=self.feature_names,
            fill_value=0
        )

        return df

    # =====================================================
    # Public Feature Preparation
    # =====================================================

    def prepare_features(self, customer: dict):

        """
        Used internally by:

        • Explainability Engine
        • Batch Prediction
        • Future Services
        """

        return self.preprocess(customer)

    # =====================================================
    # Prediction
    # =====================================================

    def predict(self, customer: dict):

        processed = self.prepare_features(
            customer
        )

        prediction = self.model.predict(
            processed
        )[0]

        probability = self.model.predict_proba(
            processed
        )[0][1]

        prediction_label = (

            "Likely to Churn"

            if prediction == 1

            else

            "Not Likely to Churn"

        )

        return {

            "prediction": int(prediction),

            "prediction_label": prediction_label,

            "churn_probability": round(
                float(probability),
                4
            ),

            "churn_percentage": round(
                float(probability) * 100,
                2
            )

        }