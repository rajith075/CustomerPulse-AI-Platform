"use client";

import CountUp from "react-countup";

import {
  IconHeartHandshake,
  IconTrendingUp,
} from "@tabler/icons-react";

export default function CustomerHealth() {
  const score = 92;

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
                Excellent
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Stats */}

        <div className="mt-8 grid grid-cols-2 gap-4">

          <div
            className="
            rounded-xl
            border
            border-white/[0.04]
            bg-white/[0.03]
            p-4
            "
          >
            <div className="text-xs uppercase tracking-wider text-zinc-500">
              Retention
            </div>

            <div className="mt-2 text-2xl font-bold text-white">
              96%
            </div>

            <div className="mt-1 text-xs text-emerald-400">
              ▲ 4.2%
            </div>

          </div>

          <div
            className="
            rounded-xl
            border
            border-white/[0.04]
            bg-white/[0.03]
            p-4
            "
          >
            <div className="text-xs uppercase tracking-wider text-zinc-500">
              Satisfaction
            </div>

            <div className="mt-2 text-2xl font-bold text-white">
              4.8★
            </div>

            <div className="mt-1 text-xs text-[#7CFC00]">
              Excellent
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}