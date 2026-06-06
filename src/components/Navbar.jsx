import { Menu, X, Terminal, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const customNavItems = [
    { label: "About Us", href: "#about" },
    { label: "Our Expertise", href: "#skills" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setMobileDrawerOpen(false);
  };

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const navbarOffset = isScrolled ? 56 : 80; 
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileDrawerOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full font-mono select-none transition-all duration-300 z-[9999] ${
          isScrolled 
            ? "h-14 bg-[#020617]/95 border-b border-cyan-500/40 shadow-[0_4px_20px_rgba(6,182,212,0.15)]" 
            : "h-20 bg-[#030712]/80 backdrop-blur-md border-b border-cyan-950/40"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          
          {/* LOGO AND IDENTITY */}
        <a 
          href="#" 
          onClick={scrollToTop}
          className="flex items-center flex-shrink-0 cursor-pointer group gap-3 animate-none"
        >
          <div className="relative">
            <img 
              className={`transition-all duration-500 ${
                isScrolled ? "h-10 w-10" : "h-12 w-12"
              }`} 
              src={logo} 
              alt="SkyTech Logo" 
            />
            {/* TOUCH PERSISTENCE CORRECTION: 
                - md:group-hover only activates continuous glow with mouse hover on PC.
                - group-active makes it glow on mobile ONLY while the finger is pressing down. */}
            <div className="absolute inset-0 bg-cyan-500/30 blur-md rounded-full opacity-0 md:group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-150"></div>
          </div>
          <span className="text-xl font-black text-white tracking-wider flex items-center">
            SkyTech
            <span className="text-cyan-400 font-bold ml-0.5 animate-pulse">_</span>
          </span>
        </a>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            {customNavItems.map((item, index) => (
              <li key={index} className="relative group">
                <a 
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="text-neutral-400 transition-all duration-300 hover:text-cyan-400 py-2 flex items-center"
                >
                  <span className="text-cyan-500 mr-1 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200">
                    &gt;
                  </span>
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#06b6d4]"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* DESKTOP ACTION BUTTON */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact-hub"
              onClick={(e) => handleScrollToSection(e, "#contact-hub")}
              className="relative overflow-hidden group border border-cyan-500/40 bg-cyan-950/30 text-cyan-400 px-4 py-2 rounded font-semibold text-xs uppercase tracking-widest transition-all duration-300 hover:border-cyan-400 hover:text-white"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="flex items-center gap-2">
                <Terminal size={14} className="text-cyan-400 group-hover:rotate-6 transition-transform" />
                <span>[ CONTACT ]</span>
              </span>
            </a>
          </div>

          {/* RETRO NEON HAMBURGER BUTTON (MOBILE) */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleNavbar} 
              className={`p-2.5 rounded-md border transition-all duration-300 ${
                mobileDrawerOpen 
                  ? "bg-fuchsia-950/40 border-fuchsia-500 text-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.5)]" 
                  : "bg-cyan-950/30 border-cyan-500/50 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              }`}
              aria-label="Menu"
            >
              {mobileDrawerOpen ? <X size={22} className="animate-pulse" /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* FULL-SCREEN MOBILE MENU */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-[9998] bg-[#02020a]/95 backdrop-blur-xl flex flex-col justify-center items-center lg:hidden font-mono">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>

          <div className="mb-10 text-center relative z-10">
            <h2 className="text-4xl font-black text-fuchsia-500 tracking-[0.3em] uppercase select-none animate-pulse drop-shadow-[0_0_10px_rgba(217,70,239,0.6)]">
              = PAUSE =
            </h2>
            <p className="text-[10px] text-cyan-400 tracking-widest uppercase mt-2 opacity-80">
              Select an option to continue
            </p>
          </div>
          
          <ul className="flex flex-col gap-5 w-full max-w-xs relative z-10">
            {customNavItems.map((item, index) => (
              <li key={index} className="w-full">
                <a 
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="group flex items-center justify-between px-5 py-3.5 bg-neutral-900/40 border border-cyan-500/30 text-neutral-300 text-sm font-bold tracking-widest uppercase rounded transition-all duration-200 hover:bg-cyan-950/40 hover:border-cyan-400 hover:text-white hover:translate-x-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-fuchsia-500 font-bold group-hover:text-cyan-400">0{index + 1}.</span>
                    {item.label}
                  </span>
                  <ArrowRight size={14} className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-200" />
                </a>
              </li>
            ))}
          </ul>
          
          <div className="w-full max-w-xs mt-8 pt-6 border-t border-neutral-900 relative z-10">
            <a
              href="#contact-hub"
              onClick={(e) => handleScrollToSection(e, "#contact-hub")}
              className="w-full py-4 rounded text-center block bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:from-fuchsia-400 hover:to-cyan-400 text-black font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(217,70,239,0.4)] transition-all duration-200 hover:scale-[1.02]"
            >
              [ CONTACT ]
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;