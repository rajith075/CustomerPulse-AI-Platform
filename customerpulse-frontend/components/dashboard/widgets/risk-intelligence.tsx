"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid,
} from "recharts";

import {
  IconShieldExclamation,
  IconUsers,
  IconAlertTriangle,
} from "@tabler/icons-react";

interface RiskItem {
  level: string;
  customers: number;
  percentage: number;
}

interface Props {
  risk: RiskItem[];
}

export default function RiskIntelligence({
  risk,
}: Props) {

  const colors = [
    "#22C55E",
    "#FACC15",
    "#FB923C",
    "#EF4444",
  ];

  const highCritical = risk
    .filter(
      (r) =>
        r.level === "High" ||
        r.level === "Critical"
    )
    .reduce(
      (sum, item) => sum + item.customers,
      0
    );

  const riskPercent = risk
    .filter(
      (r) =>
        r.level === "High" ||
        r.level === "Critical"
    )
    .reduce(
      (sum, item) => sum + item.percentage,
      0
    );

  return (

    <div
      className="
      rounded-[22px]
      border
      border-white/[0.04]
      bg-[linear-gradient(180deg,#090909,#050505)]
      p-4
      "
    >

      {/* Header */}

      <div className="flex items-center gap-3">

        <div
          className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-red-500/10
          "
        >
          <IconShieldExclamation
            size={20}
            className="text-red-400"
          />
        </div>

        <div>

          <h2 className="text-xl font-semibold text-white">
            Risk Distribution
          </h2>

          <p className="text-sm text-zinc-500">
            AI Customer Risk Intelligence
          </p>

        </div>

      </div>

      {/* Summary */}

      <div className="mt-5 grid grid-cols-2 gap-3">

        <div
          className="
          rounded-xl
          border
          border-white/5
          bg-white/[0.03]
          p-3
          "
        >

          <div className="flex items-center gap-2">

            <IconUsers
              size={18}
              className="text-red-400"
            />

            <span className="text-xs text-zinc-400">
              High + Critical
            </span>

          </div>

          <h3 className="mt-2 text-2xl font-bold text-white">

            {highCritical.toLocaleString()}

          </h3>

        </div>

        <div
          className="
          rounded-xl
          border
          border-white/5
          bg-white/[0.03]
          p-3
          "
        >

          <div className="flex items-center gap-2">

            <IconAlertTriangle
              size={18}
              className="text-yellow-400"
            />

            <span className="text-xs text-zinc-400">
              Total Risk
            </span>

          </div>

          <h3 className="mt-2 text-2xl font-bold text-yellow-400">

            {riskPercent.toFixed(1)}%

          </h3>

        </div>

      </div>

      {/* Chart */}

      <div className="mt-5 h-[220px]">

        <ResponsiveContainer>

          <BarChart
            data={risk}
            barCategoryGap={30}
          >

            <CartesianGrid
              vertical={false}
              stroke="rgba(255,255,255,.05)"
              strokeDasharray="3 8"
            />

            <XAxis
              dataKey="level"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#A1A1AA",
                fontSize: 13,
                fontWeight: 600,
              }}
            />

            <YAxis hide />

            <Tooltip
              cursor={{
                fill: "rgba(255,255,255,.03)",
              }}
              contentStyle={{
                background: "#090909",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: 16,
              }}
              formatter={(value) => [
                Number(value).toLocaleString(),
                "Customers",
              ]}
            />

            <Bar
              dataKey="customers"
              radius={[12,12,0,0]}
              maxBarSize={48}
              animationDuration={1200}
            >

              {risk.map((entry,index)=>(

                <Cell
                  key={entry.level}
                  fill={colors[index]}
                />

              ))}

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* Legend */}

      <div className="mt-5 grid grid-cols-4 gap-2">

        {risk.map((item,index)=>(

          <div
            key={item.level}
            className="
            rounded-xl
            border
            border-white/5
            bg-white/[0.02]
            p-2.5
            "
          >

            <div
              className="h-2 w-7 rounded-full"
              style={{
                background: colors[index],
              }}
            />

            <p className="mt-2 text-xs text-zinc-400">

              {item.level}

            </p>

            <h4 className="mt-1 text-base font-semibold text-white">

              {item.percentage.toFixed(1)}%

            </h4>

          </div>

        ))}

      </div>

    </div>

  );

}