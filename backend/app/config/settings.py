from functools import lru_cache

from pydantic_settings import (
    BaseSettings,
    SettingsConfigDict
)


class Settings(BaseSettings):

    # =====================================================
    # Pydantic Configuration
    # =====================================================

    model_config = SettingsConfigDict(

        env_file=".env",

        case_sensitive=True,

        extra="ignore"

    )

    # =====================================================
    # API INFORMATION
    # =====================================================

    API_TITLE: str = "CustomerPulse AI Platform"

    API_DESCRIPTION: str = (
        "Enterprise AI Customer Churn Prevention Platform "
        "powered by Machine Learning, Explainable AI, "
        "Business Intelligence and Gemini AI."
    )

    API_VERSION: str = "2.0.0"

    # =====================================================
    # ENVIRONMENT
    # =====================================================

    ENVIRONMENT: str = "Development"

    DEBUG: bool = True

    # =====================================================
    # AI MODELS
    # =====================================================

    ML_MODEL: str = "CatBoost"

    GEMINI_MODEL: str = "gemini-2.5-flash"

    GEMINI_API_KEY: str

    # =====================================================
    # REPORT SETTINGS
    # =====================================================

    REPORT_VERSION: str = "2.0"

    GENERATED_BY: str = "CustomerPulse AI"

    # =====================================================
    # COMPANY INFORMATION
    # =====================================================

    COMPANY_NAME: str = "CustomerPulse AI"

    SUPPORT_EMAIL: str = "support@customerpulse.ai"

    # =====================================================
    # FUTURE DATABASE SETTINGS
    # =====================================================

    DATABASE_URL: str = ""

    # =====================================================
    # FUTURE SECURITY
    # =====================================================

    JWT_SECRET: str = ""

    JWT_ALGORITHM: str = "HS256"

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30


@lru_cache
def get_settings() -> Settings:

    return Settings()


settings = get_settings()