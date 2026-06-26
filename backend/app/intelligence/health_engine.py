class HealthEngine:

    @staticmethod
    def calculate(customer: dict):

        score = 100

        # Support Calls
        score -= customer["Support Calls"] * 5

        # Payment Delay
        score -= customer["Payment Delay"] * 2

        # Usage Frequency
        score += customer["Usage Frequency"] * 1.5

        # Total Spend
        score += customer["Total Spend"] / 100

        # Last Interaction
        score -= customer["Last Interaction"] * 1

        score = max(0, min(100, score))

        return round(score, 2)