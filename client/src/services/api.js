const API_URL = "https://orbitx-f8aw.onrender.com";

export async function searchSatellite(name) {
  const response = await fetch(
    `${BASE_URL}/search?name=${encodeURIComponent(name)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch satellite");
  }

  return await response.json();
}