"use client"; // <--- ADD THIS AT THE VERY TOP
import Image from "next/image";
import Work from "../components/Work";
import Services from "../components/Services";
import Contact from "../components/Contact";
import About from "../components/About"; // Import About

export default function Home() {
  // Custom scroll function for buttons
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- SEO: STRUCTURED DATA (The Secret Sauce) ---
  // This tells Google you are a Developer in Bangalore
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // Changed from ProfessionalService to Organization
    name: "Code Crafters", // Your Agency Name
    url: "https://code-crafters.vercel.app",
    logo: "https://code-crafters.vercel.app/profile_image.jpg", // Ideally use a logo image here later
    description:
      "Digital Product Studio specializing in Business Automation and App Development.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    priceRange: "$$", // Tells Google you are affordable/mid-range
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

      {/* 1. HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden"
      >
        {/* Backgrounds */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />

        <div className="z-10 max-w-screen-xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 font-sans">
          {/* Text */}
          <div className="lg:w-[65%] flex flex-col items-start space-y-8 text-left">
            <div className="inline-block px-3 py-1 border border-teal-500/30 rounded-full bg-teal-500/10 backdrop-blur-sm">
              <p className="text-teal-400 text-xs md:text-sm font-bold tracking-widest uppercase">
                Full Stack Developer
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
                Contact Me
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-[35%] flex justify-center lg:justify-end relative mt-8 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] h-[120%] bg-gradient-to-tr from-blue-600/30 to-teal-500/30 rounded-full blur-3xl"></div>
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-gray-800/50 rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
              <Image
                src="/profile_image.jpg"
                alt="Mahesh"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT (New!) */}
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
