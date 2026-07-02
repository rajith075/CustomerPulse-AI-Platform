"use client";

import {
  IconBrain,
  IconTrendingUp,
  IconAlertTriangle,
  IconCircleCheck,
  IconTargetArrow,
  IconSparkles,
} from "@tabler/icons-react";

interface ExecutiveSummary {
  headline: string;

  overall_status: string;

  priority: string;

  executive_score: number;

  executive_summary: string;

  key_insights: string[];

  business_risks: string[];

  growth_opportunities: string[];

  recommended_actions: string[];

  next_week_focus: string[];

  financial_outlook: string;

  confidence: string;
}

interface AIInsightProps {
  executiveSummary: ExecutiveSummary;
}

export default function AIInsight({
  executiveSummary,
}: AIInsightProps) {
  return (
    <div
      className="
      relative
      h-full
      overflow-hidden
      rounded-[22px]
      border
      border-white/[0.05]
      bg-[linear-gradient(180deg,#090909,#050505)]
      p-6
      "
    >
      {/* Glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative flex h-full flex-col">

        {/* ================= Header ================= */}

        <div className="flex items-start justify-between">

          <div className="flex gap-4">

            <div
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-violet-500/10
              "
            >
              <IconBrain
                size={24}
                className="text-violet-400"
              />
            </div>

            <div>

              <h2 className="text-2xl font-bold text-white">
                {executiveSummary.headline}
              </h2>

              <p className="mt-1 text-zinc-500">
                AI Executive Intelligence
              </p>

            </div>

          </div>

          <div
            className="
            rounded-xl
            border
            border-violet-500/20
            bg-violet-500/10
            px-4
            py-2
            text-center
            "
          >

            <p className="text-xs text-zinc-400">
              AI Score
            </p>

            <p className="text-2xl font-bold text-violet-300">
              {executiveSummary.executive_score}
            </p>

          </div>

        </div>

        {/* ================= Status ================= */}

        <div className="mt-6 flex gap-3">

          <div
            className="
            rounded-full
            bg-green-500/10
            border
            border-green-500/20
            px-4
            py-2
            text-sm
            font-medium
            text-green-400
            "
          >
            {executiveSummary.overall_status}
          </div>

          <div
            className="
            rounded-full
            bg-yellow-500/10
            border
            border-yellow-500/20
            px-4
            py-2
            text-sm
            font-medium
            text-yellow-400
            "
          >
            Priority : {executiveSummary.priority}
          </div>

          <div
            className="
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-500/20
            px-4
            py-2
            text-sm
            font-medium
            text-cyan-400
            "
          >
            Confidence : {executiveSummary.confidence}
          </div>

        </div>

        {/* ================= Summary ================= */}

        <div
          className="
          mt-6
          rounded-2xl
          border
          border-white/5
          bg-white/[0.02]
          p-5
          "
        >

          <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">

            <IconSparkles
              size={18}
              className="text-violet-400"
            />

            Executive Summary

          </h3>

          <p className="leading-7 text-zinc-400">
            {executiveSummary.executive_summary}
          </p>

        </div>

        {/* ================= Two Columns ================= */}

        <div className="mt-6 grid grid-cols-2 gap-5">

          {/* Insights */}

          <div>

            <h3 className="mb-3 flex items-center gap-2 font-semibold text-white">

              <IconTrendingUp
                size={18}
                className="text-green-400"
              />

              Key Insights

            </h3>

            <div className="space-y-3">

              {executiveSummary.key_insights.map(
                (item, index) => (

                  <div
                    key={index}
                    className="
                    rounded-xl
                    bg-green-500/5
                    border
                    border-green-500/10
                    p-3
                    text-sm
                    text-zinc-300
                    "
                  >
                    {item}
                  </div>

                )
              )}

            </div>

          </div>

          {/* Risks */}

          <div>

            <h3 className="mb-3 flex items-center gap-2 font-semibold text-white">

              <IconAlertTriangle
                size={18}
                className="text-red-400"
              />

              Business Risks

            </h3>

            <div className="space-y-3">

              {executiveSummary.business_risks.map(
                (item, index) => (

                  <div
                    key={index}
                    className="
                    rounded-xl
                    bg-red-500/5
                    border
                    border-red-500/10
                    p-3
                    text-sm
                    text-zinc-300
                    "
                  >
                    {item}
                  </div>

                )
              )}

            </div>

          </div>

        </div>

        {/* ================= Actions ================= */}

        <div className="mt-6">

          <h3 className="mb-3 flex items-center gap-2 font-semibold text-white">

            <IconTargetArrow
              size={18}
              className="text-[#D9FF3F]"
            />

            Recommended Actions

          </h3>

          <div className="space-y-3">

            {executiveSummary.recommended_actions.map(
              (item, index) => (

                <div
                  key={index}
                  className="
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-[#D9FF3F]/10
                  bg-[#D9FF3F]/5
                  p-3
                  "
                >

                  <IconCircleCheck
                    size={18}
                    className="mt-0.5 text-[#D9FF3F]"
                  />

                  <p className="text-sm text-zinc-300">
                    {item}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

        {/* ================= Footer ================= */}

        <div
          className="
          mt-6
          rounded-xl
          border
          border-white/5
          bg-white/[0.02]
          p-4
          "
        >

          <div className="text-xs uppercase tracking-widest text-zinc-500">
            Financial Outlook
          </div>

          <div className="mt-2 text-sm leading-7 text-zinc-300">
            {executiveSummary.financial_outlook}
          </div>

        </div>

      </div>

    </div>
  );
}