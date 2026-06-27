from fastapi import APIRouter, Depends

from app.auth.dependencies import get_current_user

from app.schemas.request_schema import CustomerRequest

from app.dependencies.services import (
    get_customer_workflow
)

from app.workflows.customer_analysis_workflow import (
    CustomerAnalysisWorkflow
)


router = APIRouter(

    prefix="/analyze",

    tags=["AI Analysis"]

)


@router.post("/")
def analyze(

    customer: CustomerRequest,

    workflow: CustomerAnalysisWorkflow = Depends(
        get_customer_workflow
    ),

    current_user=Depends(
        get_current_user
    )

):

    report = workflow.analyze(

        customer.model_dump(
            by_alias=True
        )

    )

    return report