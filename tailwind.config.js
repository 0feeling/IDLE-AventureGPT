/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        type: {
          "0%": { width: "0ch" },
          "100%": { width: "100%" }
        }
      },
      animation: {
        type: "type 1.5s steps(40) 1 forwards"
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', "monospace"],
        sans: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};
