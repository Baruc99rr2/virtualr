/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Esto te permite usar la clase 'font-arcade' en tu proyecto
        arcade: ["'Press Start 2P'", "monospace"],
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-20%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
      animation: {
        // Configuración de la animación para usarla directamente si querés
        scanline: "scanline 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};