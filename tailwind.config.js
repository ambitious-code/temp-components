const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  corePlugins: {
    maxHeight: true,
  },
  theme: {
    extend: {
      height: {
        'h-more':'150%',
      },
      maxHeight: {
        '0': '0',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '100': '30rem',
       'full': '100%',
      }
    }
  }
}