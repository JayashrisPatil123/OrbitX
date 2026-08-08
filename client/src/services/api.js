const API_URL = "https://orbitx-server.onrender.com";

export async function searchSatellite(name) {
  const response = await fetch(
    `${API_URL}/search?name=${encodeURIComponent(name)}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch satellite");
  }

  return await response.json();
}