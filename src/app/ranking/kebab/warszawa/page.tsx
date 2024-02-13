import { CopyText } from "@/components/copy_text";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { NavigationIcon, StarIcon, YoutubeIcon } from "@/components/ui/icons";
import prisma from "@/lib/prisma";
import { Decimal } from "@prisma/client/runtime/library";
import Link from "next/link";

interface Kebab {
  id: string;
  name: string;
  dishes: string;
  address: string;
  rating: Decimal;
  google_maps_url: string;
  youtube_url: string;
}

export default async function Page() {
  const kebabs: Kebab[] = await prisma.kebab.findMany({
    orderBy: {
      rating: "desc",
    },
  });

  return (
    <div className="flex min-h-fit flex-col items-center box-border ml-4 mr-4">
      <div className="flex flex-col pt-0 md:pt-4 pb-8">
        <div className="space-y-10">
          {kebabs.map((kebab, _) => (
            <Card key={kebab.address} className="min-h-[23vh] lg:min-h-[28vh]">
              <div className="flex flex-col items-center relative text-center">
                <div className="absolute bottom-1 md:bottom-2 right-5 flex gap-2 flex-row text-center items-center font-montserrat">
                  <div className="rounded-full p-2 flex bg-grayish_pink ">
                    <Link href={kebab.google_maps_url} target="_blank">
                      <NavigationIcon className="w-4 md:w-7 h-4 md:h-7 text-black" />
                    </Link>
                  </div>
                  <button className="rounded-full bg-grayish_pink p-2 flex">
                    <CopyText
                      content={`${kebab.name}, ${kebab.address}`}
                    ></CopyText>
                  </button>
                </div>
                <img
                  alt="Kebab Logo"
                  className="w-32 md:w-44 h-26 md:h-36 object-cover mt-4"
                  src="/kebab_logo.png"
                />
                <CardContent className="p-0 flex flex-col items-center gap-1 mt-1 lg:mt-2">
                  <CardTitle className="pt-1">{kebab.name}</CardTitle>
                    <CardDescription className="my-0 pb-1">
                      {kebab.address}
                    </CardDescription>
                  <hr className="w-40 lg:w-56 h-[0.1rem] bg-black"/>
                    <section className="p-0">
                      {kebab.dishes.split(";").map((dish, _) => (
                        <p
                          className="text-xs md:text-base font-montserrat"
                          key={dish}
                        >
                          {dish.toUpperCase()}
                        </p>
                      ))}
                    </section>
                  <Badge className="text-lg lg:text-3xl">
                    <StarIcon className="text-muala fill-muala w-4 lg:w-8 h-4 lg:h-8" />
                    <p className="px-1 lg:px-4 font-piazzolla">
                      {kebab.rating.toString()}/10
                    </p>
                    <StarIcon className="text-muala fill-muala w-4 lg:w-8 h-4 lg:h-8" />
                  </Badge>
                  <Link href={kebab.youtube_url} target="_blank">
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
