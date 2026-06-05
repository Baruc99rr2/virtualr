/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arcade: ["'Press Start 2P'", "monospace"],
        terminal: ["'Share Tech Mono'", "monospace"], // Opcional: para textos periféricos livianos
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-20%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
      animation: {
        scanline: "scanline 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};