import { User, Briefcase, Heart, ShieldCheck } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-stat-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        },
      );
    },
    { scope: statsRef },
  );
  const stats = [
    {
      icon: <User size={24} strokeWidth={1.5} />,
      value: "8+",
      label: "Years Experience",
    },
    {
      icon: <Briefcase size={24} strokeWidth={1.5} />,
      value: "15+",
      label: "Projects Delivered",
    },
    {
      icon: <Heart size={24} strokeWidth={1.5} />,
      value: "10+",
      label: "Happy Clients",
    },
    {
      icon: <ShieldCheck size={24} strokeWidth={1.5} />,
      value: "100%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section
      ref={statsRef}
      className="max-w-screen-xl mx-auto px-6 md:px-12 -mt-16 md:-mt-12 relative z-20 mb-20 bg-[#070B14]"
    >
      <div className="bg-[#0B0F19]/90 backdrop-blur-xl border border-[#1E293B] rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="gsap-stat-item flex items-center gap-5 w-full md:w-auto md:border-r border-[#1E293B] md:pr-10 last:border-0 last:pr-0"
          >
            <div className="w-14 h-14 shrink-0 rounded-full bg-[#131C2D] border border-[#1E293B] flex items-center justify-center text-[#00E5B5] shadow-inner">
              {stat.icon}
            </div>
            <div className="flex flex-col">
              <h3 className="text-3xl font-extrabold text-white leading-tight">
                {stat.value}
              </h3>
              <p className="text-[#8B95A5] text-sm font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
