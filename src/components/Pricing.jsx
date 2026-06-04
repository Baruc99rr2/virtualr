import { ChevronRight, Sword } from "lucide-react";

const Pricing = () => {
  const WHATSAPP_NUMBER = "543885174084";
  const miniWebMessage = encodeURIComponent("Hola! Me gustaría adquirir mi mini-web.");
  const customMessage = encodeURIComponent("Hola! Me interesa solicitar un presupuesto para un desarrollo a medida o videojuego.");

  return (
    // CORRECCIÓN: Contenedor general encapsulado en z-10
    <div id="pricing" className="w-full max-w-5xl mx-auto my-6 px-4 relative z-10 scroll-mt-24">
      
      {/* MARCO EXTERIOR */}
      <div className="relative border-[10px] border-neutral-800 bg-neutral-900 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(0,0,0,0.9)] p-2 sm:p-4 overflow-hidden">
        
        <style>{`
          @keyframes scanline-perfect {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
          @keyframes crt-soft-glow {
            0%, 100% { opacity: 0.15; background-color: rgba(6, 182, 212, 0.01); }
            50% { opacity: 0.3; background-color: rgba(239, 68, 68, 0.01); }
          }
          @keyframes safe-flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
            20%, 24%, 55% { opacity: 0.85; }
          }
          @keyframes subtle-text-glitch {
            0%, 100% { text-shadow: 0 0 1px rgba(6,182,212,0.3); }
            50% { text-shadow: 1px 0 0 rgba(239,68,68,0.3), -1px 0 0 rgba(6,182,212,0.3); }
          }
          .animate-scanline-crt-fixed { animation: scanline-perfect 6s linear infinite; }
          .animate-glow-crt-soft { animation: crt-soft-glow 4s infinite; }
          .animate-flicker-ui-safe { animation: safe-flicker 8s linear infinite; }
          .animate-text-subtle { animation: subtle-text-glitch 1s infinite; }

          /* CORRECCIÓN: Máscara analógica suavizada rebajada a z-10 */
          .crt-interlace-soft::before {
            content: " ";
            display: block;
            position: absolute;
            top: 0; left: 0; bottom: 0; right: 0;
            background: linear-gradient(rgba(18, 16, 16, 0) 60%, rgba(0, 0, 0, 0.45) 40%);
            z-index: 10;
            background-size: 100% 3px;
            pointer-events: none;
          }
        `}</style>

        {/* CONTENEDOR INTERNO */}
        <div className="relative pb-16 pt-8 flex flex-col items-center px-4 overflow-hidden min-h-[600px] bg-black bg-[linear-gradient(to_right,#081529_1px,transparent_1px),linear-gradient(to_bottom,#081529_1px,transparent_1px)] bg-[size:3rem_3rem] rounded-2xl">
          
          {/* FILTROS CRT CORREGIDOS A Z-10 */}
          <div className="absolute inset-0 crt-interlace-soft pointer-events-none z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)] pointer-events-none z-10" />

          {/* LÍNEAS DE ESCANEO A Z-10 */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none animate-scanline-crt-fixed z-10" />
          <div className="absolute inset-0 pointer-events-none animate-glow-crt-soft z-5" />

          {/* TEXTOS PERIFÉRICOS REBAJADOS A Z-10 */}
          <div className="w-full max-w-4xl flex justify-between items-center font-mono text-[9px] text-cyan-500/60 px-2 mb-6 select-none z-10 animate-flicker-ui-safe">
            <div className="space-y-0.5">
              <p className="font-bold tracking-widest text-cyan-400">// SYS_STATUS: OPERATIONAL</p>
              <p className="hidden sm:block">CPU_LOAD: 12.8% | MEM_ALLOC: 2048MB</p>
              <p>LOC: 24.180°S | 65.299°W</p>
            </div>
            <div className="text-right space-y-0.5">
              <p className="font-bold tracking-widest text-red-400">// GREMIO_RANK: PLATINUM_II</p>
              <p className="hidden sm:block">ACTIVE_QUESTS: [02/02] | CONTRACTS: 47</p>
              <p className="text-emerald-500">● MONITOR_REFRESH: 60Hz</p>
            </div>
          </div>

          {/* TÍTULO PRINCIPAL */}
          <div className="text-center mb-8 z-10 px-2 animate-flicker-ui-safe">
            <span className="bg-neutral-950 text-yellow-400 border border-yellow-500/30 rounded-full h-6 text-[10px] font-mono font-bold px-4 py-1 uppercase tracking-widest shadow-[0_0_10px_rgba(234,179,8,0.15)]">
              [ SELECT_YOUR_QUEST ]
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-arcade mt-4 tracking-wide text-white animate-text-subtle">
              TABLÓN DE PRECIOS
            </h2>
            <p className="text-neutral-400 font-mono text-[11px] mt-2 max-w-xl mx-auto uppercase tracking-wider">
              Elegí el módulo de desarrollo para iniciar la secuencia de despliegue.
            </p>
          </div>

          {/* TARJETAS */}
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 px-2 z-10">
            
            {/* TARJETA 1 */}
            <div className="relative bg-[#020612]/90 backdrop-blur-sm border-2 border-cyan-500/40 p-5 sm:p-6 font-mono flex flex-col justify-between transition-all duration-200 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] group rounded-sm">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold text-cyan-400 tracking-widest">// QUEST_TYPE: LANDING</span>
                  <span className="text-xs font-bold font-arcade px-2 py-0.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-400 rounded">
                    RANK D
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-arcade text-white mb-1 tracking-wide group-hover:text-cyan-400 transition-colors">MINIWEB</h3>
                <div className="flex items-baseline text-white mt-3 mb-4 border-b border-cyan-900/30 pb-3">
                  <span className="text-2xl sm:text-3xl font-bold font-arcade text-yellow-400">$50.000</span>
                  <span className="text-neutral-400 text-[10px] ml-2 uppercase font-bold tracking-wider">[PAGO ÚNICO]</span>
                </div>
                <ul className="space-y-3 text-xs text-neutral-200">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="text-cyan-400 w-4 h-4 shrink-0" />
                    <span>Información sobre tu tienda</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="text-cyan-400 w-4 h-4 shrink-0" />
                    <span>Datos de contacto y redes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="text-cyan-400 w-4 h-4 shrink-0" />
                    <span>Hasta 150 imágenes integradas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="text-cyan-400 w-4 h-4 shrink-0" />
                    <span>Hosting e infraestructura incluidos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="text-cyan-400 w-4 h-4 shrink-0" />
                    <span>Diseño completamente personalizado</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <div className="text-[9px] text-cyan-600/80 mb-2 font-bold tracking-widest">ENERGY_REQUIRED: [██░░░░░░░░]</div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${miniWebMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center text-center w-full h-11 font-arcade text-xs tracking-wider bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all duration-150 uppercase rounded-sm"
                >
                  ACEPTAR MISIÓN
                </a>
              </div>
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400" />
            </div>

            {/* TARJETA 2 */}
            <div className="relative bg-[#06020c]/90 backdrop-blur-sm border-2 border-red-500/40 p-5 sm:p-6 font-mono flex flex-col justify-between transition-all duration-200 hover:border-red-500 hover:bg-[#0d0517]/90 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] group rounded-sm">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold text-red-400 tracking-widest">// QUEST_TYPE: FULLSTACK</span>
                  <span className="text-xs font-bold font-arcade px-2 py-0.5 bg-red-950/80 border border-red-500/50 text-red-400 rounded">
                    RANK S+
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-arcade text-white mb-1 tracking-wide group-hover:text-red-400 transition-colors">SISTEMA CUSTOM</h3>
                <div className="flex items-baseline text-white mt-3 mb-4 border-b border-red-900/30 pb-3">
                  <span className="text-xl sm:text-2xl font-bold font-arcade text-red-400 uppercase">A MEDIDA</span>
                  <span className="text-neutral-400 text-[10px] ml-2 uppercase font-bold tracking-wider">[PRESUPUESTO]</span>
                </div>
                <p className="text-neutral-300 text-xs leading-relaxed mb-4">
                  ¿Buscás una infraestructura web robusta, sistemas complejos o el desarrollo de un videojuego interactivo en C# (Unity)?
                </p>
                <ul className="space-y-3 text-xs text-neutral-200">
                  <li className="flex items-center space-x-2">
                    <Sword className="text-red-400 w-4 h-4 shrink-0" />
                    <span>Aplicaciones web autoadministrables</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Sword className="text-red-400 w-4 h-4 shrink-0" />
                    <span>Bases de datos complejas y seguridad</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Sword className="text-red-400 w-4 h-4 shrink-0" />
                    <span>Desarrollo de videojuegos interactivos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Sword className="text-red-400 w-4 h-4 shrink-0" />
                    <span>Lógica avanzada en arquitectura C#</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <div className="text-[9px] text-red-600/80 mb-2 font-bold tracking-widest">ENERGY_REQUIRED: [██████████]</div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${customMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center text-center w-full h-11 font-arcade text-xs tracking-wider bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black shadow-[0_0_15px_rgba(239,68,68,0.1)] transition-all duration-150 uppercase rounded-sm"
                >
                  SOLICITAR PRESUPUESTO
                </a>
              </div>
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-red-500" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-red-500" />
            </div>

          </div>

          {/* PIE DE TERMINAL */}
          <div className="w-full max-w-4xl font-mono text-[8px] text-neutral-600 mt-8 px-2 flex justify-between select-none z-10 animate-flicker-ui-safe">
            <span>&gt;&gt; LOG_STREAM_INITIALIZED</span>
            <span className="text-cyan-800">BUFFER_STATUS: 100% OPERATIONAL</span>
            <span className="hidden sm:inline">V_REF_VOLTAGE: ~230V ACC</span>
          </div>

        </div>

        {/* CONTROLES FÍSICOS REBAJADOS A Z-20 PARA QUEDAR ABAJO DEL NAVBAR */}
        <div className="absolute bottom-2 right-6 flex items-center space-x-3 z-20 bg-neutral-800/80 px-3 py-1.5 rounded-md border border-neutral-700/50 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-neutral-600 border border-neutral-900 cursor-pointer active:scale-95" title="Menu" />
          <div className="w-2 h-2 rounded-full bg-neutral-600 border border-neutral-900 cursor-pointer active:scale-95" title="Ajuste" />
          <div className="flex items-center space-x-1 pl-2 border-l border-neutral-700">
            <span className="text-[7px] font-mono text-neutral-500 uppercase tracking-tighter">POWER</span>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.7)]" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;