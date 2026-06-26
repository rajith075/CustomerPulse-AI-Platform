import pandas as pd


class BusinessContextEngine:

    def build_context(
        self,
        customer,
        prediction_probability,
        shap_features
    ):

        context = {

            "prediction_probability": round(
                prediction_probability * 100,
                2
            ),

            "customer_profile": {

                "Age": customer["Age"],

                "Gender": customer["Gender"],

                "Tenure": customer["Tenure"],

                "Subscription Type": customer["Subscription Type"],

                "Contract Length": customer["Contract Length"]

            },

            "customer_behaviour": {

                "Usage Frequency": customer["Usage Frequency"],

                "Support Calls": customer["Support Calls"],

                "Payment Delay": customer["Payment Delay"],

                "Last Interaction": customer["Last Interaction"],

                "Total Spend": customer["Total Spend"]

            },

            "top_reasons": shap_features

        }

        return context