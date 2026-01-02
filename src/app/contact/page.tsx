import React from "react";

const EmeraldContact = () => {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#f0f2f5] font-sans selection:bg-[#10b981] selection:text-black overflow-x-hidden px-6 md:px-20 py-24 max-w-md mx-auto">

      <h1 className="text-6xl font-black tracking-tight mb-12 text-center md:text-left">
        Contact <span className="text-[#10b981] italic">Me</span>
      </h1>

      <p className="max-w-md text-gray-400 text-lg leading-relaxed mb-12 text-center md:text-left">
        Kisi bhi project ya collaboration ke liye mujhe niche diye gaye channels se contact karein.
      </p>

      <div className="space-y-10 text-gray-300 text-lg">
        <div>
          <h2 className="text-[#10b981] font-bold text-xl mb-2 uppercase tracking-wide">Email</h2>
          <a href="mailto:masifgpt@gmail.com" className="hover:text-[#10b981] transition">
            masifgpt@gmail.com
          </a>
        </div>

        <div>
          <h2 className="text-[#10b981] font-bold text-xl mb-2 uppercase tracking-wide">WhatsApp</h2>
          <a href="https://wa.me/923707615224" target="_blank" rel="noopener noreferrer" className="hover:text-[#10b981] transition">
            +92 370 7615224
          </a>
        </div>

        <div>
          <h2 className="text-[#10b981] font-bold text-xl mb-2 uppercase tracking-wide">Facebook</h2>
          <a href="https://www.facebook.com/m.asif.423683" target="_blank" rel="noopener noreferrer" className="hover:text-[#10b981] transition">
            facebook.com/m.asif.423683
          </a>
        </div>

        <div>
          <h2 className="text-[#10b981] font-bold text-xl mb-2 uppercase tracking-wide">LinkedIn</h2>
          <a href="https://www.linkedin.com/in/muhammad-asif-30163737a/" target="_blank" rel="noopener noreferrer" className="hover:text-[#10b981] transition">
            linkedin.com/in/muhammad-asif-30163737a
          </a>
        </div>
      </div>

    </div>
  );
};

export default EmeraldContact;
