const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://127.0.0.1:8000";

export async function getCustomers(
  projectId: string
) {

  const response = await fetch(
    `${API_URL}/customers/${projectId}`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to load customers."
    );
  }

  return response.json();

}