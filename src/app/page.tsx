"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "@/components/ui/icons";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/place/${inputVal}`);
  };
  return (
    <div className="h-screen w-full flex items-center justify-center md:flex-col">
      <img
        alt="Map background"
        src="/map.png"
        className="absolute h-full w-full object-cover"
        height="1000"
        style={{
          aspectRatio: "1000/1000",
          objectFit: "cover",
        }}
        width="1000"
      />
      <div className="relative z-10 lg:right-1/4 bottom-20">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h1 className="text-8xl font-bold text-dark_gray mb-8 font-['Yeseva_One']">
              Wyszukaj
            </h1>
            <img src="/muala.png" className="pl-4" />
          </div>
          <h1 className="text-8xl font-bold text-dark_gray mb-8 font-['Yeseva_One']">
            w swoim mieście
          </h1>
        </div>
        <form className="flex items-center gap-2" onSubmit={handleSubmit}>
          <div className="max-w-md ">
            <div className="relative">
              <Input
                className="pl-10 pr-20 rounded-full "
                placeholder="Wpisz nazwę miasta"
                type="search"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
              <Button className="absolute right-0 top-0" type="submit">
                <SearchIcon className="w-16 h-16 text-white bg-muala rounded-full" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
