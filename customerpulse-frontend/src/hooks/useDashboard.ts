"use client";

import { useCallback, useEffect, useState } from "react";

import { getDashboard } from "@/api/dashboard";

import {
  DashboardResponse,
  DashboardAPIResponse,
} from "@/types/dashboard";

export function useDashboard() {

  const [dashboard, setDashboard] =
    useState<DashboardResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  // ===============================================
  // Fetch Dashboard
  // ===============================================

  const fetchDashboard = useCallback(async () => {

    try {

      setLoading(true);

      setError(null);

      const response: DashboardAPIResponse =
        await getDashboard();

      if (!response.success) {

        throw new Error(response.message);

      }

      setDashboard(response.data);

    } catch (err) {

      if (err instanceof Error) {

        setError(err.message);

      } else {

        setError("Unable to fetch dashboard.");

      }

    } finally {

      setLoading(false);

    }

  }, []);

  // ===============================================
  // Initial Load
  // ===============================================

  useEffect(() => {

    fetchDashboard();

  }, [fetchDashboard]);

  // ===============================================
  // Auto Refresh
  // ===============================================

  useEffect(() => {

    const timer = setInterval(() => {

      fetchDashboard();

    }, 30000);

    return () => clearInterval(timer);

  }, [fetchDashboard]);

  // ===============================================

  return {

    dashboard,

    loading,

    error,

    refresh: fetchDashboard,

  };

}