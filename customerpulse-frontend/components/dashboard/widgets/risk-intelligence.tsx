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
      rounded-[24px]
      border
      border-white/5
      bg-[linear-gradient(180deg,#090909,#050505)]
      p-6
      "
    >

      {/* Header */}

      <div className="flex items-center gap-4">

        <div
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-red-500/10
          "
        >
          <IconShieldExclamation
            size={24}
            className="text-red-400"
          />
        </div>

        <div>

          <h2 className="text-3xl font-bold text-white">

            Risk Distribution

          </h2>

          <p className="text-zinc-500">

            AI Customer Risk Intelligence

          </p>

        </div>

      </div>

      {/* Top Summary */}

      <div className="mt-7 grid grid-cols-2 gap-4">

        <div
          className="
          rounded-2xl
          border
          border-white/5
          bg-white/[0.03]
          p-4
          "
        >

          <div className="flex items-center gap-3">

            <IconUsers
              size={22}
              className="text-red-400"
            />

            <span className="text-zinc-400">

              High + Critical

            </span>

          </div>

          <h3 className="mt-3 text-3xl font-bold text-white">

            {highCritical.toLocaleString()}

          </h3>

        </div>

        <div
          className="
          rounded-2xl
          border
          border-white/5
          bg-white/[0.03]
          p-4
          "
        >

          <div className="flex items-center gap-3">

            <IconAlertTriangle
              size={22}
              className="text-yellow-400"
            />

            <span className="text-zinc-400">

              Total Risk

            </span>

          </div>

          <h3 className="mt-3 text-3xl font-bold text-yellow-400">

            {riskPercent.toFixed(1)}%

          </h3>

        </div>

      </div>

      {/* Chart */}

      <div className="mt-8 h-[310px]">

        <ResponsiveContainer>

          <BarChart
            data={risk}
            barCategoryGap={35}
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
                fontSize: 14,
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
                borderRadius: 18,
                border: "1px solid rgba(255,255,255,.08)",
                boxShadow:
                  "0 20px 50px rgba(0,0,0,.45)",
              }}
              formatter={(value) => [
                Number(value).toLocaleString(),
                "Customers",
              ]}
            />

            <Bar
              dataKey="customers"
              radius={[14,14,0,0]}
              maxBarSize={58}
              minPointSize={8}
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

      {/* Bottom Legend */}

      <div className="mt-6 grid grid-cols-4 gap-3">

        {risk.map((item,index)=>(

          <div
            key={item.level}
            className="
            rounded-xl
            border
            border-white/5
            bg-white/[0.02]
            p-3
            "
          >

            <div
              className="h-2 w-8 rounded-full"
              style={{
                background: colors[index],
              }}
            />

            <p className="mt-3 text-sm text-zinc-400">

              {item.level}

            </p>

            <h4 className="mt-1 text-lg font-semibold text-white">

              {item.percentage.toFixed(1)}%

            </h4>

          </div>

        ))}

      </div>

    </div>

  );

}