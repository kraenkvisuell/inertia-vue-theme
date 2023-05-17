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
        fontFamily: {
            'copy': ['Source Serif Pro', 'serif'],
            'headline': ['Source Sans Pro', 'sans-serif'],
            'navi': ['Source Sans Pro', 'sans-serif'],
        },
        fontSize: {
            'copy-2xs': '10px',
            'copy-xs': '12px',
            'copy-sm': '14px',
            'copy-base': '16px',
            'copy-lg': '20px',
            'copy-xl': '30px',
            'copy-2xl': '50px',

            'navi-xs': '12px',
            'navi-sm': '14px',
            'navi-base': '16px',
            'navi-lg': '20px',
            'navi-xl': '30px',

            'headline-xs': '16px',
            'headline-xs': '16px',
            'headline-sm': '18px',
            'headline-base': '21px',
            'headline-lg': '24px',
            'headline-xl': '30px',
        },
        extend: {
            colors: {
                "lightest": '#F3F2EF',
                "light": '#c5c3bf',
                "medium": '#868385',
                "dark": '#3d3b3c',
                "darkest": '#191919',
                "highlight-medium": '#FFB000',
                "secondary-light": colors.lime[400],
                "secondary-medium": colors.lime[600],
            },
            lineHeight: {
                'tight': '1.07em',
                'snug': '1.12em',
            },
            height: {
                'screen': 'calc(var(--vh) * 100)',
            },
            screens: {
                '3xl': '1938px',
            },
            transitionProperty: {
                'position': 'position',
            },
        },
    },
    safelist: [
        {
            pattern: /aspect-(w|h)-(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20)/,
        },
    ],    
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
