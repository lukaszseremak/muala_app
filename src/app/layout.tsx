import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavMenu from "@/components/ui/nav-menu";

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
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
