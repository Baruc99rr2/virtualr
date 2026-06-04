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
    /* CORRECCIÓN: Ajustamos rellenos y quitamos márgenes sobrantes para que pegue limpio con About/Features */
    <div className="flex flex-col items-center justify-center pt-24 lg:pt-32 pb-4 text-center w-full">
      
      {/* Badge de la agencia */}
      <span className="bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 rounded-md text-xs font-mono px-3 py-1.5 uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(34,211,238,0.1)] select-none">
        &gt;_ SkyTech_Agency
      </span>

      {/* TÍTULO PRINCIPAL PIXELEADO */}
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-arcade text-white leading-relaxed max-w-5xl tracking-tight uppercase px-4">
        Ayudamos a tu negocio a <br />
        <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)] block mt-4 min-h-[50px]">
          {currentText}
          <span className="animate-ping text-white ml-1">_</span>
        </span>
      </h1>

      {/* Bajada acortada y optimizada */}
      <p className="mt-8 mb-10 text-sm sm:text-base text-neutral-400 max-w-2xl font-mono leading-relaxed px-4">
        // Llevá tu negocio al entorno digital.
      </p>

      {/* VIDEOS INFERIORES CON CONTENEDOR ENCAJADO */}
      <div className="flex justify-center max-w-4xl w-full px-4 gap-4">
        <div className="w-1/2 relative group">
          <div className="absolute inset-0 bg-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg w-full border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.05)] relative z-10"
          >
            <source src={video1} type="video/mp4" />
          </video>
        </div>
        
        <div className="w-1/2 relative group">
          <div className="absolute inset-0 bg-fuchsia-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg w-full border border-fuchsia-500/20 shadow-[0_0_20px_rgba(217,70,239,0.05)] relative z-10"
          >
            <source src={video2} type="video/mp4" />
          </video>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;