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
  overall_status_description: string;

  priority: string;
  priority_description: string;

  executive_score: number;

  confidence_title: string;
  confidence_explanation: string;

  executive_summary: string;

  key_insights: string[];

  business_risks: string[];

  growth_opportunities: string[];

  recommended_actions: string[];

  next_week_focus: string[];

  financial_outlook: string;
}
interface AIInsightProps {
  executiveSummary: ExecutiveSummary;
}

export default function AIInsight({
  executiveSummary,
}: AIInsightProps) {
  console.log("Executive Summary:", executiveSummary);
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

  <div>

    <div className="flex items-center gap-3">

      <div className="h-12 w-[3px] rounded-full bg-[#D9FF3F]" />

      <div>

        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">

          Executive Summary

        </p>

        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-white">

          Strategic Intelligence Report

        </h2>

      </div>

    </div>

  </div>

  <div
    className="
      rounded-full
      border
      border-[#D9FF3F]/20
      bg-[#D9FF3F]/5
      px-5
      py-2
    "
  >

    <div className="flex items-center gap-2">

      <IconSparkles
        size={16}
        className="text-[#D9FF3F]"
      />

      <span
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-[#D9FF3F]
        "
      >

        AI Analysis

      </span>

    </div>

  </div>

</div>
        {/* ================= Executive Snapshot ================= */}

<div
  className="
  mt-8
  grid
  grid-cols-3
  gap-6
  "
>

  {/* Overall Status */}

  <div
    className="
    rounded-[22px]
    border
    border-white/8
    bg-[#0C0C0C]
    p-7
    transition
    duration-300
    hover:border-white/15
    "
  >

    <div className="flex items-center gap-4">

      <div
        className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        border
        border-white/10
        bg-white/[0.02]
        "
      >

        <IconCircleCheck
          size={26}
          className="text-white"
        />

      </div>

      <div>

        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">

          Overall Status

        </p>

       <h3 className="mt-2 text-2xl font-semibold text-white">
    {executiveSummary.overall_status}
</h3>
      </div>

    </div>

    <div className="my-6 h-px bg-white/6" />

    <p className="leading-8 text-zinc-400">

      {executiveSummary.overall_status_description}
    </p>

  </div>

  {/* Priority */}

  <div
    className="
    rounded-[22px]
    border
    border-white/8
    bg-[#0C0C0C]
    p-7
    transition
    duration-300
    hover:border-white/15
    "
  >

    <div className="flex items-center gap-4">

      <div
        className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        border
        border-white/10
        bg-white/[0.02]
        "
      >

        <IconTargetArrow
          size={26}
          className="text-white"
        />

      </div>

      <div>

        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">

          Priority

        </p>

        <h3 className="mt-2 text-2xl font-semibold text-white">

         {executiveSummary.priority}

        </h3>

      </div>

    </div>

    <div className="my-6 h-px bg-white/6" />

    <p className="leading-8 text-zinc-400">

    {executiveSummary.priority_description}

    </p>

  </div>

  {/* AI Confidence */}

  <div
    className="
    rounded-[22px]
    border
    border-white/8
    bg-[#0C0C0C]
    p-7
    transition
    duration-300
    hover:border-white/15
    "
  >

    <div className="flex items-center gap-4">

      <div
        className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        border
        border-white/10
        bg-white/[0.02]
        "
      >

        <IconBrain
          size={26}
          className="text-white"
        />

      </div>

      <div>

        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">

          AI Confidence

        </p>

        <h3 className="mt-2 text-2xl font-semibold text-white">

          {executiveSummary.confidence_title}

        </h3>

      </div>

    </div>

    <div className="my-6 h-px bg-white/6" />

  <div className="my-6 h-px bg-white/6" />

<div className="max-h-[120px] overflow-y-auto pr-2">

  <p className="leading-8 text-zinc-400">

    {executiveSummary.confidence_explanation}

  </p>

</div>

  </div>

</div>

    {/* ================= Executive Summary ================= */}

<div
  className="
  mt-8
  rounded-[28px]
  border
  border-white/5
  bg-[linear-gradient(180deg,#0D0D0D,#070707)]
  px-8
  py-7
  "
>

  <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
    Executive Summary
  </p>

 <div className="mt-5 max-h-[220px] overflow-y-auto pr-2">

    <p className="text-lg leading-9 text-zinc-300">

        {executiveSummary.executive_summary}

    </p>

</div>

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