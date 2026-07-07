"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { IconArrowLeft } from "@tabler/icons-react";

import CustomerGrid from "@/components/customer/customer-grid";
import { useCustomers } from "@/hooks/useCustomers";

export default function CustomersPage() {

  const {
    customers,
    loading,
  } = useCustomers();

  const searchParams = useSearchParams();

  const projectId = searchParams.get("project");

  if (loading) {
    return (
      <div className="p-10 text-white">
        Loading Customers...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1600px] p-8">

      {/* Back Button */}

      <Link
        href={
          projectId
            ? `/dashboard?project=${projectId}`
            : "/dashboard"
        }
        className="
          mb-6
          inline-flex
          items-center
          gap-2
          rounded-xl
          border
          border-white/5
          bg-white/[0.03]
          px-4
          py-2
          text-sm
          text-zinc-400
          transition-all
          duration-300
          hover:border-[#D9FF3F]/20
          hover:bg-[#111111]
          hover:text-[#D9FF3F]
        "
      >
        <IconArrowLeft size={18} />
        Back to Dashboard
      </Link>

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Customer Explorer
        </h1>

        <p className="mt-2 text-zinc-500">
          Browse every customer from the uploaded dataset.
        </p>

      </div>

      {/* Customer Grid */}

      <CustomerGrid
        customers={customers}
      />

    </div>
  );
}