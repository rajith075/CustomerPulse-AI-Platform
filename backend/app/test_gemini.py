from app.ai.gemini_service import GeminiService
from app.ai.prompt_builder import PromptBuilder

context = {

    "prediction_probability": 96.8,

    "customer_profile": {

        "Age": 42,

        "Gender": "Male",

        "Tenure": 18,

        "Subscription Type": "Standard",

        "Contract Length": "Monthly"

    },

    "customer_behaviour": {

        "Usage Frequency": 4,

        "Support Calls": 7,

        "Payment Delay": 16,

        "Last Interaction": 28,

        "Total Spend": 620

    },

    "top_reasons": [

        "Support Calls",

        "Payment Delay",

        "Monthly Contract",

        "Low Total Spend"

    ]

}

prompt = PromptBuilder().build_customer_prompt(context)

gemini = GeminiService()

response = gemini.generate(prompt)

print(response)