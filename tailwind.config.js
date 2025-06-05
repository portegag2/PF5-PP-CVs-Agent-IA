/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'print': { 'raw': 'print' },
        'pdf': { 'raw': 'screen and (max-width: 1px)' },
      },
      colors: {
        classic: {
          primary: '#2c3e50',
          secondary: '#34495e',
          accent: '#3498db',
          background: '#ffffff',
          text: '#2c3e50',
        },
        modern: {
          primary: '#2563eb',
          secondary: '#3b82f6',
          accent: '#60a5fa',
          background: '#f8fafc',
          text: '#1e293b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
