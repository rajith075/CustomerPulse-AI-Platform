from pydantic import BaseModel, ConfigDict


class PredictionResponse(BaseModel):

    prediction: int

    prediction_label: str

    churn_probability: float

    churn_percentage: float

    model_config = ConfigDict(

        json_schema_extra={

            "example": {

                "prediction": 1,

                "prediction_label": "Likely to Churn",

                "churn_probability": 0.998,

                "churn_percentage": 99.8

            }

        }

    )