from app.services.prediction_service import PredictionService

service = PredictionService()

customer = {

    "Age": 42,

    "Gender": "Male",

    "Tenure": 18,

    "Usage Frequency": 8,

    "Support Calls": 5,

    "Payment Delay": 12,

    "Subscription Type": "Premium",

    "Contract Length": "Monthly",

    "Total Spend": 640,

    "Last Interaction": 11

}

result = service.predict(customer)

print(result)