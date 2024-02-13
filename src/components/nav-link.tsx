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
      className="block text-dark_gray rounded text-2xl md:text-lg lg:text-xl md:p-0 hover:text-muala font-abhaya_libre"
      onClick={handleClick}
    >
      {navItem.title}
    </Link>
  );
}
