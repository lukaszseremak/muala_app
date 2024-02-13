"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { SearchIcon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

export default function Home() {
  const [sliderValue, setSliderValue] = useState(20);
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const query = sliderValue ? `?distance=${sliderValue}` : "";
    push(`/place/${inputVal}${query}`);
  };

  const handleSliderChange = (newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue =
      event.target.value === "" ? 0 : Number(event.target.value);
    const clampedValue = isNaN(inputValue) || inputValue > 100 ? 0 : inputValue;
    setSliderValue(clampedValue);
  };
  return (
    <>
      <div className="flex flex-row items-center justify-center w-screen min-h-fit md:flex-col box-border pt-24 lg:pt-64">
        {/* <img
          alt="Map background"
          src="/main_view.png"
          className="hidden lg:block absolute right-0 top-0 overflow-hidden w-5/12 object-fit max-h-full min-h-full"
        /> */}
        <div className="relative z-10 lg:right-36 bottom-20 mx-8">
          <div className="flex flex-col">
            <div className="flex flex-row text-center items-center justify-center">
              <h1 className="mb-2 text-4xl lg:text-7xl text-dark_gray font-yeseva_one text-center items-center justify-center">
                Wyszukaj
              </h1>
              <img
                src="/muala.png"
                className="w-32 h-16 lg:h-32 pl-2 text-center items-center justify-center"
              />
            </div>
            <h1 className="mb-8 text-4xl lg:text-7xl text-dark_gray font-yeseva_one text-center items-center justify-center">
              w swoim mieście
            </h1>
            <h1 className=" mb-2 text-xl text-dark_gray font-piazzolla text-center">
              Mapa zawiera lokalizację wszystkich odwiedzonych lokali przez
              <br />
              Szymona &quot;Książula&quot; Nyczkę, w których rekomendował
              poszczególne
              <br />
              pozycję, określając je mianem &quot;MUALA&quot;
            </h1>
            <div className="items-center justify-center">
              <form
                className="flex items-center gap-2 place-content-center justify-center place-self-center pt-6"
                onSubmit={handleSubmit}
              >
                <div className="max-w-md items-center justify-center ">
                  <div className="relative items-center justify-center">
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
                    <h1 className="text-center py-8 text-medium_gray">
                      maksymalna odległość
                    </h1>
                    <Slider
                      defaultValue={[sliderValue]}
                      value={[sliderValue]}
                      max={100}
                      step={1}
                      onValueChange={handleSliderChange}
                    />
                    <div className="flex flex-row pt-6 items-center justify-center space-x-1 text-medium_gray">
                      <p>+</p>
                      <Input
                        value={sliderValue}
                        onChange={handleInputChange}
                        className="w-[60px] h-8 bg-light_gray focus-visible:ring-0 text-center"
                      />
                      <p>km</p>
                    </div>
                    <h1 className="pt-10 mb-8 text-2xl text-dark_gray font-piazzolla text-center">
                      LUB
                    </h1>
                    <div className="items-center justify-center">
                      <Button
                        onClick={() => setSliderValue("")}
                        type="submit"
                        className="items-center justify-center w-full h-12 rounded-full shadow-lg text-center text-medium_gray bg-[#f5c188] font-piazzolla"
                      >
                        wyświetl wszystko
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
