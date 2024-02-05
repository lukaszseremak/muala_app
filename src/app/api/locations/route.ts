import { getLocalData } from "@/lib/local-data";

export async function GET() {
  const locations = await getLocalData('/src/app/locations.json');
  return Response.json({ locations });
}
