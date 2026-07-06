"""
==========================================================
CustomerPulse AI
Enterprise Dataset Pipeline
==========================================================
"""

from app.dataset.validator import DatasetValidator
from app.dataset.schema_mapper import SchemaMapper
from app.prediction.prediction_pipeline import PredictionPipeline


class DatasetPipeline:

    def __init__(self):

        self.validator = DatasetValidator()

        self.schema_mapper = SchemaMapper()

        self.prediction = PredictionPipeline()

    def process(self, dataset_path):

        print("\n==============================")
        print("CustomerPulse Dataset Pipeline")
        print("==============================")

        # ======================================
        # STEP 1 : Validate Dataset
        # ======================================

        validation = self.validator.validate(dataset_path)

        print("✓ Dataset Validated")

        # ======================================
        # STEP 2 : Load Dataset
        # ======================================

        df = self.validator.loader.load(dataset_path)

        print("✓ Dataset Loaded")

        # ======================================
        # STEP 3 : AI Schema Mapping
        # ======================================

        schema = self.schema_mapper.standardize(df)

        if not schema["success"]:

            print("✗ Required Features Missing")

            return {

                "success": False,

                "message": "Dataset is missing required fields.",

                "missing_features": schema["missing_features"],

                "mapping": schema["mapping"]

            }

        print("✓ Schema Standardized")

        # ======================================
        # STEP 4 : Prediction
        # ======================================

        prediction_dataframe = self.prediction.predict(

            schema["dataframe"]

        )

        print("✓ Predictions Generated")

        # ======================================
        # Return
        # ======================================

        return {

            "success": True,

            "validation": validation,

            "mapping": schema["mapping"],

            "prediction_dataframe": prediction_dataframe

        }