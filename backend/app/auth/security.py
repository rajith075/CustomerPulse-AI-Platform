from datetime import datetime, timedelta

from jose import jwt

# ==========================================================
# JWT Configuration
# ==========================================================

SECRET_KEY = "customerpulse_ai_super_secret_key"

ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = 60


# ==========================================================
# Swagger Security Scheme
# ==========================================================

oauth2_scheme = "Bearer"


# ==========================================================
# Generate Access Token
# ==========================================================

def create_access_token(data: dict):

    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(

        minutes=ACCESS_TOKEN_EXPIRE_MINUTES

    )

    to_encode.update(

        {

            "exp": expire

        }

    )

    return jwt.encode(

        to_encode,

        SECRET_KEY,

        algorithm=ALGORITHM

    )