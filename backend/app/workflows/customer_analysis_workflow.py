from app.services.prediction_service import PredictionService
from app.services.analysis_service import AnalysisService
from app.services.consultant_service import ConsultantService
from app.formatters.report_formatter import ReportFormatter


class CustomerAnalysisWorkflow:

    def __init__(self):

        self.prediction_service = PredictionService()
        self.analysis_service = AnalysisService()
        self.consultant_service = ConsultantService()

    def analyze(self, customer: dict):

        # -------------------------------
        # Step 1 : ML Prediction
        # -------------------------------

        prediction = self.prediction_service.predict(customer)

        # -------------------------------
        # Step 2 : Business Intelligence
        # -------------------------------

        business = self.analysis_service.analyze(
            customer,
            prediction
        )

        # -------------------------------
        # Step 3 : AI Consultant
        # -------------------------------

        ai_response = self.consultant_service.generate(
            customer,
            prediction,
            business
        )

        # -------------------------------
        # Step 4 : Extract AI Data
        # -------------------------------

        ai_report = ai_response.get("data", {})

        metadata = ai_response.get("metadata", {})

        # -------------------------------
        # Step 5 : Build Final Report
        # -------------------------------

        final_report = ReportFormatter.format(

            prediction=prediction,

            business=business,

            ai_report=ai_report,

            metadata=metadata

        )

        return final_report