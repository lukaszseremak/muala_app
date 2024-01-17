import { CopyText } from "@/app/ui/copy_text";
import { Card, CardContent } from "@/components/ui/card";
import { promises as fs } from "fs";
import Link from "next/link";
import { YoutubeIcon, NavigationIcon } from "@/components/ui/icons";

interface Params {
  params: { name: string };
}

export default async function Page({ params }: Params) {
  const file = await fs.readFile(
    process.cwd() + "/src/app/locations.json",
    "utf8"
  );
  const locations = JSON.parse(file);
  console.log(locations);
  console.log(params.name);
  console.log(decodeURIComponent(params.name));
  const location_name = decodeURIComponent(params.name);

  const filteredRestaurants = locations.filter((restaurant) =>
    restaurant.address.toLowerCase().includes(location_name.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full max-w-md mx-auto">
      <div className="mt-6 space-y-6">
        {filteredRestaurants.map((restaurant, index) => (
          <Card key={restaurant.address}>
            <div className="flex flex-col items-center relative">
              <div className="absolute bottom-2 right-2 flex gap-2">
                <div className="bg-gray-300 dark:bg-gray-700 rounded-full p-2">
                  <Link href={restaurant.google_maps_url} target="_blank">
                    <NavigationIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </Link>
                </div>
                <div className="bg-gray-300 dark:bg-gray-700 rounded-full p-2">
                  <CopyText
                    content={`${restaurant.name}, ${restaurant.address}`}
                  ></CopyText>
                </div>
              </div>
              <img
                alt="Restaurant Image"
                className="w-24 h-24 rounded-full object-cover mt-4"
                height={100}
                src="/logo.jpeg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width={100}
              />
              <CardContent className="flex flex-col items-center gap-2 mt-4">
                <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                <p className="text-sm">{restaurant.dishes.join(", ")}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {restaurant.address}
                </p>
                <Link
                  className="text-blue-500 underline"
                  href={restaurant.youtube_url}
                >
                  <YoutubeIcon className="w-6 h-6 text-blue-500" />
                </Link>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
