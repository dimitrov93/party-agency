/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React files in the src directory
  ],
  theme: {
    extend: {
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
  plugins: [],
};
