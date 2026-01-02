import React from 'react';

const EmeraldPortfolio = () => {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#f0f2f5] font-sans selection:bg-[#10b981] selection:text-black overflow-x-hidden">
      
      {/* Dynamic Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#10b981]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full"></div>
      </div>

      {/* Hero Section - Centered Grid */}
      <main className="max-w-7xl mx-auto px-6 md:px-20 pt-20 pb-40">
        <div className="grid md:grid-cols-2 gap-20 items-end">
          
          {/* Content Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#10b981]/20 bg-[#10b981]/5 text-[#10b981] text-[10px] font-black tracking-widest uppercase">
                <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></span>
                PAIB Bhawana Software House
              </div>
              <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tighter">
                AGENTS <br /> <span className="text-transparent border-text" style={{ WebkitTextStroke: '1px #10b981' }}>OVER</span> <br /> CODE.
              </h1>
            </div>

            <div className="space-y-8 max-w-lg">
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                I am M Asif. I build **Autonomous AI Agents** that operate with human-level reasoning to scale your business operations.
              </p>
              
              <div className="text-gray-500 text-sm leading-relaxed space-y-4">
                <p>
                  As an AI researcher and developer at **PAIB Bhawana**, I focus on Agentic Workflows. I don't just automate tasks; I create self-correcting digital workers capable of navigating complex software environments.
                </p>
                <p>
                  My goal is to provide enterprise-grade AI logic for a fraction of the cost. Whether it's custom LLM integration or multi-step autonomous chains, I ensure your business stays ahead of the curve.
                </p>
              </div>

              {/* Pricing Box - New Style */}
              <div className="flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                <div className="text-4xl font-black text-[#10b981]">$100</div>
                <div className="h-10 w-[1px] bg-white/10"></div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  Standard Fixed Rate <br /> per AI project
                </div>
              </div>
            </div>
          </div>

          {/* Image Side - Offset Style */}
          <div className="relative">
             <div className="absolute top-10 left-10 w-full h-full border-2 border-[#10b981]/20 rounded-[3rem] -z-10"></div>
             <div className="relative aspect-[3/4] bg-[#1a1c20] rounded-[3rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000">
                {/* 📸 IMAGE FILENAME: asif.jpg */}
                <img 
                  src="/pic6.jpg" 
                  alt="M Asif" 
                  className="w-full h-full object-cover"
                
                />
                
                {/* Buy Now Floating on Image */}
                <div className="absolute bottom-8 right-8">
                   <button className="bg-white text-black p-6 rounded-2xl font-black text-xs hover:bg-[#10b981] transition shadow-2xl group">
                      BUY NOW <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                   </button>
                </div>
             </div>
          </div>

        </div>
      </main>

      {/* Skills / Tech Stack Section */}
      <section id="services" className="bg-white/[0.02] border-y border-white/5 py-24">
         <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-3 gap-16">
            <div className="space-y-4">
               <div className="text-[#10b981] font-black text-4xl">01</div>
               <h4 className="text-lg font-bold uppercase tracking-widest">Autonomous Logic</h4>
               <p className="text-gray-500 text-xs leading-relaxed">Developing agents that use external tools, APIs, and browsers to complete multi-step objectives independently.</p>
            </div>
            <div className="space-y-4">
               <div className="text-[#10b981] font-black text-4xl">02</div>
               <h4 className="text-lg font-bold uppercase tracking-widest">Cognitive Chat</h4>
               <p className="text-gray-500 text-xs leading-relaxed">Designing context-aware chatbots with RAG (Retrieval-Augmented Generation) for accurate, data-driven support.</p>
            </div>
            <div className="space-y-4">
               <div className="text-[#10b981] font-black text-4xl">03</div>
               <h4 className="text-lg font-bold uppercase tracking-widest">Process Scale</h4>
               <p className="text-gray-500 text-xs leading-relaxed">Streamlining business workflows by replacing manual data entry with intelligent, self-evolving AI loops.</p>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center text-gray-600 text-[10px] font-bold tracking-[0.5em] uppercase italic">
        © 2025 // M Asif // Agentic Intelligence Specialist // PAIB Bhawana
      </footer>

    </div>
  );
};

export default EmeraldPortfolio;