"use client";
import Work from "../components/Work";
import Services from "../components/Services";
import Contact from "../components/Contact";
import About from "../components/About";
import HeroAnimation from "../components/HeroAnimation";

export default function Home() {
  // Custom scroll function for buttons
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- SEO: STRUCTURED DATA ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization", // Changed to Organization for an Agency
    name: "Code Crafters",
    url: "https://code-crafters-peach.vercel.app",
    logo: "https://code-crafters-peach.vercel.app/profile_image.jpg",
    telephone: "+91-9880567308",
    description:
      "Digital Product Development specializing in Business Automation and App Development.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    priceRange: "30000",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-teal-500/30">
      {/* --- SEO SCRIPT INJECTION --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-6 pb-6 pt-28 md:p-12 relative overflow-hidden"
      >
        {/* Backgrounds */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />

        <div className="z-10 max-w-screen-xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 font-sans">
          {/* LEFT SIDE: Text */}
          <div className="lg:w-[65%] flex flex-col items-start space-y-8 text-left">
            {/* AGENCY LABEL */}
            <div className="inline-block px-3 py-1 border border-teal-500/30 rounded-full bg-teal-500/10 backdrop-blur-sm">
              <p className="text-teal-400 text-xs md:text-sm font-bold tracking-widest uppercase">
                Digital Product Development
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tight">
              Turn Your <br />
              Business Goals Into <br />
              <span className="animate-shimmer bg-[linear-gradient(110deg,#2dd4bf,45%,#ffffff,55%,#3b82f6)] bg-[length:200%_100%] text-transparent bg-clip-text">
                Digital Success.
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-2xl max-w-2xl leading-relaxed">
              I don't just write code. I build custom, scalable software that
              solves real problems and drives your business forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection("work")}
                className="px-10 py-4 bg-teal-500 hover:bg-teal-600 text-black text-lg font-bold rounded-full transition-all shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:shadow-[0_0_40px_rgba(45,212,191,0.6)] hover:-translate-y-1"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-10 py-4 border border-gray-600 hover:border-teal-400 text-white text-lg rounded-full transition-all hover:bg-gray-800"
              >
                Let's Connect
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: HERO ANIMATION (Replaces the Image) */}
          <div className="lg:w-[35%] flex justify-center lg:justify-end relative mt-12 lg:mt-0">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] h-[120%] bg-gradient-to-tr from-blue-600/20 to-teal-500/20 rounded-full blur-3xl"></div>

            {/* The Animation Component */}
            <div className="relative w-full max-w-[500px]">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT */}
      <About />

      {/* 3. WORK */}
      <Work />

      {/* 4. SERVICES */}
      <Services />

      {/* 5. CONTACT */}
      <Contact />
    </main>
  );
}
