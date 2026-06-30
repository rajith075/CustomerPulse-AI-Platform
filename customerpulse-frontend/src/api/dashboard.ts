import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://127.0.0.1:8000";

export const dashboardAPI = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface APIResponse<T> {
  success: boolean;
  message: string;
  data: T;
  errors: unknown;
  metadata: {
    timestamp: string;
    api_version: string;
    response_time: number | null;
  };
}

export async function getDashboard() {
  const response = await dashboardAPI.get("/dashboard/");

  return response.data;
}