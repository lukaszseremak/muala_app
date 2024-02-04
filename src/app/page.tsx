"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { SearchIcon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/place/${inputVal}`);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center w-screen h-screen md:flex-col">
        <img
          alt="Map background"
          src="/main_view.png"
          className="absolute right-0 object-fill w-4/12 h-full top-10 flex-grow-1"
        />
        <div className="relative z-10 lg:right-36 bottom-20">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <h1 className="mb-8 text-8xl text-dark_gray font-yeseva_one">
                Wyszukaj
              </h1>
              <img src="/muala.png" className="w-64 h-32 pl-4" />
            </div>
            <h1 className="mb-8 text-8xl text-dark_gray font-yeseva_one">
              w swoim mieście
            </h1>
            <h1 className=" mb-2 text-xl text-dark_gray font-piazzolla text-center">
              Mapa zawiera lokalizację wszystkich odwiedzonych lokali przez
              <br />
              Szymona "Książula" Nyczkę, w których rekomendował poszczególne
              <br />
              pozycję, określając je mianem "MUALA"
            </h1>
          </div>
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
