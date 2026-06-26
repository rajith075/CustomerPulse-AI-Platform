class ExecutiveFormatter:

    @staticmethod
    def format(ai_report):

        return {

            "executive_summary":
                ai_report.get(
                    "executive_summary",
                    ""
                ),

            "customer_health_analysis":
                ai_report.get(
                    "customer_health_analysis",
                    ""
                ),

            "root_cause_analysis":
                ai_report.get(
                    "root_cause_analysis",
                    ""
                ),

            "behavior_analysis":
                ai_report.get(
                    "behavior_analysis",
                    ""
                ),

            "business_impact":
                ai_report.get(
                    "business_impact",
                    ""
                ),

            "retention_strategy":
                ai_report.get(
                    "retention_strategy",
                    ""
                ),

            "expected_outcome":
                ai_report.get(
                    "expected_outcome",
                    ""
                ),

            "manager_notes":
                ai_report.get(
                    "manager_notes",
                    ""
                )

        }