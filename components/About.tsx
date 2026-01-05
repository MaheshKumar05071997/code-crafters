export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        {/* LEFT SIDE: Core Values (Replaces Stats) */}
        <div className="md:w-1/2 grid grid-cols-2 gap-6">
          {/* Value 1 */}
          <div className="p-6 bg-slate-950 rounded-2xl border border-gray-800 hover:border-teal-500/50 transition-colors text-center group">
            <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500/20 transition-colors">
              <svg
                className="w-6 h-6 text-teal-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">On-Time</h3>
            <p className="text-gray-400 text-xs uppercase tracking-wider">
              Delivery
            </p>
          </div>

          {/* Value 2 */}
          <div className="p-6 bg-slate-950 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors text-center group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">24/7</h3>
            <p className="text-gray-400 text-xs uppercase tracking-wider">
              Support
            </p>
          </div>

          {/* Quote Box */}
          <div className="col-span-2 p-8 bg-gradient-to-r from-slate-950 to-slate-900 rounded-2xl border border-gray-800 flex items-center justify-center relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-teal-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

            <p className="text-lg italic text-gray-300 relative z-10 text-center">
              "I don't just build apps; I build{" "}
              <span className="text-teal-400 font-bold">reliability</span>."
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Text Content */}
        <div className="md:w-1/2">
          <p className="text-teal-400 font-bold tracking-widest uppercase mb-4">
            About Me
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Focused on Results, <br /> Not Just Code.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I am a Full Stack Developer who understands that you need more than
            just software—you need a solution that saves you time and money.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Starting with 4+ successful apps for local businesses, I have
            learned that the most important features are <b>speed</b>,{" "}
            <b>stability</b>, and <b>simplicity</b>. Whether it's a bill
            reminder or a complex attendance system, I build tools that work
            smoothly from Day 1.
          </p>
        </div>
      </div>
    </section>
  );
}
