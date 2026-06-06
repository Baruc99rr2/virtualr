import { useState } from "react";
import { ChevronRight, Terminal } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqList = [
    {
      id: "01",
      question: "How is payment coordinated?",
      answer: "Development is paid in two parts: an initial 50% down payment to kick off the project, and the remaining 50% the following month."
    },
    {
      id: "02",
      question: "How long do deliveries take?",
      answer: "For standard modules (such as the Miniweb), the estimated delivery time is between 48 and 72 business hours once all information is received."
    },
    {
      id: "03",
      question: "Is the domain included in the price?",
      answer: "The cost of the domain is the client's responsibility, but we guide and assist you step-by-step through the purchase process so you can register it under your name quickly and securely, or we can handle the entire process for you."
    },
    {
      id: "04",
      question: "What technologies do you use?",
      answer: "We work with modern, high-performance tools like Vite, React, and Tailwind CSS. This ensures your site is ultra-fast, secure, and fully responsive on any mobile device."
    },
    {
      id: "05",
      question: "Is there any monthly maintenance fee?",
      answer: "It is not mandatory. Catalog updates (prices or stock) are completely free. If you need structural changes in the future, we quote them at that time. We also offer an optional monthly support service for constant updates."
    }
  ];

  return (
    <div id="faq" className="relative mt-20 py-8 flex flex-col items-center px-4 w-full h-auto overflow-hidden bg-[#010302] scroll-mt-24">
      
      <style>{`
        @keyframes vbar-scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes crt-flicker {
          0% { opacity: 0.975; }
          50% { opacity: 1; }
          100% { opacity: 0.985; }
        }
        @keyframes phosphor-glow {
          0%, 100% { text-shadow: 0 0 4px rgba(34,197,94,0.5), 0 0 10px rgba(34,197,94,0.3); }
          50% { text-shadow: 0 0 14px rgba(34,197,94,0.95), 0 0 25px rgba(34,197,94,0.6); }
        }
        @keyframes screen-burn {
          0%, 100% { background-color: rgba(4, 30, 10, 0.35); }
          50% { background-color: rgba(6, 40, 15, 0.4); }
        }
        @keyframes glitch-jump {
          0%, 100% { transform: translate(0, 0) skew(0deg); }
          10% { transform: translate(-1px, 1px) skew(-1deg); }
          90% { transform: translate(1px, -1px) skew(1deg); }
        }
        
        .crt-screen-glow { animation: screen-burn 8s ease-in-out infinite; }
        .animate-vbar { animation: vbar-scan 6s linear infinite; }
        .animate-crt-flicker { animation: crt-flicker 0.2s infinite; }
        .green-phosphor-text { animation: phosphor-glow 3s ease-in-out infinite; }
        .animate-glitch { animation: glitch-jump 0.8s steps(2) infinite; }

        .pixel-grille::before {
          content: " ";
          display: block;
          position: absolute;
          top: 0; left: 0; bottom: 0; right: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.35) 50%), 
                      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.03), rgba(0, 0, 255, 0.06));
          z-index: 40;
          background-size: 100% 3px, 4px 100%;
          pointer-events: none;
        }

        /* SYSTEM OF SCALED REDUCTION BELOW 1920PX */
        .faq-title-responsive {
          font-size: clamp(20px, 1.8vw, 32px);
        }
        .faq-btn-text {
          font-size: clamp(11px, 0.75vw, 13px);
        }
        .faq-desc-text {
          font-size: clamp(11px, 0.75vw, 13.5px);
        }
      `}</style>

      {/* MONITOR FRAME */}
      <div className="w-full max-w-5xl bg-[#121613] p-3 sm:p-5 rounded-3xl border-4 border-[#1e2520] shadow-[0_0_50px_rgba(0,0,0,0.9),inset_0_0_20px_rgba(0,0,0,0.8)] relative">
        
        {/* CRT SCREEN */}
        <div className="relative w-full rounded-2xl overflow-hidden crt-screen-glow border-2 border-[#090f0a] px-3 py-5 sm:p-6 pixel-grille animate-crt-flicker">
          
          <div className="absolute left-0 bg-gradient-to-b from-transparent via-green-400/20 to-transparent h-20 w-full animate-vbar pointer-events-none z-30 shadow-[0_0_15px_rgba(74,222,128,0.2)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04)_0%,transparent_70%)] pointer-events-none z-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.5)_100%)] pointer-events-none z-30" />

          {/* HEADER */}
          <div className="text-center mb-6 select-none z-10 relative">
            <div className="inline-flex items-center gap-2 bg-green-950/80 text-green-400 border border-green-500/50 rounded-sm text-[10px] font-mono px-3 py-1 uppercase tracking-widest shadow-[0_0_10px_rgba(34,197,94,0.2)]">
              <Terminal className="w-3 h-3 animate-pulse" />
              <span>[ SYSTEM: MONITOR_01_ON ]</span>
            </div>
            
            <h2 className="font-mono font-black mt-3 tracking-tight text-green-400 uppercase green-phosphor-text animate-glitch faq-title-responsive">
              &gt; F.A.Q_QUERIES
            </h2>
            <p className="text-green-500/70 font-mono text-[10px] mt-1 max-w-xl mx-auto uppercase tracking-wider">
              DATA READING INTERFACE
            </p>
          </div>

          {/* RPG ENVIRONMENT LAYOUT */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 z-10 relative font-mono items-start">
            
            {/* LEFT PANEL: QUESTION SELECTOR */}
            <div className="md:col-span-5 flex flex-col gap-1.5 w-full">
              <div className="text-[9px] text-green-600/80 font-bold px-1 mb-0.5 tracking-widest uppercase">// INDEX_REGISTER</div>
              {faqList.map((faq, index) => {
                const isSelected = activeIndex === index;
                return (
                  <button
                    key={faq.id}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left p-2.5 border flex items-center justify-between transition-all steps(2) relative overflow-hidden rounded-sm faq-btn-text ${
                      isSelected
                        ? "bg-green-500/15 border-green-400 text-green-300 shadow-[0_0_10px_rgba(34,197,94,0.15)]"
                        : "bg-green-950/10 border-green-900/40 text-green-600 hover:border-green-800/80 hover:text-green-400"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-green-400 animate-pulse" />
                    )}
                    
                    <div className="flex items-center gap-2 min-w-0 flex-1 mr-2">
                      <span className={isSelected ? "text-green-400 font-bold shrink-0" : "text-green-800 shrink-0"}>
                        {faq.id}.
                      </span>
                      <span className="font-bold tracking-wide truncate block w-full">
                        {faq.question}
                      </span>
                    </div>
                    
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isSelected ? "translate-x-1 text-green-400" : "text-green-900"}`} />
                  </button>
                );
              })}
            </div>

            {/* RIGHT PANEL: DETAIL MONITOR (ANSWER) */}
            <div className="md:col-span-7 flex flex-col w-full h-full">
              <div className="text-[9px] text-green-600/80 font-bold px-1 mb-0.5 tracking-widest uppercase">// OUTPUT_BUFFER</div>
              
              <div className="relative flex-1 min-h-[180px] h-auto bg-black/40 border border-green-900/80 p-4 flex flex-col justify-between rounded-sm shadow-[inset_0_0_30px_rgba(0,0,0,0.9)]">
                
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-600" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-600" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-600" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-600" />

                <div className="w-full">
                  <div className="flex items-center justify-between border-b border-green-950/60 pb-1.5 mb-2.5 text-[9px] text-green-600/70">
                    <span className="text-green-400 animate-pulse">● MEM_SECTOR_{faqList[activeIndex].id}</span>
                    <span>TRM_VAL_OK</span>
                  </div>

                  <h3 className="font-bold text-green-100 mb-2.5 tracking-wide flex items-center gap-2 faq-btn-text">
                    <span className="text-green-400 animate-ping text-[8px] shrink-0">■</span> 
                    <span className="leading-tight">{faqList[activeIndex].question}</span>
                  </h3>

                  <div className="w-full h-[1px] bg-green-950/80 mb-2.5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-500/40 w-1/4 animate-vbar" style={{ animationDuration: '2s' }} />
                  </div>

                  <p key={activeIndex} className="text-green-400/90 leading-relaxed tracking-wide font-mono bg-green-950/15 p-2.5 border border-green-900/25 rounded-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] faq-desc-text">
                    {faqList[activeIndex].answer}
                  </p>
                </div>

                <div className="mt-4 pt-1.5 border-t border-green-950/60 flex justify-between items-center text-[8px] text-green-700 select-none">
                  <span>CURSOR: ACTIVE</span>
                  <span className="animate-pulse bg-green-500/10 text-green-400 px-1.5 py-0.5 border border-green-500/20">PRNTR_READY</span>
                </div>

              </div>
            </div>

          </div>

          <div className="mt-4 text-right text-[8px] font-mono text-green-900/60 tracking-widest pointer-events-none">
            CRT-MATRIX SYSTEM V1.0.0
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FAQ;