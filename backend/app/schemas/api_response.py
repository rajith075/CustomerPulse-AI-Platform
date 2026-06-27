from typing import Any

from pydantic import BaseModel


class ValidationErrorItem(BaseModel):

    field: str

    message: str


class ResponseMetadata(BaseModel):

    timestamp: str

    api_version: str

    response_time: float | None = None


class APIResponse(BaseModel):

    success: bool

    message: str

    data: Any = None

    errors: list[ValidationErrorItem] | None = None

    metadata: ResponseMetadata