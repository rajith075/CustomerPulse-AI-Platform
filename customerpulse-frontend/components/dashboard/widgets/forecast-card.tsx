"use client";

import CountUp from "react-countup";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";

import { IconBolt } from "@tabler/icons-react";

const responseData = [
  { value: 2.1 },
  { value: 2.3 },
  { value: 2.5 },
  { value: 2.4 },
  { value: 2.4 },
  { value: 2.3 },
  { value: 2.2 },
  { value: 2.3 },
  { value: 2.6 },
  { value: 2.6 },
  { value: 2.8 },
  { value: 2.4 },
  { value: 2.0 },
  { value: 1.8 },
  { value: 2.1 },
  { value: 2.2 },
  { value: 2.45 },
];

export default function ForecastCard() {
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

      <div className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-yellow-400/5 blur-[120px]" />

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
            bg-yellow-400/10
            "
          >
            <IconBolt
              size={20}
              className="text-yellow-400"
            />
          </div>

          <h2 className="text-[22px] font-semibold text-white">
            Avg. Response Time
          </h2>

        </div>

        {/* Metric */}

        <div className="mt-8">

          <div className="flex items-end gap-2">

            <span className="text-[48px] font-bold leading-none text-white">
              <CountUp
                end={2.45}
                decimals={2}
                duration={2}
              />
            </span>

            <span className="mb-1 text-xl text-zinc-500">
              hrs
            </span>

          </div>

          <div className="mt-3 flex items-center gap-2">

            <span
              className="
              rounded-full
              bg-emerald-500/10
              px-3
              py-1
              text-xs
              font-semibold
              text-emerald-400
              "
            >
              ↓ 12.5%
            </span>

            <span className="text-sm text-zinc-500">
              vs last month
            </span>

          </div>

        </div>

        {/* Sparkline */}

        <div className="mt-8 h-24 w-full">

          <ResponsiveContainer width="100%" height="100%">

            <AreaChart data={responseData}>

              <defs>

                <linearGradient
                  id="responseFill"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#C6FF00"
                    stopOpacity={0.35}
                  />

                  <stop
                    offset="100%"
                    stopColor="#C6FF00"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

              <Tooltip
                formatter={(value) => [`${value} hrs`, "Response Time"]}
                contentStyle={{
                  background: "#111827",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: "12px",
                  color: "#fff",
                }}
              />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#C6FF00"
                strokeWidth={3}
                fill="url(#responseFill)"
                dot={false}
                activeDot={{
                  r: 5,
                  fill: "#C6FF00",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
                isAnimationActive
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}