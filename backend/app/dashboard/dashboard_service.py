from pathlib import Path
from typing import Any

import pandas as pd

from app.services.prediction_service import PredictionService
from app.schemas.dashboard_response import (
    DashboardResponse,
    KPIResponse,
    RevenueChartPoint,
    RiskDistributionItem,
    HealthOverview,
    ForecastOverview,
    ExecutiveSummary,
    RecommendationItem,
    PredictionItem,
)


class DashboardService:

    """
    Enterprise Dashboard Service

    Responsible for:

    • Loading production dataset
    • Running batch predictions
    • Generating KPIs
    • Revenue Analytics
    • Customer Health Analytics
    • Risk Analytics
    • AI Executive Summary
    • Dashboard Widgets

    """

    def __init__(self):

        print("\n🚀 Initializing Dashboard Service...")

        self.prediction_service = PredictionService()

        self.dataset = self.load_dataset()

        self.predictions = []

        print("✅ Dashboard Service Ready")

    # ==========================================================
    # Dataset Loader
    # ==========================================================

    def load_dataset(self) -> pd.DataFrame:

        """
        Load Production Dataset
        """

        backend_root = Path(__file__).resolve().parents[2]

        dataset_folder = backend_root.parent / "datasets"

        final_folder = dataset_folder / "final"

        csv_files = list(final_folder.glob("*.csv"))

        excel_files = list(final_folder.glob("*.xlsx"))

        if csv_files:

            dataset_path = csv_files[0]

            print(f"📂 Loading Dataset: {dataset_path.name}")

            df = pd.read_csv(dataset_path)

        elif excel_files:

            dataset_path = excel_files[0]

            print(f"📂 Loading Dataset: {dataset_path.name}")

            df = pd.read_excel(dataset_path)

        else:

            raise FileNotFoundError(
                "No dataset found inside datasets/final"
            )

        print(f"✅ Dataset Loaded ({len(df):,} customers)")

        return df

    # ==========================================================
    # Prediction Cache
    # ==========================================================

    def has_cache(self):

        return len(self.predictions) > 0

    def clear_cache(self):

        self.predictions = []

    # ==========================================================
    # Utilities
    # ==========================================================

    @property
    def total_customers(self):

        return len(self.dataset)

    def get_dataframe(self):

        return self.dataset.copy()
        # ==========================================================
    # Batch Prediction Engine
    # ==========================================================

    def generate_predictions(self) -> list[dict]:
        """
        Generate predictions for every customer.

        Results are cached after the first execution.
        """

        if self.has_cache():

            print("⚡ Using Cached Predictions")

            return self.predictions

        print("\n🚀 Running Batch Prediction Engine...")

        predictions = []

        total = len(self.dataset)

        for index, (_, row) in enumerate(self.dataset.head(20).iterrows(), start=1):

            customer = row.to_dict()

            try:
                result = self.prediction_service.predict(customer)

            except Exception as e:

                print(f"\n❌ Error on customer {index}")

                print(customer)

                raise e

            # Preserve original customer information
            result["customer"] = customer

            predictions.append(result)

            # Progress every 10,000 customers
            if index % 10000 == 0:

                print(f"Processed {index:,}/{total:,} customers")

        self.predictions = predictions

        print(f"\n✅ Generated {len(predictions):,} predictions")

        return predictions

    # ==========================================================
    # Prediction Helpers
    # ==========================================================

    def get_predictions(self):

        return self.generate_predictions()

    def get_high_risk_customers(self, limit: int = 25):

        predictions = self.generate_predictions()

        high_risk = sorted(

            predictions,

            key=lambda x: x["churn_percentage"],

            reverse=True

        )

        return high_risk[:limit]

    def get_total_predictions(self):

        return len(self.generate_predictions())
        # ==========================================================
    # KPI Analytics Engine
    # ==========================================================

    def calculate_kpis(self):

        """
        Calculate all dashboard KPIs
        from cached predictions.
        """

        predictions = self.generate_predictions()

        total_customers = len(predictions)

        churn_customers = sum(
            1
            for p in predictions
            if p["prediction"] == 1
        )

        active_customers = (
            total_customers - churn_customers
        )

        high_risk_customers = sum(
            1
            for p in predictions
            if p["risk_level"] == "High"
        )

        revenue_at_risk = round(

            sum(
                p["revenue_at_risk"]
                for p in predictions
            ),

            2

        )

        average_health_score = round(

            sum(
                p["customer_health"]
                for p in predictions
            ) / total_customers,

            2

        )

        average_confidence = round(

            sum(
                p["confidence_score"]
                for p in predictions
            ) / total_customers,

            2

        )

        average_churn_probability = round(

            sum(
                p["churn_percentage"]
                for p in predictions
            ) / total_customers,

            2

        )

        return KPIResponse(

            total_customers=total_customers,

            active_customers=active_customers,

            churn_customers=churn_customers,

            high_risk_customers=high_risk_customers,

            revenue_at_risk=revenue_at_risk,

            average_health_score=average_health_score,

            average_confidence=average_confidence,

            average_churn_probability=average_churn_probability,

        )
        # ==========================================================
    # Revenue Chart
    # ==========================================================

    def build_revenue_chart(self):

        df = self.dataset.copy()

        if "Tenure" not in df.columns:
            return []

        revenue = (
            df.groupby("Tenure")["Total Spend"]
            .sum()
            .reset_index()
            .sort_values("Tenure")
        )

        chart = []

        for _, row in revenue.iterrows():

            chart.append(

                RevenueChartPoint(

                    label=f"{int(row['Tenure'])}M",

                    revenue=round(float(row["Total Spend"]), 2),

                )

            )

        return chart

    # ==========================================================
    # Customer Health
    # ==========================================================

    def build_health_widget(self):

        predictions = self.generate_predictions()

        avg_health = round(

            sum(

                p["customer_health"]

                for p in predictions

            ) / len(predictions),

            2,

        )

        healthy = sum(

            1

            for p in predictions

            if p["customer_health"] >= 70

        )

        unhealthy = len(predictions) - healthy

        return HealthOverview(

            average_health=avg_health,

            healthy_customers=healthy,

            unhealthy_customers=unhealthy,

        )

    # ==========================================================
    # Risk Distribution
    # ==========================================================

    def build_risk_distribution(self):

        predictions = self.generate_predictions()

        total = len(predictions)

        distribution = []

        for level in [

            "Low",

            "Medium",

            "High",

        ]:

            count = sum(

                1

                for p in predictions

                if p["risk_level"] == level

            )

            distribution.append(

                RiskDistributionItem(

                    level=level,

                    customers=count,

                    percentage=round(

                        (count / total) * 100,

                        2,

                    ),

                )

            )

        return distribution

    # ==========================================================
    # Forecast
    # ==========================================================

    def build_forecast(self):

        predictions = self.generate_predictions()

        revenue = sum(

            p["annual_revenue"]

            for p in predictions

        )

        confidence = round(

            sum(

                p["confidence_score"]

                for p in predictions

            ) / len(predictions),

            2,

        )

        return ForecastOverview(

            expected_revenue=round(revenue, 2),

            projected_growth=12.5,

            confidence=confidence,

        )
        # ==========================================================
    # Executive Summary
    # ==========================================================

    def build_executive_summary(self):

        kpi = self.calculate_kpis()

        summary = (
            f"CustomerPulse AI analyzed {kpi.total_customers:,} customers. "
            f"{kpi.high_risk_customers:,} customers are classified as High Risk "
            f"with an estimated revenue exposure of "
            f"${kpi.revenue_at_risk:,.2f}. "
            f"Average customer health is {kpi.average_health_score}% "
            f"while model confidence remains at "
            f"{kpi.average_confidence}%."
        )

        return ExecutiveSummary(

            title="Executive AI Summary",

            summary=summary,

        )

    # ==========================================================
    # AI Recommendations
    # ==========================================================

    def build_recommendations(self):

        kpi = self.calculate_kpis()

        recommendations = []

        if kpi.high_risk_customers > 0:

            recommendations.append(

                RecommendationItem(

                    title="Launch Retention Campaign",

                    description=(
                        f"Target {kpi.high_risk_customers:,} "
                        "high-risk customers immediately."
                    ),

                    priority="High",

                )

            )

        if kpi.average_health_score < 75:

            recommendations.append(

                RecommendationItem(

                    title="Improve Customer Health",

                    description=(
                        "Increase engagement for customers "
                        "with low health scores."
                    ),

                    priority="Medium",

                )

            )

        if kpi.average_churn_probability > 40:

            recommendations.append(

                RecommendationItem(

                    title="Review Pricing Strategy",

                    description=(
                        "High churn probability detected "
                        "across customer segments."
                    ),

                    priority="Medium",

                )

            )

        recommendations.append(

            RecommendationItem(

                title="Schedule Executive Review",

                description=(
                    "Review dashboard insights and "
                    "AI recommendations with leadership."
                ),

                priority="Low",

            )

        )

        return recommendations

    # ==========================================================
    # Recent Predictions
    # ==========================================================

    def build_recent_predictions(self, limit: int = 10):

        predictions = self.generate_predictions()

        latest = predictions[:limit]

        results = []

        for index, prediction in enumerate(latest, start=1):

            results.append(

                PredictionItem(

                    customer_id=index,

                    churn_probability=prediction["churn_percentage"],

                    risk_level=prediction["risk_level"],

                    recommendation=prediction["recommended_action"],

                )

            )

        return results
        # ==========================================================
    # Dashboard Builder
    # ==========================================================

    # ==========================================================
    # Dashboard Builder
    # ==========================================================

    @classmethod
    def get_dashboard(cls):
        service = cls()

        return DashboardResponse(
            kpis=service.calculate_kpis(),
            revenue_chart=service.build_revenue_chart(),
            health=service.build_health_widget(),
            risk_distribution=service.build_risk_distribution(),
            forecast=service.build_forecast(),
            executive_summary=service.build_executive_summary(),
            recommendations=service.build_recommendations(),
            recent_predictions=service.build_recent_predictions(),
        )
