import { useEffect, useState } from "react";
import futabaGif from "../assets/futaba.gif"; 

// ==========================================
// MANUAL SETTINGS FOR MOBILE DEVICES
// Modify these values to tweak the design to your liking without touching the code below.
// ==========================================
const MOBILE_SETTINGS = {
  containerHeight: "460px",       // TALL: Increased to 460px to give more space on mobile devices
  fontSizeDefault: "3.4vw",       // Font size on very small/vertical screens
  fontSizeWideMobile: "3.2vw",    // Font size on slightly wider phones (from 480px and up)
};

const FeatureSection = () => {
  const fullTitle = "ABOUT US";
  const [titleText, setTitleText] = useState("");
  const [titleSpeed, setTitleSpeed] = useState(100);

  const fullText = 
    "cat info_base.txt\n" +
    "We are a team that adapts to your budget to help you go digital. We are passionate about design, craftsmanship, and the spirit of entrepreneurship, self-improvement, and hard work. We stand by you throughout your growth journey.\n\n" +
    "C:\\Users\\AboutUs> cat info_academic.txt\n" +
    "In 2025, we graduated from Unju Argentina, consolidating our deep-rooted passion for software development.";
  
  const [typedText, setTypedText] = useState("");

  // EFFICIENT EFFECT: Title typing (Runs only once)
  useEffect(() => {
    if (titleText === fullTitle) return; // Freezes here when typing finishes

    const handleTitleType = () => {
      setTitleText(fullTitle.substring(0, titleText.length + 1));
    };

    const titleTimer = setTimeout(handleTitleType, titleSpeed);
    return () => clearTimeout(titleTimer);
  }, [titleText, titleSpeed]);

  // EFFICIENT EFFECT: Terminal text typing (No cyclic setTimeout or resets)
  useEffect(() => {
    let textIndex = 0;
    
    const textInterval = setInterval(() => {
      if (textIndex <= fullText.length) {
        setTypedText(fullText.substring(0, textIndex));
        textIndex++;
      } else {
        clearInterval(textInterval); // Clears the interval for good when finished
      }
    }, 25);

  return () => clearInterval(textInterval);
  }, []);

  return (
    <div id="about" className="relative pt-12 pb-20 min-h-[500px] flex flex-col items-center scroll-mt-24 w-full z-10">
      
      {/* Dynamic injection of your parameters into styles */}
      <style>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-floating-panel {
          animation: subtle-float 4s ease-in-out infinite;
        }
        
        /* LOGIC RESIZING: The title shrinks fluidly */
        .about-title-responsive {
          font-size: clamp(14px, 2.5vw, 36px);
        }

        .powershell-fluid-text {
          font-size: ${MOBILE_SETTINGS.fontSizeDefault}; 
        }
        @media (min-width: 480px) {
          .powershell-fluid-text {
            font-size: ${MOBILE_SETTINGS.fontSizeWideMobile};
          }
        }
        @media (min-width: 640px) {
          .powershell-fluid-text {
            font-size: 13px;
          }
        }
        @media (min-width: 1024px) {
          .powershell-fluid-text {
            font-size: 15px;
          }
        }
      `}</style>

      {/* MAIN TITLE WITH FLUID RESPONSIVE CLASS */}
      <div className="text-center mb-6 md:mb-10 select-none h-[40px] flex items-center justify-center w-full px-4">
        <h2 className="font-arcade tracking-wide text-white about-title-responsive whitespace-nowrap">
          {titleText === "" ? "\u00A0" : titleText}
          {titleText !== fullTitle && <span className="animate-pulse text-cyan-400">_</span>}
        </h2>
      </div>

      {/* PARENT CONTAINER */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-center gap-6 px-4 relative">
        
        {/* FUTABA PANEL */}
        <div className="md:sticky md:top-32 h-fit w-full max-w-[160px] sm:max-w-[180px] md:w-1/4 bg-[#0c1c38]/70 border-2 border-cyan-500/30 rounded-lg p-3 flex flex-col items-center justify-center relative overflow-hidden group shadow-[0_0_20px_rgba(34,211,238,0.05)] shrink-0 animate-floating-panel transition-all duration-300 hover:border-cyan-400 z-10 order-1 md:order-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-pulse pointer-events-none" />
          
          <div className="relative w-full aspect-[498/278] border border-cyan-400 rounded-md overflow-hidden bg-black shadow-[0_0_10px_rgba(34,211,238,0.2)]">
            <img 
              src={futabaGif} 
              alt="Futaba Admin" 
              className="w-full h-full object-fill absolute inset-0 pointer-events-none"
            />
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]" />
          </div>

          <div className="mt-2 text-center w-full block select-none">
            <p className="font-mono text-[9px] sm:text-[10px] tracking-widest text-cyan-400 font-bold uppercase animate-pulse leading-tight">
              ● SYS_ADMIN
            </p>
            <div className="w-full bg-blue-950 h-1 mt-1 rounded-full overflow-hidden border border-cyan-900/40 block">
              <div className="bg-cyan-400 h-full w-[95%] animate-pulse" />
            </div>
            <p className="font-mono text-[8px] sm:text-[9px] text-neutral-400 mt-1 font-semibold block">
              AUTH: ROOT
            </p>
          </div>
        </div>

        {/* POWERSHELL CONTAINER */}
        <div 
          style={{ height: typeof window !== "undefined" && window.innerWidth < 768 ? MOBILE_SETTINGS.containerHeight : undefined }}
          className="w-full max-w-[450px] md:max-w-none md:flex-1 md:h-[450px] rounded-lg overflow-hidden shadow-2xl border border-blue-900/50 shadow-cyan-500/5 flex flex-col min-w-0 order-2 md:order-none shrink-0"
        >
          {/* PowerShell Upper Bar */}
          <div className="bg-[#0c1c38] px-3 sm:px-4 py-2 flex justify-between items-center border-b border-blue-950 select-none shrink-0">
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono text-neutral-400 truncate">
              <span className="text-cyan-400">&gt;_</span>
              <span className="truncate">PowerShell - Term_Comms.exe</span>
            </div>
            <div className="flex space-x-2 sm:space-x-3 items-center shrink-0">
              <div className="w-2.5 h-0.5 bg-neutral-400 rounded-sm" />
              <div className="w-2.5 h-2.5 border-2 border-neutral-400 rounded-sm" />
              <div className="text-xs font-mono text-neutral-400 px-0.5 leading-none">×</div>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="bg-[#012456] p-4 sm:p-6 font-mono text-neutral-200 leading-relaxed flex-1 text-left relative pb-6 sm:pb-8 powershell-fluid-text overflow-hidden">
            
            <p className="text-neutral-400 mb-4 text-[9px] sm:text-xs border-b border-blue-900/40 pb-2 max-w-[140px] xs:max-w-xs sm:max-w-md select-none">
              PS_COMMS_CHANNEL // SECURE_SHELL <br />
              User: root@skytech-network
            </p>

            <p className="inline break-words whitespace-pre-wrap">
              <span className="text-yellow-400 font-bold">C:\Users\AboutUs&gt;</span>
              {typedText}
            </p>
            {typedText.length < fullText.length && (
              <span className="animate-pulse bg-neutral-200 text-neutral-200 ml-1 inline-block w-1.5 h-3.5 align-middle">&nbsp;</span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeatureSection;