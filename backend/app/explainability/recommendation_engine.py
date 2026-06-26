class RecommendationEngine:

    def recommend(self, top_features):

        actions = []

        for feature in top_features["Feature"]:

            if feature == "Support Calls":

                actions.append(
                    "Assign a senior customer success manager."
                )

            elif feature == "Payment Delay":

                actions.append(
                    "Offer a flexible payment plan."
                )

            elif feature == "Usage Frequency":

                actions.append(
                    "Launch a personalised engagement campaign."
                )

            elif feature == "Total Spend":

                actions.append(
                    "Provide exclusive loyalty offers."
                )

            elif feature == "Contract Length_Monthly":

                actions.append(
                    "Recommend switching to an annual subscription."
                )

        return actions