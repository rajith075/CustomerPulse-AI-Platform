from pydantic import BaseModel
from typing import List


class KPIResponse(BaseModel):
    total_customers: int
    active_customers: int
    churn_customers: int
    high_risk_customers: int
    revenue_at_risk: float
    average_health_score: float
    average_confidence: float
    average_churn_probability: float


class RevenueChartPoint(BaseModel):
    label: str
    revenue: float


class RiskDistributionItem(BaseModel):
    level: str
    customers: int
    percentage: float


class HealthOverview(BaseModel):
    average_health: float
    healthy_customers: int
    unhealthy_customers: int


class ForecastOverview(BaseModel):
    expected_revenue: float
    projected_growth: float
    confidence: float


class ExecutiveSummary(BaseModel):
    title: str
    summary: str


class RecommendationItem(BaseModel):
    title: str
    description: str
    priority: str


class PredictionItem(BaseModel):
    customer_id: int
    churn_probability: float
    risk_level: str
    recommendation: str


class DashboardResponse(BaseModel):

    executive_summary: ExecutiveSummary

    kpis: KPIResponse

    revenue_chart: List[RevenueChartPoint]

    health: HealthOverview

    risk_distribution: List[RiskDistributionItem]

    forecast: ForecastOverview

    recent_predictions: List[PredictionItem]

    recommendations: List[RecommendationItem]