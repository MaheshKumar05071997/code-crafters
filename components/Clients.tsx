import {
  ChevronLeft,
  ChevronRight,
  Shield,
  ShoppingBag,
  PieChart,
  HeartPulse,
} from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Clients() {
  const clientsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-client-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: clientsRef.current,
            start: "top 80%",
          },
        },
      );
    },
    { scope: clientsRef },
  );
  const clients = [
    {
      name: "TechNova",
      type: "SaaS Platform",
      desc: "Built a scalable SaaS platform that helps teams manage projects efficiently.",
      iconBg: "bg-blue-600",
      icon: <Shield size={24} className="text-white" />,
    },
    {
      name: "GrowMart",
      type: "E-commerce",
      desc: "Developed a modern e-commerce store that increased sales by 60%.",
      iconBg: "bg-green-500",
      icon: <ShoppingBag size={24} className="text-white" />,
    },
    {
      name: "FinEdge",
      type: "Fintech App",
      desc: "Created a secure fintech dashboard for real-time analytics and reporting.",
      iconBg: "bg-purple-500",
      icon: <PieChart size={24} className="text-white" />,
    },
    {
      name: "HealthPlus",
      type: "Healthcare",
      desc: "Designed & built a patient management system for clinics and doctors.",
      iconBg: "bg-red-500",
      icon: <HeartPulse size={24} className="text-white" />,
    },
  ];

  return (
    <section ref={clientsRef} className="py-16 bg-[#070B14] text-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center relative">
        <p className="text-[#00E5B5] text-[10px] font-bold tracking-widest uppercase mb-3">
          Trusted by Businesses
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Some of the amazing clients I've worked with
        </h2>

        <div className="relative flex items-center group">
          {/* Left Arrow (Hidden on mobile for native scroll) */}
          <button className="hidden md:flex absolute -left-12 w-10 h-10 items-center justify-center rounded-full bg-[#131C2D] border border-[#1E293B] hover:border-[#00E5B5] text-gray-400 hover:text-white transition-all z-10">
            <ChevronLeft size={20} />
          </button>

          {/* Cards Container */}
          <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 pb-6 md:pb-0 snap-x snap-mandatory hide-scrollbar w-full pt-4">
            {clients.map((client, i) => (
              <div
                key={i}
                className="gsap-client-card bg-[#0B0F19] border border-[#1E293B] rounded-3xl p-8 text-left min-w-[300px] md:min-w-0 snap-center hover:border-[#00E5B5]/50 transition-all hover:-translate-y-2 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white ${client.iconBg}`}
                  >
                    {client.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{client.name}</h3>
                    <p className="text-xs text-[#8B95A5]">{client.type}</p>
                  </div>
                </div>
                <p className="text-sm text-[#8B95A5] leading-relaxed">
                  {client.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden md:flex absolute -right-12 w-10 h-10 items-center justify-center rounded-full bg-[#131C2D] border border-[#1E293B] hover:border-[#00E5B5] text-gray-400 hover:text-white transition-all z-10">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
