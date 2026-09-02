"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Home } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
    );
  }, []);

  // This function handles the smooth scrolling WITHOUT changing the URL
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open

    if (pathname === "/") {
      // If we are already on the home page, scroll smoothly
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we are on the projects page, redirect to the home page section
      router.push(`/${href}`);
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#070B14]/80 backdrop-blur-xl border-b border-[#1E293B]"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link
            href="/"
            onClick={(e) => {
              // Only prevent default and scroll if already on the Home page
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="text-xl md:text-2xl font-black text-white tracking-tight hover:opacity-80 transition-opacity"
          >
            CODECRAFTERS
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "#home")}
              className="cursor-pointer text-[#00E5B5] text-sm font-bold transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "#about")}
              className="cursor-pointer text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, "#services")}
              className="cursor-pointer text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#work"
              onClick={(e) => handleScroll(e, "#work")}
              className="cursor-pointer text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Work
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleScroll(e, "#testimonials")}
              className="cursor-pointer text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#blog"
              onClick={(e) => handleScroll(e, "#blog")}
              className="cursor-pointer text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Blog
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="cursor-pointer px-6 py-2.5 bg-[#00E5B5] hover:bg-[#00c99f] text-[#0B0F19] text-sm font-bold rounded-full transition-all shadow-[0_0_15px_rgba(0,229,181,0.2)] flex items-center gap-1"
            >
              Hire Me
            </a>
          </div>

          {/* MOBILE MENU BUTTONS */}
          <div className="md:hidden flex items-center gap-5">
            <Link
              href="/"
              className="text-gray-300 hover:text-[#00E5B5] transition-colors"
            >
              <Home size={22} />
            </Link>
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
          <div className="md:hidden bg-slate-900 border-t border-gray-800 shadow-xl rounded-b-2xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <a
                href="#work"
                onClick={(e) => handleScroll(e, "#work")}
                className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              >
                Work
              </a>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "#services")}
                className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              >
                Services
              </a>
              {/* Added Missing ABOUT Link */}
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="block px-3 py-3 text-teal-400 font-bold bg-slate-800/50 rounded-md mt-2"
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
