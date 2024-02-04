import { NavItemsProps } from "@/types";
import NavLink from "./nav-link";

export default function MenuOverlay({ navLinks }: NavItemsProps) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {navLinks.map((link, index) => (
        <li key={index}>
          <NavLink navItem={link} />
        </li>
      ))}
    </ul>
  );
}
