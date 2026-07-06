"""
==========================================================
CustomerPulse AI
Customer Storage
==========================================================
"""

from pathlib import Path


class CustomerStorage:

    @staticmethod
    def save_customers(workspace_path, dataframe):

        customers_path = (
            Path(workspace_path) / "customers.csv"
        )

        dataframe.to_csv(

            customers_path,

            index=False

        )

        print("✅ Customers Dataset Saved")

        return str(customers_path)

    @staticmethod
    def load_customers(workspace_path):

        import pandas as pd

        customers_path = (
            Path(workspace_path) / "customers.csv"
        )

        if not customers_path.exists():

            return None

        return pd.read_csv(customers_path)