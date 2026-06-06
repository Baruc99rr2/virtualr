import { useEffect, useState } from "react";

const HeroSection = () => {
  const words = ["DIGITIZE.", "AUTOMATE.", "SCALE."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          setTypingSpeed(1500);
          setIsDeleting(true);
        } else {
          setTypingSpeed(120);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(400);
        } else {
          setTypingSpeed(60);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center w-full px-4 relative pb-16 lg:pb-24 select-none">
      
      <style>{`
        /* CORRECCIÓN: Bajamos el mínimo a 11px y aumentamos la escala relativa para que en pantallas chicas se adapte mejor sin romper */
        .hero-title-responsive {
          font-size: clamp(11px, 4.5vw, 48px);
        }
        
        .hero-animated-responsive {
          font-size: clamp(14px, 5vw, 54px);
        }

        /* ANIMACIONES ORBITALES ULTRA LIVIANAS */
        @keyframes orbit-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-counter {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.4; }
        }

        .animate-orbit-cw {
          animation: orbit-clockwise 25s linear infinite;
          will-change: transform;
        }
        .animate-orbit-ccw {
          animation: orbit-counter 35s linear infinite;
          will-change: transform;
        }
        .animate-radar-pulse {
          animation: pulse-soft 4s ease-in-out infinite;
          will-change: opacity;
        }
      `}</style>

      <div className="max-w-5xl w-full flex flex-col items-center justify-center flex-1 py-12">
        
        {/* Badge de la agencia */}
        <span className="bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 rounded-md text-xs font-mono px-3 py-1.5 uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
          &gt;_ SkyTech_Agency
        </span>

        {/* TÍTULO PRINCIPAL */}
        <div className="font-arcade text-white leading-relaxed tracking-tight uppercase w-full">
          {/* CORRECCIÓN: Eliminamos 'whitespace-nowrap' para evitar el desborde en celulares angostos */}
          <p className="hero-title-responsive block w-full text-center px-2">
            We help your business
          </p>
          
          <div className="mt-4 min-h-[48px] sm:min-h-[64px] flex items-center justify-center w-full">
            <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.4)] inline-block hero-animated-responsive whitespace-nowrap">
              {currentText === "" ? "\u00A0" : currentText}
              <span className="animate-ping text-white ml-1">_</span>
            </span>
          </div>
        </div>

        {/* Subtítulo / Bajada */}
        <p className="mt-8 text-sm sm:text-base text-neutral-400 max-w-2xl font-mono leading-relaxed">
          // We design custom software solutions, dynamic landing pages, and automated tools to scale your digital presence.
        </p>

        {/* COMPONENTE: INTERFAZ TELEMETRÍA ORBITAL */}
        <div className="mt-12 w-full max-w-md h-48 relative flex items-center justify-center overflow-hidden">
          <div className="absolute w-44 h-44 rounded-full border border-dashed border-cyan-500/20 animate-orbit-cw flex items-center justify-center">
            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)] -translate-x-1/2" />
          </div>

          <div className="absolute w-32 h-32 rounded-full border border-cyan-500/10 border-t-cyan-500/30 border-b-cyan-500/30 animate-orbit-ccw flex items-center justify-center">
            <div className="absolute bottom-0 right-1/2 w-1 h-1 bg-fuchsia-400 rounded-full shadow-[0_0_6px_rgba(217,70,239,0.8)] translate-x-1/2" />
          </div>

          <div className="absolute w-20 h-20 rounded-full border border-blue-500/20 bg-cyan-950/5 animate-radar-pulse flex items-center justify-center select-none">
            <div className="absolute w-full h-[1px] bg-cyan-500/20" />
            <div className="absolute h-full w-[1px] bg-cyan-500/20" />
          </div>

          <div className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[9px] text-left text-neutral-500 space-y-1 hidden xs:block">
            <p className="text-cyan-500/50">ORBITAL_SYS</p>
            <p>LAT: 24.18° S</p>
            <p>LON: 65.30° W</p>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[9px] text-right text-neutral-500 space-y-1 hidden xs:block">
            <p className="text-fuchsia-500/50">NODE_STATUS</p>
            <p>ALT: 35,786 KM</p>
            <p>SYNC: ACTIVE</p>
          </div>
        </div>

      </div>

      <div className="absolute bottom-6 animate-bounce text-neutral-600 font-mono text-xs hidden md:block">
        [ SCROLL DOWN TO DECRYPT ]
      </div>

    </div>
  );
};

export default HeroSection;