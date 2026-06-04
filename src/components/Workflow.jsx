import { useState } from "react";
import { 
  Code2, Braces, Layers, Database, 
  Terminal, Cpu, Monitor, Sliders, ShieldAlert, Coffee 
} from "lucide-react";

const Workflow = () => {
  const [activeNode, setActiveNode] = useState(null);

  const skills = [
    { id: "react", name: "REACT", icon: <Monitor className="w-4 h-4 sm:w-6 sm:h-6" />, rank: "S", xp: 80, cat: "FRONT" },
    { id: "ts", name: "Typescript", icon: <Braces className="w-4 h-4 sm:w-6 sm:h-6" />, rank: "A", xp: 70, cat: "FRONT" },
    { id: "tailwind", name: "Tailwindcss", icon: <Layers className="w-4 h-4 sm:w-6 sm:h-6" />, rank: "S", xp: 80, cat: "FRONT" },
    { id: "node", name: "Node", icon: <Cpu className="w-4 h-4 sm:w-6 sm:h-6" />, rank: "S", xp: 80, cat: "BACK" },
    { id: "mysql", name: "MySQL", icon: <Database className="w-4 h-4 sm:w-6 sm:h-6" />, rank: "SS", xp: 90, cat: "BACK" },
    { id: "python", name: "Python", icon: <Terminal className="w-4 h-4 sm:w-6 sm:h-6" />, rank: "MAX", xp: 100, cat: "BACK" },
    { id: "java", name: "Java", icon: <Coffee className="w-4 h-4 sm:w-6 sm:h-6" />, rank: "SS", xp: 90, cat: "CORE" },
    { id: "csharp", name: "C#", icon: <Code2 className="w-4 h-4 sm:w-6 sm:h-6" />, rank: "MAX", xp: 100, cat: "GAME" },
    { id: "unity", name: "Unity", icon: <Sliders className="w-4 h-4 sm:w-6 sm:h-6" />, rank: "MAX", xp: 100, cat: "GAME" },
    { id: "vercel", name: "Vercel", icon: <ShieldAlert className="w-4 h-4 sm:w-6 sm:h-6" />, rank: "S", xp: 75, cat: "VRC" },
  ];

  const renderXpBar = (xp) => {
    const totalBlocks = window.innerWidth < 640 ? 12 : 24;
    const activeBlocks = Math.round((xp / 100) * totalBlocks);
    return "█".repeat(activeBlocks) + "░".repeat(totalBlocks - activeBlocks);
  };

  return (
    // CORRECCIÓN: Se setea la sección completa con z-10 controlado
    <div id="skills" className="relative mt-20 pb-20 min-h-[900px] flex flex-col items-center px-2 sm:px-4 overflow-hidden bg-black bg-[linear-gradient(to_right,#091426_1px,transparent_1px),linear-gradient(to_bottom,#091426_1px,transparent_1px)] bg-[size:4rem_4rem] scroll-mt-24 z-10">
      
      <style>{`
        @keyframes ship-descend {
          0% { transform: translateY(-40px); opacity: 0; }
          5% { opacity: 0.8; }
          95% { opacity: 0.8; }
          100% { transform: translateY(920px); opacity: 0; }
        }
        
        .retro-space-ship {
          position: absolute;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          font-weight: bold;
          color: #22d3ee;
          text-shadow: 0 0 8px #06b6d4, 0 0 15px #06b6d4;
          animation: ship-descend linear infinite;
          pointer-events: none;
          z-index: 1;
          user-select: none;
        }

        .retro-space-ship::before {
          content: "";
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 120px;
          background: linear-gradient(to top, rgba(34, 211, 238, 0.7) 0%, rgba(236, 72, 153, 0.4) 60%, transparent 100%);
          box-shadow: 0 0 8px rgba(34, 211, 238, 0.8), 0 0 15px rgba(236, 72, 153, 0.5);
        }

        .ship-pink {
          color: #f472b6 !important;
          text-shadow: 0 0 8px #ec4899, 0 0 15px #ec4899 !important;
        }
        .ship-pink::before {
          background: linear-gradient(to top, rgba(244, 114, 182, 0.7) 0%, rgba(34, 211, 238, 0.4) 60%, transparent 100%) !important;
          box-shadow: 0 0 8px rgba(244, 114, 182, 0.8), 0 0 15px rgba(34, 211, 238, 0.5) !important;
        }
      `}</style>

      {/* CAPA DE NAVES (z-1 para que queden al fondo de todo) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-1">
        <div className="retro-space-ship" style={{ left: '7%',  animationDuration: '6s',  animationDelay: '0s' }}>🛸</div>
        <div className="retro-space-ship ship-pink" style={{ left: '22%', animationDuration: '8s',  animationDelay: '3.5s' }}>👾</div>
        <div className="retro-space-ship" style={{ left: '39%', animationDuration: '5.5s', animationDelay: '1.2s' }}>▲</div>
        <div className="retro-space-ship ship-pink" style={{ left: '56%', animationDuration: '9s',  animationDelay: '5s' }}>🛸</div>
        <div className="retro-space-ship" style={{ left: '74%', animationDuration: '7s',  animationDelay: '2.1s' }}>👾</div>
        <div className="retro-space-ship" style={{ left: '91%', animationDuration: '10s', animationDelay: '0.8s' }}>▲</div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.85)_100%)] pointer-events-none z-2" />

      {/* TÍTULO */}
      <div className="text-center mb-10 z-2">
        <span className="bg-neutral-900 text-cyan-400 border border-cyan-500/30 rounded-full h-6 text-xs font-mono font-bold px-4 py-1 uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.15)]">
          [ SYSTEM_SKILL_TREE ]
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-arcade mt-4 tracking-wide text-white drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]">
          NUESTROS CONOCIMIENTOS
        </h2>
      </div>

      {/* CONTENEDOR DEL ÁRBOL */}
      <div className="w-full max-w-5xl flex flex-col items-center relative z-2">
        
        {/* NODO CENTRAL REBAJADO A Z-2 */}
        <div 
          className={`z-2 mb-10 p-3 bg-[#020712] border-2 font-mono text-center select-none cursor-pointer tracking-wider rounded-sm transition-all duration-200
            ${activeNode === "core" 
              ? "border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] text-cyan-400" 
              : "border-cyan-500/30 text-white"}`}
          onMouseEnter={() => setActiveNode("core")}
          onMouseLeave={() => setActiveNode(null)}
        >
          <div className="text-[10px] flex items-center justify-center space-x-2 font-bold px-4">
            <span>&lt; CORE // DEV_SYSTEM &gt;</span>
          </div>
        </div>

        {/* GRILLA DE NODOS */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 lg:gap-6 relative">
          {skills.map((skill) => {
            const isHovered = activeNode === skill.id;
            return (
              <div
                key={skill.id}
                className={`relative bg-[#040c1a]/85 backdrop-blur-md border-2 p-2 sm:p-5 font-mono flex flex-col justify-between transition-all duration-200 select-none cursor-crosshair group rounded-sm
                  ${isHovered 
                    ? "border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)] bg-[#071630]/95" 
                    : "border-neutral-800/80 hover:border-cyan-500/40"}`}
                onMouseEnter={() => setActiveNode(skill.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[7px] sm:text-[9px] font-bold tracking-widest text-neutral-500">
                    {`// ${skill.cat}`}
                  </span>
                  <span className={`text-[8px] sm:text-[10px] font-bold font-arcade px-1 sm:px-2 py-0.5 rounded border shrink-0
                    ${skill.rank === "MAX" ? "bg-red-950/80 border-red-500 text-red-400" 
                    : skill.rank === "SS" ? "bg-cyan-950/80 border-cyan-500 text-cyan-400"
                    : "bg-yellow-950/80 border-yellow-500 text-yellow-400"}`}>
                    {skill.rank}
                  </span>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-4 mb-2 sm:mb-4">
                  <div className={`p-1.5 sm:p-2.5 border transition-all duration-200 rounded-md bg-black/50 shrink-0
                    ${isHovered ? "border-cyan-400 text-cyan-400 [transform:rotateY(180deg)]" : "border-neutral-800 text-neutral-400"}`}>
                    {skill.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className={`text-[10px] sm:text-sm lg:text-base font-bold tracking-tight truncate ${isHovered ? "text-cyan-400" : "text-neutral-100"}`}>
                      {skill.name}
                    </h4>
                  </div>
                </div>

                <div className="mt-auto border-t border-neutral-900/80 pt-2">
                  <div className="flex justify-between text-[7px] sm:text-[9px] mb-0.5 font-bold">
                    <span className="text-neutral-500">XP</span>
                    <span className="text-neutral-400">{skill.xp}%</span>
                  </div>
                  <div className={`text-[7px] sm:text-[10px] tracking-[-0.1em] sm:tracking-[-0.15em] font-mono font-bold select-none w-full block overflow-hidden
                    ${isHovered ? "text-cyan-400" : "text-cyan-800"}`}>
                    {renderXpBar(skill.xp)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Workflow;