from datetime import datetime

from app.core.response_builder import ResponseBuilder

from app.analytics.dashboard_engine import DashboardEngine

from app.services.dashboard_ai_service import DashboardAIService
from app.services.decision_center_service import DecisionCenterService


class DashboardService:

    # ==========================================================
    # Cache
    # ==========================================================

    _cache = None
    _last_updated = None

    # ==========================================================
    # Load Uploaded DataFrame
    # ==========================================================

    @classmethod
    def load_dataframe(cls, dataframe):

        print("📂 Using Uploaded Dataset...")

        return dataframe.copy()

    # ==========================================================
    # Revenue Chart (Fallback)
    # ==========================================================

    @staticmethod
    def build_revenue_chart(df):

        months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
        ]

        chart = []

        chunk = max(1, len(df) // len(months))

        for i, month in enumerate(months):

            start = i * chunk

            end = len(df) if i == len(months) - 1 else (i + 1) * chunk

            revenue = round(

                df.iloc[start:end]["Total Spend"].sum(),

                2

            )

            chart.append({

                "month": month,

                "revenue": revenue

            })

        return chart

    # ==========================================================
    # Dashboard Builder
    # ==========================================================

    @classmethod
    def calculate_dashboard(cls, dataframe):

        print("🚀 Building Dashboard...")

        df = cls.load_dataframe(dataframe)

        # ------------------------------------------------------
        # Dashboard Analytics
        # ------------------------------------------------------

        analytics = DashboardEngine.process(df)

        # ------------------------------------------------------
        # Executive AI
        # ------------------------------------------------------

        print()
        print("🧠 Generating Executive AI...")

        executive_summary = DashboardAIService.generate(
            analytics
        )

        print("✅ Executive AI Completed")

        # ------------------------------------------------------
        # Decision Center AI
        # ------------------------------------------------------

        print()
        print("🧠 Generating Decision Center...")

        decision_center = DecisionCenterService.generate(
            analytics
        )

        print("✅ Decision Center Completed")

        # ------------------------------------------------------
        # Dashboard Response
        # ------------------------------------------------------

        dashboard = {

            "kpis": analytics["kpis"],

            "revenue_chart": analytics["revenue_chart"],

            "health": analytics["health"],

            "customer_segmentation": analytics[
                "customer_segmentation"
            ],

            "risk_distribution": analytics[
                "risk_distribution"
            ],

            "executive_summary": executive_summary,

            "decision_center": decision_center,

        }

        cls._cache = dashboard

        cls._last_updated = datetime.now()

        print()
        print("✅ Dashboard Ready")

        return dashboard

    # ==========================================================
    # Dashboard API
    # ==========================================================

    @classmethod
    def get_dashboard(cls, dataframe):

        dashboard = cls.calculate_dashboard(dataframe)

        return ResponseBuilder.success(

            message="Dashboard loaded successfully.",

            data=dashboard

        )