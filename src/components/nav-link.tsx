import Link from "next/link";

export default function NavLink({ navItem }) {
  return (
    <Link
      href={navItem.href}
      className="block text-dark_gray rounded text-lg md:text-base lg:text-lg md:p-0 hover:text-muala font-piazzolla text-center"
    >
      {navItem.title}
    </Link>
  );
}