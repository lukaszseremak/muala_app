"use client";
import { FeedbackTemplate } from "@/components/email-template";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sendEmail } from "@/app/actions";
import { Input } from "@/components/ui/input";

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
                  Dziękujemy za feedback!
                </CardTitle>
              </CardHeader>
              <CardContent className="self-center pb-12 pt-4">
                <p className="text-gray-600 text-center mb-6 mx-2 md:mx-8">
                  Dziękujemy za opinię na temat naszej strony internetowej!
                  Doceniamy Twoje sugestie i pracujemy nad ulepszeniami zgodnie
                  z nimi.
                </p>
              </CardContent>
              <img
                className="hidden sm:block absolute bottom-0 left-0 h-72 w-full overflow-visible -z-10 transform -translate-x-24 translate-y-16"
                src="/report_figure_4.png"
              />
              <Button
                onClick={() => router.push("/")}
                className="absolute bottom-0 transform translate-y-28 w-64 h-12 bg-light_gray rounded-full shadow-xl"
              >
                <p>Wróć do strony głównej</p>
              </Button>
            </Card>
          </div>
        </div>
      ) : (
        <div className="flex justify-center pt-0 lg:pt-24 px-4 md:px-12 w-screen">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between gap-10">
              <div className="flex-1 space-y-2 pt-0 lg:pt-24 lg:max-w-[26rem] relative font-playfair_display">
                <img
                  className="hidden lg:block absolute middle-0 left-0 h-96 w-68 overflow-visible -z-50 transform -translate-x-4 translate-y-28"
                  src="/report_figure_1.png"
                />
                <h1 className="text-xl font-playfair_display_sc text-muala text-center pb-4 lg:pb-8">
                  TWOJA OPINIA MA DLA NAS OGROMNE ZNACZENIE!
                </h1>
                <p className="text-dark_gray text-center whitespace-pre-line">
                  Jesteśmy bardzo zainteresowani Twoją opinią i sugestiami
                  dotyczącymi doskonalenia naszego serwisu. Jeśli masz pomysł,
                  jak możemy jeszcze bardziej ulepszyć naszą stronę lub gdy masz
                  jakiekolwiek sugestie dotyczące zawartości, którą chciałbyś
                  zobaczyć na naszym portalu, prosimy o podzielenie się nimi za
                  pomocą poniższego formularza.
                </p>

                <p className="text-dark_gray text-center whitespace-pre-line">
                  Twój feedback pomoże nam dostosować naszą ofertę do Twoich oczekiwań i stworzyć lepsze
                  doświadczenie online. Ponadto, jeśli masz inne pytania lub
                  chcesz skontaktować się z nami w innym celu, również
                  serdecznie zachęcamy do skorzystania z formularza.
                  Jesteśmy otwarci na wszelkie uwagi i z przyjemnością odpowiemy na Twoje zapytania.
                </p>

                <p className="text-dark_gray text-center whitespace-pre-line">
                Dziękujemy za współtworzenie naszej platformy!
                </p>
              </div>
              <div className="flex justify-center items-center pb-4 relative">
                <form
                  action={(form) =>
                    sendEmail(
                      form.get("subject"),
                      FeedbackTemplate({
                        content: form.get("feedback") as string,
                        name: form.get("name") as string,
                        email: form.get("email") as string,
                      })
                    )
                  }
                >
                  <Card className="flex flex-col justify-center items-center pb-8 relative">
                    <img
                      className="absolute top-0 right-0 h-52 w-42 overflow-visible -z-50 transform translate-x-8 -translate-y-8"
                      src="/report_figure_3.png"
                    />
                    <CardHeader className="flex flex-col items-center relative max-w-[40rem]">
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
                      <CardTitle className="self-center text-2xl lg:text-3xl mx-6 lg:mx-16 text-center font-normal text-black">
                        Podziel się z nami swoją opinią lub napisz do nas
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="w-full justify-center items-center pb-8 pt-4">
                      <div className="flex-row mx-4 md:mx-16">
                        <Input
                          className="bg-white rounded-2xl w-full h-12 mb-2 text-md lg:text-lg text-medium_gray"
                          placeholder="Imię"
                          name="name"
                          required
                        />
                        <Input
                          className="bg-white rounded-2xl w-full h-12 mb-2 text-md lg:text-lg text-medium_gray"
                          placeholder="E-mail (Opcjonalny)"
                          name="email"
                          required
                        />
                        <Textarea
                          placeholder="Maksymalnie 250 znaków"
                          name="feedback"
                        />
                        <input type="hidden" name="subject" value="Feedback" />
                      </div>
                    </CardContent>
                    <Button
                      className="w-36 h-10 justify-center items-center bg-light_muala hover:bg-muala rounded-full shadow-2xl font-playfair_display"
                      onClick={() => setIsSend(true)}
                    >
                      WYŚLIJ
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
