/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' if you prefer system preference
  theme: {
    extend: {
      colors: {
        // Custom color palette
        primary: {
          light: "#2563eb", // blue-600
          dark: "#3b82f6", // blue-500
          DEFAULT: "#2563eb",
        },
        secondary: {
          light: "#6366f1", // indigo-500
          dark: "#6366f1", // indigo-400
          DEFAULT: "#6366f1",
        },
        accent: {
          light: "#22c55e", // green-500
          dark: "#4ade80", // green-400
          DEFAULT: "#22c55e",
        },
        background: {
          light: "#f9fafb", // gray-50
          dark: "#1f2937", // gray-800
          DEFAULT: "#f9fafb",
        },
        text: {
          primary: {
            light: "#1f2937", // gray-800
            dark: "#f9fafb", // gray-100
            DEFAULT: "#1f2937",
          },
          secondary: {
            light: "#4b5563", // gray-600
            dark: "#d1d5db", // gray-300
            DEFAULT: "#4b5563",
          },
        },
      },
      boxShadow: {
        // Custom shadow for a secure, professional look
        "investment-card":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "investment-hover":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      transitionProperty: {
        investment:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow",
      },
    },
  },
  plugins: [
    // Optional: Add plugins for additional functionality
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    function ({ addBase, theme }) {
      addBase({
        html: {
          backgroundColor: theme("colors.background.light"),
          color: theme("colors.text.primary.light"),
        },
        "html.dark": {
          backgroundColor: theme("colors.background.dark"),
          color: theme("colors.text.primary.dark"),
        },
      });
    },
  ],
});
