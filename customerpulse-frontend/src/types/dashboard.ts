// ======================================================
// Executive Summary
// ======================================================

export interface ExecutiveSummary {

  headline: string;

  overall_status: string;

  priority: string;

  executive_score: number;

  executive_summary: string;

  key_insights: string[];

  business_risks: string[];

  growth_opportunities: string[];

  recommended_actions: string[];

  next_week_focus: string[];

  financial_outlook: string;

  confidence: string;

}

// ======================================================
// KPI
// ======================================================

export interface KPIResponse {

  total_customers: number;

  revenue_at_risk: number;

  average_health_score: number;

  high_risk_customers: number;

}

// ======================================================
// Revenue Chart
// ======================================================

export interface RevenueChartPoint {

  month: string;

  revenue: number;

}

// ======================================================
// Customer Health
// ======================================================

export interface HealthOverview {

  overall_score: number;

  healthy: number;

  moderate: number;

  at_risk: number;

  critical: number;

  healthy_percentage: number;

  moderate_percentage: number;

  at_risk_percentage: number;

  critical_percentage: number;

}

// ======================================================
// Customer Segmentation
// ======================================================

export interface SegmentItem {

  name: string;

  count: number;

  percentage: number;

  color: string;

}

export interface CustomerSegmentation {

  total: number;

  segments: SegmentItem[];

}

// ======================================================
// Risk Intelligence
// ======================================================

export interface RiskDistributionItem {

  level: string;

  customers: number;

  percentage: number;

}

export interface RiskIntelligence {

  total_high_risk: number;

  distribution: RiskDistributionItem[];

}

// ======================================================
// AI Decision Center
// ======================================================

export interface DecisionAction {

  title: string;

  description: string;

  priority: string;

  impact: string;

  category: string;

  confidence: string;

  estimated_time: string;

}

export interface DecisionCenter {

  actions: DecisionAction[];

}

// ======================================================
// Forecast
// ======================================================

export interface ForecastOverview {

  expected_revenue: number;

  projected_growth: number;

  confidence: number;

}

// ======================================================
// Recent Predictions
// ======================================================

export interface PredictionItem {

  customer_id: number;

  churn_probability: number;

  risk_level: string;

  recommendation: string;

}

// ======================================================
// AI Recommendations
// ======================================================

export interface RecommendationItem {

  title: string;

  description: string;

  priority: string;

}

// ======================================================
// Dashboard Response
// ======================================================

export interface DashboardResponse {

  kpis: KPIResponse;

  revenue_chart: RevenueChartPoint[];

  health: HealthOverview;

  customer_segmentation: CustomerSegmentation;

  risk_distribution: RiskDistributionItem[];

  executive_summary: ExecutiveSummary;

  decision_center: DecisionCenter;

  forecast?: ForecastOverview;

  recent_predictions?: PredictionItem[];

  recommendations?: RecommendationItem[];

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