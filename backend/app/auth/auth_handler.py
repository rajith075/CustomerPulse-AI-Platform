from app.auth.security import create_access_token


class AuthHandler:

    @staticmethod
    def login(

        username: str,

        password: str

    ):

        # ==================================================
        # Temporary Demo Authentication
        # ==================================================

        if (

            username == "admin"

            and

            password == "admin123"

        ):

            token = create_access_token(

                {

                    "sub": username

                }

            )

            return {

                "access_token": token,

                "token_type": "bearer"

            }

        return None