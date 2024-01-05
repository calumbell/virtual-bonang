/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.5rem",
      },
      animation: {
        pulse: "pulse 0.1s ease-in-out",
      },
      fontFamily: {
        kepatihan: ["var(--font-kepatihan)"],
      },
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)", fill: "rgb(153 27 27)" },
        },
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
};
