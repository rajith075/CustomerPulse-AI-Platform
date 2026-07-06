from fastapi import APIRouter
from fastapi import UploadFile
from fastapi import File

from app.dataset.upload_service import UploadService

router = APIRouter(
    prefix="/upload",
    tags=["Dataset Upload"]
)

service = UploadService()


@router.post("")
async def upload_dataset(

    file: UploadFile = File(...)

):

    return service.upload_dataset(file)