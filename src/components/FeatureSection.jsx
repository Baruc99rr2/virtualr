import { useEffect, useState } from "react";
import futabaGif from "../assets/futaba.gif"; 

const FeatureSection = () => {
  const fullTitle = "ACERCA DE NOSOTROS";
  const [titleText, setTitleText] = useState("");
  const [isTitleDeleting, setIsTitleDeleting] = useState(false);
  const [titleSpeed, setTitleSpeed] = useState(100);

  const fullText = 
    "cat info_base.txt\n" +
    "Somos un equipo que se adapta a tu presupuesto para ayudarte a digitalizarte, nos apasiona el diseño y el espiritu de emprendedurismo, superacion y esfuerzo, te acompañamos en tu proceso de crecimiento.\n\n" +
    "C:\\Users\\AboutUs> cat info_academic.txt\n" +
    "En 2025 nos graduamos como Técnicos en Diseño Integral de Videojuegos en la Facultad de Ingeniería de la Universidad Nacional de Jujuy. Contamos con una fuerte pasión por los videojuegos y un sólido interés en la programación orientada al desarrollo de experiencias interactivas";
  
  const [typedText, setTypedText] = useState("");
  const [isTextResetting, setIsTextResetting] = useState(false);

  useEffect(() => {
    const handleTitleType = () => {
      if (!isTitleDeleting) {
        setTitleText(fullTitle.substring(0, titleText.length + 1));
        if (titleText === fullTitle) {
          setTitleSpeed(2500);
          setIsTitleDeleting(true);
        } else {
          setTitleSpeed(100);
        }
      } else {
        setTitleText(fullTitle.substring(0, titleText.length - 1));
        if (titleText === "") {
          setIsTitleDeleting(false);
          setTitleSpeed(500);
        } else {
          setTitleSpeed(50);
        }
      }
    };
    const titleTimer = setTimeout(handleTitleType, titleSpeed);
    return () => clearTimeout(titleTimer);
  }, [titleText, isTitleDeleting, titleSpeed]);

  useEffect(() => {
    if (isTextResetting) return;
    let textIndex = 0;
    const textInterval = setInterval(() => {
      if (textIndex <= fullText.length) {
        setTypedText(fullText.substring(0, textIndex));
        textIndex++;
      } else {
        clearInterval(textInterval);
        setIsTextResetting(true);
        setTimeout(() => {
          setTypedText("");
          setIsTextResetting(false);
        }, 15000);
      }
    }, 25);
    return () => clearInterval(textInterval);
  }, [isTextResetting]);

  return (
    <div id="about" className="relative pt-12 pb-20 min-h-[500px] flex flex-col items-center scroll-mt-24 w-full z-10">
      
      <style>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-floating-panel {
          animation: subtle-float 4s ease-in-out infinite;
        }
      `}</style>

      {/* TÍTULO PRINCIPAL */}
      
      <div className="text-center mb-10 select-none">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-arcade tracking-wide text-white min-h-[40px]">
          {titleText}
          <span className="animate-pulse text-cyan-400">_</span>
        </h2>
      </div>

      {/* CONTENEDOR PADRE */}
      <div className="w-full max-w-5xl flex flex-row items-start gap-3 sm:gap-6 px-3 relative">
        
        {/* PANEL */}
        <div className="sticky top-32 h-fit w-24 xs:w-28 sm:w-40 lg:w-1/4 bg-[#0c1c38]/70 border-2 border-cyan-500/30 rounded-lg p-2 sm:p-3 flex flex-col items-center justify-center relative overflow-hidden group shadow-[0_0_20px_rgba(34,211,238,0.05)] shrink-0 animate-floating-panel transition-all duration-300 hover:border-cyan-400 z-10">
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
            <p className="font-mono text-[7px] sm:text-[10px] tracking-widest text-cyan-400 font-bold uppercase animate-pulse leading-tight">
              ● SYS_ADMIN
            </p>
            <div className="w-full bg-blue-950 h-1 mt-1 rounded-full overflow-hidden border border-cyan-900/40 hidden xs:block">
              <div className="bg-cyan-400 h-full w-[95%] animate-pulse" />
            </div>
            <p className="font-mono text-[7px] sm:text-[9px] text-neutral-400 mt-1 font-semibold hidden sm:block">
              AUTH: ROOT
            </p>
          </div>
        </div>

        {/* CONTENEDOR POWERSHELL */}
        <div className="flex-1 rounded-lg overflow-hidden shadow-2xl border border-blue-900/50 shadow-cyan-500/5 flex flex-col min-w-0 h-auto min-h-[300px] sm:min-h-0">
          <div className="bg-[#0c1c38] px-3 sm:px-4 py-2 flex justify-between items-center border-b border-blue-950 select-none">
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

          <div className="bg-[#012456] p-3 sm:p-6 font-mono text-[11px] sm:text-sm lg:text-base text-neutral-200 leading-relaxed flex-1 text-left relative overflow-hidden pb-6 sm:pb-8">
            <div className="absolute top-2 right-3 sm:top-3 sm:right-4 bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase shadow-[0_0_10px_rgba(34,211,238,0.1)] select-none">
              [ ADMIN: FUTABA ]
            </div>

            <p className="text-neutral-400 mb-3 sm:mb-6 text-[9px] sm:text-xs border-b border-blue-900/40 pb-2 max-w-[140px] xs:max-w-xs sm:max-w-md select-none">
              PS_COMMS_CHANNEL // SECURE_SHELL <br />
              User: root@skytech-network
            </p>

            <p className="inline break-words whitespace-pre-wrap">
              <span className="text-yellow-400 font-bold">C:\Users\AboutUs&gt;</span>
              {typedText}
            </p>
            <span className="animate-pulse bg-neutral-200 text-neutral-200 ml-1 inline-block w-1.5 h-3.5 sm:w-2 sm:h-4 align-middle">&nbsp;</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeatureSection;