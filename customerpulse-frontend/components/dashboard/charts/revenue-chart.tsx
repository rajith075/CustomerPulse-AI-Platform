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

      {/* Background Glow */}

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D9FF3F]/5 blur-[140px]" />

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
          transition-all
          hover:border-[#D9FF3F]/30
          hover:text-[#D9FF3F]
          "
        >
          THIS QUARTER
        </button>

      </div>

      {/* Chart */}

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart
            data={data}
            margin={{
              top: 15,
              right: 10,
              left: 10,
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
                  stopOpacity={0.40}
                />

                <stop
                  offset="70%"
                  stopColor="#D9FF3F"
                  stopOpacity={0.08}
                />

                <stop
                  offset="100%"
                  stopColor="#D9FF3F"
                  stopOpacity={0}
                />

              </linearGradient>

              <filter
                id="lineGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >

                <feGaussianBlur
                  stdDeviation="5"
                  result="blur"
                />

                <feMerge>

                  <feMergeNode in="blur" />

                  <feMergeNode in="SourceGraphic" />

                </feMerge>

              </filter>

            </defs>

            <CartesianGrid
              vertical={false}
              stroke="rgba(255,255,255,.04)"
              strokeDasharray="2 8"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#8A8A8A",
                fontSize: 13,
              }}
            />

            <YAxis
              hide
              domain={[0, maxRevenue * 1.15]}
            />

            <Tooltip
              cursor={{
                stroke: "#D9FF3F",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
              contentStyle={{
                background: "#0B1020",
                border: "1px solid rgba(217,255,63,.25)",
                borderRadius: 16,
                color: "#fff",
                boxShadow:
                  "0 20px 45px rgba(0,0,0,.45)",
              }}
              formatter={(value) => [
                `$${Number(value).toLocaleString()}`,
                "Revenue",
              ]}
            />

            <Area
              type="natural"
              dataKey="revenue"
              stroke="#D9FF3F"
              strokeWidth={4}
              fill="url(#revenueFill)"
              filter="url(#lineGlow)"
              isAnimationActive
              animationDuration={1200}

              dot={(props) => {

                const { cx, cy } = props;

                return (

                  <g>

                    <circle
                      cx={cx}
                      cy={cy}
                      r={10}
                      fill="#D9FF3F"
                      opacity={0.18}
                    />

                    <circle
                      cx={cx}
                      cy={cy}
                      r={7}
                      fill="#ffffff"
                    />

                    <circle
                      cx={cx}
                      cy={cy}
                      r={4}
                      fill="#D9FF3F"
                    />

                  </g>

                );

              }}

              activeDot={(props) => {

                const { cx, cy } = props;

                return (

                  <g>

                    <circle
                      cx={cx}
                      cy={cy}
                      r={13}
                      fill="#D9FF3F"
                      opacity={0.25}
                    />

                    <circle
                      cx={cx}
                      cy={cy}
                      r={9}
                      fill="#ffffff"
                    />

                    <circle
                      cx={cx}
                      cy={cy}
                      r={5}
                      fill="#D9FF3F"
                    />

                  </g>

                );

              }}

            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}