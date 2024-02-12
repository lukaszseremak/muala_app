"use client";
import MainForm from "@/components/main-form";
import { useState } from "react";

export default function Home() {
  const [sliderValue, setSliderValue] = useState(20);
  return (
    <>
      <div className="flex flex-row items-center justify-center w-screen min-h-fit md:flex-col box-border pt-24 lg:pt-64">
        <img
          alt="Map background"
          src="/main_view.png"
          className="hidden lg:block absolute right-0 top-0 overflow-hidden w-5/12 object-fit max-h-full min-h-full"
        />
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
              <MainForm
                sliderValue={sliderValue}
                setSliderValue={setSliderValue}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
