// ======================================================
// Dashboard Types
// ======================================================

export interface ExecutiveSummary {
  title: string;
  summary: string;
}

export interface KPIResponse {
  total_customers: number;
  active_customers: number;
  churn_customers: number;
  high_risk_customers: number;
  revenue_at_risk: number;
  average_health_score: number;
  average_confidence: number;
  average_churn_probability: number;
}

export interface RevenueChartPoint {
  label: string;
  revenue: number;
}

export interface HealthOverview {
  average_health: number;
  healthy_customers: number;
  unhealthy_customers: number;
}

export interface RiskDistributionItem {
  level: string;
  customers: number;
  percentage: number;
}

export interface ForecastOverview {
  expected_revenue: number;
  projected_growth: number;
  confidence: number;
}

export interface PredictionItem {
  customer_id: number;
  churn_probability: number;
  risk_level: string;
  recommendation: string;
}

export interface RecommendationItem {
  title: string;
  description: string;
  priority: string;
}

// ======================================================
// Dashboard Response
// ======================================================

export interface DashboardResponse {

  executive_summary: ExecutiveSummary;

  kpis: KPIResponse;

  revenue_chart: RevenueChartPoint[];

  health: HealthOverview;

  risk_distribution: RiskDistributionItem[];

  forecast: ForecastOverview;

  recent_predictions: PredictionItem[];

  recommendations: RecommendationItem[];

}

// ======================================================
// API Response
// ======================================================

export interface DashboardAPIResponse {

  success: boolean;

  message: string;

  data: DashboardResponse;

  errors: unknown;

  metadata: {

    timestamp: string;

    api_version: string;

    response_time: number | null;

  };

}