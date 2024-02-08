"use client";
import { FeedbackTemplate } from "@/components/email-template";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sendEmail } from "../actions";

export default async function Page() {
  const [isSend, setIsSend] = useState(false);
  const router = useRouter();

  return (
    <div className="flex max-w-xl mx-auto">
      {isSend ? (
        <div className="flex flex-col max-w-xl mx-auto pt-36">
          <div className="mt-6 space-y-10 relative">
            <Card className="flex flex-col justify-center items-center relative mx-12 lg:w-full">
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
                  Dziękujemy za feedback!
                </CardTitle>
              </CardHeader>
              <CardContent className="self-center pb-12">
                <p className="text-gray-600 text-center mb-6">
                  Dziękujemy za opinię na temat naszej strony internetowej!
                  Doceniamy Twoje sugestie i pracujemy nad ulepszeniami zgodnie
                  z nimi.
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
        <div className="pt-0 lg:pt-48">
          <div>
            <div className="flex flex-col lg:flex-row justify-between gap-10">
              <div className="flex-1 space-y-6 pt-12 lg:pt-24 px-8">
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
                <h1 className="text-2xl font-playfair_display font-bold text-muala text-center">
                  TWOJA OPINIA MA DLA NAS OGROMNE ZNACZENIE!
                </h1>
                <p className="text-dark_gray text-center">
                  Jeśli masz pomysł, jak jeszcze bardziej usprawnić naszą stronę
                  lub coś, co chciałbyś zobaczyć na naszym portalu, to teraz
                  masz okazję podzielić się swoimi myślami. Napisz nam krótki
                  feedback za pomocą poniższego formularza, a Twoje sugestie
                  pomogą nam tworzyć lepsze i bardziej dostosowane do Twoich
                  oczekiwań doświadczenie online. Dziękujemy za współtworzenie
                  naszej platformy!
                </p>
              </div>
              <div className="flex-1 flex justify-center items-center pb-4 relative">
                <form
                  action={(form) =>
                    sendEmail(
                      form.get("subject"),
                      FeedbackTemplate({ content: form.get("feedback") })
                    )
                  }
                >
                  <Card className="flex flex-col justify-center items-center pb-8 relative">
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
                        alt="FeedBack"
                        className="w-64 h-64 rounded-full object-cover mt-4"
                        height={100}
                        src="/feedback.png"
                        style={{
                          aspectRatio: "100/100",
                          objectFit: "cover",
                        }}
                        width={100}
                      />
                      <CardTitle className="self-center text-3xl lg:text-4xl text-center font-normal text-black">
                        Podziel się z nami swoją opinią
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="self-center pt-4 pb-4">
                      <Textarea
                        placeholder="Maksymalnie 250 znaków"
                        name="feedback"
                      />
                      <input type="hidden" name="subject" value="Feedback" />
                    </CardContent>
                    <Button
                      className="w-36 justify-center items-center bg-muala rounded-full"
                      onClick={() => setIsSend(true)}
                    >
                      PRZEŚLIJ
                    </Button>
                  </Card>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
