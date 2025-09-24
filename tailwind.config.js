/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'inter',
    },
    container: {
      padding: {
        DEFAULT: '0',
        lg: '0',
      },
    },
    screens: {
      custom: { min: '200px', max: '380px' },
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px', 
    },
    extend: {
      colors: {
        pur: '#9D00FF',        // Electric Purple
        secondary: '#00FFFF',  // Neon Blue
        background: '#000000', // Black
        purLight: '#E6CCFF' , //lightpurple
       extrapurLight: ' #F0E0FF' 
      },
    },
  },
  plugins: [],
};
