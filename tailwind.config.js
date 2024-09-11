/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B88E2F',
        secondary: '#FAF3EA',
        danger: '#FF0000',
      },
      fontFamily: {
        serif: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
