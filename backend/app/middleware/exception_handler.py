from datetime import datetime

from fastapi import FastAPI
from fastapi import Request
from fastapi.responses import JSONResponse

from pydantic import ValidationError


def register_exception_handlers(app: FastAPI):

    # ==========================================================
    # Validation Errors
    # ==========================================================

    @app.exception_handler(ValidationError)
    async def validation_exception_handler(

        request: Request,

        exc: ValidationError

    ):

        return JSONResponse(

            status_code=422,

            content={

                "success": False,

                "status_code": 422,

                "error": {

                    "type": "ValidationError",

                    "message": exc.errors(),

                    "timestamp": datetime.utcnow().isoformat()

                }

            }

        )

    # ==========================================================
    # Global Exception Handler
    # ==========================================================

    @app.exception_handler(Exception)
    async def global_exception_handler(

        request: Request,

        exc: Exception

    ):

        return JSONResponse(

            status_code=500,

            content={

                "success": False,

                "status_code": 500,

                "error": {

                    "type": type(exc).__name__,

                    "message": str(exc),

                    "timestamp": datetime.utcnow().isoformat()

                }

            }

        )