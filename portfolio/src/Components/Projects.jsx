export default function Projects({ isDark }) {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully functional e-commerce frontend built with React, featuring dynamic product fetching via REST APIs and a responsive shopping cart experience.",
      tags: ["React", "API", "Tailwind"],
      link: "https://github.com/YourUsername/your-repo-name",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Blood Donation Android App",
      description: "A mobile application developed for connecting donors. Utilizes Firebase for real-time data management and user synchronization.",
      tags: ["Android", "Firebase", "Java/Kotlin"],
     link: "https://github.com/YourUsername/your-repo-name",
      image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Cloud Infrastructure Practice",
      description: "Successfully deployed and configured a high-performance static website on an AWS EC2 instance, focusing on Linux server management.",
      tags: ["AWS EC2", "Cloud", "Linux"],
     link: "https://github.com/YourUsername/your-repo-name",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Keep Notes Web App",
      description: "A productivity tool inspired by Google Keep. Features a clean UI built with Tailwind CSS and state management in React.",
      tags: ["React", "Tailwind", "UI/UX"],
      link: "https://github.com/YourUsername/your-repo-name",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "User Authentication System",
      description: "A secure backend-focused system implementing JWT-based authentication, password hashing, and protected route management.",
      tags: ["Node.js", "Express", "JWT"],
   link: "https://github.com/YourUsername/your-repo-name",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "ID Card Generator",
      description: "An automated generator tool that takes user input to create stylized cards, with data persistence handled by MongoDB.",
      tags: ["MongoDB", "Node.js", "Express"],
     link: "https://github.com/YourUsername/your-repo-name",
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800"
    },
   
  ];

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-20 text-center">
        <span className="text-blue-500 font-bold tracking-[0.2em] text-xs uppercase mb-4">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight italic">Featured Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`group rounded-[2.5rem] border overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
              isDark ? "bg-slate-900/40 border-white/5 hover:bg-slate-900/60 shadow-2xl" : "bg-white border-slate-100 shadow-xl"
            }`}
          >
            {/* Project Image */}
            <div className="h-64 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60"></div>
            </div>

            {/* Content Container */}
            <div className="p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, ti) => (
                  <span 
                    key={ti} 
                    className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      isDark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className={`mb-8 text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                {project.description}
              </p>

              <a 
                href={project.link} 
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-500 hover:text-blue-400 transition-colors group/link"
              >
                View Source Code 
                <span className="transition-transform group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}