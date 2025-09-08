/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Fonts
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
      // Colors
      colors: {
        landbg: {
          light: "#D9F2C7",
          base: "#B9E3A1",
          deep: "#8FCB73",
        },
      },
      // Box Shadows
      boxShadow: {
        land: "0 40px 80px rgba(0,0,0,0.15), 0 12px 24px rgba(0,0,0,0.12)",
      },
      // Animations
      keyframes: {
        bounceY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        bounceY: "bounceY 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
