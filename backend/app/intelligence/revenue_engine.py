class RevenueEngine:

    @staticmethod
    def estimated_clv(customer: dict):

        return round(

            customer["Total Spend"] *

            (customer["Tenure"] / 12),

            2

        )

    @staticmethod
    def revenue_at_risk(clv, churn_probability):

        return round(

            clv * churn_probability,

            2

        )