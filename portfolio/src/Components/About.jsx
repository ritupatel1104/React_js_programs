export default function About({ isDark }) {
  const stats = [
    { label: "Years Experience", value: "0", color: "from-blue-500 to-cyan-400" },
    { label: "Projects Built", value: "4+", color: "from-purple-500 to-pink-400" },
  ];

  const awsServices = [
    { name: "EC2", desc: "Compute" },
    { name: "VPC", desc: "Networking" },
    { name: "S3", desc: "Storage" },
    { name: "EBS", desc: "Block Storage" }
  ];

  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-blue-500 font-bold tracking-[0.2em] text-xs uppercase mb-4">Discovery</span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight italic">About Me</h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Left Column: The Narrative */}
        <div className={`lg:col-span-7 p-8 md:p-12 rounded-[2.5rem] border transition-all duration-500 ${
          isDark ? "bg-slate-900/40 border-white/5 shadow-2xl" : "bg-white border-slate-100 shadow-xl"
        }`}>
          <h3 className="text-2xl font-bold mb-6 italic">A developer driven by curiosity.</h3>
          
          <div className={`space-y-6 text-base md:text-lg leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            <p>
              I am an enthusiastic <span className={isDark ? "text-white font-semibold" : "text-slate-900 font-semibold"}>Full-Stack Cloud Engineer</span> eager to kickstart my career. My core stack centers on the <span className="text-blue-500 font-bold">MERN ecosystem</span>, complemented by hands-on experience in <span className="text-indigo-500 font-bold">AWS Cloud infrastructure</span>.
            </p>
            <p>
              I specialize in deploying scalable applications using <span className={isDark ? "text-slate-200" : "text-slate-800"}>EC2</span>, managing secure isolated networks via <span className={isDark ? "text-slate-200" : "text-slate-800"}>VPC</span>, and optimizing data through <span className={isDark ? "text-slate-200" : "text-slate-800"}>S3</span> and <span className={isDark ? "text-slate-200" : "text-slate-800"}>EBS</span>. I love creating web applications from scratch and am ready to adapt to professional environments seamlessly.
            </p>
            <p>
              While I am at the beginning of my professional journey, I am highly motivated to contribute to real-world projects and grow under the guidance of experienced mentors.
            </p>
          </div>
        </div>

        {/* Right Column: Bento Stats & Tech Grid */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className={`p-8 rounded-[2rem] border flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-2 ${
                isDark ? "bg-slate-900/40 border-white/5" : "bg-white border-slate-100 shadow-lg"
              }`}>
                <span className={`text-5xl font-black mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* AWS Services Card */}
          <div className={`p-8 rounded-[2.5rem] border ${
            isDark ? "bg-slate-900/40 border-white/5" : "bg-slate-50 border-slate-200 shadow-lg"
          }`}>
            <h4 className="text-sm font-black uppercase tracking-widest mb-6 opacity-50">Cloud Infrastructure</h4>
            <div className="grid grid-cols-2 gap-4">
              {awsServices.map((service) => (
                <div key={service.name} className={`p-4 rounded-2xl border transition-all hover:border-blue-500/50 ${
                  isDark ? "bg-slate-950/50 border-white/5" : "bg-white border-slate-200"
                }`}>
                  <p className="text-blue-500 font-black text-lg">{service.name}</p>
                  <p className="text-[10px] font-bold opacity-50 uppercase tracking-tighter">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Callout */}
          <div className={`p-8 rounded-[2rem] border relative overflow-hidden flex flex-col items-center justify-center text-center group ${
            isDark ? "bg-blue-600/10 border-blue-500/20" : "bg-blue-600 text-white"
          }`}>
            <h4 className="text-2xl font-black mb-1 relative z-10">Eager & Ready</h4>
            <p className={`text-[10px] uppercase tracking-[0.3em] font-bold relative z-10 ${isDark ? "text-blue-400" : "text-blue-100"}`}>
              To Learn & Grow
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}