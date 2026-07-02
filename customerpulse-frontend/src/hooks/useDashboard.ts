"use client";

import { useQuery } from "@tanstack/react-query";

import { getDashboard } from "@/api/dashboard";

import {
  DashboardAPIResponse,
  DashboardResponse,
} from "@/types/dashboard";

export function useDashboard() {

  const {

    data,

    isLoading,

    error,

    refetch,

  } = useQuery<DashboardAPIResponse>({

    queryKey: ["dashboard"],

    queryFn: getDashboard,

    staleTime: 1000 * 60 * 5,

    gcTime: 1000 * 60 * 10,

    refetchOnWindowFocus: false,

    refetchOnReconnect: true,

    refetchOnMount: false,

    retry: 2,

  });

  return {

    dashboard: data?.data as DashboardResponse | null,

    loading: isLoading,

    error: error instanceof Error ? error.message : null,

    refresh: refetch,

  };

}