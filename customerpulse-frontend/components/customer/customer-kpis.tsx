"use client";

import {
  IconActivity,
  IconCurrencyDollar,
  IconHeartHandshake,
  IconAlertTriangle,
} from "@tabler/icons-react";

interface Props {
  customer: any;
}

export default function CustomerKPIs({
  customer,
}: Props) {

  const churn =
    Number(customer["Churn Probability"] ?? 0) * 100;

  const health =
    Math.max(0, 100 - churn).toFixed(1);

  const engagement =
    Number(customer["Usage Frequency"] ?? 0) >= 10
      ? "Excellent"
      : Number(customer["Usage Frequency"] ?? 0) >= 6
      ? "Good"
      : Number(customer["Usage Frequency"] ?? 0) >= 3
      ? "Moderate"
      : "Low";

  return (

    <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

      <Card
        title="Health Score"
        value={`${health}%`}
        icon={<IconHeartHandshake size={22} />}
        color="text-emerald-400"
      />

      <Card
        title="Churn Risk"
        value={`${churn.toFixed(2)}%`}
        icon={<IconAlertTriangle size={22} />}
        color="text-red-400"
      />

      <Card
        title="Lifetime Revenue"
        value={`$${customer["Total Spend"]}`}
        icon={<IconCurrencyDollar size={22} />}
        color="text-[#D9FF3F]"
      />

      <Card
        title="Engagement"
        value={engagement}
        icon={<IconActivity size={22} />}
        color="text-cyan-400"
      />

    </section>

  );

}

function Card({
  title,
  value,
  icon,
  color,
}: any) {

  return (

    <div
      className="
      rounded-[24px]
      border
      border-white/5
      bg-[#090909]
      p-6
      shadow-[0_20px_60px_rgba(0,0,0,.35)]
      transition
      hover:border-[#D9FF3F]/20
      "
    >

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-zinc-500">
            {title}
          </p>

          <h3 className="mt-3 text-3xl font-bold text-white">
            {value}
          </h3>

        </div>

        <div className={color}>
          {icon}
        </div>

      </div>

    </div>

  );

}