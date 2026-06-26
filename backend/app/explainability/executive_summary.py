class ExecutiveSummary:

    def generate(
        self,
        probability,
        revenue_risk,
        reasons
    ):

        return f"""

Executive Summary

The AI predicts that this customer has a
{probability:.2f}% probability of churn.

The estimated annual revenue at risk is
₹{revenue_risk:,.2f}.

Primary business concerns include:

{chr(10).join(['• '+r for r in reasons])}

Immediate customer retention efforts are
strongly recommended.

"""