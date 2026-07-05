"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { getCustomer } from "@/services/customer-detail-service";
import { CustomerDetailResponse } from "@/types/customer-detail";

export function useCustomer() {

  const params = useParams();

  const searchParams = useSearchParams();

  const customerId = params.id as string;

  const projectId = searchParams.get("project") ?? "";

  const query = useQuery<CustomerDetailResponse>({

    queryKey: ["customer", projectId, customerId],

    queryFn: () => getCustomer(projectId, customerId),

    enabled: !!projectId && !!customerId,

  });

  return {

    customer: query.data?.customer ?? null,

    loading: query.isLoading,

    error: query.error,

    refresh: query.refetch,

  };

}