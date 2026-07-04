"use client";

import {
  IconBrain,
  IconArrowUpRight,
} from "@tabler/icons-react";

import { DecisionCenter as DecisionCenterData } from "@/types/dashboard";

interface DecisionCenterProps {
  data: DecisionCenterData;
}

export default function DecisionCenter({
  data,
}: DecisionCenterProps) {
  return (
  <div
    className="
    relative
    overflow-hidden
    rounded-[34px]
    border
    border-white/[0.06]
    bg-[#070707]
    shadow-[0_40px_100px_rgba(0,0,0,.55)]
    "
  >
    {/* Background */}

    <div className="absolute inset-0">

      <div className="absolute -right-44 -top-44 h-[500px] w-[500px] rounded-full bg-violet-500/5 blur-[180px]" />

      <div className="absolute -left-44 bottom-0 h-[420px] w-[420px] rounded-full bg-[#D9FF3F]/5 blur-[180px]" />

    </div>

    <div className="relative p-8">

      {/* ================= HEADER ================= */}

      <div className="flex items-start justify-between">

        <div className="flex gap-5">

          <div className="h-16 w-[4px] rounded-full bg-[#D9FF3F]" />

          <div>

            <p
              className="
              text-xs
              uppercase
              tracking-[0.38em]
              text-zinc-500
              "
            >
              Decision Center
            </p>

            <h1
              className="
              mt-2
              text-5xl
              font-bold
              tracking-tight
              text-white
              "
            >
              Strategic AI Decisions
            </h1>

            <p
              className="
              mt-3
              text-lg
              text-zinc-500
              "
            >
              Executive recommendations generated using
              CustomerPulse Intelligence Engine
            </p>

          </div>

        </div>

        <div className="text-right">

          <div
            className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-[#D9FF3F]/20
            bg-[#D9FF3F]/5
            px-6
            py-3
            "
          >

            <IconBrain
              size={18}
              className="text-[#D9FF3F]"
            />

            <span
              className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.30em]
              text-[#D9FF3F]
              "
            >
              AI Powered
            </span>

          </div>

          <p className="mt-5 text-zinc-500">

            {data.actions.length} Recommendations

          </p>

        </div>

      </div>

      <div className="my-8 h-px bg-white/5" />

      {/* ================= KPI STRIP ================= */}

      <div className="grid grid-cols-4 gap-5">

        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">

          <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
            Total
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {data.actions.length}
          </h2>

        </div>

        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">

          <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
            Critical
          </p>

          <h2 className="mt-3 text-4xl font-bold text-red-400">

            {
              data.actions.filter(
                a =>
                  a.priority.toLowerCase() ===
                  "critical"
              ).length
            }

          </h2>

        </div>

        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">

          <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
            High
          </p>

          <h2 className="mt-3 text-4xl font-bold text-orange-400">

            {
              data.actions.filter(
                a =>
                  a.priority.toLowerCase() ===
                  "high"
              ).length
            }

          </h2>

        </div>

        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">

          <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
            Ready
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#D9FF3F]">

            100%

          </h2>

        </div>

      </div>

      {/* ================= FEATURED CARD ================= */}

      {data.actions.length > 0 && (

        <div
          className="
          mt-8
          rounded-[30px]
          border
          border-white/5
          bg-[linear-gradient(180deg,#101010,#090909)]
          p-8
          "
        >

          <div className="flex items-start justify-between">

            <div>

              <div
                className="
                inline-flex
                rounded-full
                bg-[#D9FF3F]/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#D9FF3F]
                "
              >

                Top Recommendation

              </div>

              <h2
                className="
                mt-5
                text-4xl
                font-bold
                text-white
                "
              >

                {data.actions[0].title}

              </h2>

            </div>

            <IconArrowUpRight
              size={34}
              className="text-zinc-500"
            />

          </div>

          <p
            className="
            mt-6
            max-w-5xl
            text-lg
            leading-9
            text-zinc-400
            "
          >

            {data.actions[0].description}

          </p>

          <div className="mt-8 flex gap-4">

            <div className="rounded-full border border-white/5 px-5 py-2 text-sm text-zinc-300">

              {data.actions[0].category}

            </div>

            <div className="rounded-full border border-white/5 px-5 py-2 text-sm text-zinc-300">

              {data.actions[0].priority}

            </div>

            <div className="rounded-full border border-white/5 px-5 py-2 text-sm text-zinc-300">

              {data.actions[0].impact}

            </div>

          </div>

        </div>

      )}

      {/* ================= Remaining Recommendations ================= */}

{data.actions.length > 1 && (

  <div className="mt-10">

    <div className="mb-6 flex items-center justify-between">

      <div>

        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
          Priority Queue
        </p>

        <h3 className="mt-2 text-3xl font-bold text-white">
          Remaining Recommendations
        </h3>

      </div>

      <span className="text-sm text-zinc-500">
        {data.actions.length - 1} Pending Decisions
      </span>

    </div>

    <div className="space-y-5">

      {data.actions.slice(1).map((item, index) => (

        <div
          key={index}
          className="
          group
          overflow-hidden
          rounded-[26px]
          border
          border-white/5
          bg-[#0B0B0B]
          transition-all
          duration-300
          hover:border-white/10
          "
        >

          <div className="flex">

            {/* Left Indicator */}

            <div
              className={`
                w-1

                ${
                  item.priority.toLowerCase() === "critical"
                    ? "bg-red-500"
                    : item.priority.toLowerCase() === "high"
                    ? "bg-orange-400"
                    : "bg-[#D9FF3F]"
                }
              `}
            />

            <div className="flex-1 p-7">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">

                    Recommendation #{index + 2}

                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white">

                    {item.title}

                  </h3>

                </div>

                <IconArrowUpRight
                  className="
                  text-zinc-600
                  transition
                  group-hover:text-white
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  "
                />

              </div>

              <p
                className="
                mt-5
                max-w-5xl
                leading-8
                text-zinc-400
                "
              >

                {item.description}

              </p>

              <div className="mt-7 flex flex-wrap gap-3">

                <div className="rounded-full border border-white/8 px-4 py-2 text-sm text-zinc-300">

                  {item.category}

                </div>

                <div className="rounded-full border border-white/8 px-4 py-2 text-sm text-zinc-300">

                  {item.priority}

                </div>

                <div className="rounded-full border border-white/8 px-4 py-2 text-sm text-zinc-300">

                  {item.impact}

                </div>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

)}

{/* ================= Empty State ================= */}

{(!data.actions || data.actions.length === 0) && (

  <div
    className="
    mt-12
    rounded-[28px]
    border
    border-dashed
    border-white/10
    bg-[#0B0B0B]
    px-10
    py-20
    text-center
    "
  >

    <IconBrain
      size={52}
      className="mx-auto text-zinc-700"
    />

    <h3 className="mt-8 text-3xl font-bold text-white">

      No AI Recommendations

    </h3>

    <p className="mx-auto mt-4 max-w-xl leading-8 text-zinc-500">

      Once CustomerPulse AI completes its strategic
      business analysis, recommendations will appear
      here.

    </p>

  </div>

)}

    </div>

  </div>

);}