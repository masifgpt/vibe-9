import React from "react";

const EmeraldAbout = () => {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#f0f2f5] font-sans selection:bg-[#10b981] selection:text-black overflow-x-hidden px-6 md:px-20 py-24 max-w-5xl mx-auto">

      <h1 className="text-6xl font-black tracking-tight mb-12 text-center md:text-left">
        About <span className="text-[#10b981] italic">M. Asif</span>
      </h1>

      <p className="max-w-3xl text-gray-400 text-lg leading-relaxed mb-8">
        Main Muhammad Asif hoon, PAIB Bhawana Software House ka student aur Agentic Intelligence specialist. 
        AI agents aur smart automation systems develop karne mein mera tajurba hai jo business workflows ko streamline karte hain.
      </p>

      <p className="max-w-3xl text-gray-400 text-lg leading-relaxed mb-8">
        Mera focus autonomous agents create karna hai jo complex tasks independently handle kar sakein, aur AI ko business ke liye accessible banaya ja sake.
      </p>

      <div className="bg-white/10 rounded-3xl p-10 mt-12 border border-white/20 backdrop-blur-xl max-w-md mx-auto md:mx-0 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-[#10b981] uppercase tracking-wide">Skills & Expertise</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
          <li>Agentic AI Development</li>
          <li>Custom Intelligent Chatbots</li>
          <li>Business Process Automation</li>
          <li>Python, React, & Tailwind CSS</li>
          <li>Large Language Models (LLMs)</li>
          <li>Multi-Agent Systems</li>
        </ul>
      </div>

    </div>
  );
};

export default EmeraldAbout;
