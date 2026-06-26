class DashboardFormatter:

    @staticmethod
    def format(

        prediction,

        business

    ):

        probability = prediction["churn_probability"]

        if probability >= 0.85:

            color = "red"

        elif probability >= 0.60:

            color = "orange"

        else:

            color = "green"

        return {

            "headline":
                business["risk_category"],

            "severity":
                business["risk_category"],

            "probability":
                probability,

            "health_score":
                business["health_score"],

            "priority":
                business["customer_priority"],

            "estimated_loss":
                business["revenue_at_risk"],

            "color":
                color

        }