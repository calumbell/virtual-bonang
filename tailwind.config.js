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
      animation: {
        pulse: "pulse 0.1s ease-in-out",
      },
      fontFamily: {
        kepatihan: ["var(--font-kepatihan)"],
      },
      fontSize: {
        "2xs": "0.5rem",
      },
      height: {
        screen: ["100vh /* fallback for older browers */", "100dvh"],
      },
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)", fill: "rgb(153 27 27)" },
        },
      },
      screens: {
        wide: { raw: "(max-height: 428px)" },
        xs: "420px",
      },
      width: {
        screen: ["100vw /* fallback for older browers */", "100dvw"],
      },
    },
  },
  plugins: [],
};
