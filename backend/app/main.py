from fastapi import FastAPI
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware

from app.config.settings import settings
from app.core.response_builder import ResponseBuilder

# ==========================================================
# Routers
# ==========================================================

from app.routers.health_router import router as health_router
from app.routers.prediction_router import router as prediction_router
from app.routers.analysis_router import router as analysis_router
from app.routers.dashboard_router import router as dashboard_router
from app.customer.customer_router import router as customer_router
from app.reports.report_router import router as report_router
from app.routers.decision_center_router import (
    router as decision_center_router,
)
from app.routers.system_router import router as system_router

from app.auth.auth_router import router as auth_router
from app.routers.upload_router import router as upload_router


# ==========================================================
# Middleware
# ==========================================================

from app.middleware.logging_middleware import logging_middleware

# ==========================================================
# Exception Handling
# ==========================================================

from app.exceptions.custom_exceptions import CustomerPulseException

from app.exceptions.handlers import (
    customerpulse_exception_handler,
    validation_exception_handler,
    generic_exception_handler,
)

# ==========================================================
# FastAPI App
# ==========================================================

app = FastAPI(
    title=settings.API_TITLE,
    description=settings.API_DESCRIPTION,
    version=settings.API_VERSION,
    docs_url="/docs",
    redoc_url="/redoc",
)

# ==========================================================
# CORS
# ==========================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================================================
# Logging Middleware
# ==========================================================

app.middleware("http")(logging_middleware)

# ==========================================================
# Exception Handlers
# ==========================================================

app.add_exception_handler(
    CustomerPulseException,
    customerpulse_exception_handler,
)

app.add_exception_handler(
    RequestValidationError,
    validation_exception_handler,
)

app.add_exception_handler(
    Exception,
    generic_exception_handler,
)

# ==========================================================
# API Routers
# ==========================================================

app.include_router(auth_router)

app.include_router(health_router)

app.include_router(prediction_router)

app.include_router(analysis_router)

app.include_router(dashboard_router)

app.include_router(decision_center_router)

app.include_router(system_router)

app.include_router(upload_router)

app.include_router(customer_router)

app.include_router(report_router)

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

            "llm": settings.GEMINI_MODEL,

        },

    )