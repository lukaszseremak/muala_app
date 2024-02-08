import { CopyText } from "@/components/copy_text";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { NavigationIcon, StarIcon, YoutubeIcon } from "@/components/ui/icons";
import { isWithinRadius } from "@/lib/distance";
import { getCoordinates } from "@/lib/geoapify";
import prisma from "@/lib/prisma";
import { Decimal } from "@prisma/client/runtime/library";
import Link from "next/link";

interface Params {
  params: { name: string };
  searchParams: { distance: string };
}

interface Restaurant {
  name: string;
  dishes: string;
  address: string;
  date: Date;
  google_maps_url: string;
  youtube_url: string;
  latitude: Decimal;
  longitude: Decimal;
}

async function getFilteredRestaurants(params, locations, searchParams) {
  if (!params.name) {
    console.log(
      "params.name is empty. Unable to fetch coordinates or filter locations."
    );
    return locations;
  }

  const coordinates = await getCoordinates(params.name);
  console.log(coordinates);

  const restaurants = locations.filter((restaurant) =>
    isWithinRadius(
      coordinates.lat,
      coordinates.lon,
      restaurant.latitude,
      restaurant.longitude,
      +searchParams.distance
    )
  );

  return restaurants;
}

export default async function Page({ params, searchParams }: Params) {
  const locations: Restaurant[] = await prisma.location.findMany({
    orderBy: {
      date: "desc",
    },
  });
  const restaurants: Restaurant[] = await getFilteredRestaurants(
    params,
    locations,
    searchParams
  );

  return (
    <div className="flex min-h-screen flex-col items-center box-border">
      <div className="flex flex-col w-auto pt-4 pb-8 ">
        <div className="space-y-10">
          {restaurants.map((restaurant, _) => (
            <Card key={restaurant.address}>
              <div className="flex flex-col items-center relative text-center">
                <div className="absolute bottom-2 right-2 flex gap-2 flex-row">
                  <div className="rounded-full p-2 flex bg-grayish_pink">
                    <Link href={restaurant.google_maps_url} target="_blank">
                      <NavigationIcon className="w-6 h-6 " />
                    </Link>
                  </div>
                  <div className="rounded-full bg-grayish_pink p-2 flex">
                    <CopyText
                      content={`${restaurant.name}, ${restaurant.address}`}
                    ></CopyText>
                  </div>
                </div>
                <img
                  alt="Ksiazulo Pin"
                  className="w-32 h-32 rounded-full object-cover mt-4"
                  height={100}
                  src="/ksiazulo_pin.png"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width={100}
                />
                <CardContent className="flex flex-col items-center gap-2 mt-4">
                  <CardTitle>{restaurant.name}</CardTitle>
                  <CardDescription>
                    <u>{restaurant.address}</u>
                  </CardDescription>
                  <Badge>
                    <StarIcon className="text-muala fill-muala" />
                    <p className="px-0.5 font-piazzolla">POZYCJA MUALA</p>
                    <StarIcon className="text-muala fill-muala" />
                  </Badge>
                  {restaurant.dishes.split(";").map((dish, _) => (
                    <p className="text-sm font-montserrat" key={dish}>
                      {dish.toUpperCase()}
                    </p>
                  ))}
                  <Link
                    href={restaurant.youtube_url}
                    target="_blank"
                    className="pb-6"
                  >
                    <YoutubeIcon className="w-12 h-12 text-[#FF0000]" />
                  </Link>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
