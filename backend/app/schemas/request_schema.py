from enum import Enum

from pydantic import BaseModel, ConfigDict, Field


# ==========================================================
# ENUMS
# ==========================================================

class Gender(str, Enum):
    Male = "Male"
    Female = "Female"


class SubscriptionType(str, Enum):
    Basic = "Basic"
    Standard = "Standard"
    Premium = "Premium"


class ContractLength(str, Enum):
    Monthly = "Monthly"
    Quarterly = "Quarterly"
    Annual = "Annual"


# ==========================================================
# CUSTOMER REQUEST
# ==========================================================

class CustomerRequest(BaseModel):

    model_config = ConfigDict(
        populate_by_name=True,
        json_schema_extra={
            "example": {
                "Age": 45,
                "Gender": "Male",
                "Tenure": 20,
                "Usage Frequency": 6,
                "Support Calls": 7,
                "Payment Delay": 15,
                "Subscription Type": "Premium",
                "Contract Length": "Monthly",
                "Total Spend": 850.0,
                "Last Interaction": 18
            }
        }
    )

    Age: int = Field(
        ...,
        ge=18,
        le=100,
        description="Customer Age"
    )

    Gender: Gender

    Tenure: int = Field(
        ...,
        ge=0,
        le=120
    )

    Usage_Frequency: int = Field(
        ...,
        alias="Usage Frequency",
        ge=0,
        le=100
    )

    Support_Calls: int = Field(
        ...,
        alias="Support Calls",
        ge=0,
        le=100
    )

    Payment_Delay: int = Field(
        ...,
        alias="Payment Delay",
        ge=0,
        le=365
    )

    Subscription_Type: SubscriptionType = Field(
        ...,
        alias="Subscription Type"
    )

    Contract_Length: ContractLength = Field(
        ...,
        alias="Contract Length"
    )

    Total_Spend: float = Field(
        ...,
        alias="Total Spend",
        ge=0
    )

    Last_Interaction: int = Field(
        ...,
        alias="Last Interaction",
        ge=0,
        le=365
    )