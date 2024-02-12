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
    <div className="flex min-h-fit flex-col items-center box-border ml-4 mr-4">
      <div className="flex flex-col pt-0 md:pt-4 pb-8 min-w-full md:min-w-[54vh]">
        <div className="space-y-10">
          {restaurants.map((restaurant, _) => (
            <Card
              key={restaurant.address}
              className="min-h-[30vh] lg:min-h-[32vh]"
            >
              <div className="flex flex-col items-center relative text-center">
                <div className="absolute bottom-1 md:bottom-2 right-5 flex gap-2 flex-row text-center items-center font-montserrat">
                  <div className="rounded-full p-2 flex bg-grayish_pink ">
                    <Link href={restaurant.google_maps_url} target="_blank">
                      <NavigationIcon className="w-4 md:w-7 h-4 md:h-7 text-black" />
                    </Link>
                  </div>
                  <button className="rounded-full bg-grayish_pink p-2 flex">
                    <CopyText
                      content={`${restaurant.name}, ${restaurant.address}`}
                    ></CopyText>
                  </button>
                </div>
                <img
                  alt="Ksiazulo Pin"
                  className="w-36 h-36 rounded-full object-cover mt-4"
                  height={100}
                  src="/ksiazulo_pin.png"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width={100}
                />
                <CardContent className="pb-0 flex flex-col items-center gap-2 mt-4">
                  <CardTitle>{restaurant.name}</CardTitle>
                  <div className="divide-y divide-black">
                    <CardDescription>{restaurant.address}</CardDescription>
                    <Badge>
                      <StarIcon className="text-muala fill-muala" />
                      <p className="px-0.5 font-piazzolla">POZYCJA MUALA</p>
                      <StarIcon className="text-muala fill-muala" />
                    </Badge>
                  </div>
                  <section className="pb-2">
                    {restaurant.dishes.split(";").map((dish, _) => (
                      <p
                        className="text-xs md:text-base font-montserrat"
                        key={dish}
                      >
                        {dish.toUpperCase()}
                      </p>
                    ))}
                  </section>
                  <Link href={restaurant.youtube_url} target="_blank">
                    <YoutubeIcon className="w-11 lg:w-14 h-11 lg:h-14 text-[#FF0000]" />
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
