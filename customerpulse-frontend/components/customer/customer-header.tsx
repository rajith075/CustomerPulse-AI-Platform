"use client";

import {
  IconArrowLeft,
  IconMapPin,
  IconShieldCheck,
  IconStarFilled,
  IconUser,
} from "@tabler/icons-react";

import Link from "next/link";

interface Props {
  customer: any;
}

export default function CustomerHeader({
  customer,
}: Props) {
  const churn =
    Number(customer["Churn Probability"] ?? 0) * 100;

  const riskColor =
    churn > 80
      ? "bg-red-500/15 text-red-400 border-red-500/20"
      : churn > 50
      ? "bg-yellow-500/15 text-yellow-400 border-yellow-500/20"
      : "bg-emerald-500/15 text-emerald-400 border-emerald-500/20";

  return (
    <div>

      {/* Back */}

      <Link
        href={`/customers?project=${new URLSearchParams(
          window.location.search
        ).get("project")}`}
        className="mb-6 inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
      >
        <IconArrowLeft size={18} />
        Back to Customers
      </Link>

      <div
        className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/5
        bg-gradient-to-br
        from-[#0A0A0A]
        via-[#101010]
        to-[#070707]
        p-8
        shadow-[0_25px_80px_rgba(0,0,0,.65)]
        "
      >

        {/* Ambient Glow */}

        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#D9FF3F]/10 blur-[120px]" />

        <div className="relative flex items-center justify-between">

          {/* LEFT */}

          <div className="flex items-center gap-6">

            <div
              className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              bg-[#D9FF3F]/10
              "
            >
              <IconUser
                size={46}
                className="text-[#D9FF3F]"
              />
            </div>

            <div>

              <h1 className="text-5xl font-bold text-white">
                {customer["Customer Name"]}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-3">

                <span className="rounded-xl bg-white/5 px-4 py-2 text-sm text-zinc-300">
                  {customer["Customer ID"]}
                </span>

                <span
                  className={`rounded-xl border px-4 py-2 text-sm font-semibold ${riskColor}`}
                >
                  {churn.toFixed(1)}% Churn Risk
                </span>

                <span className="rounded-xl bg-[#D9FF3F]/10 px-4 py-2 text-sm font-medium text-[#D9FF3F]">
                  {customer["Subscription Type"]}
                </span>

              </div>

              <div className="mt-5 flex items-center gap-8 text-zinc-400">

                <div className="flex items-center gap-2">
                  <IconMapPin size={18} />
                  {customer["Customer City"]}
                </div>

                <div className="flex items-center gap-2">
                  <IconShieldCheck size={18} />
                  {customer["Contract Length"]}
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-4">

            <StatCard
              title="Tenure"
              value={`${customer["Tenure"]} Months`}
            />

            <StatCard
              title="Spend"
              value={`$${customer["Total Spend"]}`}
            />

            <StatCard
              title="Support"
              value={customer["Support Calls"]}
            />

            <StatCard
              title="Satisfaction"
              value={`${customer["Satisfaction Score"]}/10`}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: any;
}) {
  return (
    <div
      className="
      rounded-2xl
      border
      border-white/5
      bg-white/[0.03]
      p-5
      backdrop-blur-xl
      "
    >
      <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
        {title}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-white">
        {value}
      </h3>
    </div>
  );
}