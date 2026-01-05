export default function Services() {
  const services = [
    {
      id: 1,
      title: "Mobile App Development",
      description: "Native Android apps built with Kotlin. High performance, offline capabilities, and smooth UI/UX.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Web Development",
      description: "Modern websites and web apps using React & Next.js. Fast, SEO-optimized, and fully responsive.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Business Automation",
      description: "Custom scripts and tools to automate boring tasks (Billing, Attendance, Reports) so you save time.",
      icon: (
        <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 text-white relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-900/10 to-transparent pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-teal-400 font-bold tracking-widest uppercase mb-2">
              What I Do
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Expertise.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-sm text-right md:text-left">
            I help businesses grow by building software that actually works.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-8 bg-slate-950 border border-gray-800 rounded-2xl hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(45,212,191,0.1)]"
            >
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-800 group-hover:border-teal-500/30">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}