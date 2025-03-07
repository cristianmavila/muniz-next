import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        titleIndice: "#727274",
        brand: "#A90034",
      },
      container: {
        center: true,
        screens: {
          sm: "100%",
          md: "100%",
          lg: "820px",
          xl: "1026px",
          // lg: "100%",
          // xl: "1170px",
        },
        padding: {
          DEFAULT: "1rem",
          md: "1.5rem",
          lg: "2rem",
        },
      },
      animation: {
        fadeIn: "fadeIn 3s ease-in-out forwards",
        fade: "fadePulse 4s infinite;",
      },
      keyframes: (theme) => ({
        fadeIn: {
          from : { opacity: "0%" },
          to: { opacity: "100%" },
        },
      }),
    },
  },
  plugins: [],
};
export default config;
