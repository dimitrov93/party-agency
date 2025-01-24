/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React files in the src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        neucha: ["'Neucha'", "cursive"],
        parisienne: ["'Parisienne'", "cursive"],
        marck: ["'Marck Script'", "cursive"],
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)", // Small shadow
        DEFAULT: "2px 4px 2px rgba(0, 0, 0, 0.6)", // Default shadow
        lg: "3px 6px 3px rgba(0, 0, 0, 0.7)", // Large shadow
      },
      colors: {
        "clr-brown": "#d0a977",
        "clr-ligter-brown": "#e5ceaf",
      },
      maxWidth: {
        "container-lg": "75%",
        "container-md": "86%",
        "container-sm": "90%",
      },
      transitionTimingFunction: {
        default: "all 400ms ease",
      },
      keyframes: {
        "slide-from-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-from-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-from-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-from-left": "slide-from-left 0.5s ease-out",
        "slide-from-right": "slide-from-right 0.5s ease-out",
        "slide-from-bottom": "slide-from-bottom 0.5s ease-out",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-sm": {
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow": {
          textShadow: "2px 4px 2px rgba(0, 0, 0, 0.6)",
        },
        ".text-shadow-lg": {
          textShadow: "3px 6px 3px rgba(0, 0, 0, 0.7)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      });
    },
  ],
};
