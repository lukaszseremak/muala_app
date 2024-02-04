import Link from "next/link";

export default function NavLink({ navItem }) {
  return (
    <Link
      href={navItem.href}
      className="block py-2 pl-3 pr-4 text-dark_gray rounded text-base xl:text-lg md:p-0 hover:text-muala"
    >
      {navItem.title}
    </Link>
  );
}
