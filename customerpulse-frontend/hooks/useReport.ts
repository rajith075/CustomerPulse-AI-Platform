"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { getReport } from "@/services/report-service";

export function useReport() {

  const searchParams =
    useSearchParams();

  const projectId =
    searchParams.get("project") ?? "";

  const query = useQuery({

    queryKey: [
      "report",
      projectId,
    ],

    queryFn: () =>
      getReport(projectId),

    enabled:
      projectId.length > 0,

    staleTime:
      1000 * 60 * 5,

  });

 return {

  report:
    query.data?.report,

  projectId,

  loading:
    query.isLoading,

  error:
    query.error,

};
}