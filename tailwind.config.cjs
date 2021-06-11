const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  theme: {
    colors: {
      cyan: {
        600: 'hsl(174, 86%, 45%)',
        300: 'hsl(174, 77%, 80%)'
      },
      red: {
        100: 'hsl(15, 100%, 70%)',
        pascel: 'hsl(14, 92%, 95%)'
      },
      blue: {
        300: 'hsl(226, 100%, 87%)',
        100: 'hsl(230, 100%, 99%)'
      },
      light: {
        blue: {
          300: 'hsl(223, 50%, 87%)',
          100: 'hsl(224, 65%, 95%)',
        },
      },
      grey: {
        blue: 'hsl(225, 20%, 60%)',
      },
      dark: {
        blue: 'hsl(225, 20%, 60%)',
        desaturated: 'hsl(227, 35%, 25%)'
      },
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif']
    },
    screens: {
      ...defaultTheme.screens,
      'tablet': { 'max': '1100px' },
    }
  }
}