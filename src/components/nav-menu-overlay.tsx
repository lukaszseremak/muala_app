import { NavItemsProps } from "@/types";
import NavLink from "./nav-link";

// @ts-ignore
export default function MenuOverlay({ navLinks, setNavbarOpen }) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {navLinks.map((link, index) => (
        <li key={index}>
          <NavLink navItem={link} setNavbarOpen={setNavbarOpen} />
        </li>
      ))}
    </ul>
  );
}
