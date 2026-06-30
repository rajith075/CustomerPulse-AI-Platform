"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface RevenuePoint {
  month: string;
  revenue: number;
}

interface RevenueChartProps {
  data: RevenuePoint[];
}

export default function RevenueChart({
  data,
}: RevenueChartProps) {

  const maxRevenue =
    data.length > 0
      ? Math.max(...data.map((item) => item.revenue))
      : 0;

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
      <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#D9FF3F]/5 blur-[120px]" />

      {/* Header */}

      <div className="relative mb-5 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-[#D9FF3F]/10
            "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D9FF3F"
              strokeWidth="2"
            >
              <polyline points="3 17 9 11 13 15 21 7" />
              <polyline points="14 7 21 7 21 14" />
            </svg>
          </div>

          <div>

            <h2 className="text-[22px] font-semibold text-white">
              Revenue Trend
            </h2>

            <p className="text-sm text-zinc-500">
              Monthly Revenue Intelligence
            </p>

          </div>

        </div>

        <button
          className="
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-4
          py-2
          text-sm
          text-zinc-300
          transition
          hover:border-[#D9FF3F]/30
          hover:text-[#D9FF3F]
          "
        >
          This Month
        </button>

      </div>

      {/* Chart */}

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 15,
              left: 15,
              bottom: 0,
            }}
          >

            <defs>

              <linearGradient
                id="revenueFill"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#D9FF3F"
                  stopOpacity={0.45}
                />

                <stop
                  offset="100%"
                  stopColor="#D9FF3F"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              vertical={false}
              stroke="rgba(255,255,255,.05)"
              strokeDasharray="3 5"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#8b8b8b",
                fontSize: 13,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              width={70}
              domain={[0, maxRevenue * 1.1]}
              tickFormatter={(value) =>
                `$${(value / 1000000).toFixed(0)}M`
              }
              tick={{
                fill: "#8b8b8b",
                fontSize: 12,
              }}
            />

            <Tooltip
              cursor={{
                stroke: "#D9FF3F",
                strokeWidth: 1,
              }}
              contentStyle={{
                background: "#0B1020",
                borderRadius: 16,
                border: "1px solid rgba(217,255,63,.25)",
                color: "#fff",
              }}
              formatter={(value) => [
                `$${Number(value).toLocaleString()}`,
                "Revenue",
              ]}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#D9FF3F"
              strokeWidth={4}
              fill="url(#revenueFill)"
              activeDot={{
                r: 7,
                fill: "#D9FF3F",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}