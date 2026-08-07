const BASE_URL = "http://127.0.0.1:5000/api";

export async function searchSatellite(name) {
  const response = await fetch(
    `${BASE_URL}/search?name=${encodeURIComponent(name)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch satellite");
  }

  return await response.json();
}