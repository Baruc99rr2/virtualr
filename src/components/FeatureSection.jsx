import { useEffect, useState } from "react";
import futabaGif from "../assets/futaba.gif"; 

// ==========================================
// CONFIGURACIÓN MANUAL PARA CELULARES
// Modificá estos valores para ajustar el diseño a tu gusto sin tocar el código de abajo.
// ==========================================
const MOBILE_SETTINGS = {
  containerHeight: "460px",       // ALARGADO: Incrementado a 460px para dar más espacio en celulares
  fontSizeDefault: "3.4vw",       // Tamaño de letra en pantallas muy chicas/verticales
  fontSizeWideMobile: "3.2vw",    // Tamaño de letra en celulares un poco más anchos (desde 480px)
};

const FeatureSection = () => {
  const fullTitle = "ACERCA DE NOSOTROS";
  const [titleText, setTitleText] = useState("");
  const [isTitleDeleting, setIsTitleDeleting] = useState(false);
  const [titleSpeed, setTitleSpeed] = useState(100);

  const fullText = 
    "cat info_base.txt\n" +
    "Somos un equipo que se adapta a tu presupuesto para ayudarte a digitalizarte, nos apasiona el diseño y el espiritu de emprendedurismo, superacion y esfuerzo, te acompañamos en tu proceso de crecimiento.\n\n" +
    "C:\\Users\\AboutUs> cat info_academic.txt\n" +
    "En 2025 nos graduamos en Diseño Integral de Videojuegos en la UNJu, consolidando nuestra profunda pasión por la programación";
  
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
      
      {/* Inyección dinámica de tus parámetros en los estilos */}
      <style>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-floating-panel {
          animation: subtle-float 4s ease-in-out infinite;
        }
        
        /* LOGIC RESIZING: El título se encoje fluidamente (mínimo 14px, escala a 2.5vw, máximo de 36px en 1920px o superior) */
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

      {/* TÍTULO PRINCIPAL CON CLASE RESPONSIVA FLUIDA */}
      <div className="text-center mb-6 md:mb-10 select-none h-[40px] flex items-center justify-center w-full px-4">
        {/* Cambiado por about-title-responsive y whitespace-nowrap para impedir saltos */}
        <h2 className="font-arcade tracking-wide text-white about-title-responsive whitespace-nowrap">
          {titleText === "" ? "\u00A0" : titleText}
          <span className="animate-pulse text-cyan-400">_</span>
        </h2>
      </div>

      {/* CONTENEDOR PADRE */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-center gap-6 px-4 relative">
        
        {/* PANEL FUTABA */}
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

        {/* CONTENEDOR POWERSHELL */}
        <div 
          style={{ height: window.innerWidth < 768 ? MOBILE_SETTINGS.containerHeight : undefined }}
          className="w-full max-w-[450px] md:max-w-none md:flex-1 md:h-[450px] rounded-lg overflow-hidden shadow-2xl border border-blue-900/50 shadow-cyan-500/5 flex flex-col min-w-0 order-2 md:order-none shrink-0"
        >
          {/* Barra superior de PowerShell */}
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

          {/* Cuerpo de la terminal */}
          <div className="bg-[#012456] p-4 sm:p-6 font-mono text-neutral-200 leading-relaxed flex-1 text-left relative pb-6 sm:pb-8 powershell-fluid-text overflow-hidden">
            
            <p className="text-neutral-400 mb-4 text-[9px] sm:text-xs border-b border-blue-900/40 pb-2 max-w-[140px] xs:max-w-xs sm:max-w-md select-none">
              PS_COMMS_CHANNEL // SECURE_SHELL <br />
              User: root@skytech-network
            </p>

            <p className="inline break-words whitespace-pre-wrap">
              <span className="text-yellow-400 font-bold">C:\Users\AboutUs&gt;</span>
              {typedText}
            </p>
            <span className="animate-pulse bg-neutral-200 text-neutral-200 ml-1 inline-block w-1.5 h-3.5 align-middle">&nbsp;</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeatureSection;