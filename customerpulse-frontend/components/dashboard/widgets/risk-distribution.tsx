"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import {
  IconChartDonut,
} from "@tabler/icons-react";

const data = [
  {
    name: "High Value",
    value: 28,
    color: "#C6FF00",
  },
  {
    name: "At Risk",
    value: 24,
    color: "#19B5FE",
  },
  {
    name: "Loyal",
    value: 21,
    color: "#60A5FA",
  },
  {
    name: "New",
    value: 17,
    color: "#8B5CF6",
  },
  {
    name: "Inactive",
    value: 10,
    color: "#FB923C",
  },
];

export default function RiskDistribution() {
  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-[22px]
      border
      border-white/[0.04]
      bg-[linear-gradient(180deg,#090909,#050505)]
      p-5
      "
    >
      {/* Glow */}

      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-red-500/5 blur-[120px]" />

      <div className="relative">

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
            bg-violet-500/10
            "
          >
            <IconChartDonut
              size={20}
              className="text-violet-400"
            />
          </div>

          <div>

            <h2 className="text-[22px] font-semibold text-white">
              Customer Segmentation
            </h2>

          </div>

        </div>

        {/* Donut + Legend */}

        <div className="mt-8 flex items-center justify-between gap-6">

          {/* Donut */}

          <div className="relative h-52 w-52 flex-shrink-0">

            <ResponsiveContainer>

              <PieChart>

                <Pie
                  data={data}
                  innerRadius={56}
                  outerRadius={82}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="transparent"
                >
                  {data.map((entry) => (
                    <Cell
                      key={entry.name}
                      fill={entry.color}
                    />
                  ))}
                </Pie>

              </PieChart>

            </ResponsiveContainer>

            {/* Center */}

            <div
              className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
              "
            >
              <div className="text-4xl font-bold text-white">
                2,148
              </div>

              <div className="mt-1 text-sm text-zinc-400">
                Total
              </div>

            </div>

          </div>

          {/* Legend */}

          <div className="flex-1 space-y-4">

            {data.map((item) => (

              <div
                key={item.name}
                className="flex items-center justify-between"
              >

                <div className="flex items-center gap-3">

                  <div
                    className="h-3.5 w-3.5 rounded-full"
                    style={{
                      background: item.color,
                    }}
                  />

                  <span className="text-sm text-zinc-300">
                    {item.name}
                  </span>

                </div>

                <span className="font-medium text-white">
                  {item.value}%
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}