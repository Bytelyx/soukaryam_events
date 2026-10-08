/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#071510',
          900: '#0a1d17',
          850: '#0f2f26',
          800: '#154236',
          700: '#1e5e4d'
        },
        gold: {
          300: '#e8cc75',
          400: '#d9b752',
          500: '#cba135',
          600: '#b89129',
          700: '#8a6814'
        },
        cream: {
          50: '#fcfaf5',
          100: '#f7f3ea',
          200: '#e7ddcb'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
