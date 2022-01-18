module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#25294A',
        light: '#2D325A',
        lighter: '#737AAE',
        lightest: '#e0e7ff',
        dark: '#202442', 
        myblue: '#4D7BFD',
        mypink: '#D14EFF',                 
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}