export default function Hero({ isDark }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-20 overflow-hidden px-6 text-center">
      {/* GLOWS: Changed to absolute with fixed sizing 
         to prevent 'layout shift' or extra document height.
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-5xl mx-auto w-full">
        
        {/* 1. ROLE: Adjusted spacing */}
        <div className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border text-[10px] font-black tracking-[0.3em] uppercase transition-all ${
          isDark 
            ? "bg-slate-900/50 border-white/10 text-blue-400" 
            : "bg-slate-50 border-slate-200 text-blue-600 shadow-sm"
        }`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
         Cloud-Native Web Developer
        </div>

        {/* 2. NAME: Uses responsive clamping for font size */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black mb-6 tracking-tighter leading-[0.95] block">
          Ritika <br />
          <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Patel
          </span>
        </h1>

        {/* 3. TAGLINE: Reduced margin for tighter look */}
        <p className={`max-w-2xl mx-auto mb-10 text-base md:text-xl font-medium leading-relaxed tracking-tight ${
          isDark ? "text-slate-400" : "text-slate-500"
        }`}>
          Modern Web Apps. Scalable Cloud Solutions. Seamless Digital Experiences. Specializing in the intersection of MERN Stack and AWS architecture.
        </p>

        {/* 4. CTA: Same logic, tighter padding */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#projects" 
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-1 active:scale-95"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className={`w-full sm:w-auto px-10 py-4 rounded-2xl border-2 font-bold transition-all hover:bg-blue-600/5 active:scale-95 ${
              isDark ? "border-slate-800 text-white" : "border-slate-200 text-slate-900"
            }`}
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
}