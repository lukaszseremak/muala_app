"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [isSend, setIsSend] = useState(false);
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col">
      <div className="px-12">
        {isSend ? (
          <div className="flex flex-col w-full max-w-xl mx-auto pt-36 px-4">
            <div className="mt-6 space-y-10 relative">
              <Card className="w-full flex flex-col justify-center items-center relative">
                <img
                  className="absolute top-0 right-0 h-36 w-36 overflow-visible -z-10 transform translate-x-6 -translate-y-6"
                  height="100"
                  src="/report_figure_3.png"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <CardHeader className="flex flex-col items-center relative">
                  <img
                    alt="Ksiazulo Pin"
                    className="w-48 h-48 rounded-full object-cover"
                    height={100}
                    src="/ksiazulo_pin.png"
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width={100}
                  />
                  <CardTitle className="text-2xl font-bold text-center text-black">
                    Dziękujemy za zgłoszenie!
                  </CardTitle>
                </CardHeader>
                <CardContent className="self-center pb-12">
                  <p className="text-gray-600 text-center mb-6">
                    Zostanie ono dodane do naszej mapy po weryfikacji
                    wiarygodności
                  </p>
                </CardContent>
                <Button
                  onClick={() => router.push("/")}
                  className="absolute bottom-0 transform translate-y-28 w-64 h-12 bg-light_gray rounded-full shadow-lg"
                >
                  Wróć do strony głównej
                </Button>
                <img
                  className="absolute bottom-0 left-0 h-64 w-64 overflow-visible -z-10 transform translate-x-24 translate-y-16"
                  src="/report_figure_4.png"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                />
              </Card>
            </div>
          </div>
        ) : (
          <div className="flex justify-center pt-0 lg:pt-48 px-4">
            <div className="max-w-7xl mx-auto p-6">
              <div className="flex flex-col lg:flex-row justify-between gap-10">
                <div className="flex-1 space-y-6 pt-24 relative">
                  <img
                    className="hidden lg:block absolute middle-0 left-0 h-96 w-64 overflow-visible -z-10 transform -translate-x-8 translate-y-16"
                    height="100"
                    src="/report_figure_2.png"
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                  <h1 className="text-2xl font-playfair_display font-bold text-muala">
                    PRZEOCZYLIŚMY MUALA W TWOJEJ OKOLICY?
                  </h1>
                  <p className="text-dark_gray">
                    Nie trać okazji, by podzielić się z nami informacją o tym
                    wyjątkowym miejscu kulinarnej rozkoszy! Wypełnij krótki
                    formularz poniżej, abyśmy mogli uzupełnić naszą książkową
                    mapę polecanych gastronomicznych perełek.
                  </p>
                  <p className="text-dark_gray">
                    Mimo sumiennej weryfikacji, spędzając kilka długich dni na
                    poszukiwaniach najsmaczniejszych zakątków według Książula,
                    zawsze istnieje ryzyko, że coś nam umknęło. Twoje zgłoszenie
                    pomoże nam tworzyć jeszcze bardziej kompletną i atrakcyjną
                    mapę kulinarnej podróży.
                  </p>
                  <p className="text-dark_gray ">
                    Dziękujemy za pomoc w odkrywaniu smakowitych przygód
                  </p>
                </div>
                <div className="flex-1 flex justify-center items-center relative">
                  <Card className="w-full flex flex-col justify-center items-center">
                    <CardHeader className="self-center">
                      <img
                        alt="Ksiazulo Pin"
                        className="w-48 h-48 rounded-full object-cover mt-4"
                        height={100}
                        src="/ksiazulo_pin.png"
                        style={{
                          aspectRatio: "100/100",
                          objectFit: "cover",
                        }}
                        width={100}
                      />
                      <CardTitle className="self-center text-4xl font-normal text-black">
                        Zgłoś MUALA
                      </CardTitle>
                    </CardHeader>
                    <hr className="w-3/6 border-black mx-auto pb-2" />
                    <CardContent className="self-center pt-4 pb-12">
                      <form className="space-y-4 self-center justify-center items-center">
                        <Input
                          className="bg-white rounded-full w-96 h-12"
                          placeholder="Wpisz nazwę lokalu"
                        />
                        <Input
                          className="bg-white rounded-full w-96 h-12"
                          placeholder="Wpisz nazwę miasta"
                        />
                        <Input
                          className="bg-white rounded-full w-96 h-12"
                          placeholder="Wklej link do filmu"
                        />
                        <Button
                          type="submit"
                          className="mx-32 bg-muala rounded-full text-dark_gray w-36 h-12 font-playfair_display shadow-2xl text-lg"
                          onClick={() => setIsSend(true)}
                        >
                          ZGŁOŚ
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                  <img
                    className="hidden md:block absolute bottom-0 right-0 h-64 w-64 overflow-visible -z-10 transform translate-x-1/4 "
                    height="100"
                    src="/report_figure_1.png"
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
