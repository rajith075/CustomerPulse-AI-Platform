"""
==========================================================
CustomerPulse AI
Schema Mapper
==========================================================
"""

import pandas as pd

from app.config.model_schema import REQUIRED_FEATURES
from app.dataset.column_mapper import ColumnMapper


class SchemaMapper:

    def __init__(self):

        self.mapper = ColumnMapper()

    def standardize(self, df: pd.DataFrame):

        original_columns = list(df.columns)

        mapping = self.mapper.map_columns(original_columns)

        # Remove columns Gemini couldn't map
        cleaned_mapping = {

            old: new

            for old, new in mapping.items()

            if new is not None

        }

        df = df.rename(columns=cleaned_mapping)

        missing_features = [

            feature

            for feature in REQUIRED_FEATURES

            if feature not in df.columns

        ]

        return {

            "dataframe": df,

            "mapping": cleaned_mapping,

            "missing_features": missing_features,

            "success": len(missing_features) == 0

        }