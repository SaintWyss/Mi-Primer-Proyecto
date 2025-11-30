/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        slate: {
          800: '#1e293b',
          900: '#0f172a',
        },
        primary: '#38bdf8', // Sky 400
      }
    },
  },
  plugins: [],
}
