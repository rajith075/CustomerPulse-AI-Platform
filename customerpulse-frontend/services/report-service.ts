const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://127.0.0.1:8000";

export async function getReport(
  projectId: string
) {
  const response = await fetch(
    `${API_URL}/reports/${projectId}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load report."
    );
  }

  return response.json();
}