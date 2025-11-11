
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './content/**/*.{html,md}',
    './layouts/**/*.html',
    './themes/**/*.html',
    './static/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'everest-blue': '#7790DE',
        'everest-dark': '#161641',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
</module.exports>
