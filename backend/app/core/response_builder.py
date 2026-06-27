from datetime import datetime

from app.schemas.api_response import (

    APIResponse,

    ResponseMetadata,

    ValidationErrorItem

)

from app.config.settings import settings


class ResponseBuilder:

    @staticmethod
    def success(

        message: str,

        data=None,

        response_time=None

    ):

        return APIResponse(

            success=True,

            message=message,

            data=data,

            errors=None,

            metadata=ResponseMetadata(

                timestamp=datetime.now().isoformat(),

                api_version=settings.API_VERSION,

                response_time=response_time

            )

        )

    @staticmethod
    def error(

        message: str,

        errors=None,

        response_time=None

    ):

        formatted_errors = None

        if errors:

            formatted_errors = [

                ValidationErrorItem(

                    field=e["field"],

                    message=e["message"]

                )

                for e in errors

            ]

        return APIResponse(

            success=False,

            message=message,

            data=None,

            errors=formatted_errors,

            metadata=ResponseMetadata(

                timestamp=datetime.now().isoformat(),

                api_version=settings.API_VERSION,

                response_time=response_time

            )

        )