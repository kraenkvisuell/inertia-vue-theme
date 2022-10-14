module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './resources/**/*.js',
    './content/**/*.md'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
