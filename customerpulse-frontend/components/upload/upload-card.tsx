"use client";

import UploadDropzone from "./upload-dropzone";

import {
  IconBrain,
  IconDatabase,
  IconSparkles,
  IconShieldCheck,
  IconChartBar,
  IconFileAnalytics,
} from "@tabler/icons-react";

const FEATURES = [
  {
    title: "AI Schema Detection",
    icon: IconBrain,
  },
  {
    title: "Enterprise Validation",
    icon: IconShieldCheck,
  },
  {
    title: "CatBoost Prediction",
    icon: IconChartBar,
  },
  {
    title: "Executive Intelligence",
    icon: IconSparkles,
  },
  {
    title: "Business Dashboard",
    icon: IconFileAnalytics,
  },
  {
    title: "Secure Workspace",
    icon: IconDatabase,
  },
];

export default function UploadCard() {
  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-[30px]
      border
      border-white/[0.05]
      bg-[linear-gradient(180deg,#090909,#050505)]
      shadow-[0_40px_120px_rgba(0,0,0,.45)]
      "
    >
      {/* Glow */}

      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#D9FF3F]/5 blur-[150px]" />

      <div className="relative p-10">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Enterprise Upload
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white">
              Customer Dataset
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
              Upload your latest customer dataset and let CustomerPulse AI
              automatically validate your data, detect schema,
              predict churn, generate executive insights and build
              an enterprise dashboard.
            </p>

          </div>

          <div
            className="
            rounded-full
            border
            border-[#D9FF3F]/20
            bg-[#D9FF3F]/10
            px-5
            py-2
            "
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9FF3F]">
              AI Powered
            </span>
          </div>

        </div>

        {/* Upload */}

        <div className="mt-12">
          <UploadDropzone />
        </div>

        {/* Features */}

        <div className="mt-12 grid grid-cols-3 gap-5">

          {FEATURES.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="
                rounded-2xl
                border
                border-white/[0.05]
                bg-white/[0.02]
                p-5
                transition-all
                duration-300
                hover:border-[#D9FF3F]/20
                hover:bg-[#D9FF3F]/5
                "
              >

                <div
                  className="
                  mb-4
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#D9FF3F]/10
                  "
                >
                  <Icon
                    size={22}
                    className="text-[#D9FF3F]"
                  />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>

              </div>

            );

          })}

        </div>

      </div>

    </div>
  );
}