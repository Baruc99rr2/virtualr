import { useEffect, useState } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  const words = ["DIGITALIZAR.", "AUTOMATIZAR.", "ESCALAR."];
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
          setTypingSpeed(1500); // Pausa al terminar de escribir
          setIsDeleting(true);
        } else {
          setTypingSpeed(120); // Velocidad al escribir
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(400);
        } else {
          setTypingSpeed(60); // Velocidad al borrar
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <div className="flex flex-col items-center justify-center pt-24 lg:pt-32 pb-4 text-center w-full">
      
      {/* REDUCCIÓN ESTRICTA Y PROGRESIVA PARA PANTALLAS CHICAS */}
      <style>{`
        /* Bajamos el mínimo drásticamente (a 12px / 14px) para que en celulares muy chicos la fuente se reduzca lo necesario para entrar entera */
        .hero-title-responsive {
          font-size: clamp(12px, 2.8vw, 48px);
        }
        
        .hero-animated-responsive {
          font-size: clamp(14px, 3.2vw, 54px);
        }
      `}</style>

      {/* Badge de la agencia */}
      <span className="bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 rounded-md text-xs font-mono px-3 py-1.5 uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(34,211,238,0.1)] select-none">
        &gt;_ SkyTech_Agency
      </span>

      {/* TÍTULO PRINCIPAL */}
      <div className="font-arcade text-white leading-relaxed max-w-6xl tracking-tight uppercase px-4 select-none w-full">
        
        {/* Frase fija: Al reducirse el mínimo de clamp, la tipografía se encoge limpiamente en pantallas chicas y entra al 100% */}
        <p className="hero-title-responsive whitespace-nowrap block w-full text-center">
          Ayudamos a tu negocio a
        </p>
        
        {/* Palabra animada */}
        <div className="mt-4 min-h-[44px] sm:min-h-[58px] flex items-center justify-center w-full">
          <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)] inline-block hero-animated-responsive whitespace-nowrap">
            {currentText === "" ? "\u00A0" : currentText}
            <span className="animate-ping text-white ml-1">_</span>
          </span>
        </div>
      </div>

      {/* Bajada acortada y optimizada */}
      <p className="mt-8 mb-10 text-sm sm:text-base text-neutral-400 max-w-2xl font-mono leading-relaxed px-4">
        // Llevá tu negocio al entorno digital.
      </p>

      {/* VIDEOS INFERIORES */}
      <div className="flex justify-center max-w-4xl w-full px-4 gap-4">
        <div className="w-1/2 relative group">
          <div className="absolute inset-0 bg-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
          <video autoPlay loop muted playsInline className="rounded-lg w-full border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.05)] relative z-10">
            <source src={video1} type="video/mp4" />
          </video>
        </div>
        
        <div className="w-1/2 relative group">
          <div className="absolute inset-0 bg-fuchsia-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
          <video autoPlay loop muted playsInline className="rounded-lg w-full border border-fuchsia-500/20 shadow-[0_0_20px_rgba(217,70,239,0.05)] relative z-10">
            <source src={video2} type="video/mp4" />
          </video>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;