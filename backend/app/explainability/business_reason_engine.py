class BusinessReasonEngine:

    def explain(self, top_features):

        explanations = []

        feature_library = {

            "Support Calls":
            "The customer has contacted customer support significantly more often than average, indicating unresolved issues and growing dissatisfaction.",

            "Payment Delay":
            "Repeated payment delays suggest declining payment behaviour and increase the likelihood of churn.",

            "Usage Frequency":
            "The customer's product usage has declined, indicating reduced engagement with the platform.",

            "Total Spend":
            "Lower customer spending suggests weakening business value and reduced commitment.",

            "Age":
            "Customer demographic characteristics indicate behavioural patterns commonly associated with this risk level.",

            "Tenure":
            "Customer loyalty duration influences long-term retention probability.",

            "Contract Length_Monthly":
            "Monthly contracts generally experience higher churn compared to long-term agreements.",

            "Contract Length_Quarterly":
            "Quarterly subscriptions provide moderate customer stability.",

            "Subscription Type_Premium":
            "Premium customers typically demonstrate stronger loyalty and engagement.",

            "Subscription Type_Standard":
            "Standard subscription customers often exhibit higher churn than premium subscribers.",

            "Last Interaction":
            "Reduced customer interaction suggests declining engagement."
        }

        for feature in top_features["Feature"]:

            if feature in feature_library:

                explanations.append(feature_library[feature])

        return explanations