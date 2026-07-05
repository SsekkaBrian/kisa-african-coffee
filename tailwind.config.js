/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#18120e",
        soil: "#3c2417",
        cocoa: "#5c3424",
        clay: "#a8352a",
        ember: "#7f1d1d",
        ochre: "#c58a3c",
        millet: "#f4ead9",
        palm: "#173f2a",
        leaf: "#4f7b45",
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        warm: "0 24px 70px rgba(60, 36, 23, 0.18)",
      },
    },
  },
  plugins: [],
};
