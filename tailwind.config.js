/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "Segoe UI",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: [
          "Plus Jakarta Sans",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      colors: {
        // Dark-first sophisticated palette
        canvas: "#0B0D10", // Primary dark background
        surface: {
          elevated: "#12161B", // Card surface
          subtle: "#181D23", // Hover / secondary surface
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(53, 208, 176, 0.35)",
        },
        ink: "#0B0D10",
        teal: {
          DEFAULT: "#35D0B0", // Refined primary teal
          hover: "#2CB69A",
          muted: "rgba(53, 208, 176, 0.12)",
          glow: "rgba(53, 208, 176, 0.25)",
        },
        amber: {
          DEFAULT: "#E9B765", // Warm gold/amber accent
          hover: "#DCA14A",
          muted: "rgba(233, 183, 101, 0.12)",
        },
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(53, 208, 176, 0.2)",
        "card-dark": "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
