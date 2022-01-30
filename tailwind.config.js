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
      fontSize: {
        'tiny': '.75rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
       float : {
          '0%':  {
            transform: 'translatey(0px)',
          },
          '50%' : {
            transform: 'translatey(-20px)',
          },
          '100%' : {
            transform: 'translatey(0px)',
          }
        }
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'bounce-slow': 'bounce 3s linear infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}