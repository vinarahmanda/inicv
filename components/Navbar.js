"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <ul>
        <li className={pathname === "/" ? "active" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/about" ? "active" : ""}>
          <Link href="/about">About</Link>
        </li>
        <li className={pathname === "/skills" ? "active" : ""}>
          <Link href="/skills">Skills</Link>
        </li>
        <li className={pathname === "/services" ? "active" : ""}>
          <Link href="/services">Services</Link>
        </li>
        <li className={pathname === "/portfolio" ? "active" : ""}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className={pathname === "/contact" ? "active" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
