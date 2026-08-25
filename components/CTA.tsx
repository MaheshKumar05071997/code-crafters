"use client";

import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-cta",
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
          },
        },
      );
    },
    { scope: ctaRef },
  );
  return (
    <section ref={ctaRef} className="py-20 bg-[#070B14] text-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="gsap-cta relative bg-gradient-to-r from-[#0B0F19] to-[#131C2D] border border-[#1E293B] rounded-[2rem] p-10 md:p-16 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Subtle Glow Background */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#00E5B5]/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
              Have a project in mind?
            </h2>
            <p className="text-[#8B95A5] text-lg md:text-xl font-medium">
              Let's build something amazing together.
            </p>
          </div>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="relative z-10 px-10 py-4 bg-[#00E5B5] hover:bg-[#00c99f] text-[#0B0F19] font-bold text-lg rounded-full transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,229,181,0.2)] hover:shadow-[0_0_30px_rgba(0,229,181,0.4)] hover:-translate-y-1 active:scale-95"
          >
            Get In Touch
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
