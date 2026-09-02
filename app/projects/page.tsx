"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Home, Layers, ExternalLink, Send, ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects and subscribe to live Realtime changes
  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;
        setProjects(data || []);
      } catch (err) {
        console.error("Error loading projects from Supabase:", err);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();

    // Listen for live database updates from the admin app
    const subscription = supabase
      .channel("public:projects")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "projects" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setProjects((prev) => [payload.new as any, ...prev]);
          }
          if (payload.eventType === "DELETE") {
            setProjects((prev) =>
              prev.filter((project) => project.id !== payload.old.id),
            );
          }
          if (payload.eventType === "UPDATE") {
            setProjects((prev) =>
              prev.map((project) =>
                project.id === payload.new.id ? (payload.new as any) : project,
              ),
            );
          }
        },
      )
      .subscribe();

    // Cleanup subscription when the user leaves the page
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-header",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      );
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
    { scope: containerRef, dependencies: [loading] },
  );

  const filters = [
    "All Projects",
    "Web Applications",
    "Mobile Apps",
    "Dashboards",
    "E-commerce",
    "SaaS",
    "Business Automation",
  ];

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.project_type === activeFilter);

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-[#070B14] text-white pt-28 pb-20 font-sans selection:bg-[#00E5B5]/30 relative overflow-hidden"
    >
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-[#00E5B5]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0070f3]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Breadcrumb */}
        <div className="gsap-header flex items-center gap-2 text-xs md:text-sm font-bold text-[#8B95A5] mb-6 md:mb-8">
          <Link
            href="/"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Home size={14} />
          </Link>
          <span>/</span>
          <span className="text-white">Projects</span>
        </div>

        {/* Title & Stats */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="gsap-header max-w-xl w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 md:mb-4 tracking-tight">
              All Projects
            </h1>
            <p className="text-[#8B95A5] text-sm sm:text-base md:text-lg font-medium leading-relaxed">
              A collection of digital products I've built for clients and
              personal ventures.
            </p>
          </div>

          <div className="gsap-header w-full md:w-auto bg-[#0B0F19] border border-[#1E293B] rounded-2xl p-4 md:p-5 flex items-center gap-4 md:gap-5 shadow-lg">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#00E5B5]/10 flex items-center justify-center border border-[#00E5B5]/20 shrink-0">
              <Layers size={20} className="text-[#00E5B5] md:w-6 md:h-6" />
            </div>
            <div className="flex flex-col pr-2 md:pr-4">
              <span className="text-xl md:text-2xl font-black text-white leading-tight">
                {projects.length}+
              </span>
              <span className="text-[10px] md:text-xs font-bold text-[#8B95A5]">
                <span className="text-[#00E5B5]">Projects</span> Delivered
              </span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="gsap-header flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 md:gap-6 mb-8 md:mb-10">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 md:gap-3 w-full lg:w-auto pb-2 lg:pb-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[11px] md:text-xs font-bold transition-all flex items-center gap-2 border ${
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
        </div>

        {/* Project Grid */}
        {loading ? (
          <div className="py-20 text-center text-[#8B95A5] font-medium text-sm">
            Loading projects...
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="py-20 text-center text-[#8B95A5] font-medium text-sm bg-[#0B0F19] rounded-2xl border border-[#1E293B] mb-16">
            No projects found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="gsap-project-card bg-[#0B0F19] border border-[#1E293B] rounded-2xl p-4 hover:border-[#00E5B5]/50 transition-all duration-300 flex flex-col group shadow-lg"
              >
                <div className="h-40 bg-[#131C2D] rounded-xl mb-4 md:mb-5 overflow-hidden border border-[#1E293B]">
                  <img
                    src={
                      project.image_url ||
                      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                    }
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                  <span className="text-[9px] font-bold text-[#00E5B5] bg-[#00E5B5]/10 border border-[#00E5B5]/20 px-2.5 py-1 rounded-md">
                    {project.project_type}
                  </span>
                </div>
                <div className="flex justify-between items-start mb-2 mt-auto">
                  <h3 className="font-extrabold text-sm md:text-base text-white group-hover:text-[#00E5B5] transition-colors line-clamp-1 pr-2">
                    {project.title}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-lg bg-[#131C2D] border border-[#1E293B] flex items-center justify-center text-gray-400 hover:text-[#00E5B5] hover:border-[#00E5B5] transition-colors shrink-0"
                  >
                    <ExternalLink size={12} />
                  </a>
                </div>
                <p className="text-[#8B95A5] text-[11px] md:text-xs font-medium leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#0B0F19] to-[#131C2D] border border-[#1E293B] rounded-2xl p-5 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 md:gap-6 shadow-xl">
          <div className="flex items-center gap-4 md:gap-5 w-full sm:w-auto">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#00E5B5]/10 flex items-center justify-center border border-[#00E5B5]/20 shrink-0">
              <Send size={20} className="text-[#00E5B5] ml-1 md:w-6 md:h-6" />
            </div>
            <div>
              <h4 className="text-lg md:text-2xl font-extrabold text-white mb-0.5 md:mb-1 tracking-tight">
                Have a project in mind?
              </h4>
              <p className="text-[#8B95A5] text-[11px] md:text-sm font-medium">
                Let's build something amazing together.
              </p>
            </div>
          </div>
          <Link
            href="/#contact"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-[#00E5B5] hover:bg-[#00c99f] text-[#0B0F19] font-bold text-xs md:text-sm rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,229,181,0.2)] active:scale-95"
          >
            Get In Touch <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
