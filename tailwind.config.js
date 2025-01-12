/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headingColor: "#A12636",
        primary: "#141414",
      },
      fontFamily: {
        orpheusDisplay: ["var(--font-orpheuspro)", "sans-serif"],
        twentieth: ["var(--font-twentieth)", "sans-serif"],
        heading: ["Marko One", "sans-serif"],
      },

      container: {
        center: "true",
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          // xxl: "1536px",
        },
      },
    },
  },
  plugins: [],
};

