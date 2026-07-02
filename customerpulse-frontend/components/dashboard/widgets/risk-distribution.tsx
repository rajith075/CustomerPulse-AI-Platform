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

interface Segment {
  name: string;
  count: number;
  percentage: number;
  color: string;
}

interface RiskDistributionProps {
  segmentation: {
    total: number;
    segments: Segment[];
  };
}

export default function RiskDistribution({
  segmentation,
}: RiskDistributionProps) {

  const data = segmentation.segments.map((item) => ({
    ...item,
    value: item.percentage,
  }));

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

      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-violet-500/5 blur-[120px]" />

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

            <p className="text-sm text-zinc-500">
              AI Customer Classification
            </p>

          </div>

        </div>

        {/* Donut */}

        <div className="mt-8 flex items-center justify-between gap-6">

          <div className="relative h-52 w-52 flex-shrink-0">

            <ResponsiveContainer>

              <PieChart>

                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={56}
                  outerRadius={82}
                  paddingAngle={2}
                  stroke="transparent"
                >

                  {data.map((item) => (

                    <Cell
                      key={item.name}
                      fill={item.color}
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

                {segmentation.total.toLocaleString()}

              </div>

              <div className="mt-1 text-sm text-zinc-400">

                Customers

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

                  <div>

                    <div className="text-sm text-zinc-200">

                      {item.name}

                    </div>

                    <div className="text-xs text-zinc-500">

                      {item.count.toLocaleString()} customers

                    </div>

                  </div>

                </div>

                <span className="font-semibold text-white">

                  {item.percentage}%

                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}