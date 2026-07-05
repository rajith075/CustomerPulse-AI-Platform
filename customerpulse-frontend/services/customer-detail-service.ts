const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://127.0.0.1:8000";

export async function getCustomer(
  projectId: string,
  customerId: string
) {
  const response = await fetch(
    `${API_URL}/customers/${projectId}/${customerId}`
  );

  if (!response.ok) {
    throw new Error("Failed to load customer.");
  }

  return response.json();
}