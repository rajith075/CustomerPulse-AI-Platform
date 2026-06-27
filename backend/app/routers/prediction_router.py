from fastapi import APIRouter, Depends

from app.schemas.request_schema import CustomerRequest

from app.dependencies.services import get_prediction_service

from app.services.prediction_service import PredictionService

from app.core.response_builder import ResponseBuilder


router = APIRouter(

    prefix="/predict",

    tags=["Prediction"]

)


@router.post("/")
def predict(

    customer: CustomerRequest,

    prediction_service: PredictionService = Depends(

        get_prediction_service

    )

):

    prediction = prediction_service.predict(

        customer.model_dump(

            by_alias=True

        )

    )

    return ResponseBuilder.success(

        message="Prediction generated successfully.",

        data=prediction

    )