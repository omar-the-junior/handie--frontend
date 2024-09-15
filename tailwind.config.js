/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B88E2F',
        secondary: '#FAF3EA',
        'light-green': '#2EC1AC',
        'light-red': '#E97171',
        'custome-bg-grey': 'rgb(58, 58, 58, 0.72)',
      },
      fontFamily: {
        serif: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
