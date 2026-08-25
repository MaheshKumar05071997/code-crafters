"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Home,
  Layers,
  ExternalLink,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Send,
  ArrowUpRight,
} from "lucide-react";

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All Projects");

  useGSAP(
    () => {
      // Header & Stats Card Intro
      gsap.fromTo(
        ".gsap-header",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      );

      // Stagger the Project Cards
      gsap.fromTo(
        ".gsap-project-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
          delay: 0.2,
        },
      );
    },
    { scope: containerRef },
  );

  const filters = [
    "All Projects",
    "Web Applications",
    "Mobile Apps",
    "Dashboards",
    "E-commerce",
  ];

  const projects = [
    {
      id: 1,
      title: "Project Dashboard",
      tags: ["Dashboard", "Analytics"],
      desc: "A comprehensive analytics dashboard with real-time data visualization.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
    {
      id: 2,
      title: "ShopEase",
      tags: ["E-commerce", "Web App"],
      desc: "Modern e-commerce platform with seamless shopping experience.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
    {
      id: 3,
      title: "FinTrack",
      tags: ["Finance", "Mobile App"],
      desc: "Personal finance tracker to manage expenses and savings.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
    {
      id: 4,
      title: "TaskFlow",
      tags: ["Web App", "Admin Panel"],
      desc: "Task management application to boost team productivity.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
    {
      id: 5,
      title: "PayVault",
      tags: ["Fintech", "Dashboard"],
      desc: "Secure payment processing and analytics platform for businesses.",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
    {
      id: 6,
      title: "SkillSphere",
      tags: ["Education", "Web App"],
      desc: "Online learning platform with interactive courses and progress tracking.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
    {
      id: 7,
      title: "HomeHaven",
      tags: ["Real Estate", "Web App"],
      desc: "Real estate listing platform to find properties easily.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
    {
      id: 8,
      title: "MediCare+",
      tags: ["Healthcare", "Dashboard"],
      desc: "Patient management system for clinics and healthcare providers.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
  ];

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#070B14] text-white pt-28 pb-20 font-sans selection:bg-[#00E5B5]/30 relative overflow-hidden"
    >
      {/* Background Glows (Same as Hero) */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-[#00E5B5]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0070f3]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <div className="gsap-header flex items-center gap-2 text-xs md:text-sm font-bold text-[#8B95A5] mb-8">
          <Link
            href="/"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Home size={14} />
          </Link>
          <span>/</span>
          <span className="text-white">Projects</span>
        </div>

        {/* Title & Stats Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="gsap-header max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              All Projects
            </h1>
            <p className="text-[#8B95A5] text-base md:text-lg font-medium leading-relaxed">
              A collection of digital products I've built for clients and
              personal ventures.
            </p>
          </div>

          {/* Stats Card */}
          <div className="gsap-header w-full md:w-auto bg-[#0B0F19] border border-[#1E293B] rounded-2xl p-5 flex items-center gap-5 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-[#00E5B5]/10 flex items-center justify-center border border-[#00E5B5]/20 shrink-0">
              <Layers size={24} className="text-[#00E5B5]" />
            </div>
            <div className="flex flex-col pr-4">
              <span className="text-2xl font-black text-white leading-tight">
                15+
              </span>
              <span className="text-xs font-bold text-[#8B95A5]">
                <span className="text-[#00E5B5]">Projects</span> Delivered
              </span>
            </div>
          </div>
        </div>

        {/* Filters & Sort Row */}
        <div className="gsap-header flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
          {/* Mobile-friendly horizontal scroll for filters */}
          <div className="flex overflow-x-auto hide-scrollbar gap-3 w-full lg:w-auto pb-2 lg:pb-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 border ${
                  activeFilter === filter
                    ? "bg-[#00E5B5] text-[#0B0F19] border-[#00E5B5] shadow-[0_0_15px_rgba(0,229,181,0.2)]"
                    : "bg-[#0B0F19] text-[#8B95A5] border-[#1E293B] hover:text-white hover:border-gray-600"
                }`}
              >
                {filter === "All Projects" && <Layers size={14} />}
                {filter}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-bold text-[#8B95A5]">Sort by:</span>
            <button className="flex items-center gap-2 bg-[#0B0F19] border border-[#1E293B] px-4 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-[#131C2D] transition-colors">
              Latest <ChevronDown size={14} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="gsap-project-card bg-[#0B0F19] border border-[#1E293B] rounded-2xl p-4 hover:border-[#00E5B5]/50 transition-all duration-300 flex flex-col group shadow-lg"
            >
              <div className="h-40 bg-[#131C2D] rounded-xl mb-5 overflow-hidden border border-[#1E293B]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-bold text-[#00E5B5] bg-[#00E5B5]/10 border border-[#00E5B5]/20 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-start mb-2 mt-auto">
                <h3 className="font-extrabold text-base text-white group-hover:text-[#00E5B5] transition-colors line-clamp-1 pr-2">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  className="w-7 h-7 rounded-lg bg-[#131C2D] border border-[#1E293B] flex items-center justify-center text-gray-400 hover:text-[#00E5B5] hover:border-[#00E5B5] transition-colors shrink-0"
                >
                  <ExternalLink size={12} />
                </a>
              </div>

              <p className="text-[#8B95A5] text-xs font-medium leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mb-20">
          <button className="w-8 h-8 rounded-lg bg-[#0B0F19] border border-[#1E293B] flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <ChevronLeft size={16} />
          </button>
          <button className="w-8 h-8 rounded-lg bg-[#00E5B5] text-[#0B0F19] font-bold text-xs shadow-[0_0_10px_rgba(0,229,181,0.3)]">
            1
          </button>
          <button className="w-8 h-8 rounded-lg bg-[#0B0F19] border border-[#1E293B] text-gray-400 font-bold text-xs hover:text-white transition-colors">
            2
          </button>
          <button className="w-8 h-8 rounded-lg bg-[#0B0F19] border border-[#1E293B] text-gray-400 font-bold text-xs hover:text-white transition-colors">
            3
          </button>
          <button className="w-8 h-8 rounded-lg bg-[#0B0F19] border border-[#1E293B] flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Bottom Inner CTA */}
        <div className="bg-gradient-to-r from-[#0B0F19] to-[#131C2D] border border-[#1E293B] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5 w-full md:w-auto">
            <div className="w-14 h-14 rounded-full bg-[#00E5B5]/10 flex items-center justify-center border border-[#00E5B5]/20 shrink-0">
              <Send size={24} className="text-[#00E5B5] ml-1" />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-extrabold text-white mb-1 tracking-tight">
                Have a project in mind?
              </h4>
              <p className="text-[#8B95A5] text-xs md:text-sm font-medium">
                Let's build something amazing together.
              </p>
            </div>
          </div>
          <Link
            href="/#contact"
            className="w-full md:w-auto px-8 py-3.5 bg-[#00E5B5] hover:bg-[#00c99f] text-[#0B0F19] font-bold text-sm rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,229,181,0.2)] active:scale-95"
          >
            Get In Touch <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
