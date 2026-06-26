from datetime import datetime

from app.formatters.executive_formatter import ExecutiveFormatter
from app.formatters.dashboard_formatter import DashboardFormatter
from app.formatters.email_formatter import EmailFormatter
from app.formatters.call_script_formatter import CallScriptFormatter


class ReportFormatter:

    @staticmethod
    def format(

        prediction,

        business,

        ai_report,

        metadata=None,

        explainability=None

    ):

        metadata = metadata or {}

        ai_dashboard = ai_report.get(

            "dashboard",

            {}

        )

        return {

            # ==================================================
            # Prediction
            # ==================================================

            "prediction": prediction,

            # ==================================================
            # Business Intelligence
            # ==================================================

            "business": business,

            # ==================================================
            # Explainability
            # ==================================================

            "explainability": explainability,

            # ==================================================
            # Unified Dashboard
            # ==================================================

            "dashboard": DashboardFormatter.format(

                prediction,

                business,

                ai_dashboard

            ),

            # ==================================================
            # Executive Report
            # ==================================================

            "executive": ExecutiveFormatter.format(

                ai_report

            ),

            # ==================================================
            # Customer Email
            # ==================================================

            "email": EmailFormatter.format(

                ai_report

            ),

            # ==================================================
            # Call Script
            # ==================================================

            "call_script": CallScriptFormatter.format(

                ai_report

            ),

            # ==================================================
            # Metadata
            # ==================================================

            "metadata": {

                "generated_at": datetime.now().isoformat(),

                "ml_model": metadata.get(

                    "ml_model",

                    "CatBoost"

                ),

                "llm": metadata.get(

                    "llm",

                    "Gemini 2.5 Flash"

                ),

                "model_version": metadata.get(

                    "model_version",

                    "1.0.0"

                ),

                "report_version": metadata.get(

                    "report_version",

                    "2.0"

                ),

                "api_version": metadata.get(

                    "api_version",

                    "v1"

                ),

                "environment": metadata.get(

                    "environment",

                    "Development"

                ),

                "generated_by": metadata.get(

                    "generated_by",

                    "CustomerPulse AI"

                ),

                "response_time": metadata.get(

                    "response_time",

                    None

                )

            }

        }