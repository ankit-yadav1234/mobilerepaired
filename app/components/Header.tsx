"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path) =>
    pathname === path
      ? "text-green-600 font-medium"
      : "text-neutral-700 hover:text-green-600 transition";

  return (
    <header className="w-full fixed top-0 left-0 z-40 bg-neutral-50/80 backdrop-blur-sm border-b border-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-400" />
          <div className="text-lg font-roboto">
            <span className="font-light">Site</span>
            <span className="font-medium">Logo</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
          <Link href="/faq" className={linkClass("/faq")}>FAQs</Link>
        </nav>

        {/* Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/book"
            className="hidden sm:inline-block px-4 py-2 rounded-lg bg-emerald-400 text-white text-sm font-semibold"
          >
            Book a Repair
          </Link>

          <button className="md:hidden" aria-label="Open menu">☰</button>
        </div>
      </div>
    </header>
  );
}

