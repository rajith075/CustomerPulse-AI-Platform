from pydantic import BaseModel

from typing import List


class AIResponse(BaseModel):

    executive_summary: str

    customer_behaviour_analysis: str

    root_cause_analysis: str

    business_impact: str

    churn_risk_level: str

    confidence_level: str

    customer_strengths: List[str]

    customer_weaknesses: List[str]

    recommended_actions: List[str]

    retention_strategy: str

    expected_outcome: str

    email: str

    call_script: str