from app.services.prediction_service import PredictionService
from app.services.analysis_service import AnalysisService
from app.services.consultant_service import ConsultantService

from app.explainability.explainability_service import ExplainabilityService

from app.formatters.report_formatter import ReportFormatter


class CustomerAnalysisWorkflow:

    def __init__(self):

        self.prediction_service = PredictionService()

        self.analysis_service = AnalysisService()

        self.explainability_service = ExplainabilityService()

        self.consultant_service = ConsultantService()

    def analyze(self, customer: dict):

        # ==========================================================
        # STEP 1 : ML Prediction
        # ==========================================================

        prediction = self.prediction_service.predict(
            customer
        )

        # ==========================================================
        # STEP 2 : Business Intelligence
        # ==========================================================

        business = self.analysis_service.analyze(
            customer,
            prediction
        )

        # ==========================================================
        # STEP 3 : Explainability Engine
        # ==========================================================

        explainability = self.explainability_service.explain(
            customer,
            prediction
        )

        # ==========================================================
        # STEP 4 : AI Consultant
        # ==========================================================

        ai_response = self.consultant_service.generate(
            customer,
            prediction,
            business,
            explainability
        )

        # ==========================================================
        # STEP 5 : Extract AI Report
        # ==========================================================

        ai_report = ai_response.get(
            "data",
            {}
        )

        metadata = ai_response.get(
            "metadata",
            {}
        )

        # ==========================================================
        # STEP 6 : Build Enterprise Report
        # ==========================================================

        final_report = ReportFormatter.format(

            prediction=prediction,

            business=business,

            ai_report=ai_report,

            metadata=metadata,

            explainability=explainability

        )

        return final_report