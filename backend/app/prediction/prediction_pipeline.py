"""
==========================================================
CustomerPulse AI
Prediction Pipeline
==========================================================
"""

from app.prediction.prediction_preprocessor import (
    PredictionPreprocessor
)

from app.prediction.prediction_engine import (
    PredictionEngine
)


class PredictionPipeline:

    def __init__(self):

        self.preprocessor = PredictionPreprocessor()

        self.engine = PredictionEngine()

    def predict(self, dataframe):

        processed = self.preprocessor.prepare(
            dataframe
        )

        predictions, probabilities = (
            self.engine.predict(processed)
        )

        dataframe = dataframe.copy()

        dataframe["Prediction"] = predictions

        dataframe["Churn Probability"] = probabilities

        return dataframe