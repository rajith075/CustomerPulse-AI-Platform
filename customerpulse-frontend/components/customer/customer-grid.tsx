"use client";

import { useRouter, useSearchParams } from "next/navigation";

import CustomerCard from "./customer-card";

interface Props {
  customers: Record<string, any>[];
}

export default function CustomerGrid({
  customers,
}: Props) {
  const router = useRouter();

  const params = useSearchParams();

  const project =
    params.get("project");

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {customers.map((customer) => (
        <CustomerCard
          key={customer["Customer ID"]}
          customer={customer}
          onClick={() =>
            router.push(
              `/customer/${customer["Customer ID"]}?project=${project}`
            )
          }
        />
      ))}
    </div>
  );
}