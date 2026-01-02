import React from "react";

const EmeraldNavbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-20 py-8 border-b border-white/5 bg-[#0d0f12]/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#10b981] rounded-lg rotate-12 flex items-center justify-center font-black text-black text-xs">AS</div>
        <span className="text-sm font-black tracking-[0.2em] uppercase">M. Asif</span>
      </div>
      <div className="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase">
        <a href="/" className="hover:text-[#10b981] transition">Home</a>
        <a href="/about" className="hover:text-[#10b981] transition">About</a>
        <a href="/contact" className="hover:text-[#10b981] transition">Contact</a>
      </div>
      <button className="bg-[#10b981] text-black px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-lg shadow-[#10b981]/20">
        Order Service
      </button>
    </nav>
  );
};

export default EmeraldNavbar;
