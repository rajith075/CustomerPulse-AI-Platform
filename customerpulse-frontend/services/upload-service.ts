const API_URL = "http://127.0.0.1:8000";

export async function uploadDataset(file: File) {
  const formData = new FormData();

  formData.append("file", file);

  try {
    const response = await fetch(`${API_URL}/upload`, {
      method: "POST",
      body: formData,
    });

    console.log("STATUS:", response.status);

    const text = await response.text();

    console.log("RAW RESPONSE:", text);

    if (!response.ok) {
      throw new Error(text);
    }

    return JSON.parse(text);

  } catch (err) {

    console.error("FETCH ERROR:", err);

    throw err;

  }
}