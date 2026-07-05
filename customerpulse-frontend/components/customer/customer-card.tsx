"use client";

import {
  IconChevronRight,
  IconUser,
  IconCurrencyDollar,
  IconAlertTriangle,
} from "@tabler/icons-react";

interface Props {
  customer: Record<string, any>;
  onClick: () => void;
}

export default function CustomerCard({
  customer,
  onClick,
}: Props) {
  const probability =
    Number(customer["Churn Probability"] ?? 0) * 100;

  const risk =
    probability >= 80
      ? "High"
      : probability >= 50
      ? "Medium"
      : "Low";

  const riskColor =
    risk === "High"
      ? "text-red-400"
      : risk === "Medium"
      ? "text-orange-400"
      : "text-emerald-400";

  return (
    <div
      onClick={onClick}
      className="
      group
      cursor-pointer
      rounded-3xl
      border
      border-white/5
      bg-[#090909]
      p-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#D9FF3F]/20
      hover:shadow-[0_20px_60px_rgba(217,255,63,.08)]
      "
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-[#D9FF3F]/10
            "
          >
            <IconUser
              className="text-[#D9FF3F]"
              size={28}
            />
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">
              {customer["Customer Name"]}
            </h3>

            <p className="text-sm text-zinc-500">
              {customer["Customer ID"]}
            </p>
          </div>
        </div>

        <IconChevronRight
          className="text-zinc-500 transition group-hover:text-[#D9FF3F]"
          size={20}
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-white/[0.03] p-4">
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Subscription
          </p>

          <p className="mt-2 font-semibold text-white">
            {customer["Subscription Type"]}
          </p>
        </div>

        <div className="rounded-2xl bg-white/[0.03] p-4">
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Spend
          </p>

          <p className="mt-2 flex items-center gap-1 font-semibold text-white">
            <IconCurrencyDollar size={16} />
            {customer["Total Spend"]}
          </p>
        </div>

        <div className="rounded-2xl bg-white/[0.03] p-4">
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Churn
          </p>

          <p className="mt-2 font-semibold text-white">
            {probability.toFixed(1)}%
          </p>
        </div>

        <div className="rounded-2xl bg-white/[0.03] p-4">
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Risk
          </p>

          <p
            className={`mt-2 flex items-center gap-2 font-semibold ${riskColor}`}
          >
            <IconAlertTriangle size={16} />
            {risk}
          </p>
        </div>

      </div>
    </div>
  );
}