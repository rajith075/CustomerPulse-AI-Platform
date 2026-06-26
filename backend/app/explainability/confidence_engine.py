class ConfidenceEngine:

    @staticmethod
    def calculate(

        prediction_probability,

        top_feature_importance

    ):

        confidence = round(

            prediction_probability * 100,

            2

        )

        if confidence >= 95:

            level = "Very High"

        elif confidence >= 85:

            level = "High"

        elif confidence >= 70:

            level = "Medium"

        else:

            level = "Low"

        return {

            "prediction_confidence": confidence,

            "confidence_level": level,

            "top_feature_strength":

                round(

                    float(top_feature_importance),

                    3

                )

        }