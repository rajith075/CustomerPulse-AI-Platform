"use client";

import {
  IconBrain,
} from "@tabler/icons-react";

export default function AIInsight() {
  return (
    <div
      className="
      relative
      h-full
      overflow-hidden
      rounded-[22px]
      border
      border-white/[0.04]
      bg-[linear-gradient(180deg,#090909,#050505)]
      p-6
      "
    >
      {/* Glow */}

      <div className="absolute -top-24 right-0 h-56 w-56 rounded-full bg-violet-500/5 blur-[120px]" />

      <div className="relative flex h-full flex-col">

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
            <IconBrain
              size={20}
              className="text-violet-400"
            />
          </div>

          <div>

            <h2 className="text-[24px] font-semibold text-white">
              AI Executive Summary
            </h2>

          </div>

        </div>

        {/* Summary */}

        <div className="mt-8 flex-1">

          <p className="text-[15px] leading-8 text-zinc-400">

            The overall churn risk is high this month.

            <span className="text-white">
              {" "}128 customers
            </span>

            {" "}are highly likely to churn.

            Focus on

            <span className="text-white">
              {" "}payment issues
            </span>

            {" "}and

            <span className="text-white">
              {" "}support interactions
            </span>

            {" "}to reduce churn.

          </p>

        </div>

        {/* AI Tags */}

        <div className="mt-8 flex flex-wrap gap-3">

          <div
            className="
            rounded-full
            border
            border-red-500/20
            bg-red-500/10
            px-4
            py-2
            text-xs
            font-medium
            text-red-400
            "
          >
            High Risk ↑
          </div>

          <div
            className="
            rounded-full
            border
            border-violet-500/20
            bg-violet-500/10
            px-4
            py-2
            text-xs
            font-medium
            text-violet-300
            "
          >
            Payment Issues ↑
          </div>

          <div
            className="
            rounded-full
            border
            border-violet-500/20
            bg-violet-500/10
            px-4
            py-2
            text-xs
            font-medium
            text-violet-300
            "
          >
            Low Engagement ↑
          </div>

        </div>

      </div>

    </div>
  );
}