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
      rounded-[24px]
      border
      border-white/5
      bg-[linear-gradient(180deg,#090909,#050505)]
      p-6
      "
    >
      {/* Header */}

<div className="flex items-start justify-between">

  <div className="flex gap-5">

    <div
      className="
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-2xl
      border
      border-violet-500/20
      bg-violet-500/10
      "
    >

      <IconBrain
        size={28}
        className="text-violet-400"
      />

    </div>

    <div>

      <p
        className="
        text-xs
        uppercase
        tracking-[0.35em]
        text-zinc-500
        "
      >
        Decision Center
      </p>

      <h2
        className="
        mt-2
        text-3xl
        font-bold
        text-white
        "
      >
        AI Strategic Recommendations
      </h2>

      <p
        className="
        mt-2
        text-zinc-500
        "
      >
        Business decisions prioritized by Gemini Intelligence
      </p>

    </div>

  </div>

  <div
    className="
    rounded-full
    border
    border-violet-500/20
    bg-violet-500/10
    px-5
    py-2
    "
  >

    <span
      className="
      text-xs
      font-semibold
      uppercase
      tracking-[0.25em]
      text-violet-300
      "
    >

      AI Powered

    </span>

  </div>

</div>

<div className="mt-8 h-px bg-white/5" />
      {/* Empty State */}

      {(!data.actions || data.actions.length === 0) && (

        <div
          className="
          mt-8
          rounded-2xl
          border
          border-dashed
          border-white/10
          p-10
          text-center
          "
        >

          <p className="text-zinc-500">
            No AI recommendations available.
          </p>

        </div>

      )}

      {/* Decision Cards */}

      {data.actions.length > 0 && (

        <div className="mt-8 space-y-4">

          {data.actions.map((item, index) => (

            <div
              key={index}
              className="
              group
              rounded-2xl
              border
              border-white/5
              bg-white/[0.03]
              p-5
              transition-all
              duration-300
              "
            >

              <div className="flex items-start justify-between">

                <div>

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>

                </div>

                <IconArrowUpRight
                  className="
                  text-zinc-600
                  transition
                  duration-300
                  group-hover:text-[#D9FF3F]
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  "
                />

              </div>

              <div className="mt-5 flex flex-wrap gap-3">

                <span
                  className="
                  rounded-full
                  bg-violet-500/10
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-violet-300
                  "
                >
                  {item.category}
                </span>

                <span
                  className="
                  rounded-full
                  bg-red-500/10
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-red-400
                  "
                >
                  {item.priority}
                </span>

                <span
                  className="
                  rounded-full
                  bg-[#D9FF3F]/10
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-[#D9FF3F]
                  "
                >
                  {item.impact}
                </span>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}