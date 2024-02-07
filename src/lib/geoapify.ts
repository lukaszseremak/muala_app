export async function getGeocodeData(location_name) {
  const res = await fetch(
    `https://api.geoapify.com/v1/geocode/search?text=${location_name}%2C%20Poland&lang=en&limit=1&type=city&format=json&apiKey=${process.env.GEO_APIFY_KEY}`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getCoordinates(location_name) {
  const geoapify_data = await getGeocodeData(location_name);
  return {
    lat: geoapify_data.results[0].lat,
    lon: geoapify_data.results[0].lon,
  };
}
