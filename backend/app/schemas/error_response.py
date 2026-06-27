from pydantic import BaseModel, ConfigDict


class ErrorResponse(BaseModel):

    success: bool = False

    error: str

    model_config = ConfigDict(

        json_schema_extra={

            "example": {

                "success": False,

                "error": "Invalid customer data."

            }

        }

    )