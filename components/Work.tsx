"use client";

import {
  ArrowUpRight,
  Smartphone,
  Monitor,
  Code,
  Rocket,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const workRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const filters = [
    "All Projects",
    "Web Applications",
    "Mobile Apps",
    "Dashboards",
    "E-commerce",
    "SaaS",
    "Business Automation",
  ];

  // Fetch Live Projects
  useEffect(() => {
    async function fetchFeaturedProjects() {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;
        setProjects(data || []);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFeaturedProjects();
  }, []);

  useGSAP(
    () => {
      if (!loading) {
        gsap.fromTo(
          ".gsap-work-card",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: workRef.current,
              start: "top 80%",
            },
          },
        );
      }
    },
    { scope: workRef, dependencies: [loading, activeFilter] },
  );

  // Keep colors exactly the same dynamically based on project type
  const getProjectStyle = (type: string) => {
    if (type === "Mobile Apps") {
      return {
        icon: <Smartphone size={20} className="text-[#059669]" />,
        bg: "bg-[#ECFDF5]",
        tagColor: "text-[#059669] bg-[#D1FAE5]",
        btnColor: "text-[#059669] hover:bg-[#D1FAE5]",
      };
    } else if (
      ["Web Applications", "Dashboards", "SaaS", "E-commerce"].includes(type)
    ) {
      return {
        icon: <Monitor size={20} className="text-[#6D28D9]" />,
        bg: "bg-[#F5F3FF]",
        tagColor: "text-[#6D28D9] bg-[#EDE9FE]",
        btnColor: "text-[#6D28D9] hover:bg-[#EDE9FE]",
      };
    } else {
      return {
        icon: <Code size={20} className="text-[#0284C7]" />,
        bg: "bg-[#F0F9FF]",
        tagColor: "text-[#0284C7] bg-[#E0F2FE]",
        btnColor: "text-[#0284C7] hover:bg-[#E0F2FE]",
      };
    }
  };

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.project_type === activeFilter);

  // Pagination Logic (Strictly 3 per page)
  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const displayProjects = filteredProjects.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE,
  );

  return (
    <section
      id="work"
      ref={workRef}
      className="py-24 bg-[#0B0F19] text-white overflow-hidden font-sans border-t border-[#1E293B]"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 relative">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
          <div className="max-w-2xl">
            <p className="text-[#00E5B5] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              FEATURED WORK
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white">
              Projects that speak{" "}
              <span className="text-[#00E5B5]">results.</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed">
              Every project is built with a purpose — to solve real problems,
              deliver value, and drive measurable impact.
            </p>
          </div>

          {/* FUNCTIONAL VIEW ALL BUTTON */}
          <Link
            href="/projects"
            className="px-6 py-3 bg-[#131C2D] border border-[#1E293B] hover:border-[#00E5B5] text-white rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-sm hover:text-[#00E5B5] shrink-0"
          >
            View All Projects <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* PILL FILTERS */}
        <div className="flex overflow-x-auto hide-scrollbar gap-3 mb-12 pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentPage(0);
              }}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 border ${
                activeFilter === filter
                  ? "bg-[#00E5B5] text-[#0B0F19] border-[#00E5B5]"
                  : "bg-[#131C2D] text-gray-400 border-[#1E293B] hover:text-white"
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <div className="w-1.5 h-1.5 bg-[#0B0F19] rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* CARDS GRID & CAROUSEL UI */}
        <div className="relative group">
          {/* Floating Arrows */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0 || displayProjects.length === 0}
            className={`flex absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full border border-[#1E293B] shadow-lg z-20 transition-all duration-300 ${
              currentPage === 0 || displayProjects.length === 0
                ? "bg-[#0B0F19] text-gray-600 cursor-not-allowed"
                : "bg-[#131C2D] text-[#00E5B5] hover:scale-110 hover:text-white"
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading ? (
              <div className="col-span-1 md:col-span-3 py-20 text-center text-[#8B95A5] font-medium text-sm">
                Loading featured projects...
              </div>
            ) : displayProjects.length === 0 ? (
              <div className="col-span-1 md:col-span-3 py-20 text-center text-[#8B95A5] font-medium text-sm bg-[#131C2D] rounded-3xl border border-[#1E293B]">
                No projects found for this category.
              </div>
            ) : (
              displayProjects.map((project) => {
                const style = getProjectStyle(project.project_type);
                return (
                  <div
                    key={project.id}
                    className={`gsap-work-card ${style.bg} rounded-[2rem] p-8 flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl min-h-[480px]`}
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 z-10">
                      {style.icon}
                    </div>
                    {/* Text Content */}
                    <div className="relative z-10 w-[85%]">
                      <h3 className="font-extrabold text-2xl text-[#0B0F19] mb-3 leading-tight line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    {/* Tags & Explore Button at Bottom */}
                    <div className="mt-auto flex items-center justify-between relative z-10">
                      <span
                        className={`text-[11px] font-bold px-4 py-2 rounded-lg flex items-center gap-2 ${style.tagColor}`}
                      >
                        <Monitor size={14} /> {project.project_type}
                      </span>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-[13px] font-bold px-4 py-2 rounded-lg flex items-center gap-1 transition-colors ${style.btnColor}`}
                      >
                        Explore <ArrowUpRight size={14} />
                      </a>
                    </div>
                    {/* Mockup Image Positioned bottom right */}
                    <div className="absolute -bottom-10 -right-10 w-[85%] h-[55%] rounded-tl-2xl overflow-hidden shadow-2xl rotate-[-5deg] group-hover:rotate-0 transition-all duration-500 bg-[#1E293B]">
                      <img
                        src={
                          project.image_url ||
                          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                        }
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
            }
            disabled={
              currentPage >= totalPages - 1 || displayProjects.length === 0
            }
            className={`flex absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full border border-[#1E293B] shadow-lg z-20 transition-all duration-300 ${
              currentPage >= totalPages - 1 || displayProjects.length === 0
                ? "bg-[#0B0F19] text-gray-600 cursor-not-allowed"
                : "bg-[#131C2D] text-[#00E5B5] hover:scale-110 hover:text-white"
            }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Dots */}
        {totalPages > 0 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentPage === idx
                    ? "w-8 bg-[#00E5B5]"
                    : "w-2 bg-[#1E293B] hover:bg-gray-600"
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* BOTTOM CTA BAR */}
        <div className="mt-16 bg-[#ECFDF5] rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
              <Rocket size={24} className="text-[#00E5B5]" />
            </div>
            <div>
              <h4 className="text-[#0B0F19] text-xl md:text-2xl font-extrabold mb-1">
                Have a project in mind?
              </h4>
              <p className="text-gray-600 text-sm md:text-base font-medium">
                Let's build something impactful together.
              </p>
            </div>
          </div>
          <Link
            href="/#contact"
            className="w-full md:w-auto px-8 py-4 bg-[#00E5B5] hover:bg-[#00c99f] text-[#0B0F19] font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_8px_20px_rgba(0,229,181,0.2)] shrink-0"
          >
            Let's Work Together <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
