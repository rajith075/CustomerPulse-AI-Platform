from fastapi import APIRouter

from app.auth.auth_handler import AuthHandler

from app.schemas.login_request import LoginRequest

from app.core.response_builder import ResponseBuilder

from app.exceptions.custom_exceptions import CustomerPulseException


router = APIRouter(

    prefix="/auth",

    tags=["Authentication"]

)


@router.post("/login")
def login(

    credentials: LoginRequest

):

    token = AuthHandler.login(

        credentials.username,

        credentials.password

    )

    if token is None:

        raise CustomerPulseException(

            message="Invalid username or password.",

            status_code=401

        )

    return ResponseBuilder.success(

        message="Login successful.",

        data=token

    )