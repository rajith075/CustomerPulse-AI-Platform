from app.services.prediction_service import PredictionService
from app.services.analysis_service import AnalysisService

prediction_service = PredictionService()
analysis_service = AnalysisService()

customer = {

    "Age": 45,

    "Gender": "Male",

    "Tenure": 20,

    "Usage Frequency": 6,

    "Support Calls": 7,

    "Payment Delay": 15,

    "Subscription Type": "Premium",

    "Contract Length": "Monthly",

    "Total Spend": 850,

    "Last Interaction": 18

}

prediction = prediction_service.predict(customer)

analysis = analysis_service.analyze(

    customer,

    prediction

)

print("=" * 60)
print("Prediction")
print(prediction)

print()

print("Business Intelligence")
print(analysis)