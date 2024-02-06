"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { SearchIcon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";

import DistanceSlider from "@/components/slider";

export default function MainForm({
  // @ts-ignore
  sliderValue, // @ts-ignore
  setSliderValue,
}) {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const query = sliderValue ? `?distance=${sliderValue}` : "";
    push(`/place/${inputVal}${query}`);
  };

  return (
    <>
      <form
        className="flex items-center gap-2 place-content-center justify-center place-self-center pt-6"
        onSubmit={handleSubmit}
      >
        <div className="max-w-md ">
          <div className="relative">
            <Input
              className="pl-10 pr-20 rounded-full font-barlow"
              placeholder="Wpisz nazwę miasta"
              type="search"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <Button
              className="absolute top-0 right-0 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300"
              type="submit"
            >
              <SearchIcon className="w-16 h-16 text-white rounded-full bg-muala" />
            </Button>
            <DistanceSlider
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
            />
            <h1 className="pt-10 mb-8 text-2xl text-dark_gray font-piazzolla text-center">
              LUB
            </h1>
            <Button
              onClick={() => setSliderValue("")}
              type="submit"
              className="absolute bottom-0 transform translate-x-12 translate-y-20 w-64 h-12 rounded-full shadow-lg text-center text-medium_gray bg-[#f5c188] font-piazzolla"
            >
              wyświetl wszystko
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
