class RiskEngine:

    @staticmethod
    def category(probability):

        if probability >= 0.85:
            return "Critical"

        elif probability >= 0.65:
            return "High"

        elif probability >= 0.40:
            return "Medium"

        return "Low"

    @staticmethod
    def priority(category):

        priorities = {

            "Critical": "Immediate",

            "High": "High",

            "Medium": "Normal",

            "Low": "Low"

        }

        return priorities[category]