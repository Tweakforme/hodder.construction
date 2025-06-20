/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-cormorant)', 'serif'],
      },
      colors: {
        'construction': {
          50: '#fdf8f3',
          100: '#fceee1',
          200: '#f8dbc2',
          300: '#f2c199',
          400: '#eb9d6e',
          500: '#e6824a',
          600: '#d86b3f',
          700: '#b45536',
          800: '#904533',
          900: '#743a2c',
        }
      }
    },
  },
  plugins: [],
}