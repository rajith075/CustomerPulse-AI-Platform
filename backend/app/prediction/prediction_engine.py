"""
==========================================================
CustomerPulse AI
Prediction Engine
==========================================================
"""

from pathlib import Path
import joblib
import pandas as pd


class PredictionEngine:

    def __init__(self):

        self.saved_models = (
            Path(__file__).resolve().parents[2]
            / "saved_models"
        )

        self.model = joblib.load(

            self.saved_models /
            "customerpulse_catboost.pkl"

        )

    def predict(self, dataframe: pd.DataFrame):

        predictions = self.model.predict(dataframe)

        probabilities = self.model.predict_proba(dataframe)[:, 1]

        return predictions, probabilities