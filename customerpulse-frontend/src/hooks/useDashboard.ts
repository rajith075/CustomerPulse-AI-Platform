"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { getDashboard } from "@/api/dashboard";

import { DashboardResponse } from "@/types/dashboard";

export function useDashboard() {
  const searchParams = useSearchParams();

  const projectId = searchParams.get("project") ?? "";

  const {
    data,
    isLoading,
    error,
    refetch,
  } = useQuery<DashboardResponse>({
    queryKey: ["dashboard", projectId],

    queryFn: () => getDashboard(projectId),

    enabled: projectId.length > 0,

    staleTime: 1000 * 60 * 5,

    gcTime: 1000 * 60 * 10,

    refetchOnWindowFocus: false,

    refetchOnReconnect: true,

    retry: 2,
  });

  return {
    dashboard: data ?? null,

    loading: isLoading,

    error: error instanceof Error ? error.message : null,

    refresh: refetch,

    projectId,
  };
}