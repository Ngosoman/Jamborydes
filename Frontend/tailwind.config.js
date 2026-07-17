/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", 'Georgia', 'serif'],
        body: ["'DM Sans'", 'system-ui', 'sans-serif'],
        sans: ["'DM Sans'", 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f2f8',
          900: '#0A1128',
          950: '#060B18',
        },
        cream: {
          DEFAULT: '#F7F5F0',
        },
        orange: {
          400: '#FB923C',
          500: '#F97316',
          600: '#EA6C0A',
        },
      },
    },
  },
  plugins: [],
};
