/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050b18',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,211,238,.2), 0 20px 80px rgba(2,132,199,.25)',
      },
    },
  },
  plugins: [],
}
