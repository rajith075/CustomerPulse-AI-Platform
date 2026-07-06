"""
==========================================================
CustomerPulse AI
Customer Service
==========================================================
"""

from app.customer.customer_storage import CustomerStorage
from app.dataset.workspace_lookup import WorkspaceLookup


class CustomerService:

    # ==========================================================
    # Get All Customers
    # ==========================================================

    @staticmethod
    def get_customers(project_id):

        workspace = WorkspaceLookup.get_workspace(
            project_id
        )

        if workspace is None:

            return {

                "success": False,

                "message": "Workspace not found."

            }

        df = CustomerStorage.load_customers(
            workspace
        )

        if df is None:

            return {

                "success": False,

                "message": "Customers dataset not found."

            }

        return {

            "success": True,

            "project_id": project_id,

            "total_customers": len(df),

            "customers": df.to_dict(
                orient="records"
            )

        }

    # ==========================================================
    # Get Single Customer
    # ==========================================================

    @staticmethod
    def get_customer(

        project_id,

        customer_id

    ):

        workspace = WorkspaceLookup.get_workspace(
            project_id
        )

        if workspace is None:

            return {

                "success": False,

                "message": "Workspace not found."

            }

        df = CustomerStorage.load_customers(
            workspace
        )

        if df is None:

            return {

                "success": False,

                "message": "Customers dataset not found."

            }

        customer = df[

            df["Customer ID"].astype(str)

            == str(customer_id)

        ]

        if customer.empty:

            return {

                "success": False,

                "message": "Customer not found."

            }

        return {

            "success": True,

            "project_id": project_id,

            "customer": customer.iloc[0].to_dict()

        }