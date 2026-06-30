"use client";

import { ReactNode } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

interface KPICardProps {
  title: string;
  value: string | number;
  change: string;
  description: string;
  icon: ReactNode;

  accent?:
    | "brand"
    | "health"
    | "risk"
    | "ai"
    | "analytics"
    | "forecast";
}

const accentStyles = {
  brand: {
    color: "#D9FF3F",
    glow: "rgba(217,255,63,.18)",
    badge: "bg-[#D9FF3F]/12 text-[#D9FF3F]",
  },

  health: {
    color: "#61FF6B",
    glow: "rgba(97,255,107,.18)",
    badge: "bg-[#61FF6B]/12 text-[#61FF6B]",
  },

  risk: {
    color: "#FF5470",
    glow: "rgba(255,84,112,.18)",
    badge: "bg-[#FF5470]/12 text-[#FF5470]",
  },

  ai: {
    color: "#A855F7",
    glow: "rgba(168,85,247,.18)",
    badge: "bg-[#A855F7]/12 text-[#A855F7]",
  },

  analytics: {
    color: "#39C7FF",
    glow: "rgba(57,199,255,.18)",
    badge: "bg-[#39C7FF]/12 text-[#39C7FF]",
  },

  forecast: {
    color: "#FF9D3F",
    glow: "rgba(255,157,63,.18)",
    badge: "bg-[#FF9D3F]/12 text-[#FF9D3F]",
  },
};

export default function KPICard({
  title,
  value,
  change,
  description,
  icon,
  accent = "brand",
}: KPICardProps) {
  const style = accentStyles[accent];

  const numeric =
    typeof value === "string"
      ? Number(value.replace(/[^\d.]/g, ""))
      : value;

  const prefix =
    typeof value === "string" && value.startsWith("$")
      ? "$"
      : "";

  const suffix =
    typeof value === "string" && value.endsWith("%")
      ? "%"
      : "";

  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.015,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      group
      relative
      h-[160px]
      overflow-hidden
      rounded-2xl
      border
      border-white/[0.04]
      bg-[linear-gradient(180deg,#0F1424_0%,#090D18_100%)]
      p-5
      transition-all
      duration-300
      hover:border-white/10
      "
    >
      {/* Glow */}

      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-[70px] opacity-30"
        style={{
          background: style.glow,
        }}
      />

      {/* Noise */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.04),transparent_55%)]" />

      <div className="relative flex h-full flex-col justify-between">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div>

            <p className="text-sm font-medium text-zinc-400">
              {title}
            </p>

            <h2 className="mt-4 text-[34px] font-bold leading-none tracking-tight text-white">

              {prefix}

              <CountUp
                end={numeric}
                duration={2}
                separator=","
              />

              {suffix}

            </h2>

          </div>

          <div
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-white/[0.04]
            backdrop-blur-xl
            transition-all
            duration-300
            group-hover:scale-110
            "
            style={{
              background: `${style.color}10`,
              color: style.color,
              boxShadow: `0 0 25px ${style.glow}`,
            }}
          >
            {icon}
          </div>

        </div>

        {/* Footer */}

        <div>

          <div className="flex items-center gap-2">

            <div
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${style.badge}`}
            >
              {change}
            </div>

            <p className="text-xs text-zinc-500">
              {description}
            </p>

          </div>

          {/* Mini Trend */}

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "82%",
              }}
              transition={{
                duration: 1.8,
              }}
              className="h-full rounded-full"
              style={{
                background: style.color,
                boxShadow: `0 0 18px ${style.glow}`,
              }}
            />

          </div>

        </div>

      </div>
    </motion.div>
  );
}