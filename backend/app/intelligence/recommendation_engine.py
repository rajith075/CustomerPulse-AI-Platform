class RecommendationEngine:

    @staticmethod
    def generate(probability):

        recommendations = []

        if probability >= 0.85:

            recommendations.extend([

                "Assign dedicated retention manager.",

                "Offer personalized renewal discount.",

                "Schedule executive follow-up within 24 hours."

            ])

        elif probability >= 0.60:

            recommendations.extend([

                "Provide loyalty rewards.",

                "Offer premium support."

            ])

        else:

            recommendations.append(

                "Maintain regular customer engagement."

            )

        return recommendations