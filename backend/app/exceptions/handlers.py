from fastapi import Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse

from app.core.response_builder import ResponseBuilder
from app.exceptions.custom_exceptions import CustomerPulseException


async def customerpulse_exception_handler(

    request: Request,

    exc: CustomerPulseException

):

    response = ResponseBuilder.error(

        message=exc.message

    )

    return JSONResponse(

        status_code=exc.status_code,

        content=response.model_dump()

    )


async def validation_exception_handler(

    request: Request,

    exc: RequestValidationError

):

    errors = []

    for error in exc.errors():

        field = ".".join(

            str(x)

            for x in error["loc"]

            if x != "body"

        )

        errors.append({

            "field": field,

            "message": error["msg"]

        })

    response = ResponseBuilder.error(

        message="Validation failed.",

        errors=errors

    )

    return JSONResponse(

        status_code=422,

        content=response.model_dump()

    )


async def generic_exception_handler(

    request: Request,

    exc: Exception

):

    response = ResponseBuilder.error(

        message="Internal Server Error"

    )

    return JSONResponse(

        status_code=500,

        content=response.model_dump()

    )