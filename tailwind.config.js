const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './resources/**/*.js',
    './content/**/*.md'
  ],
  theme: {
    fontSize: {
        'sm': '14px',
        'base': '16px',
        'lg': '20px',
        'xl': '30px',
        '2xl': '50px',
        'hd-small': '30px',
        'hd-base': '50px',
        'hd-lg': '100px',
    },
    extend: {
        lineHeight: {
            'tight': '1.07em',
        },
        fontFamily: {
            'copy': ['Barlow', ...defaultTheme.fontFamily.sans],
            'headline': ['Geometris', ...defaultTheme.fontFamily.sans],
        },    
        colors: {
            'bg': '#002552',
            'nav-bg': '#004692',
            'dark-blue': '#001256',
            'blue': '#2676CC',
            'cyan': '#a2efd6',

        },
        screens: {
            '3xl': '1938px',
        },
        typography: (theme) => ({
            DEFAULT: {
                css: {
                    color: theme('colors.white'),
                    li: {
                        margin: 0,
                        p: {
                            margin: 0,
                        }
                    },
                    'h1, h2, h3, h4, h5, h6': {
                        'color': theme('colors.white'),
                        'line-height': '1.05em',
                        'font-family': 'Geometris',
                        'font-weight': 200,
                        'text-transform': 'uppercase',
                        'letter-spacing': '0.1em',
                    },
                    'h1': {
                        'font-size': theme('fontSize.hd-base'),
                        '@media (min-width: theme("screens.sm"))': {
                            'font-size': theme('fontSize.hd-lg'),
                        },
                    },
                    'h2, h3, h4, h5, h6': {
                        'font-size': theme('fontSize.hd-small'),
                        '@media (min-width: theme("screens.sm"))': {
                            'font-size': theme('fontSize.hd-base'),
                        },
                    }
                },
            },
        }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
