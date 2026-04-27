import React from 'react';

export default function Blog({ isDark }) {
  const articles = [
    {
      date: "April 25, 2026",
      title: "Getting Started with React Hooks",
      excerpt: "Master the art of functional components. A deep dive into state management, side effects, and custom hook patterns.",
      color: "from-blue-600 to-cyan-500",
      glow: "group-hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]",
      icon: "⚛️"
    },
    {
      date: "April 20, 2026",
      title: "Building REST APIs in Node.js",
      excerpt: "Architect high-performance backends. Exploring Express middleware, JWT security, and scalable routing structures.",
      color: "from-emerald-600 to-teal-400",
      glow: "group-hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)]",
      icon: "⚙️"
    },
    {
      date: "April 15, 2026",
      title: "Deploying MERN on AWS EC2",
      excerpt: "Cloud-native deployment strategies. Setting up VPCs, security groups, and Nginx for production-ready MERN stacks.",
      color: "from-purple-600 to-blue-500",
      glow: "group-hover:shadow-[0_0_50px_-12px_rgba(147,51,234,0.5)]",
      icon: "☁️"
    }
  ];

  const handleReadClick = (title) => {
    alert(`Decoding "${title}"... Full transmission coming soon.`);
  };

  return (
    <section id="blog" className={`py-32 px-6 relative overflow-hidden ${isDark ? "bg-[#020617]" : "bg-slate-50"}`}>
      
      {/* BACKGROUND DECOR (Dark Mode Only) */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
          <span className="text-blue-500 font-black tracking-[0.4em] text-[10px] uppercase mb-4 bg-blue-500/10 px-4 py-1 rounded-full border border-blue-500/20">
            Tech Insights
          </span>
          <h2 className={`text-5xl md:text-7xl font-black tracking-tighter uppercase italic ${isDark ? "text-white" : "text-slate-900"}`}>
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Articles</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className={`group relative p-[1px] rounded-[2rem] transition-all duration-500 hover:scale-[1.02] ${article.glow}`}
            >
              {/* GRADIENT BORDER ENGINE */}
              <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${article.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* MAIN CONTENT CARD */}
              <div className={`relative h-full p-8 md:p-10 rounded-[2rem] flex flex-col justify-between overflow-hidden ${
                isDark ? "bg-[#0B1120]" : "bg-white shadow-xl border-slate-100"
              }`}>
                
                {/* SCANLINE ANIMATION (Dark Mode Only) */}
                {isDark && (
                  <div className="absolute inset-0 w-full h-[100%] bg-gradient-to-b from-transparent via-blue-500/5 to-transparent -translate-y-full group-hover:animate-[scan_2s_linear_infinite]" />
                )}

                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className={`text-[40px] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}>
                      {article.icon}
                    </span>
                    <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
                      {article.date}
                    </span>
                  </div>

                  <h3 className={`text-2xl font-black mb-6 leading-tight tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                    {article.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-8 font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {article.excerpt}
                  </p>
                </div>

                <button 
                  onClick={() => handleReadClick(article.title)}
                  className={`mt-4 w-full py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 border ${
                    isDark 
                    ? "bg-slate-950 border-white/10 text-white hover:bg-white hover:text-black" 
                    : "bg-slate-900 text-white hover:bg-blue-600"
                  }`}
                >
                  Decrypt Content <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}