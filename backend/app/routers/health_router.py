from fastapi import APIRouter

from app.core.response_builder import ResponseBuilder

from app.config.settings import settings

from datetime import datetime

router = APIRouter(

    prefix="/health",

    tags=["Health"]

)


@router.get("/")

def health_check():

    return ResponseBuilder.success(

        message="Health check successful.",

        data={

            "status": "healthy",

            "api": "running",

            "environment": settings.ENVIRONMENT,

            "version": settings.API_VERSION,

            "timestamp": datetime.now().isoformat(),

            "services": {

                "prediction_service": "online",

                "business_intelligence": "online",

                "explainability": "online",

                "gemini": "online"

            },

            "models": {

                "ml_model": settings.ML_MODEL,

                "llm": settings.GEMINI_MODEL

            }

        }

    )