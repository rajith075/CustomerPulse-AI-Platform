from collections import OrderedDict


class RecommendationBuilder:

    PRIORITY_MAP = {

        "Very High": 1,

        "High": 2,

        "Medium": 3,

        "Low": 4,

        "Unknown": 5

    }

    @classmethod
    def build(cls, interpreted_features):

        recommendations = []

        for feature in interpreted_features:

            recommendations.append({

                "feature": feature["feature"],

                "priority":

                    cls.PRIORITY_MAP.get(

                        feature["risk"],

                        5

                    ),

                "risk":

                    feature["risk"],

                "action":

                    feature["recommended_action"]

            })

        recommendations = sorted(

            recommendations,

            key=lambda x: x["priority"]

        )

        unique = OrderedDict()

        for item in recommendations:

            if item["action"] not in unique:

                unique[item["action"]] = item

        return list(unique.values())