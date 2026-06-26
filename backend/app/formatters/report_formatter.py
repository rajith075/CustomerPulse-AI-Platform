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
        metadata=None
    ):

        # Default metadata
        metadata = metadata or {}

        report_metadata = {

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

        return {

            "prediction": prediction,

            "business": business,

            "dashboard": DashboardFormatter.format(
                prediction,
                business
            ),

            "executive": ExecutiveFormatter.format(
                ai_report
            ),

            "email": EmailFormatter.format(
                ai_report
            ),

            "call_script": CallScriptFormatter.format(
                ai_report
            ),

            "metadata": report_metadata

        }