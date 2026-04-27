export default function Navbar({ isDark, setIsDark }) {
  // Navigation items array for cleaner code
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" }, // Added Blog
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-xl border-b ${
      isDark ? "bg-slate-950/80 border-white/10" : "bg-white/80 border-slate-200"
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        {/* Brand Logo */}
        <h1 className={`text-2xl font-black tracking-tighter transition-colors ${
          isDark ? "text-white" : "text-slate-900"
        }`}>
          Portfolio
        </h1>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm font-bold">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`uppercase tracking-widest text-[10px] transition-all hover:text-blue-500 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`w-12 h-12 flex items-center justify-center rounded-2xl border transition-all active:scale-90 ${
              isDark 
                ? "border-slate-800 bg-slate-900 text-yellow-400 hover:bg-slate-800" 
                : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-white shadow-sm"
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <span className="text-lg">☀️</span>
            ) : (
              <span className="text-lg">🌙</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}