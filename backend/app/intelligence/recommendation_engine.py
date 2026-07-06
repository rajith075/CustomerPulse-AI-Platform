"""
Recommendation Engine
"""


class RecommendationEngine:

    @staticmethod
    def calculate(

        risk_level: str,

        subscription: str,

    ):

        if risk_level == "Critical":

            return {

                "retention_strategy":
                    "Immediately assign a Customer Success Manager, offer a loyalty discount, and schedule an executive follow-up within 24 hours."

            }

        elif risk_level == "High":

            return {

                "retention_strategy":
                    "Provide a personalized retention offer and proactively contact the customer."

            }

        elif risk_level == "Medium":

            return {

                "retention_strategy":
                    "Increase engagement through personalized campaigns and monitor customer activity."

            }

        return {

            "retention_strategy":
                "Maintain regular engagement and continue delivering value."

        }