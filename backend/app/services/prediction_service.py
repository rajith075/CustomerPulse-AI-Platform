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

    def prepare_features(self, customer: dict):

        """
        Public method used by:

        • Explainability Engine
        • Batch Prediction
        • FastAPI
        • Future Services
        """

        return self.preprocess(customer)

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

        return {

            "prediction": int(prediction),

            "churn_probability": round(
                float(probability),
                4
            )

        }