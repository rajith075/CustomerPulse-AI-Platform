"""
==========================================================
CustomerPulse AI
Customer Router
==========================================================
"""

from fastapi import APIRouter

from app.customer.customer_service import CustomerService

router = APIRouter(

    prefix="/customers",

    tags=["Customers"]

)


# ==========================================================
# Get All Customers
# ==========================================================

@router.get("/{project_id}")

def get_customers(project_id: str):

    return CustomerService.get_customers(
        project_id
    )


# ==========================================================
# Get Single Customer
# ==========================================================

@router.get("/{project_id}/{customer_id}")

def get_customer(
    project_id: str,
    customer_id: str
):

    return CustomerService.get_customer(

        project_id,

        customer_id

    )