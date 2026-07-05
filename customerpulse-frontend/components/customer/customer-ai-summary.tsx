"use client";

import {
  IconBrain,
  IconAlertTriangle,
  IconCheck,
} from "@tabler/icons-react";

interface Props {
  customer: any;
}

export default function CustomerAISummary({
  customer,
}: Props) {

  const churn =
    Number(customer["Churn Probability"]) * 100;

  const reasons: string[] = [];

  if (customer["Payment Delay"] > 10)
    reasons.push(
      "Payment delays are increasing."
    );

  if (customer["Usage Frequency"] < 5)
    reasons.push(
      "Customer engagement is below average."
    );

  if (customer["Support Calls"] > 5)
    reasons.push(
      "Customer frequently contacts support."
    );

  if (customer["Last Interaction"] > 20)
    reasons.push(
      "Long inactivity detected."
    );

  if (customer["Satisfaction Score"] < 5)
    reasons.push(
      "Customer satisfaction is low."
    );

  const actions: string[] = [];

  if (churn > 90)
    actions.push(
      "Immediate retention call."
    );

  if (customer["Payment Delay"] > 10)
    actions.push(
      "Offer payment incentive."
    );

  if (customer["Usage Frequency"] < 5)
    actions.push(
      "Launch engagement campaign."
    );

  if (customer["Support Calls"] > 5)
    actions.push(
      "Assign senior relationship manager."
    );

  return (

    <section
      className="
      mt-8
      rounded-[30px]
      border
      border-white/5
      bg-[#090909]
      p-8
      "
    >

      <div className="flex items-center gap-3">

        <IconBrain
          size={26}
          className="text-[#D9FF3F]"
        />

        <h2 className="text-2xl font-bold text-white">
          AI Customer Intelligence
        </h2>

      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-2">

        {/* LEFT */}

        <div>

          <h3 className="mb-5 text-lg font-semibold text-white">
            Why this customer is at risk
          </h3>

          <div className="space-y-4">

            {reasons.map((reason) => (

              <div
                key={reason}
                className="flex items-start gap-3"
              >

                <IconAlertTriangle
                  size={18}
                  className="mt-1 text-red-400"
                />

                <p className="text-zinc-300">
                  {reason}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <h3 className="mb-5 text-lg font-semibold text-white">
            Recommended Actions
          </h3>

          <div className="space-y-4">

            {actions.map((action) => (

              <div
                key={action}
                className="flex items-start gap-3"
              >

                <IconCheck
                  size={18}
                  className="mt-1 text-emerald-400"
                />

                <p className="text-zinc-300">
                  {action}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}