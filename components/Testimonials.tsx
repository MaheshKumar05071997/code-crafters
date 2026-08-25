"use client";

import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const testRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rohit Sharma",
      role: "CTO, TechNova",
      text: "Working with CodeCrafters was an absolute pleasure. They delivered a high-quality product on time and exceeded our expectations. Highly recommended!",
      img: "/profile_image.jpg",
    },
    {
      name: "Anjali Desai",
      role: "Founder, GrowMart",
      text: "The e-commerce platform they built for us completely transformed our business. Sales are up 60% and the site is incredibly fast on mobile.",
      img: "/profile_image.jpg",
    },
    {
      name: "Vikram Singh",
      role: "Director, FinEdge",
      text: "Their expertise in secure dashboard development is unmatched. We now have real-time analytics that our entire team relies on daily.",
      img: "/profile_image.jpg",
    },
    {
      name: "Priya Mehta",
      role: "Manager, HealthPlus",
      text: "They understood our healthcare requirements perfectly. The patient management system is intuitive, secure, and has saved us hundreds of hours.",
      img: "/profile_image.jpg",
    },
    {
      name: "Rahul Verma",
      role: "CEO, InnovateX",
      text: "A rare mix of technical brilliance and business understanding. The custom automation scripts they wrote cut our manual work in half.",
      img: "/profile_image.jpg",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-test-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testRef.current,
            start: "top 80%",
          },
        },
      );
    },
    { scope: testRef },
  );
  return (
    <section
      id="testimonials"
      ref={testRef}
      className="py-24 bg-[#070B14] text-white"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex items-center justify-center relative">
        <button
          onClick={handlePrev}
          className="hidden md:flex absolute left-4 w-12 h-12 items-center justify-center rounded-full bg-[#0B0F19] border border-[#1E293B] hover:border-[#00E5B5] hover:text-[#00E5B5] text-gray-400 transition-all z-20 shadow-lg hover:scale-110 active:scale-95"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="gsap-test-card bg-[#0B0F19] border border-[#1E293B] rounded-[2rem] p-8 md:p-14 w-full max-w-5xl flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Glow inside the card */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00E5B5]/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="text-[#00E5B5] md:absolute md:top-12 md:left-10 opacity-30">
            <Quote size={50} className="fill-current" />
          </div>

          <div className="md:pl-16 flex-1 text-center md:text-left relative z-10">
            <div className="min-h-[140px] md:min-h-[120px] mb-8 flex items-center justify-center md:justify-start">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium">
                "{testimonials[currentIndex].text}"
              </p>
            </div>
            {/* Dots */}
            <div className="flex justify-center md:justify-start gap-2">
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? "w-8 bg-[#00E5B5]"
                      : "w-2 bg-[#1E293B] hover:bg-gray-600"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-center md:items-start gap-4 border-t md:border-t-0 md:border-l border-[#1E293B] pt-8 md:pt-0 md:pl-10 w-full md:w-auto relative z-10">
            <div className="w-20 h-20 rounded-full bg-[#131C2D] overflow-hidden border-2 border-[#1E293B] shadow-inner p-1">
              <img
                src="/profile_image.jpg"
                alt="Client"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-extrabold text-white text-lg">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-sm font-medium text-[#8B95A5] mb-2">
                {testimonials[currentIndex].role}
              </p>
              <div className="flex text-yellow-500 gap-1 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="hidden md:flex absolute right-4 w-12 h-12 items-center justify-center rounded-full bg-[#0B0F19] border border-[#1E293B] hover:border-[#00E5B5] hover:text-[#00E5B5] text-gray-400 transition-all z-20 shadow-lg hover:scale-110 active:scale-95"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
