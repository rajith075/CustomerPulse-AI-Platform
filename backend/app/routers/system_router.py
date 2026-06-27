from fastapi import APIRouter

import platform
import psutil

from datetime import datetime

from app.config.settings import settings

from app.core.response_builder import ResponseBuilder


router = APIRouter(

    prefix="/system",

    tags=["System"]

)


@router.get("/metrics")
def system_metrics():

    memory = psutil.virtual_memory()

    return ResponseBuilder.success(

        message="System metrics retrieved successfully.",

        data={

            "status": "healthy",

            "timestamp": datetime.now().isoformat(),

            "system": {

                "platform": platform.system(),

                "platform_release": platform.release(),

                "python_version": platform.python_version()

            },

            "resources": {

                "cpu_percent": psutil.cpu_percent(),

                "memory_percent": memory.percent,

                "memory_available_gb": round(

                    memory.available / (1024 ** 3),

                    2

                ),

                "disk_percent": psutil.disk_usage("/").percent

            },

            "application": {

                "api_version": settings.API_VERSION,

                "environment": settings.ENVIRONMENT,

                "ml_model": settings.ML_MODEL,

                "llm_model": settings.GEMINI_MODEL

            }

        }

    )