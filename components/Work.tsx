import Image from "next/image";

export default function Work() {
  const projects = [
    {
      id: 1,
      title: "Smart Bill Reminder",
      category: "Android Development",
      description:
        "A native Android application designed to help users track monthly payments, avoid late fees, and manage personal finances efficiently.",
      image: "/launcher_icon.png",
      tech: [
        {
          name: "Kotlin",
          icon: (
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.3 24l11.3-11.5L24 24zM0 0h12L0 12.5zM13.4 0L0 14v10l12-12L24 0z" />
            </svg>
          ),
        },
        {
          name: "Android SDK",
          icon: (
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.6 2.8C17.6 2.8 17.6 2.8 17.6 2.8c-0.3 0-0.6 0.1-0.9 0.4l-2.1 3.7c-1.7-0.7-3.5-1.1-5.4-1.1c-1.9 0-3.7 0.4-5.4 1.1L1.7 3.1C1.5 2.9 1.1 2.8 0.8 2.8c-0.6 0-1 0.4-1 1c0 0.3 0.1 0.5 0.3 0.7l2.2 3.8C0.9 10.4 0 13.1 0 16.1h18.3c0-3-0.9-5.7-2.4-7.8l2.2-3.8c0.2-0.2 0.3-0.5 0.3-0.7C18.5 3.2 18.1 2.8 17.6 2.8z M5.6 12.8c-0.7 0-1.2-0.6-1.2-1.2c0-0.7 0.6-1.2 1.2-1.2c0.7 0 1.2 0.6 1.2 1.2C6.8 12.2 6.3 12.8 5.6 12.8z M12.8 12.8c-0.7 0-1.2-0.6-1.2-1.2c0-0.7 0.6-1.2 1.2-1.2c0.7 0 1.2 0.6 1.2 1.2C14 12.2 13.5 12.8 12.8 12.8z" />
            </svg>
          ),
        },
        {
          name: "Google Sheets",
          icon: (
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.5 0H3.8C2.8 0 2 0.8 2 1.9v20.2C2 23.2 2.8 24 3.8 24h16.4c1 0 1.8-0.8 1.8-1.9V7.5L14.5 0zM13.8 16.5H6.2v-1.9h7.6v1.9zM13.8 12.8H6.2v-1.9h7.6v1.9zM13.8 9H6.2V7.1h7.6V9zM15.2 6.8V1.9l4.8 4.9h-4.8z" />
            </svg>
          ),
        },
      ],
    },
    {
      id: 2,
      title: "Staff Attendance Portal",
      category: "Web Application",
      description:
        "A secure web-based system for businesses to track employee attendance, calculate hours automatically, and generate monthly reports.",
      image: "/attendance_project.jpg",
      tech: [
        {
          name: "React.js",
          icon: (
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-1.3 0-2.6 0.2-3.8 0.5C6.1 1.1 4.2 2.1 2.9 3.4 1 5.3 0 7.8 0 10.5s1 5.2 2.9 7.1c1.3 1.3 3.2 2.3 5.3 2.9 1.2 0.4 2.5 0.5 3.8 0.5s2.6-0.2 3.8-0.5c2.1-0.6 4-1.6 5.3-2.9 1.9-1.9 2.9-4.4 2.9-7.1s-1-5.2-2.9-7.1c-1.3-1.3-3.2-2.3-5.3-2.9C14.6 0.2 13.3 0 12 0zm0 2.2c1.1 0 2.1 0.1 3.2 0.4 1.7 0.5 3.2 1.3 4.3 2.4 1.5 1.5 2.3 3.5 2.3 5.5s-0.8 4-2.3 5.5c-1.1 1.1-2.6 1.9-4.3 2.4 -1.1 0.3-2.1 0.4-3.2 0.4s-2.1-0.1-3.2-0.4c-1.7-0.5-3.2-1.3-4.3-2.4 -1.5-1.5-2.3-3.5-2.3-5.5s0.8-4 2.3-5.5c1.1-1.1 2.6-1.9 4.3-2.4C9.9 2.3 10.9 2.2 12 2.2zM12 4.9c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6S15.1 4.9 12 4.9z" />
            </svg>
          ),
        },
        {
          name: "Node.js",
          icon: (
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zM11 18H9v-6h2v6zm4 0h-2v-6h2v6zm-2-8c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z" />
            </svg>
          ),
        },
        {
          name: "Supabase",
          icon: (
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.2 11.4C21.2 11.4 12.8 0 12.8 0S4.4 11.4 4.4 11.4C3.8 12.2 3.8 13.3 4.3 14L11.5 24l7.1-10C19.2 13.3 19.2 12.2 21.2 11.4z" />
            </svg>
          ),
        },
      ],
    },
    {
      id: 3,
      title: "Business Portfolio Sites",
      category: "Web Design & Dev",
      description:
        "Custom, high-performance websites built for small businesses to establish digital presence and attract more local clients.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tech: [
        {
          name: "Next.js",
          icon: (
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm4.9 16.7L10.3 7.8v8.6H8.7V5.9h1.7l6.6 8.9V5.9h1.6v10.8h-1.7z" />
            </svg>
          ),
        },
        {
          name: "Tailwind",
          icon: (
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 12c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6 -2.7 6-6 6zm12 12c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6 -2.7 6-6 6z" />
            </svg>
          ),
        },
        {
          name: "SEO",
          icon: (
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.7 13.6l-2.3-2.3c0.4-0.9 0.6-1.9 0.6-3 0-4.1-3.4-7.5-7.5-7.5S5 4.2 5 8.3c0 4.1 3.4 7.5 7.5 7.5 1.1 0 2.1-0.2 3-0.6l2.3 2.3c-0.2 0.3-0.3 0.6-0.3 0.9 0 1.5 1.2 2.7 2.7 2.7S23 19.8 23 18.3C23 17.1 22.2 16 21.1 15.6zM12.5 13.8c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5S15.5 13.8 12.5 13.8z" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section id="work" className="py-20 bg-slate-950 text-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-teal-400 font-bold tracking-widest uppercase mb-2">
            My Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Recent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Projects.
            </span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-900 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags with Icons */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-300 bg-gray-800/50 rounded-full border border-gray-700 hover:border-teal-500/50 hover:text-teal-400 transition-colors"
                    >
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
