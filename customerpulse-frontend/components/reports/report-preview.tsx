"use client";

import ReportHeader from "./report-header";
import ReportSection from "./report-section";

interface Props {
  report: any;
}

export default function ReportPreview({
  report,
}: Props) {
  const executive = report.executive_summary;
  const kpis = report.kpis;
  const health = report.health;
  const segmentation = report.customer_segmentation;

  return (
    <div className="mx-auto max-w-5xl py-10">

      <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">

        <ReportHeader />

        {/* Executive Summary */}

        <ReportSection title="Executive Summary">
          <p className="text-justify">
            {executive.executive_summary}
          </p>
        </ReportSection>

        {/* Business Status */}

        <ReportSection title="Business Status">

          <div className="grid grid-cols-2 gap-8">

            <div>

              <h3 className="text-sm font-semibold uppercase text-gray-500">
                Overall Status
              </h3>

              <p className="mt-2 text-xl font-bold text-black-600">
                {executive.overall_status}
              </p>

            </div>

            <div>

              <h3 className="text-sm font-semibold uppercase text-gray-500">
                Priority
              </h3>

              <p className="mt-2 text-xl font-bold text-black-700">
                {executive.priority}
              </p>

            </div>

          </div>

        </ReportSection>

        {/* KPI Overview */}

        <ReportSection title="Business KPI Overview">

          <div className="grid grid-cols-2 gap-8">

            <div>

              <h3 className="text-sm text-gray-500">
                Total Customers
              </h3>

              <p className="text-3xl font-bold">
                {kpis.total_customers}
              </p>

            </div>

            <div>

              <h3 className="text-sm text-gray-500">
                Revenue At Risk
              </h3>

              <p className="text-3xl font-bold text-black-600">
                $
                {kpis.revenue_at_risk.toLocaleString()}
              </p>

            </div>

            <div>

              <h3 className="text-sm text-gray-500">
                Average Health Score
              </h3>

              <p className="text-3xl font-bold">
                {kpis.average_health_score}%
              </p>

            </div>

            <div>

              <h3 className="text-sm text-gray-500">
                High Risk Customers
              </h3>

              <p className="text-3xl font-bold">
                {kpis.high_risk_customers}
              </p>

            </div>

          </div>

        </ReportSection>

        {/* Customer Health */}

        <ReportSection title="Customer Health">

          <div className="grid grid-cols-4 gap-6 text-center">

            <div>

              <h4 className="font-semibold">
                Healthy
              </h4>

              <p className="mt-2 text-3xl font-bold text-black-600">
                {health.healthy}
              </p>

            </div>

            <div>

              <h4 className="font-semibold">
                Moderate
              </h4>

              <p className="mt-2 text-3xl font-bold text-black-600">
                {health.moderate}
              </p>

            </div>

            <div>

              <h4 className="font-semibold">
                At Risk
              </h4>

              <p className="mt-2 text-3xl font-bold text-black-600">
                {health.at_risk}
              </p>

            </div>

            <div>

              <h4 className="font-semibold">
                Critical
              </h4>

              <p className="mt-2 text-3xl font-bold text-black-600">
                {health.critical}
              </p>

            </div>

          </div>

        </ReportSection>

        {/* Customer Segmentation */}

        <ReportSection title="Customer Segmentation">

          <table className="w-full border-collapse">

            <thead>

              <tr className="border-b">

                <th className="py-3 text-left">
                  Segment
                </th>

                <th>
                  Customers
                </th>

                <th>
                  Percentage
                </th>

              </tr>

            </thead>

            <tbody>

              {segmentation.segments.map((segment: any) => (

                <tr
                  key={segment.name}
                  className="border-b"
                >

                  <td className="py-3">
                    {segment.name}
                  </td>

                  <td className="text-center">
                    {segment.count}
                  </td>

                  <td className="text-center">
                    {segment.percentage}%
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </ReportSection>

        {/* Business Risks */}

        <ReportSection title="Business Risks">

          <ul className="list-disc space-y-2 pl-6">

            {executive.business_risks.map((risk: string) => (

              <li key={risk}>
                {risk}
              </li>

            ))}

          </ul>

        </ReportSection>

        {/* Growth Opportunities */}

        <ReportSection title="Growth Opportunities">

          <ul className="list-disc space-y-2 pl-6">

            {executive.growth_opportunities.map((item: string) => (

              <li key={item}>
                {item}
              </li>

            ))}

          </ul>

        </ReportSection>

        {/* Recommended Actions */}

        <ReportSection title="Recommended Actions">

          <ul className="list-disc space-y-2 pl-6">

            {executive.recommended_actions.map((action: string) => (

              <li key={action}>
                {action}
              </li>

            ))}

          </ul>

        </ReportSection>

      </div>

    </div>
  );
}