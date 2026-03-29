"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const linkClass = (path: string) =>
    pathname === path
      ? "text-emerald-600 font-bold"
      : "text-neutral-600 hover:text-emerald-500 transition-colors font-semibold";

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-[60] bg-white/90 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group transition-transform active:scale-95">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-400 rotate-12 flex items-center justify-center shadow-lg shadow-emerald-200 group-hover:rotate-0 transition-all duration-300">
               <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
               </svg>
            </div>
            <div className="text-xl tracking-tight">
              <span className="font-extrabold text-neutral-900">Mobile</span>
              <span className="font-medium text-emerald-500">Repaired</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10 text-sm">
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/about" className={linkClass("/about")}>About</Link>
            <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
            <Link href="/faq" className={linkClass("/faq")}>FAQs</Link>
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-4">
            <Link
              href="/book"
              className="hidden sm:inline-block px-7 py-3 rounded-2xl bg-emerald-500 text-white text-sm font-bold shadow-lg shadow-emerald-100 hover:bg-emerald-600 hover:-translate-y-0.5 transition-all"
            >
              Book a Repair
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? "bg-neutral-900 rotate-45 translate-y-2" : "bg-neutral-900"}`} />
              <div className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? "bg-neutral-900 opacity-0" : "bg-neutral-900"}`} />
              <div className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? "bg-neutral-900 -rotate-45 -translate-y-2" : "bg-neutral-900"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay with Side Drawer */}
      {isMenuOpen && (
        <>
          {/* Backdrop (Dimmer) */}
          <div 
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm lg:hidden animate-in fade-in duration-300"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Side Drawer */}
          <div className="fixed inset-y-0 right-0 z-[110] w-[65%] max-w-[300px] bg-[#0f172a] lg:hidden animate-in slide-in-from-right duration-500 flex flex-col p-10">
            {/* Close Button Inside Drawer */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 active:scale-90 transition-all"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="mt-16 flex flex-col gap-10">
              <Link href="/" className="text-xl font-extrabold text-white hover:text-emerald-400 transition-colors">Home</Link>
              <Link href="/about" className="text-xl font-extrabold text-white hover:text-emerald-400 transition-colors">About</Link>
              <Link href="/contact" className="text-xl font-extrabold text-white hover:text-emerald-400 transition-colors">Contact</Link>
              <Link href="/faq" className="text-xl font-extrabold text-white hover:text-emerald-400 transition-colors">FAQs</Link>
              
              <div className="mt-10 pt-10 border-t border-white/10">
                <Link
                  href="/book"
                  className="w-full py-4 px-6 rounded-2xl bg-emerald-500 text-white text-center text-lg font-black shadow-lg shadow-emerald-500/20 active:scale-95 transition-all inline-block"
                >
                  Book a Repair
                </Link>
              </div>
            </nav>

            {/* Bottom Signature */}
            <div className="mt-auto flex items-center gap-2 opacity-30 grayscale">
               <span className="font-black text-xs text-white uppercase tracking-widest">MobileRepaired</span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
