import api from "@/src/lib/axios";

export async function getDashboardOverview() {
  const response = await api.get("/dashboard");

  return response.data;
}