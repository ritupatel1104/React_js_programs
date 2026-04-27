export default function Skills({ isDark }) {
  const skillCategories = [
    {
      title: "UI/UX Design",
      icon: "🎨",
      color: "text-pink-500",
      barColor: "bg-pink-500",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Wireframing", level: 85 },
        { name: "Prototyping", level: 80 },
      ],
    },
    {
      title: "Frontend",
      icon: "💻",
      color: "text-blue-500",
      barColor: "bg-blue-500",
      skills: [
        { name: "HTML, CSS, & Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      color: "text-purple-500",
      barColor: "bg-purple-500",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "PHP", level: 40 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      color: "text-cyan-500",
      barColor: "bg-cyan-500",
      skills: [
        { name: "AWS (EC2, S3)", level: 90 },
        { name: "VPC & Networking", level: 70 },
        { name: "Linux Admin", level: 55 },
      ],
    },
    {
      title: "Database",
      icon: "🗄️",
      color: "text-emerald-500",
      barColor: "bg-emerald-500",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
      ],
    },
    {
      title: "Programming",
      icon: "🚀",
      color: "text-orange-500",
      barColor: "bg-orange-500",
      skills: [
        { name: "C ", level: 70 },
        { name: "C++", level: 50 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-blue-500 font-bold tracking-[0.2em] text-xs uppercase mb-4">Expertise</span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight italic">My Skills</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((cat, i) => (
          <div 
            key={i} 
            className={`p-8 rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
              isDark ? "bg-slate-900/40 border-white/5 hover:bg-slate-900/60" : "bg-white border-slate-100 shadow-sm"
            }`}
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className={`text-xl font-black tracking-tight ${cat.color}`}>{cat.title}</h3>
            </div>

            {/* Skills List */}
            <div className="space-y-6">
              {cat.skills.map((skill, si) => (
                <div key={si}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold tracking-tight">{skill.name}</span>
                    <span className="text-xs font-bold opacity-40">{skill.level}%</span>
                  </div>
                  {/* Progress Bar Container */}
                  <div className={`h-1.5 w-full rounded-full overflow-hidden ${isDark ? "bg-slate-800" : "bg-slate-100"}`}>
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${cat.barColor}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}