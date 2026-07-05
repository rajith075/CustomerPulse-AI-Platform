"use client";

import CustomerHeader from "@/components/customer/customer-header";
import CustomerKPIs from "@/components/customer/customer-kpis";
import CustomerInformation from "@/components/customer/customer-information";
import CustomerAISummary from "@/components/customer/customer-ai-summary";

import { useCustomer } from "@/hooks/useCustomer";

export default function CustomerPage() {

  const {
    customer,
    loading,
  } = useCustomer();

  if (loading) {
    return (
      <div className="p-10 text-white">
        Loading Customer...
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="p-10 text-red-500">
        Customer not found.
      </div>
    );
  }

  return (

    <div className="mx-auto max-w-[1700px] p-8">

      <CustomerHeader
        customer={customer}
      />
     

<CustomerKPIs
  customer={customer}
/>

<CustomerInformation customer={customer} />

<CustomerAISummary customer={customer} />

    </div>

  );
  
}