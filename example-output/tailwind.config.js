/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#E8E4DD",
        signal: "#E63B2E",
        bone: "#F5F3EE",
        ink: "#111111",
        ash: "#2D2A26",
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        drama: ["DM Serif Display", "Georgia", "serif"],
        mono: ["Space Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        brutal: "0 28px 90px rgba(17, 17, 17, 0.16)",
        insetLine: "inset 0 0 0 1px rgba(17, 17, 17, 0.08)",
      },
      transitionTimingFunction: {
        magnetic: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};
