import Link from "next/link";
import { Code2, Mail } from "lucide-react";

const Linkedin = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#070B14] text-white pt-20 pb-8 border-t border-[#1E293B]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6 mb-16">
          {/* Column 1: Brand & About */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl md:text-2xl font-black text-white tracking-tight hover:opacity-80 transition-opacity mb-4 inline-block"
            >
              CODECRAFTERS
            </Link>
            <p className="text-[#8B95A5] text-sm leading-relaxed max-w-sm mb-6 font-medium">
              Building fast, reliable, and modern web applications that help
              businesses grow.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#131C2D] border border-[#1E293B] flex items-center justify-center text-gray-400 hover:text-[#00E5B5] hover:border-[#00E5B5] transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#131C2D] border border-[#1E293B] flex items-center justify-center text-gray-400 hover:text-[#00E5B5] hover:border-[#00E5B5] transition-all"
              >
                <Code2 size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#131C2D] border border-[#1E293B] flex items-center justify-center text-gray-400 hover:text-[#00E5B5] hover:border-[#00E5B5] transition-all"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#131C2D] border border-[#1E293B] flex items-center justify-center text-gray-400 hover:text-[#00E5B5] hover:border-[#00E5B5] transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-[#8B95A5]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#00E5B5] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="hover:text-[#00E5B5] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-[#00E5B5] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#00E5B5] transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#blog"
                  className="hover:text-[#00E5B5] transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Services</h4>
            <ul className="space-y-4 text-sm font-medium text-[#8B95A5]">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#00E5B5] transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#00E5B5] transition-colors"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#00E5B5] transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#00E5B5] transition-colors"
                >
                  API Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#00E5B5] transition-colors"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Resources</h4>
            <ul className="space-y-4 text-sm font-medium text-[#8B95A5]">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#00E5B5] transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#00E5B5] transition-colors"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#00E5B5] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#00E5B5] transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-[#00E5B5] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Let's Connect */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">Let's Connect</h4>
            <ul className="space-y-4 text-sm font-medium text-[#8B95A5]">
              <li className="hover:text-[#00E5B5] transition-colors cursor-pointer">
                aditya.adiverma.verma@gmail.com
              </li>
              <li className="hover:text-[#00E5B5] transition-colors cursor-pointer">
                +91 98805 67308
              </li>
              <li>India</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1E293B] pt-8 flex items-center justify-center text-[#8B95A5] text-xs font-medium text-center px-4">
          2025 CodeCrafters. Designed & Developed by Mahesh Kumar Vishwakarma.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
