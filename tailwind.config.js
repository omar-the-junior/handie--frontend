/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#B88E2F',
      secondary: '#FAF3EA',
      accent: '#E09F3E',
      charcoal: '#3A3A3A',
      white: '#FFFFFF',
      neutral: '#8C8C8C',
      error: '#FF4C4C',
      success: '#3CB371',
      alert: '#E97171',
      'light-green': '#2EC1AC',
      gray: '#B3B3B3',
      whisper: '#F5F5F5',
      'light-secondary':'#F9F1E7',
      Netural:'#8C8C8C',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.25rem',
        lg: '2.5rem',
        xl: '5rem',
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('./plugins/customTypography.js'),
    require('./plugins/buttons.js'),
  ],
};
