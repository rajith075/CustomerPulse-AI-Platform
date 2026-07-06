"""
==========================================================
CustomerPulse AI
Enterprise Dataset Validator
==========================================================
"""

from pathlib import Path

import pandas as pd

from app.dataset.file_loader import FileLoader


class DatasetValidator:

    def __init__(self):

        self.loader = FileLoader()

    # -------------------------------------------------- #
    # Validate Dataset
    # -------------------------------------------------- #

    def validate(self, dataset_path: Path):

        df = self.loader.load(dataset_path)

        rows = len(df)

        columns = len(df.columns)

        duplicate_rows = int(df.duplicated().sum())

        missing_values = int(df.isnull().sum().sum())

        missing_percentage = (
            missing_values /
            (rows * columns)
        ) * 100 if rows and columns else 0

        quality_score = round(

            max(

                0,

                100
                - missing_percentage
                - (duplicate_rows * 0.5)

            ),

            2

        )

        return {

            "status": "validated",

            "rows": rows,

            "columns": columns,

            "duplicate_rows": duplicate_rows,

            "missing_values": missing_values,

            "missing_percentage": round(missing_percentage, 2),

            "quality_score": quality_score,

            "column_names": list(df.columns)

        }