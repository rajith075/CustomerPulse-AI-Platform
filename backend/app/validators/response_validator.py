import copy


class ResponseValidator:

    REQUIRED_FIELDS = {

        "customer_overview": {},

        "executive_summary": "",

        "customer_health_analysis": "",

        "root_cause_analysis": "",

        "behavior_analysis": "",

        "financial_analysis": "",

        "business_impact": "",

        "retention_strategy": "",

        "expected_outcome": "",

        "manager_notes": "",

        "customer_email": "",

        "call_script": "",

        "dashboard": {}

    }

    @classmethod
    def validate(cls, response):

        # ---------------------------------------
        # Gemini Request Failed
        # ---------------------------------------

        if not response.get("success", False):

            return {

                "success": False,

                "error": response.get(
                    "error",
                    "Unknown Gemini Error"
                ),

                "data": copy.deepcopy(
                    cls.REQUIRED_FIELDS
                ),

                "metadata": {

                    "llm": response.get(
                        "model",
                        "Unknown"
                    ),

                    "response_time": response.get(
                        "response_time",
                        None
                    ),

                    "generated_by": "CustomerPulse AI",

                    "environment": "Development"

                }

            }

        # ---------------------------------------
        # Gemini Request Successful
        # ---------------------------------------

        ai_data = response.get("data", {})

        validated = {}

        for key, default in cls.REQUIRED_FIELDS.items():

            validated[key] = ai_data.get(
                key,
                default
            )

        return {

            "success": True,

            "error": None,

            "data": validated,

            "metadata": {

                "llm": response.get(
                    "model",
                    "Gemini 2.5 Flash"
                ),

                "response_time": response.get(
                    "response_time",
                    None
                ),

                "generated_by": "CustomerPulse AI",

                "environment": "Development"

            }

        }