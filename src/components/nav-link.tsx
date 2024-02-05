import Link from "next/link";

// @ts-ignore
export default function NavLink({ navItem, setNavbarOpen }) {
    const handleClick = () => {
    // Close the navbar when a link is clicked
    setNavbarOpen(false);
  };
  return (
    <Link
      href={navItem.href}
      className="block text-dark_gray rounded text-lg md:text-base lg:text-lg md:p-0 hover:text-muala font-piazzolla text-center"
      onClick={handleClick}
    >
      {navItem.title}
    </Link>
  );
}
