"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Smartphone, Globe, Zap, ArrowRight, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {
  const expertiseRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-expertise-col",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: expertiseRef.current,
            start: "top 80%",
          },
        },
      );
    },
    { scope: expertiseRef },
  );

  return (
    <section
      id="services"
      ref={expertiseRef}
      className="pt-28 pb-32 bg-white text-[#0B0F19] relative font-sans"
    >
      {/* Subtle Dotted Background (Matches the image) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0B0F19 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[#00E5B5] font-bold text-xs tracking-[0.2em] uppercase mb-4">
            WHAT I DO
          </p>
          <h2 className="text-4xl md:text-[2.75rem] font-extrabold text-[#0B0F19] mb-6 tracking-tight">
            Technical Expertise<span className="text-[#00E5B5]">.</span>
          </h2>
          <p className="text-gray-500 text-base font-medium">
            I help businesses grow by building software that actually works.
          </p>
        </div>

        {/* 3 Columns Grid with CSS Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative mb-32">
          {/* Horizontal Dotted Connector Line (Matches your design) */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] border-t-[3px] border-dotted border-gray-300 z-0 opacity-60"></div>

          {/* Service 1 */}
          <div className="gsap-expertise-col flex flex-col items-center text-center px-4 md:px-8 relative group">
            <div className="w-16 h-16 rounded-full border-2 border-[#00E5B5]/30 flex items-center justify-center text-[#00E5B5] mb-6 bg-white group-hover:bg-[#00E5B5] group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,229,181,0.15)]">
              <Smartphone size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-[#00E5B5] font-black text-2xl mb-2">01</h3>
            <h4 className="text-lg font-extrabold text-[#0B0F19] mb-4">
              Mobile App Development
            </h4>
            <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8 max-w-[280px]">
              Native Android apps built with Kotlin. High performance, offline
              capabilities, and smooth UI/UX.
            </p>
            <button className="mt-auto flex items-center justify-center gap-2 text-xs font-bold text-[#00E5B5] border border-[#00E5B5]/30 px-6 py-2.5 rounded-full hover:bg-[#00E5B5] hover:text-white transition-all shadow-sm">
              Explore Services <ArrowRight size={14} />
            </button>
          </div>

          {/* Service 2 */}
          <div className="gsap-expertise-col flex flex-col items-center text-center px-4 md:px-8 relative group">
            <div className="w-16 h-16 rounded-full border-2 border-[#00E5B5]/30 flex items-center justify-center text-[#00E5B5] mb-6 bg-white group-hover:bg-[#00E5B5] group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,229,181,0.15)]">
              <Globe size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-[#00E5B5] font-black text-2xl mb-2">02</h3>
            <h4 className="text-lg font-extrabold text-[#0B0F19] mb-4">
              Web Development
            </h4>
            <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8 max-w-[280px]">
              Modern websites and web apps using React & Next.js, Fast,
              SEO-optimized, and fully responsive.
            </p>
            <button className="mt-auto flex items-center justify-center gap-2 text-xs font-bold text-[#00E5B5] border border-[#00E5B5]/30 px-6 py-2.5 rounded-full hover:bg-[#00E5B5] hover:text-white transition-all shadow-sm">
              Explore Services <ArrowRight size={14} />
            </button>
          </div>

          {/* Service 3 */}
          <div className="gsap-expertise-col flex flex-col items-center text-center px-4 md:px-8 group">
            <div className="w-16 h-16 rounded-full border-2 border-[#00E5B5]/30 flex items-center justify-center text-[#00E5B5] mb-6 bg-white group-hover:bg-[#00E5B5] group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,229,181,0.15)]">
              <Zap size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-[#00E5B5] font-black text-2xl mb-2">03</h3>
            <h4 className="text-lg font-extrabold text-[#0B0F19] mb-4">
              Business Automation
            </h4>
            <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8 max-w-[280px]">
              Custom scripts and tools to automate boring tasks (Billing,
              Attendance, Reports) so you save time.
            </p>
            <button className="mt-auto flex items-center justify-center gap-2 text-xs font-bold text-[#00E5B5] border border-[#00E5B5]/30 px-6 py-2.5 rounded-full hover:bg-[#00E5B5] hover:text-white transition-all shadow-sm">
              Explore Services <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Floating Bottom CTA */}
        <div className="gsap-expertise-col max-w-4xl mx-auto bg-[#F8FAFC] rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-gray-200 relative mt-12 z-20">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#E6F9F5] border border-[#00E5B5]/20 flex items-center justify-center shrink-0 shadow-inner">
              <Rocket size={28} className="text-[#00E5B5]" />
            </div>
            <p className="text-[#0B0F19] font-medium text-sm md:text-base leading-relaxed">
              Got an idea? I can help turn it into a
              <br className="hidden md:block" /> reliable and scalable digital
              product.
            </p>
          </div>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full md:w-auto px-8 py-4 bg-[#00E5B5] hover:bg-[#00c99f] text-[#0B0F19] font-extrabold text-sm rounded-xl border-2 border-[#0B0F19] transition-all shadow-[0_8px_20px_rgba(0,229,181,0.3)] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 shrink-0"
          >
            Let's Work Together <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
