class DashboardFormatter:

    @staticmethod
    def format(

        prediction,

        business,

        ai_dashboard=None

    ):

        ai_dashboard = ai_dashboard or {}

        probability = prediction["churn_probability"]

        if probability >= 0.85:

            color = "red"

        elif probability >= 0.60:

            color = "orange"

        else:

            color = "green"

        return {

            # ===============================
            # ML + Business Metrics
            # ===============================

            "headline": ai_dashboard.get(
                "headline",
                business["risk_level"]
            ),

            "severity": ai_dashboard.get(
                "severity",
                business["risk_level"]
            ),

            "probability": probability,

            "health_score": business["health_score"],

            "priority": business["customer_priority"],

            "estimated_loss": business["revenue_at_risk"],

            "color": color,

            # ===============================
            # AI Insights
            # ===============================

            "next_action": ai_dashboard.get(
                "next_action",
                "Immediate retention action recommended."
            ),

            "executive_note": ai_dashboard.get(
                "executive_note",
                ""
            )

        }