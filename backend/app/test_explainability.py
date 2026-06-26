from pprint import pprint

from app.explainability.explainability_service import ExplainabilityService

customer = {

    "Age": 45,

    "Tenure": 20,

    "Usage Frequency": 6,

    "Support Calls": 7,

    "Payment Delay": 15,

    "Total Spend": 850,

    "Last Interaction": 18,

    "Gender_Male": 1,

    "Subscription Type_Premium": 1,

    "Subscription Type_Standard": 0,

    "Contract Length_Monthly": 1,

    "Contract Length_Quarterly": 0

}

prediction = {

    "prediction": 1,

    "churn_probability": 0.998

}

service = ExplainabilityService()

report = service.explain(

    customer,

    prediction

)

print()

print("=" * 80)

print("EXPLAINABILITY REPORT")

print("=" * 80)

print()

pprint(report)