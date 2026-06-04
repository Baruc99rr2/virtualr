import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import earthBg from "./assets/earth-bg.mp4"; 

const App = () => {
  return (
    <>
      {/* SECCIÓN SUPERIOR: Contenedor con el video de fondo */}
      <div className="relative w-full overflow-hidden bg-black">
        {/* El video flotando de fondo, fijo en la parte superior */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src={earthBg} type="video/mp4" />
        </video>
        
        {/* Capa negra translúcida para dar contraste solo arriba */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/80 to-neutral-950 z-10" />

        {/* Contenido superior que va sobre el video (Navbar + Hero) */}
        <div className="relative z-20">
          <Navbar />
          <div className="max-w-7xl mx-auto pt-10 px-6">
            <HeroSection />
          </div>
        </div>
      </div>

      {/* SECCIÓN INFERIOR: El resto de la página con fondo oscuro normal */}
      <div className="bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <FeatureSection />
          <Workflow />
          <Pricing />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;