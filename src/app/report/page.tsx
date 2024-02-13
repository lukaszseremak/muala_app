"use client";
import { sendEmail } from "@/app/actions";
import { ReportMualaTemplate } from "@/components/email-template";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default async function Page() {
  const [isSend, setIsSend] = useState(false);
  const router = useRouter();

  return (
    <div className="flex w-screen mx-auto">
      {isSend ? (
        <div className="flex flex-col max-w-2xl mx-auto pt-36">
          <div className="mt-6 space-y-10 relative">
            <Card className="flex flex-col justify-center items-center relative mx-12 lg:w-full">
              <img
                className="absolute top-0 right-0 h-36 w-36 overflow-visible -z-10 transform translate-x-7 -translate-y-6"
                src="/report_figure_3.png"
              />
              <CardHeader className="flex flex-col items-center relative">
                <img
                  alt="Ksiazulo Pin"
                  className="w-52 h-52 rounded-full object-cover"
                  src="/ksiazulo_pin.png"
                />
                <CardTitle className="text-2xl font-bold text-center text-black pt-4">
                  Dziękujemy za zgłoszenie!
                </CardTitle>
              </CardHeader>
              <CardContent className="self-center pb-12 pt-4">
                <p className="text-gray-600 text-center mx-4 md:mx-8 font-montserrat">
                  Zostanie ono dodane do naszej
                </p>
                <p className="text-gray-600 text-center mb-6 mx-4 md:mx-8 font-montserrat">
                  mapy po weryfikacji
                  wiarygodności.
                </p>
              </CardContent>
              <img
                className="hidden sm:block absolute bottom-0 left-0 h-64 overflow-visible -z-10 transform -translate-x-24 translate-y-16"
                src="/report_figure_4.png"
              />
              <Button
                onClick={() => router.push("/")}
                className="absolute bottom-0 transform translate-y-28 w-64 h-12 bg-light_gray rounded-full shadow-xl"
              >
                <p className="font-playfair_display">Wróć do strony głównej</p>
              </Button>
            </Card>
          </div>
        </div>
      ) : (
        <div className="flex justify-center pt-0 lg:pt-24 px-4 md:px-12 w-screen">
          <div className="max-w-7xl mx-auto p-0 lg:p-6">
            <div className="flex flex-col lg:flex-row justify-between gap-10">
              <div className="flex-1 space-y-6 pt-0 lg:pt-24 lg:max-w-[26rem] relative font-playfair_display text-md">
                <img
                  className="hidden lg:block absolute middle-0 left-0 h-96 w-68 overflow-visible -z-50 transform -translate-x-4 translate-y-28"
                  src="/report_figure_1.png"
                />
                <h1 className="text-2xl font-playfair_display_sc text-muala text-center pb-3 lg:pb-8 px-4">
                  PRZEOCZYLIŚMY MUALA W TWOJEJ OKOLICY?
                </h1>
                <p className="text-dark_gray text-center">
                  Nie trać okazji, by podzielić się z nami informacją o tym
                  wyjątkowym miejscu kulinarnej rozkoszy! Wypełnij krótki
                  formularz poniżej, abyśmy mogli uzupełnić naszą książkową mapę
                  polecanych gastronomicznych perełek.
                </p>
                <p className="text-dark_gray text-center">
                  Mimo sumiennej weryfikacji, spędzając kilka długich dni na
                  poszukiwaniach najsmaczniejszych zakątków według Książula,
                  zawsze istnieje ryzyko, że coś nam umknęło. Twoje zgłoszenie
                  pomoże nam tworzyć jeszcze bardziej kompletną i atrakcyjną
                  mapę kulinarnej podróży.
                </p>
                <p className="text-dark_gray text-center">
                  Dziękujemy za pomoc w odkrywaniu smakowitych przygód.
                </p>
              </div>
              <div className="flex justify-center items-center pb-4 relative pt-2 lg:pt-16">
                <form
                  action={(form) =>
                    sendEmail(
                      form.get("subject"),
                      ReportMualaTemplate({
                        local_name: form.get("local_name") as string,
                        city: form.get("city") as string,
                        url: form.get("url") as string,
                      })
                    )
                  }
                >
                  <Card className="flex flex-col justify-center items-center pb-12 relative">
                    <CardHeader className="flex flex-col items-center relative px-24 sm:px-40 md:px-44 pb-4 pt-0">
                      <img
                        alt="Pin"
                        className="lg:w-48 lg:h-48 w-36 h-36 rounded-full object-cover mt-4"
                        src="/ksiazulo_pin.png"
                      />
                      <CardTitle className="self-center text-2xl lg:text-4xl text-center font-normal text-black pb-2 whitespace-nowrap">
                        Zgłoś MUALA
                      </CardTitle>
                      <hr className="w-full border-black mx-auto" />
                    </CardHeader>
                    <CardContent className="w-full justify-center items-center pb-4 pt-2">
                      <div className="flex-row mx-4 md:mx-24">
                        <Input
                          className="bg-white rounded-full w-full h-12 mb-4 text-md lg:text-lg"
                          placeholder="Wpisz nazwę lokalu"
                          name="local_name"
                          required
                        />
                        <Input
                          className="bg-white rounded-full w-full h-12 mb-4 text-md lg:text-lg"
                          placeholder="Wpisz nazwę miasta"
                          name="city"
                          required
                        />
                        <Input
                          className="bg-white rounded-full w-full h-12 mb-4 text-md lg:text-lg"
                          placeholder="Wklej link do filmu"
                          name="url"
                          required
                        />
                        <input
                          type="hidden"
                          name="subject"
                          value="Report Missing Muala"
                        />
                      </div>
                    </CardContent>
                    <Button
                      className="w-36 h-10 justify-center items-center bg-light_muala hover:bg-muala rounded-full shadow-3xl text-lg font-playfair_display"
                      onClick={() => setIsSend(true)}
                    >
                      ZGŁOŚ
                    </Button>
                  </Card>
                </form>
                <img
                  className="hidden lg:block absolute bottom-0 right-0 h-68 w-58 overflow-visible -z-10 transform translate-x-1/4 translate-y-10"
                  src="/report_figure_1.png"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
