/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
        },
    extend: {
      colors: {
        primary: '#6a6a6a',
        secondary: '#111111',
        primarybg:'#000',
        iconcolor:'#6a6a6a',
        btncolor:'#6a6a6a',
        btnbg:'#D1D5DB',
        black:'#000',
        white:'#fff',
        PaymentBg:'#F5F5F5',
      },fontFamily: {
        primaryFont: ['Montserrat', 'sans-serif'],
        secondaryFont: ['Cinzel', 'serif'],
        // Add more font families if needed
      },

    },
    
  },
  plugins: [],
}