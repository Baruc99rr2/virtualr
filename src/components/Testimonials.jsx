import { useState } from "react";
import { ChevronRight, Terminal } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqList = [
    {
      id: "01",
      question: "¿Cómo se coordina el pago?",
      answer: "El desarrollo se abona en dos partes: un 50% inicial para dar comienzo al proyecto y el 50% restante al mes siguiente."
    },
    {
      id: "02",
      question: "¿Cuánto tardan las entregas?",
      answer: "Para los módulos estándar (como la Miniweb), el tiempo estimado de entrega es de entre 48 y 72 horas hábiles una vez recibida toda la información."
    },
    {
      id: "03",
      question: "¿El precio incluye el dominio?",
      answer: "El costo del dominio queda a cargo del cliente, pero te asesoramos y acompañamos paso a paso en el proceso de compra para que lo registres a tu nombre de forma rápida y segura o podemos encargarnos nosotros de este proceso."
    },
    {
      id: "04",
      question: "¿Qué tecnologías utilizás?",
      answer: "Trabajamos con herramientas modernas y de alto rendimiento como Vite, React y Tailwind CSS. Esto garantiza que tu sitio sea ultra rápido, seguro y adaptable a cualquier celular."
    },
    {
      id: "05",
      question: "¿Se paga algún mantenimiento mensual?",
      answer: "No es obligatorio. Las actualizaciones de catálogo (precios o stock) son completamente gratuitas. Si a futuro necesitás cambios estructurales, los cotizamos en el momento. También contamos con un servicio de soporte mensual opcional por $6.500 para actualizaciones constantes."
    }
  ];

  return (
    /* CORRECCIÓN DE ENRUTAMIENTO: Añadido id="faq" para que el Navbar lo detecte */
    <div id="faq" className="relative mt-20 py-8 flex flex-col items-center px-4 w-full h-auto overflow-hidden bg-[#010302] scroll-mt-24">
      
      {/* SHADER ENGINE: CORREGIDA ANIMACIÓN VBAR-SCAN PARA RECORRER TODO EL CONTENEDOR */}
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
      `}</style>

      {/* MARCO/CHASIS DEL MONITOR RETRO */}
      <div className="w-full max-w-5xl bg-[#121613] p-4 sm:p-6 rounded-3xl border-4 border-[#1e2520] shadow-[0_0_50px_rgba(0,0,0,0.9),inset_0_0_20px_rgba(0,0,0,0.8)] relative">
        
        {/* LA PANTALLA CRT REAL */}
        <div className="relative w-full rounded-2xl overflow-hidden crt-screen-glow border-2 border-[#090f0a] px-4 py-6 sm:p-8 pixel-grille animate-crt-flicker">
          
          {/* LÍNEA DE ESCANEO CORREGIDA: Cambiado absolute top-0 por la animación controlada por top de CSS */}
          <div className="absolute left-0 bg-gradient-to-b from-transparent via-green-400/20 to-transparent h-20 w-full animate-vbar pointer-events-none z-30 shadow-[0_0_15px_rgba(74,222,128,0.2)]" />
          
          {/* REFLEJOS EN EL CRISTAL */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04)_0%,transparent_70%)] pointer-events-none z-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.5)_100%)] pointer-events-none z-30" />

          {/* ENCABEZADO */}
          <div className="text-center mb-8 select-none z-10 relative">
            <div className="inline-flex items-center gap-2 bg-green-950/80 text-green-400 border border-green-500/50 rounded-sm text-xs font-mono px-4 py-1.5 uppercase tracking-widest shadow-[0_0_10px_rgba(34,197,94,0.2)]">
              <Terminal className="w-3 h-3 animate-pulse" />
              <span>[ SYSTEM: MONITOR_01_ON ]</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-mono font-black mt-4 tracking-tight text-green-400 uppercase green-phosphor-text animate-glitch">
              &gt; CONSULTAS_F.A.Q
            </h2>
            <p className="text-green-500/70 font-mono text-xs mt-2 max-w-xl mx-auto uppercase tracking-wider">
              INTERFAZ DE LECTURA DE DATOS
            </p>
          </div>

          {/* LAYOUT ENTORNO RPG */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 z-10 relative font-mono">
            
            {/* PANEL IZQUIERDO: SELECTOR */}
            <div className="md:col-span-5 flex flex-col gap-2">
              <div className="text-[10px] text-green-600/80 font-bold px-2 mb-1 tracking-widest uppercase">// INDEX_REGISTER</div>
              {faqList.map((faq, index) => {
                const isSelected = activeIndex === index;
                return (
                  <button
                    key={faq.id}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left p-3 border text-xs sm:text-sm flex items-center justify-between transition-all steps(2) relative overflow-hidden ${
                      isSelected
                        ? "bg-green-500/20 border-green-400 text-green-300 shadow-[0_0_12px_rgba(34,197,94,0.2)]"
                        : "bg-green-950/20 border-green-900/60 text-green-600 hover:border-green-700 hover:text-green-400"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-400 animate-pulse" />
                    )}
                    
                    <div className="flex items-center gap-3">
                      <span className={isSelected ? "text-green-400 font-bold" : "text-green-800"}>
                        {faq.id}.
                      </span>
                      <span className="truncate max-w-[210px] sm:max-w-none font-bold tracking-wide">
                        {faq.question}
                      </span>
                    </div>
                    
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? "translate-x-1 text-green-400" : "text-green-900"}`} />
                  </button>
                );
              })}
            </div>

            {/* PANEL DERECHO: MONITOR DE DETALLE */}
            <div className="md:col-span-7 flex flex-col">
              <div className="text-[10px] text-green-600/80 font-bold px-2 mb-1 tracking-widest uppercase">// OUTPUT_BUFFER</div>
              
              <div className="relative flex-1 min-h-[220px] bg-black/40 border border-green-900 p-5 flex flex-col justify-between rounded-sm shadow-[inset_0_0_30px_rgba(0,0,0,0.9)]">
                
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-600" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-600" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-600" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-600" />

                <div>
                  <div className="flex items-center justify-between border-b border-green-950 pb-2 mb-3 text-[10px] text-green-600/70">
                    <span className="text-green-400 animate-pulse">● MEM_SECTOR_{faqList[activeIndex].id}</span>
                    <span>TRM_VAL_OK</span>
                  </div>

                  <h3 className="text-sm font-bold text-green-100 mb-3 tracking-wide flex items-center gap-2">
                    <span className="text-green-400 animate-ping text-[10px]">■</span> {faqList[activeIndex].question}
                  </h3>

                  <div className="w-full h-[1px] bg-green-950 mb-3 relative overflow-hidden">
                    {/* Línea decorativa interna también adaptada a la nueva animación */}
                    <div className="absolute inset-0 bg-green-500/40 w-1/4 animate-vbar" style={{ animationDuration: '2s' }} />
                  </div>

                  <p key={activeIndex} className="text-green-400/90 text-xs sm:text-sm leading-relaxed tracking-wide font-mono bg-green-950/20 p-3 border border-green-900/30 rounded-sm shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                    {faqList[activeIndex].answer}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-green-950 flex justify-between items-center text-[9px] text-green-700">
                  <span>CURSOR: ACTIVE</span>
                  <span className="animate-pulse bg-green-500/20 text-green-400 px-2 py-0.5 border border-green-500/30">PRNTR_READY</span>
                </div>

              </div>
            </div>

          </div>

          <div className="mt-6 text-right text-[8px] font-mono text-green-900 tracking-widest pointer-events-none">
            CRT-MATRIX SYSTEM V1.0.0
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FAQ;