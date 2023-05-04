const colors = require('tailwindcss/colors')

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
        'copy-2xs': '10px',
        'copy-xs': '12px',
        'copy-sm': '14px',
        'copy-base': '16px',
        'copy-lg': '20px',
        'copy-xl': '30px',
        'copy-2xl': '50px',

        'headline-xs': '16px',
        'headline-sm': '18px',
        'headline-base': '21px',
        'headline-lg': '24px',
        'headline-xl': '30px',
    },
    extend: {
        lineHeight: {
            'tight': '1.07em',
        },
        fontFamily: {
            'copy': ['Source Sans Pro', 'serif'],
            'headline': ['Lily Script One', 'sans-serif'],
        },    
        colors: {
            "lightest": colors.slate[50],
            "light": colors.slate[100],
            "medium": colors.slate[500],
            "dark": colors.slate[700],
            "highlight-medium": colors.fuchsia[500],
            "secondary-light": colors.lime[400],
            "secondary-medium": colors.lime[600],
        },
        screens: {
            '3xl': '1938px',
        },
    },
  }
}
