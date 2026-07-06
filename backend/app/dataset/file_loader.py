"""
==========================================================
CustomerPulse AI
Enterprise File Loader
==========================================================
"""

from pathlib import Path

import pandas as pd


class FileLoader:
    """
    Loads supported dataset formats into a Pandas DataFrame.
    """

    SUPPORTED_EXTENSIONS = {
        ".csv",
        ".xlsx",
        ".xls",
        ".json",
        ".parquet"
    }

    def load(self, file_path: Path) -> pd.DataFrame:

        extension = file_path.suffix.lower()

        if extension not in self.SUPPORTED_EXTENSIONS:
            raise ValueError(
                f"Unsupported file format: {extension}"
            )

        if extension == ".csv":
            return pd.read_csv(file_path)

        if extension in [".xlsx", ".xls"]:
            return pd.read_excel(file_path)

        if extension == ".json":
            return pd.read_json(file_path)

        if extension == ".parquet":
            return pd.read_parquet(file_path)

        raise ValueError(
            f"Unable to load file: {file_path.name}"
        )