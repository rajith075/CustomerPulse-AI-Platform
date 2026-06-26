class ExplanationBuilder:

    def build(self, top_features):

        explanation = []

        for _, row in top_features.iterrows():

            feature = row["Feature"]

            value = row["SHAP Value"]

            if value > 0:

                explanation.append(

                    f"{feature} increases churn risk."

                )

            else:

                explanation.append(

                    f"{feature} decreases churn risk."

                )

        return explanation