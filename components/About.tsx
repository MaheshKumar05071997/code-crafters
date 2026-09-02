"use client";

import { Clock, Headphones, ShieldCheck, Users, Star } from "lucide-react";
import { useState, useEffect } from "react";

export default function About() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const phrases = [
    "Developer.",
    "Freelancer.",
    "One Stop Solution.",
    "Here For Your Support.",
  ];
  const colors = [
    "text-[#00E5B5]",
    "text-[#3B82F6]",
    "text-[#A855F7]",
    "text-[#F59E0B]",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );
      setTypingSpeed(isDeleting ? 50 : 120);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-white text-[#0B0F19] relative overflow-hidden font-sans"
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0B0F19 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        {/* LEFT SIDE: Image, Floating Badge & Typing Effect */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-10 lg:mt-0">
          {/* Wrapper to contain the absolute badge and image properly so it NEVER overlaps */}
          <div className="relative w-full max-w-[380px] mb-16 md:mb-20">
            {/* Light Green Circular Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-[#E6F9F5] rounded-full -z-10"></div>

            <div className="relative z-10 w-full rounded-[2.5rem] overflow-hidden bg-transparent">
              <img
                src="/profile_image.jpg"
                alt="Mahesh Kumar Vishwakarma - Full Stack Developer in Bangalore"
                className="w-full h-auto object-cover rounded-[2.5rem] shadow-xl"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-2 md:-left-10 bg-white p-5 md:p-6 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] flex items-center gap-4 z-20 w-[220px]">
              <div className="w-12 h-12 rounded-full bg-[#E6F9F5] border border-[#00E5B5]/20 flex items-center justify-center shrink-0">
                <Star size={24} className="text-[#00E5B5]" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-[#0B0F19] leading-none">
                  8+
                </h4>
                <p className="text-xs text-gray-500 font-medium mt-1">
                  Years of
                  <br />
                  Experience
                </p>
              </div>
            </div>
          </div>

          {/* Typing Effect Text - Centered, Larger, and Spaced */}
          <div className="z-20 text-center w-full max-w-[380px] font-black text-3xl md:text-4xl text-[#0B0F19] leading-snug">
            I am <br className="md:hidden" />
            <span className={colors[loopNum % colors.length]}>{text}</span>
            <span className="animate-pulse font-light text-gray-400">|</span>
          </div>
        </div>
        {/* RIGHT SIDE: Text & Stats Grid */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <p className="text-[#00E5B5] font-bold text-xs tracking-[0.2em] uppercase mb-4">
            ABOUT ME
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#0B0F19] mb-4 tracking-tight leading-[1.1]">
            Focused on <span className="text-[#00E5B5]">Results</span>,<br />
            Not Just Code.
          </h2>

          {/* Small green divider */}
          <div className="w-12 h-1 bg-[#00E5B5] mb-8 rounded-full"></div>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
            I'm <strong>Mahesh Kumar Vishwakarma</strong>, a Full Stack
            Developer who understands that you need more than just software you
            need a solution that saves you time and money.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-12">
            Starting with 8+ successful apps for local businesses, I have
            learned that the most important features are <strong>speed</strong>,{" "}
            <strong>stability</strong>, and <strong>simplicity</strong>. Whether
            it's a bill reminder or a complex attendance system, I build tools
            that work smoothly from Day 1.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Feature 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,229,181,0.12)] transition-shadow">
              <div className="mb-3 text-[#00E5B5]">
                <Clock size={28} strokeWidth={1.5} />
              </div>
              <h4 className="font-extrabold text-sm text-[#0B0F19] mb-1">
                On-Time
              </h4>
              <p className="text-xs text-gray-500 font-medium">Delivery</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,229,181,0.12)] transition-shadow">
              <div className="mb-3 text-[#00E5B5]">
                <Headphones size={28} strokeWidth={1.5} />
              </div>
              <h4 className="font-extrabold text-sm text-[#0B0F19] mb-1">
                24/7
              </h4>
              <p className="text-xs text-gray-500 font-medium">Support</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,229,181,0.12)] transition-shadow">
              <div className="mb-3 text-[#00E5B5]">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <h4 className="font-extrabold text-sm text-[#0B0F19] mb-1">
                Quality
              </h4>
              <p className="text-xs text-gray-500 font-medium">Assured</p>
            </div>
            {/* Feature 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,229,181,0.12)] transition-shadow">
              <div className="mb-3 text-[#00E5B5]">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <h4 className="font-extrabold text-sm text-[#0B0F19] mb-1">
                Client
              </h4>
              <p className="text-xs text-gray-500 font-medium">Focused</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
