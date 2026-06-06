import { Facebook, Instagram, MessageSquare, MapPin, Mail } from "lucide-react";
import bannerImg from "../assets/banner.jpg";

const Footer = () => {
  return (
    /* CORRECTION: Added id="contact-hub" and scroll-mt-24 to cleanly sync with Navbar */
    <footer id="contact-hub" className="mt-20 border-t py-12 border-cyan-950/40 bg-[#030712] relative overflow-hidden scroll-mt-24">
      
      {/* Styles and Animations */}
      <style>{`
        @keyframes gold-shimmer {
          0%, 100% { text-shadow: 0 0 4px #eab308, 0 0 12px #eab308; color: #fef08a; }
          50% { text-shadow: 0 0 10px #ca8a04, 0 0 25px #eab308; color: #eab308; }
        }
        @keyframes neon-pulse-cyan {
          0%, 100% { box-shadow: 0 0 15px rgba(34,211,238,0.2), inset 0 0 15px rgba(34,211,238,0.1); border-color: rgba(34,211,238,0.4); }
          50% { box-shadow: 0 0 25px rgba(34,211,238,0.4), inset 0 0 25px rgba(34,211,238,0.2); border-color: rgba(34,211,238,0.7); }
        }
        @keyframes neon-pulse-pink {
          0%, 100% { box-shadow: 0 0 10px rgba(236,72,153,0.1); border-color: rgba(236,72,153,0.3); }
          50% { box-shadow: 0 0 20px rgba(236,72,153,0.3); border-color: rgba(236,72,153,0.6); }
        }
        
        /* RADAR SWEEP ROTATION CONTROL */
        @property --radar-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes radar-sweep {
          from { --radar-angle: 0deg; }
          to { --radar-angle: 360deg; }
        }

        .animate-insert-coin {
          animation: gold-shimmer 2s infinite ease-in-out;
        }
        .neon-border-cyan {
          animation: neon-pulse-cyan 3s infinite ease-in-out;
        }
        .neon-border-pink {
          animation: neon-pulse-pink 4s infinite ease-in-out;
        }

        .radar-mask {
          animation: radar-sweep 5s linear infinite;
          mask-image: conic-gradient(
            from var(--radar-angle) at 50% 50%,
            rgba(0, 0, 0, 1) 0deg,
            rgba(0, 0, 0, 0.6) 20deg,
            rgba(0, 0, 0, 0.15) 60deg,
            rgba(0, 0, 0, 0.15) 340deg,
            rgba(0, 0, 0, 1) 360deg
          );
          -webkit-mask-image: conic-gradient(
            from var(--radar-angle) at 50% 50%,
            rgba(0, 0, 0, 1) 0deg,
            rgba(0, 0, 0, 0.6) 20deg,
            rgba(0, 0, 0, 0.15) 60deg,
            rgba(0, 0, 0, 0.15) 340deg,
            rgba(0, 0, 0, 1) 360deg
          );
        }

        .radar-line {
          animation: radar-sweep 5s linear infinite;
          background: conic-gradient(
            from var(--radar-angle) at 50% 50%,
            rgba(34, 211, 238, 0.8) 0deg,
            rgba(34, 211, 238, 0) 10deg,
            transparent 360deg
          );
        }
      `}</style>

      {/* Retro grid line background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080f1e_1px,transparent_1px),linear-gradient(to_bottom,#080f1e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* MAIN CONTAINER */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 mb-12">
          
          {/* BANNER WITH ACTIVE RADAR EFFECT */}
          <div className="w-full lg:w-2/3 rounded-xl overflow-hidden bg-[#02050a] border-2 neon-border-cyan group relative transition-all duration-500 min-h-[200px] flex items-center justify-center">
            <img 
              src={bannerImg} 
              alt="Skytech Network Banner" 
              className="w-full h-full aspect-[1105/575] object-cover radar-mask transition-all duration-700 select-none pointer-events-none z-10"
            />
            <div className="absolute inset-0 radar-line pointer-events-none z-20 mix-blend-screen opacity-60" />
            <div className="absolute inset-0 border border-cyan-500/10 rounded-full scale-[0.25] pointer-events-none z-30" />
            <div className="absolute inset-0 border border-cyan-500/10 rounded-full scale-[0.5] pointer-events-none z-30" />
            <div className="absolute inset-0 border border-cyan-500/10 rounded-full scale-[0.75] pointer-events-none z-30" />
            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-cyan-500/10 pointer-events-none z-30" />
            <div className="absolute inset-y-0 left-1/2 w-[1px] bg-cyan-500/10 pointer-events-none z-30" />
          </div>

          {/* CONTACT PANEL WITH PINK NEON */}
          <div className="w-full sm:max-w-md lg:w-1/3 bg-[#0a101d]/90 border-2 neon-border-pink rounded-xl p-6 flex flex-col justify-between backdrop-blur-sm relative">
            
            <div>
              <h3 className="text-md font-mono tracking-widest text-pink-500 font-bold mb-5 uppercase flex items-center gap-2 select-none">
                <span className="animate-pulse">⚡</span> // CONTACT_HUB
              </h3>
              
              <div className="space-y-4 font-mono text-xs sm:text-sm">
                {/* Email */}
                <a 
                  href="mailto:skytechjujuy@gmail.com"
                  className="flex items-center gap-3 text-neutral-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-2 bg-neutral-900/80 rounded-md border border-neutral-800 text-neutral-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all">
                    <Mail size={16} />
                  </div>
                  <span className="truncate">skytechjujuy@gmail.com</span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 text-neutral-300 select-none">
                  <div className="p-2 bg-neutral-900/80 rounded-md border border-neutral-800 text-red-500/80">
                    <MapPin size={16} className="animate-pulse" />
                  </div>
                  <span>San Salvador de Jujuy, AR</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 lg:mt-0">
              <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-3 select-none">
                Establish comms link:
              </p>
              <div className="flex gap-3">
                {/* SkyTech Official Facebook */}
                <a 
                  href="https://www.facebook.com/skytechjujuy" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 py-2 bg-neutral-900/50 border border-neutral-800/80 rounded-lg text-neutral-400 hover:text-blue-500 hover:border-blue-500/30 flex justify-center items-center transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.15)]"
                >
                  <Facebook size={18} />
                </a>
                
                {/* Instagram */}
                <a 
                  href="#" 
                  className="flex-1 py-2 bg-neutral-900/50 border border-neutral-800/80 rounded-lg text-neutral-400 hover:text-pink-500 hover:border-pink-500/30 flex justify-center items-center transition-all duration-300 hover:shadow-[0_0_10px_rgba(236,72,153,0.15)]"
                >
                  <Instagram size={18} />
                </a>

                {/* Direct WhatsApp */}
                <a 
                  href="https://wa.me/543885174084" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 py-2 bg-neutral-900/50 border border-neutral-800/80 rounded-lg text-neutral-400 hover:text-green-500 hover:border-green-500/30 flex justify-center items-center transition-all duration-300 hover:shadow-[0_0_10px_rgba(34,197,94,0.15)]"
                >
                  <MessageSquare size={18} />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="border-t border-neutral-900/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center select-none font-mono text-[10px] sm:text-xs tracking-wider">
          <div className="text-neutral-500">
            © 2026 <span className="text-neutral-400 font-bold">SKYTECH_NETWORK</span>. ALL RIGHTS RESERVED.
          </div>
          <div className="animate-insert-coin font-bold uppercase tracking-widest bg-yellow-950/10 px-3 py-1 rounded border border-yellow-900/20">
            [INSERT COIN TO CONTINUE]
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;