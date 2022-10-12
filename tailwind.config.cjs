/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      accent: {
        DEFAULT: '#6563EE',
        '50': '#FFFFFF',
        '100': '#F6F6FE',
        '200': '#D2D1FA',
        '300': '#AEADF6',
        '400': '#8988F2',
        '500': '#6563EE',
        '600': '#4543EA',
        '700': '#2523E7',
        '800': '#1917CF',
        '900': '#1513AF'
      },
      dark: {
        DEFAULT: '#15151B',
        '50': '#656582',
        '100': '#5C5C77',
        '200': '#4B4B60',
        '300': '#393949',
        '400': '#272732',
        '500': '#15151B',
        '600': '#111115',
        '700': '#0C0C10',
        '800': '#08080A',
        '900': '#030304'
      },
      light: {
        DEFAULT: '#FFFFFF',
        '50': '#FFFFFF',
        '100': '#F5F5F5',
        '200': '#E0E0E0',
        '300': '#CCCCCC',
        '400': '#B8B8B8',
        '500': '#A3A3A3',
        '600': '#8F8F8F',
        '700': '#7A7A7A',
        '800': '#666666',
        '900': '#525252'
      }
    },
    fontFamily: {
      sans: ['Rubik', 'ui-sans-serif'],
      serif: ['Roboto\\ Slab', 'ui-serif'],
      mono: ['Fira\\ Code', 'ui-monospace'],
      display: ['Jost', 'ui-sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
