from app.explainability.business_interpreter import BusinessInterpreter


class ExplanationBuilder:

    @staticmethod
    def build(feature_df):

        """
        Build enterprise-grade business explanations
        from ranked SHAP feature importance.
        """

        explanations = []

        for rank, (_, row) in enumerate(feature_df.iterrows(), start=1):

            info = BusinessInterpreter.interpret(
                row["feature"]
            )

            explanations.append({

                "rank": rank,

                "feature": row["feature"],

                "importance": round(
                    float(row["importance"]),
                    4
                ),

                "risk": info["risk"],

                "reason": info["reason"],

                "business_impact": info["business_impact"],

                "recommended_action": info["recommended_action"]

            })

        return explanations