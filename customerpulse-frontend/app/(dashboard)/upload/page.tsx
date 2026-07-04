"use client";

import UploadCard from "@/components/upload/upload-card";

export default function UploadPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-8 py-8">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
          CustomerPulse AI
        </p>

        <h1 className="mt-3 text-5xl font-bold tracking-tight text-white">
          Upload Customer Dataset
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
          Upload your latest customer dataset and let CustomerPulse AI
          automatically validate, map columns, predict churn, generate
          executive insights and build an enterprise dashboard in seconds.
        </p>
      </div>

      <UploadCard />
    </div>
  );
}