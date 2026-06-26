class BusinessInterpreter:

    BUSINESS_RULES = {

        "Age": {

            "risk": "Low",

            "reason": (
                "Customer age influences purchasing behaviour and engagement patterns."
            ),

            "business_impact": (
                "Different customer age groups often exhibit different retention characteristics."
            ),

            "recommended_action": (
                "Personalize engagement strategies based on customer demographics."
            )

        },

        "Tenure": {

            "risk": "Low",

            "reason": (
                "Customer tenure reflects long-term relationship stability."
            ),

            "business_impact": (
                "Long-tenure customers generally demonstrate higher loyalty and retention."
            ),

            "recommended_action": (
                "Reward loyal customers with exclusive benefits and renewal offers."
            )

        },

        "Usage Frequency": {

            "risk": "High",

            "reason": (
                "Low platform usage suggests declining customer engagement."
            ),

            "business_impact": (
                "Reduced engagement is one of the strongest early indicators of churn."
            ),

            "recommended_action": (
                "Launch personalized engagement campaigns and recommend relevant product features."
            )

        },

        "Support Calls": {

            "risk": "Very High",

            "reason": (
                "Repeated customer support interactions indicate unresolved issues and declining satisfaction."
            ),

            "business_impact": (
                "Customers with unresolved support issues have a significantly higher probability of churn."
            ),

            "recommended_action": (
                "Assign a senior support specialist and resolve all outstanding support tickets within 24 hours."
            )

        },

        "Payment Delay": {

            "risk": "High",

            "reason": (
                "Delayed payments indicate declining customer commitment and possible financial dissatisfaction."
            ),

            "business_impact": (
                "Customers delaying payments frequently become inactive before cancelling."
            ),

            "recommended_action": (
                "Discuss payment flexibility and offer renewal incentives."
            )

        },

        "Total Spend": {

            "risk": "Medium",

            "reason": (
                "Lower customer spending reduces expected lifetime value."
            ),

            "business_impact": (
                "Low-spending customers require proactive retention strategies to maximize long-term revenue."
            ),

            "recommended_action": (
                "Recommend premium services and personalized promotional offers."
            )

        },

        "Last Interaction": {

            "risk": "Medium",

            "reason": (
                "Long periods without interaction indicate reduced customer interest."
            ),

            "business_impact": (
                "Inactive customers are considerably less likely to renew subscriptions."
            ),

            "recommended_action": (
                "Schedule proactive follow-up communication immediately."
            )

        },

        "Gender_Male": {

            "risk": "Low",

            "reason": (
                "Gender contributes only marginally to churn prediction."
            ),

            "business_impact": (
                "Demographic attributes alone should never drive business decisions."
            ),

            "recommended_action": (
                "Prioritize behavioural indicators over demographic information."
            )

        },

        "Subscription Type_Premium": {

            "risk": "Low",

            "reason": (
                "Premium subscribers typically demonstrate stronger engagement."
            ),

            "business_impact": (
                "Premium customers generally generate higher lifetime value."
            ),

            "recommended_action": (
                "Maintain premium customer experience through proactive support."
            )

        },

        "Subscription Type_Standard": {

            "risk": "Medium",

            "reason": (
                "Standard subscribers generally exhibit lower engagement than premium customers."
            ),

            "business_impact": (
                "Standard subscribers may require additional incentives to remain active."
            ),

            "recommended_action": (
                "Promote premium subscription benefits with personalized upgrade offers."
            )

        },

        "Contract Length_Monthly": {

            "risk": "Very High",

            "reason": (
                "Monthly subscriptions provide customers with maximum flexibility to cancel."
            ),

            "business_impact": (
                "Monthly contracts consistently demonstrate higher churn rates than longer commitments."
            ),

            "recommended_action": (
                "Encourage migration to annual subscription plans using loyalty incentives."
            )

        },

        "Contract Length_Quarterly": {

            "risk": "Medium",

            "reason": (
                "Quarterly contracts provide better retention than monthly plans but less stability than annual contracts."
            ),

            "business_impact": (
                "Quarterly subscribers remain at moderate churn risk."
            ),

            "recommended_action": (
                "Encourage migration toward longer-term subscription plans."
            )

        }

    }

    DEFAULT_RULE = {

        "risk": "Unknown",

        "reason": (
            "No business interpretation is currently available for this feature."
        ),

        "business_impact": (
            "Business impact has not yet been defined."
        ),

        "recommended_action": (
            "No recommendation is currently available."
        )

    }

    @classmethod
    def interpret(cls, feature_name):

        return cls.BUSINESS_RULES.get(

            feature_name,

            cls.DEFAULT_RULE

        )