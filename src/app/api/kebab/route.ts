import { getLocalData } from "@/lib/local-data";

export async function GET() {
  const locations = await getLocalData("/src/app/kebab_warsaw.json");
  return Response.json({ locations });
}
