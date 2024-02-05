"use client";
import { NavItem } from "@/types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./nav-link";
import MenuOverlay from "./nav-menu-overlay";

const navLinks: NavItem[] = [
  {
    title: "Kebabowa Warszawa",
    href: "/ranking/kebab/warszawa",
  },
  {
    title: "Zgłoś Muala",
    href: "/report",
  },
  {
    title: "Kup Nam Kawkę",
    href: "/buy_coffee",
  },
  {
    title: "Feedback",
    href: "/feedback",
  },
  {
    title: "Kontakt",
    href: "/contact",
  },
];

export default function NavMenu() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 justify-between mx-auto bg-opacity-100 border border-none shadow-2xl bg-light_gray h-15">
      <div className="container flex py-4 items-center px-4 md:shrink-0">
        <Link
          href={"/"}
          className="text-2xl font-semibold text-white md:text-4xl"
          onClick={() => setNavbarOpen(false)}
        >
          <img src="/logo_app.png" className="flex max-h-10" alt="App Logo" />
        </Link>
        <div className="block mobile-menu md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="absolute flex px-3 py-2 border rounded top-4 right-4 border-dark_gray hover:border-muala hover:text-muala"
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="absolute flex px-3 py-2 border rounded top-4 right-4 border-dark_gray hover:border-muala hover:text-muala"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="hidden menu md:block md:w-auto" id="navbar">
          <ul className="flex space-x-8 lg:space-x-12 xl:space-x-24 2xl:space-x-36 pl-16 lg:pl-36">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink navItem={link} setNavbarOpen={setNavbarOpen}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay navLinks={navLinks} setNavbarOpen={setNavbarOpen}  /> : null}
    </nav>
  );
}
