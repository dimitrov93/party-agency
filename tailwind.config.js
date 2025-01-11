/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React files in the src directory
  ],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)", // Small shadow
        DEFAULT: "2px 4px 2px rgba(0, 0, 0, 0.6)", // Default shadow
        lg: "3px 6px 3px rgba(0, 0, 0, 0.7)", // Large shadow
      },
      colors: {
        "clr-brown": "#d0a977",
        "clr-ligter-brown": "#e3c7a2",
      },
      maxWidth: {
        'container-lg': '75%',
        'container-md': '86%',
        'container-sm': '90%',
      },
      transitionTimingFunction: {
        'default': 'all 400ms ease',
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
  ]
};
