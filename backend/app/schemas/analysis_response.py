from typing import Any

from pydantic import BaseModel, ConfigDict


class AnalysisResponse(BaseModel):

    prediction: dict

    business: dict

    explainability: dict

    dashboard: dict

    executive: dict

    email: dict

    call_script: dict

    metadata: dict

    model_config = ConfigDict(

        json_schema_extra={

            "example": {

                "prediction": {

                    "prediction": 1,

                    "churn_probability": 0.998

                }

            }

        }

    )