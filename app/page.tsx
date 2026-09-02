"use client";
import Stats from "../components/Stats";
import Clients from "../components/Clients";
import Work from "../components/Work";
import Expertise from "../components/Expertise";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import About from "../components/About";
import HeroAnimation from "../components/HeroAnimation";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-hero-item",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      );
      gsap.fromTo(
        ".gsap-hero-img",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, delay: 0.2, ease: "expo.out" },
      );
    },
    { scope: container },
  );

  // Custom scroll function for buttons
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- SEO: STRUCTURED DATA ---
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Code Crafters",
      url: "https://code-crafters-peach.vercel.app",
      logo: "https://code-crafters-peach.vercel.app/profile_image.jpg",
      telephone: "+91-9880567308",
      description:
        "Digital Product Development by Mahesh Kumar Vishwakarma specializing in Business Automation.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mahesh Kumar Vishwakarma",
      alternateName: ["Mahesh Kumar", "Mahesh Vishwakarma"],
      url: "https://code-crafters-peach.vercel.app",
      image: "https://code-crafters-peach.vercel.app/profile_image.jpg",
      jobTitle: "Full Stack Web and Android Developer",
      worksFor: {
        "@type": "Organization",
        name: "Code Crafters",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-teal-500/30">
      {/* --- SEO SCRIPT INJECTION --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION */}
      {/* 1. HERO SECTION */}
      <section
        id="home"
        ref={container}
        className="min-h-screen flex flex-col items-center justify-center px-6 pb-6 pt-32 md:p-12 relative overflow-hidden bg-[#070B14]"
      >
        {/* Background Glows */}
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#00E5B5]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#0070f3]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="z-10 max-w-screen-xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 font-sans mt-10">
          {/* LEFT SIDE: Text */}
          <div className="lg:w-[60%] flex flex-col items-start space-y-6 text-left">
            {/* FULL STACK DEVELOPER LABEL */}
            <div className="gsap-hero-item flex items-center gap-2 px-4 py-2 rounded-full bg-[#131C2D] border border-[#1E293B] w-fit shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#00E5B5]"></div>
              <span className="text-[10px] md:text-xs text-[#00E5B5] font-bold tracking-[0.2em] uppercase">
                FULL STACK DEVELOPER
              </span>
            </div>

            <h1 className="gsap-hero-item text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold text-white leading-[1.1] tracking-tight">
              Turn Your <br className="hidden md:block" />
              Business Goals Into <br />
              <span className="animate-shimmer bg-[linear-gradient(110deg,#00E5B5,45%,#ffffff,55%,#0070f3)] bg-[length:200%_100%] text-transparent bg-clip-text">
                Digital Success.
              </span>
            </h1>

            <p className="gsap-hero-item text-[#8B95A5] text-base md:text-lg max-w-xl leading-relaxed font-medium">
              I'm a Full Stack Developer who helps businesses turn ideas into
              powerful digital products. I focus on performance, reliability,
              and clean code to deliver solutions that matter.
            </p>

            <div className="gsap-hero-item flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#00E5B5] hover:bg-[#00c99f] text-[#0B0F19] text-sm font-bold rounded-full transition-all shadow-[0_0_20px_rgba(0,229,181,0.2)] hover:shadow-[0_0_30px_rgba(0,229,181,0.4)]"
              >
                Let's Work Together <ArrowUpRight size={18} />
              </button>
              <a
                href="/projects"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#00E5B5] bg-[#00E5B5]/10 hover:bg-[#00E5B5]/20 text-[#00E5B5] text-sm font-extrabold rounded-full transition-all shadow-[0_0_20px_rgba(0,229,181,0.3)] hover:shadow-[0_0_30px_rgba(0,229,181,0.5)] scale-105"
              >
                View My Work <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: HERO ANIMATION */}
          <div className="gsap-hero-img lg:w-[40%] flex justify-center lg:justify-end relative mt-12 lg:mt-0 w-full">
            <div className="relative w-full max-w-[500px]">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Clients />
      <About />
      <Work />
      <Expertise />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  );
}
