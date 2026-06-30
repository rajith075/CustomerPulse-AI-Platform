"use client";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

export default function QueryProvider({
  children,
}: Props) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 10,
            retry: 2,
            refetchOnWindowFocus: true,
            refetchOnReconnect: true,
            refetchOnMount: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}