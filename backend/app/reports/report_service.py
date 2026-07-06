"""
==========================================================
CustomerPulse AI
Executive Report Service
==========================================================
"""

from app.dataset.dashboard_storage import DashboardStorage
from app.dataset.workspace_lookup import WorkspaceLookup

from app.reports.pdf_generator import PDFGenerator


class ReportService:

    @staticmethod
    def get_report(project_id: str):

        workspace = WorkspaceLookup.get_workspace(
            project_id
        )

        if workspace is None:

            return {

                "success": False,

                "message": "Workspace not found."

            }

        dashboard = DashboardStorage.load_dashboard(
            workspace
        )

        if dashboard is None:

            return {

                "success": False,

                "message": "Dashboard not found."

            }

        return {

            "success": True,

            "project_id": project_id,

            "report": dashboard

        }

    @staticmethod
    def download_pdf(project_id: str):

        workspace = WorkspaceLookup.get_workspace(
            project_id
        )

        if workspace is None:

            return None

        dashboard = DashboardStorage.load_dashboard(
            workspace
        )

        if dashboard is None:

            return None

        pdf = PDFGenerator.generate(
            dashboard
        )

        return pdf