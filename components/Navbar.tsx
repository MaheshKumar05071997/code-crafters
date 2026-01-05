"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // This function handles the smooth scrolling WITHOUT changing the URL
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault(); // <--- This stops the URL from changing to /#work
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-900/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-2xl font-bold text-white tracking-tighter hover:text-teal-400 transition-colors"
          >
            CODE<span className="text-teal-500">CRAFTERS</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#work"
              onClick={(e) => handleScroll(e, "#work")}
              className="cursor-pointer text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Work
            </a>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, "#services")}
              className="cursor-pointer text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "#about")}
              className="cursor-pointer text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="cursor-pointer px-5 py-2 bg-teal-500 hover:bg-teal-600 text-black text-sm font-bold rounded-full transition-all shadow-[0_0_10px_rgba(45,212,191,0.3)]"
            >
              Hire Me
            </a>
          </div>

          {/* MOBILE MENU BUTTON (Hamburger) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {isOpen && (
          <div className="md:hidden bg-slate-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#work"
                onClick={(e) => handleScroll(e, "#work")}
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              >
                Work
              </a>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "#services")}
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              >
                Services
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="block px-3 py-2 text-teal-400 font-bold"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
