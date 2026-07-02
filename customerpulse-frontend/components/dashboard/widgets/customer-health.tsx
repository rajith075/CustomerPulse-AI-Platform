"use client";

import CountUp from "react-countup";

import {
  IconHeartHandshake,
  IconTrendingUp,
} from "@tabler/icons-react";

interface HealthProps {
  health: {
    overall_score: number;
    healthy: number;
    moderate: number;
    at_risk: number;
    critical: number;
    healthy_percentage: number;
    moderate_percentage: number;
    at_risk_percentage: number;
    critical_percentage: number;
  };
}

export default function CustomerHealth({
  health,
}: HealthProps) {
  const score = health.overall_score;

  const status =
    score >= 85
      ? "Excellent"
      : score >= 70
      ? "Good"
      : score >= 50
      ? "Average"
      : "Critical";

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
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#7CFC00]/5 blur-[120px]" />

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
            bg-[#7CFC00]/10
            "
          >
            <IconHeartHandshake
              size={20}
              className="text-[#7CFC00]"
            />
          </div>

          <div>
            <h2 className="text-[22px] font-semibold text-white">
              Customer Health
            </h2>

            <p className="text-sm text-zinc-500">
              Overall engagement score
            </p>
          </div>
        </div>

        {/* Circle */}

        <div className="mt-8 flex justify-center">
          <div className="relative h-44 w-44">
            {/* Outer */}

            <div
              className="
              absolute
              inset-0
              rounded-full
              border-[10px]
              border-[#7CFC00]
              shadow-[0_0_40px_rgba(124,252,0,.12)]
              "
            />

            {/* Inner */}

            <div
              className="
              absolute
              inset-3
              rounded-full
              border
              border-white/10
              bg-[#0E1322]
              "
            />

            {/* Content */}

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
              <div className="text-5xl font-bold text-white">
                <CountUp
                  end={score}
                  decimals={1}
                  duration={2}
                />
              </div>

              <div className="mt-1 text-sm text-zinc-500">
                Health Score
              </div>

              <div
                className="
                mt-4
                flex
                items-center
                gap-1
                rounded-full
                bg-[#7CFC00]/10
                px-3
                py-1
                text-xs
                font-semibold
                text-[#7CFC00]
                "
              >
                <IconTrendingUp size={14} />
                {status}
              </div>
            </div>
          </div>
        </div>

        {/* Health Breakdown */}

        <div className="mt-8 space-y-4">
          <HealthRow
            color="#22C55E"
            title="Healthy"
            customers={health.healthy}
            percentage={health.healthy_percentage}
          />

          <HealthRow
            color="#FACC15"
            title="Moderate"
            customers={health.moderate}
            percentage={health.moderate_percentage}
          />

          <HealthRow
            color="#FB923C"
            title="At Risk"
            customers={health.at_risk}
            percentage={health.at_risk_percentage}
          />

          <HealthRow
            color="#EF4444"
            title="Critical"
            customers={health.critical}
            percentage={health.critical_percentage}
          />
        </div>
      </div>
    </div>
  );
}

function HealthRow({
  title,
  customers,
  percentage,
  color,
}: {
  title: string;
  customers: number;
  percentage: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span
          className="font-medium"
          style={{ color }}
        >
          {title}
        </span>

        <span className="text-zinc-400">
          {customers.toLocaleString()} • {percentage}%
        </span>
      </div>

      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}