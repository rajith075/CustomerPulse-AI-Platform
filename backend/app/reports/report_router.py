"""
==========================================================
CustomerPulse AI
Executive Report Router
==========================================================
"""

from io import BytesIO

from fastapi import APIRouter
from fastapi.responses import StreamingResponse

from app.reports.report_service import ReportService

router = APIRouter(

    prefix="/reports",

    tags=["Reports"]

)


# ==========================================================
# REPORT PREVIEW
# ==========================================================

@router.get("/{project_id}")

def get_report(project_id: str):

    return ReportService.get_report(
        project_id
    )


# ==========================================================
# DOWNLOAD PDF
# ==========================================================

@router.get("/pdf/{project_id}")

def download_report(project_id: str):

    pdf = ReportService.download_pdf(
        project_id
    )

    if pdf is None:

        return {

            "success": False,

            "message": "Report not found."

        }

    return StreamingResponse(

        BytesIO(pdf),

        media_type="application/pdf",

        headers={

            "Content-Disposition":

            f'attachment; filename="CustomerPulse_Report_{project_id}.pdf"'

        }

    )