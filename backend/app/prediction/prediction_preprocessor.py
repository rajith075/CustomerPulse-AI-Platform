"""
==========================================================
CustomerPulse AI
Prediction Preprocessor
==========================================================
"""

from pathlib import Path
import joblib
import pandas as pd


class PredictionPreprocessor:

    def __init__(self):

        self.saved_models = (
            Path(__file__).resolve().parents[2] /
            "saved_models"
        )

        self.feature_names = joblib.load(
            self.saved_models / "feature_names.pkl"
        )

    def prepare(self, dataframe: pd.DataFrame):

        # ----------------------------
        # One Hot Encoding
        # ----------------------------

        dataframe = pd.get_dummies(

            dataframe,

            drop_first=True,

            dtype=int

        )

        # ----------------------------
        # Missing Features
        # ----------------------------

        for feature in self.feature_names:

            if feature not in dataframe.columns:

                dataframe[feature] = 0

        # ----------------------------
        # Remove Extra Columns
        # ----------------------------

        dataframe = dataframe.reindex(

            columns=self.feature_names,

            fill_value=0

        )

        return dataframe