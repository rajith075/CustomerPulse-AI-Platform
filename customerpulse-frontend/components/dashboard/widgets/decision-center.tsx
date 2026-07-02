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

      <div className="flex items-center gap-4">

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
            AI Decision Center
          </h2>

          <p className="text-zinc-500">
            Gemini Strategic Recommendations
          </p>

        </div>

      </div>

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
              hover:-translate-y-1
              hover:border-[#D9FF3F]/30
              hover:bg-white/[0.05]
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