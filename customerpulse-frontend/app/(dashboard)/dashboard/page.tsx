"use client";

import KPICard from "@/components/dashboard/cards/kpi-card";
import RevenueChart from "@/components/dashboard/charts/revenue-chart";
import CustomerHealth from "@/components/dashboard/widgets/customer-health";
import RiskDistribution from "@/components/dashboard/widgets/risk-distribution";
import AIInsight from "@/components/dashboard/widgets/ai-insight";
import ForecastCard from "@/components/dashboard/widgets/forecast-card";
import RiskIntelligence from "@/components/dashboard/widgets/risk-intelligence";
import DecisionCenter from "@/components/dashboard/widgets/decision-center";

import { useDashboard } from "@/hooks/useDashboard";

import {
  IconUsers,
  IconCurrencyDollar,
  IconHeartHandshake,
  IconAlertTriangle,
} from "@tabler/icons-react";

export default function DashboardPage() {
  const {
    dashboard,
    loading,
    error,
    refresh,
  } = useDashboard();

  if (loading && !dashboard) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <div className="text-lg font-medium text-zinc-400">
          Loading Dashboard...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[80vh] flex-col items-center justify-center gap-5">
        <p className="text-lg text-red-400">
          {error}
        </p>

        <button
          onClick={() => refresh()}
          className="rounded-xl bg-[#D9FF3F] px-5 py-2 font-semibold text-black"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!dashboard) return null;

  return (
    <div className="mx-auto w-full max-w-[1500px] px-5 py-4 xl:px-6">

      {/* ================= KPI ================= */}

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <KPICard
          title="Total Customers"
          value={dashboard.kpis.total_customers}
          change="+2.4%"
          description="Registered Customers"
          accent="brand"
          icon={<IconUsers size={20} />}
        />

        <KPICard
          title="Revenue At Risk"
          value={`$${dashboard.kpis.revenue_at_risk.toLocaleString()}`}
          change="-3.2%"
          description="Potential Annual Loss"
          accent="risk"
          icon={<IconCurrencyDollar size={20} />}
        />

        <KPICard
          title="Health Score"
          value={`${dashboard.kpis.average_health_score}%`}
          change="+4.1%"
          description="Average Customer Health"
          accent="health"
          icon={<IconHeartHandshake size={20} />}
        />

        <KPICard
          title="High Risk Customers"
          value={dashboard.kpis.high_risk_customers}
          change="+1.8%"
          description="Requires Immediate Attention"
          accent="analytics"
          icon={<IconAlertTriangle size={20} />}
        />

      </section>

      {/* ================= Revenue + Segmentation ================= */}

      <section className="mt-5 grid gap-4 xl:grid-cols-2">

        <RevenueChart
          data={dashboard.revenue_chart}
        />

        <RiskDistribution
          segmentation={dashboard.customer_segmentation}
        />

      </section>

      {/* ================= AI Executive Summary ================= */}

      <section className="mt-5">

        <AIInsight
          executiveSummary={dashboard.executive_summary}
        />

      </section>

      {/* ================= Health + Risk ================= */}

      <section className="mt-5 grid gap-4 xl:grid-cols-2">

        <CustomerHealth
          health={dashboard.health}
        />

        <RiskIntelligence
          risk={dashboard.risk_distribution}
        />

      </section>

     {/* ================= Forecast ================= */}

<section className="mt-5">

  <ForecastCard />

</section>

{/* ================= Strategic AI Decision Center ================= */}

<section className="mt-5">

  <DecisionCenter
    data={dashboard.decision_center}
  />

</section>

      {/* ================= Recent Activities ================= */}

      <section className="mt-5">

        <div
          className="
            rounded-[22px]
            border
            border-white/5
            bg-[#090D18]
            p-6
          "
        >
          <h3 className="text-xl font-semibold text-white">
            Recent Activities
          </h3>

          <p className="mt-3 text-zinc-500">
            Customer activities and AI events will appear here.
          </p>

        </div>

      </section>

    </div>
  );
}