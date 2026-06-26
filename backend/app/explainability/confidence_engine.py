class ConfidenceEngine:

    def confidence(self, probability):

        if probability >= 95:

            return "Very High"

        elif probability >= 85:

            return "High"

        elif probability >= 70:

            return "Medium"

        return "Low"