import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

// --- SEO CONFIGURATION ---
export const metadata: Metadata = {
  // 1. Base URL (Important for images/links to work on social media)
  metadataBase: new URL("https://code-crafters-peach.vercel.app"),

  // 2. Title Template (Appears in Browser Tab & Google Search)
  title: {
    default: "Code Crafters | Digital Product Development",
    template: "%s | Code Crafters",
  },

  // 3. Description (The grey text under the blue link in Google)
  description:
    "Expert Android & Web Developer in Bangalore. I build custom business apps, bill reminders, attendance portals, and professional websites for small businesses.",

  // 4. Keywords (What people search for)
  keywords: [
    "Android Developer Bangalore",
    "Web Developer Freelance",
    "Custom Business Apps",
    "Next.js Developer India",
    "Bill Reminder App Developer",
    "Staff Attendance System",
    "Small Business Automation",

    // Your Name & Brand (So people find YOU)
    "Mahesh Kumar",
    "Mahesh",
    "Mahesh Vishwakarma",
    "Mahesh Kumar Vishwakarma",
    "Mahesh Kumar Developer",
    "Mahesh Code Crafters",
    "Code Crafters Agency",
  ],

  // 5. Authors & Creator
  authors: [
    {
      name: "Code Crafters Team",
      url: "https://code-crafters-peach.vercel.app",
    },
  ],
  creator: "Code Crafters",

  // 6. Open Graph (How your link looks on WhatsApp/LinkedIn/Facebook)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://code-crafters.vercel.app",
    title: "Code Crafters | Digital Product Development",
    description: "We build apps that solve real business problems.",
    siteName: "Code Crafters",
    images: [
      {
        url: "/profile_image.jpg", // This image will show when you share the link
        width: 1200,
        height: 630,
        alt: "Mahesh Kumar Portfolio",
      },
    ],
  },

  // 7. Twitter Card (How it looks on Twitter/X)
  twitter: {
    card: "summary_large_image",
    title: "Mahesh Kumar | Full Stack Developer",
    description: "Building custom apps for business growth.",
    images: [
      {
        url: "/profile_image.jpg",
        width: 1200,
        height: 630,
        alt: "Code Crafters Portfolio",
      },
    ],
  },

  // 8. Robots (Tell Google it's okay to scan this site)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0B0F19]`}>
        <Navbar />

        {/* RUNNING BANNER (Fixed right below the Navbar) */}
        <div className="fixed top-20 left-0 w-full bg-[#070B14]/90 backdrop-blur-md py-3 z-40 overflow-hidden border-b border-t border-[#1E293B] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="animate-marquee hover:[animation-play-state:paused] flex items-center gap-8 md:gap-16 pl-4">
            {/* --- FIRST SET --- */}
            <div className="flex items-center gap-8 md:gap-16 whitespace-nowrap">
              <span className="flex items-center gap-2 text-[#8B95A5] text-xs md:text-sm font-medium tracking-wide">
                <span className="flex h-2 w-2 rounded-full bg-[#00E5B5] shadow-[0_0_8px_#00E5B5] animate-pulse"></span>
                Call Now:{" "}
                <span className="text-white font-bold">9880567308</span>
              </span>
              <span className="flex items-center gap-2 text-[#8B95A5] text-xs md:text-sm font-medium tracking-wide">
                <span className="text-lg">🚀</span>
                Get a Website starting from{" "}
                <span className="text-[#00E5B5] font-extrabold px-2 py-0.5 rounded-md bg-[#00E5B5]/10 border border-[#00E5B5]/20">
                  10k
                </span>{" "}
                + Free 1 Yr Domain
              </span>
              <span className="flex items-center gap-2 text-[#8B95A5] text-xs md:text-sm font-medium tracking-wide">
                <span className="text-lg">⚡</span>
                Web Apps starting from{" "}
                <span className="text-[#00E5B5] font-extrabold px-2 py-0.5 rounded-md bg-[#00E5B5]/10 border border-[#00E5B5]/20">
                  25k
                </span>{" "}
                + Complimentary Website
              </span>
            </div>

            {/* --- SECOND SET (Exact duplicate for a seamless infinite loop) --- */}
            <div className="flex items-center gap-8 md:gap-16 whitespace-nowrap">
              <span className="flex items-center gap-2 text-[#8B95A5] text-xs md:text-sm font-medium tracking-wide">
                <span className="flex h-2 w-2 rounded-full bg-[#00E5B5] shadow-[0_0_8px_#00E5B5] animate-pulse"></span>
                Call Now:{" "}
                <span className="text-white font-bold">9880567308</span>
              </span>
              <span className="flex items-center gap-2 text-[#8B95A5] text-xs md:text-sm font-medium tracking-wide">
                <span className="text-lg">🚀</span>
                Get a Website starting from{" "}
                <span className="text-[#00E5B5] font-extrabold px-2 py-0.5 rounded-md bg-[#00E5B5]/10 border border-[#00E5B5]/20">
                  10k
                </span>{" "}
                + Free 1 Yr Domain
              </span>
              <span className="flex items-center gap-2 text-[#8B95A5] text-xs md:text-sm font-medium tracking-wide">
                <span className="text-lg">⚡</span>
                Web Apps starting from{" "}
                <span className="text-[#00E5B5] font-extrabold px-2 py-0.5 rounded-md bg-[#00E5B5]/10 border border-[#00E5B5]/20">
                  25k
                </span>{" "}
                + Complimentary Website
              </span>
            </div>
          </div>
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
