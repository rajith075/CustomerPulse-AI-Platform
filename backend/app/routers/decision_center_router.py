from fastapi import APIRouter

from app.core.response_builder import ResponseBuilder
from app.analytics.dashboard_engine import DashboardEngine
from app.services.dashboard_service import DashboardService
from app.services.decision_center_service import (
    DecisionCenterService,
)

router = APIRouter(
    prefix="/decision-center",
    tags=["AI Decision Center"],
)


@router.get("/")
def get_decision_center():

    print()
    print("🚀 Building AI Decision Center...")

    df = DashboardService.load_dataset()

    analytics = DashboardEngine.process(df)

    decisions = DecisionCenterService.generate(
        analytics
    )

    return ResponseBuilder.success(

        message="Decision Center generated successfully.",

        data=decisions

    )