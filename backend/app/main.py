from fastapi import FastAPI
from fastapi.exceptions import RequestValidationError

from app.config.settings import settings
from app.core.response_builder import ResponseBuilder

# ==========================================================
# Routers
# ==========================================================

from app.routers.health_router import router as health_router
from app.routers.prediction_router import router as prediction_router
from app.routers.analysis_router import router as analysis_router
from app.routers.system_router import router as system_router
from app.auth.auth_router import router as auth_router

# ==========================================================
# Middleware
# ==========================================================

from app.middleware.logging_middleware import logging_middleware

# ==========================================================
# Enterprise Exception Handling
# ==========================================================

from app.exceptions.custom_exceptions import CustomerPulseException

from app.exceptions.handlers import (
    customerpulse_exception_handler,
    validation_exception_handler,
    generic_exception_handler
)

# ==========================================================
# FastAPI Application
# ==========================================================

app = FastAPI(

    title=settings.API_TITLE,

    description=settings.API_DESCRIPTION,

    version=settings.API_VERSION,

    docs_url="/docs",

    redoc_url="/redoc"

)

# ==========================================================
# Register Exception Handlers
# ==========================================================

app.add_exception_handler(

    CustomerPulseException,

    customerpulse_exception_handler

)

app.add_exception_handler(

    RequestValidationError,

    validation_exception_handler

)

app.add_exception_handler(

    Exception,

    generic_exception_handler

)

# ==========================================================
# Logging Middleware
# ==========================================================

app.middleware("http")(logging_middleware)

# ==========================================================
# Register Routers
# ==========================================================

app.include_router(auth_router)

app.include_router(health_router)

app.include_router(prediction_router)

app.include_router(analysis_router)

app.include_router(system_router)

# ==========================================================
# Root Endpoint
# ==========================================================

@app.get("/", tags=["Root"])
def root():

    return ResponseBuilder.success(

        message="CustomerPulse AI API is running.",

        data={

            "application": settings.API_TITLE,

            "environment": settings.ENVIRONMENT,

            "version": settings.API_VERSION,

            "ml_model": settings.ML_MODEL,

            "llm": settings.GEMINI_MODEL

        }

    )