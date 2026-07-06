from pydantic import BaseModel


class UploadResponse(BaseModel):

    success: bool

    project_id: str

    filename: str

    message: str