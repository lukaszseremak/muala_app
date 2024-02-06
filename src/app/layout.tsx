import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavMenu from "@/components/nav-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muala App",
  description: "Szukaj lokali Muala w Twojej okolicy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <div className="h-24">
          <NavMenu />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </body>
    </html>
  );
}
