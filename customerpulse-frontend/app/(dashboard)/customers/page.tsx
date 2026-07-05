"use client";

import CustomerGrid from "@/components/customer/customer-grid";
import { useCustomers } from "@/hooks/useCustomers";

export default function CustomersPage() {

  const {
    customers,
    loading,
  } = useCustomers();

  if (loading) {
    return (
      <div className="p-10 text-white">
        Loading Customers...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1600px] p-8">

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Customer Explorer
        </h1>

        <p className="mt-2 text-zinc-500">
          Browse every customer from the uploaded dataset.
        </p>

      </div>

      <CustomerGrid
        customers={customers}
      />

    </div>
  );

}