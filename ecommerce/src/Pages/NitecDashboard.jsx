import React from 'react';
import { Search, ShoppingBag, Heart, ArrowUpRight } from 'lucide-react';

// Inline SVG components for brand icons to avoid library export errors
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TiktokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
);

const NitecDashboard = () => {
  return (
    <div className="min-h-screen bg-[#e2e6db] p-4 md:p-10 font-sans text-slate-900 flex items-center justify-center">
      {/* Main Glass Container */}
      <div className="w-full max-w-6xl bg-[#f5f8f1] rounded-[48px] p-6 md:p-8 shadow-2xl border border-white/60">
        
        {/* Navigation Bar */}
        <nav className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
               <div className="bg-black text-white p-1 rounded-lg"><span className="font-black text-xl px-1">N</span></div>
               <span className="text-2xl font-bold tracking-tight">nitec.</span>
            </div>
            
            <div className="relative group hidden lg:block">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="pl-6 pr-14 py-3 bg-white rounded-full w-72 shadow-inner focus:outline-none focus:ring-2 focus:ring-lime-400/50 transition-all text-sm"
              />
              <div className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-black p-2.5 rounded-full cursor-pointer hover:scale-105 transition-transform">
                <Search size={16} className="text-white" />
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-3.5 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"><ShoppingBag size={20}/></button>
            <button className="p-3.5 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"><Heart size={20} className="text-red-500 fill-red-500"/></button>
            <div className="flex items-center gap-3 bg-white pl-2 pr-5 py-2 rounded-full shadow-sm border border-white">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ryman" alt="User" className="w-9 h-9 rounded-full bg-slate-200 object-cover" />
              <div>
                <p className="font-bold text-xs text-gray-800">Ryman Alex</p>
              </div>
            </div>
          </div>
        </nav>

        {/* Top Bento Grid Section */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Hero Card */}
          <div className="col-span-12 lg:col-span-8 bg-white rounded-[40px] p-8 md:p-12 relative overflow-hidden border border-white shadow-sm">
            <div className="relative z-10 max-w-sm">
              <div className="flex items-center gap-2 bg-gray-100/80 w-fit px-3 py-1.5 rounded-full mb-6">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1.5 h-1.5 bg-gray-400"></div><div className="w-1.5 h-1.5 bg-gray-400"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400"></div><div className="w-1.5 h-1.5 bg-gray-400"></div>
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Music is Classic</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] text-gray-900 tracking-tight">Sequoia Inspiring Musico.</h2>
              
              <div className="mt-8 flex items-start gap-5">
                <span className="text-4xl font-light text-gray-200 mt-[-8px]">01</span>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-[1px] bg-gray-300"></div>
                    <p className="font-bold text-sm">Clear Sounds</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 max-w-[200px] leading-relaxed">
                    Making your dream music come true stay with Sequoios Sounds!
                  </p>
                </div>
              </div>
              
              <button className="mt-12 bg-[#d6ff38] hover:bg-[#c8f028] px-8 py-4 rounded-full font-bold flex items-center gap-4 group transition-all">
                View All Products
                <span className="bg-black rounded-full p-1.5 group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={18} className="text-white"/>
                </span>
              </button>
            </div>
            
            {/* Visual Decoration */}
            <img 
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop" 
              className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[60%] lg:w-[55%] object-contain drop-shadow-2xl z-0 pointer-events-none"
              alt="Headphones"
            />
            
            <div className="absolute bottom-10 left-12 flex gap-6 text-gray-400">
              <TwitterIcon /> <TiktokIcon /> <InstagramIcon /> <LinkedinIcon />
            </div>
          </div>

          {/* Right Sidebar Section */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            {/* Color Palette Card */}
            <div className="bg-white rounded-[32px] p-6 border border-white shadow-sm">
              <h4 className="text-sm font-bold text-gray-700 mb-5">Popular Colors</h4>
              <div className="flex justify-between items-center">
                {['#3b82f6', '#f97316', '#22c55e', '#ef4444', '#06b6d4'].map((color, idx) => (
                  <div 
                    key={idx} 
                    className="w-10 h-10 rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform" 
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Product Small Card */}
            <div className="bg-white rounded-[32px] p-6 flex items-center justify-between relative overflow-hidden group border border-white shadow-sm">
              <div className="relative z-10">
                <h4 className="text-md font-bold leading-tight text-gray-800">New Gen<br/>X-Bud</h4>
                <button className="mt-6 p-2.5 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
                  <ArrowUpRight size={18} className="text-gray-600"/>
                </button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop" 
                className="w-32 h-32 object-contain group-hover:rotate-12 transition-transform duration-500" 
                alt="Buds" 
              />
            </div>

            {/* AR/VR Card */}
            <div className="bg-white rounded-[32px] flex flex-col flex-grow relative overflow-hidden group shadow-sm border border-white min-h-[250px]">
              <div className="p-8 relative z-20 flex flex-col justify-between h-full">
                <div className="flex justify-end">
                   <button className="p-2.5 bg-white/40 backdrop-blur-xl rounded-full border border-white/50 shadow-sm"><ArrowUpRight size={20}/></button>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white leading-tight drop-shadow-sm">Light Grey Surface<br/>Headphone</h4>
                  <p className="text-[10px] text-white/70 mt-2 font-bold uppercase tracking-[0.2em]">Boosted with bass</p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.85]" 
                alt="VR" 
              />
            </div>
          </div>
        </div>

        {/* Bottom Bento Row */}
        <div className="grid grid-cols-12 gap-6 mt-6">
          <div className="col-span-12 md:col-span-3 bg-white rounded-[32px] p-7 border border-white shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="text-sm font-bold text-gray-800">More Products</h4>
                <p className="text-[10px] text-gray-400 font-medium mt-1">460 plus items.</p>
              </div>
              <div className="bg-red-50 p-2 rounded-full"><Heart size={16} className="text-red-500 fill-red-500" /></div>
            </div>
            <div className="flex gap-3">
               {[1,2,3].map(i => (
                 <div key={i} className="w-14 h-14 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center p-2">
                    <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse"></div>
                 </div>
               ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 bg-white rounded-[32px] p-7 flex flex-col items-center justify-center border border-white shadow-sm">
             <div className="relative group cursor-pointer">
                <div className="bg-[#4169e1] text-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-2xl shadow-blue-200 group-hover:scale-105 transition-transform">
                    <span className="text-2xl font-bold">5m+</span>
                    <span className="text-[9px] font-bold opacity-70 uppercase tracking-tighter">Downloads</span>
                </div>
                <div className="absolute -top-1 -right-1 flex -space-x-3">
                   {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 shadow-sm"></div>)}
                </div>
             </div>
             <div className="mt-5 flex items-center gap-1.5 text-[11px] font-bold text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
               <span className="text-yellow-400">★</span> 4.6 reviews
             </div>
          </div>

          <div className="col-span-12 md:col-span-6 bg-white rounded-[32px] p-2 pl-8 border border-white shadow-sm flex items-center justify-between overflow-hidden">
             <div className="py-6">
                <span className="bg-orange-50 text-orange-600 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">Popular</span>
                <h4 className="text-2xl font-bold mt-3 text-gray-800 leading-tight">Listening Has<br/>Been Released</h4>
             </div>
             <div className="w-1/2 h-full min-h-[140px] relative group p-2">
                <img 
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop" 
                  className="w-full h-full object-cover rounded-[24px] group-hover:scale-105 transition-transform duration-500" 
                  alt="DJ" 
                />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30 hover:bg-white/40 transition-colors">
                   <ArrowUpRight size={24}/>
                </button>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NitecDashboard;