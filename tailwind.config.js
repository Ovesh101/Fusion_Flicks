/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#1E1E1E',   
        'golden-brown': '#C28E4A', 
        'dark-charcoal': '#1E1C1C', 
        'light-gray': '#F0F0F0',   
      },
    },
  },
  plugins: [],
}
