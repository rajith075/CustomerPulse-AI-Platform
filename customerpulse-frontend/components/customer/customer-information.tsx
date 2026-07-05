"use client";

import {
  IconUser,
  IconMapPin,
  IconCreditCard,
  IconClock,
  IconPhone,
  IconCalendar,
  IconActivity,
  IconHourglass,
} from "@tabler/icons-react";

interface Props {
  customer: any;
}

export default function CustomerInformation({
  customer,
}: Props) {

  const items = [

    {
      icon: <IconUser size={18} />,
      label: "Age",
      value: customer["Age"],
    },

    {
      icon: <IconUser size={18} />,
      label: "Gender",
      value: customer["Gender"],
    },

    {
      icon: <IconMapPin size={18} />,
      label: "City",
      value: customer["Customer City"],
    },

    {
      icon: <IconCreditCard size={18} />,
      label: "Subscription",
      value: customer["Subscription Type"],
    },

    {
      icon: <IconCalendar size={18} />,
      label: "Contract",
      value: customer["Contract Length"],
    },

    {
      icon: <IconClock size={18} />,
      label: "Last Interaction",
      value: `${customer["Last Interaction"]} Days`,
    },

    {
      icon: <IconActivity size={18} />,
      label: "Usage Frequency",
      value: customer["Usage Frequency"],
    },

    {
      icon: <IconPhone size={18} />,
      label: "Support Calls",
      value: customer["Support Calls"],
    },

    {
      icon: <IconHourglass size={18} />,
      label: "Payment Delay",
      value: `${customer["Payment Delay"]} Days`,
    },

  ];

  return (

    <section
      className="
      mt-8
      rounded-[28px]
      border
      border-white/5
      bg-[#090909]
      p-8
      "
    >

      <h2 className="text-2xl font-bold text-white">
        Customer Information
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {items.map((item) => (

          <div
            key={item.label}
            className="
            rounded-2xl
            border
            border-white/5
            bg-white/[0.03]
            p-5
            transition
            hover:border-[#D9FF3F]/20
            "
          >

            <div className="flex items-center gap-3">

              <div className="text-[#D9FF3F]">
                {item.icon}
              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  {item.label}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-white">
                  {item.value}
                </h3>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}