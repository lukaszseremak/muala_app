"use client";
import MainForm from "@/components/main-form";
import DistanceSlider from "@/components/slider";
import { useState } from "react";

export default function Home() {
  const [sliderValue, setSliderValue] = useState(20);
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
          <MainForm sliderValue={sliderValue}/>
          <DistanceSlider  sliderValue={sliderValue} setSliderValue={setSliderValue} />
        </div>
      </div>
    </>
  );
}
