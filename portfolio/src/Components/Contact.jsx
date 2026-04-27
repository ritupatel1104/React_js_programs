export default function Contact({ isDark }) {
  return (
    <section id="contact" className="py-32 px-6 max-w-3xl mx-auto">
      <div className={`p-10 md:p-16 rounded-[3rem] border shadow-2xl ${
        isDark ? "bg-slate-900 border-white/5 shadow-black" : "bg-white border-slate-100 shadow-slate-200"
      }`}>
        <h2 className="text-4xl font-black mb-4 text-center">Contact Me</h2>
        <p className="text-slate-500 text-center mb-10">Available for freelance and full-time opportunities.</p>

        <form className="flex flex-col gap-5">
          <input type="text" placeholder="Full Name" className={`p-5 rounded-2xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
              isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-200"
            }`} />
          <input type="email" placeholder="Email Address" className={`p-5 rounded-2xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
              isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-200"
            }`} />
          <textarea placeholder="Message" className={`p-5 rounded-2xl border focus:ring-2 focus:ring-blue-500 outline-none transition-all h-40 ${
              isDark ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-200"
            }`} />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-600/30">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}