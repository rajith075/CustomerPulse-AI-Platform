"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { getCustomers } from "@/services/customer-service";

import { CustomerResponse } from "@/types/customer";

export function useCustomers() {

  const searchParams = useSearchParams();

  const projectId =
    searchParams.get("project") ?? "";

  const query = useQuery<CustomerResponse>({

    queryKey: [
      "customers",
      projectId,
    ],

    queryFn: () =>
      getCustomers(projectId),

    enabled: !!projectId,

    staleTime: 1000 * 60 * 5,

  });

  return {

    customers:
      query.data?.customers ?? [],

    loading:
      query.isLoading,

    error:
      query.error,

    refresh:
      query.refetch,

  };

}