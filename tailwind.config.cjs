/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'ui-sans-serif'],
      serif: ['Roboto\\ Slab', 'ui-serif'],
      mono: ['Fira\\ Code', 'ui-monospace'],
      display: ['Jost', 'ui-sans-serif'],
      jetbrains: ['JetBrains Mono', 'ui-monospace'],
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: '#055FFC',
          '50': '#BAD3FE',
          '100': '#A6C6FE',
          '200': '#7EACFD',
          '300': '#5693FD',
          '400': '#2D79FC',
          '500': '#055FFC',
          '600': '#024AC7',
          '700': '#02358F',
          '800': '#012158',
          '900': '#000C20',
        },
        secondary: {
          DEFAULT: '#63EEB4',
          '50': '#F4FEFA',
          '100': '#E4FCF2',
          '200': '#C4F9E2',
          '300': '#A3F5D3',
          '400': '#83F2C3',
          '500': '#63EEB4',
          '600': '#30E89C',
          '700': '#16CB7F',
          '800': '#119860',
          '900': '#0B6640',
        },
        dark: {
          DEFAULT: '#1A1C1E',
          '50': '#454A4F',
          '100': '#40454A',
          '200': '#363B3F',
          '300': '#2D3034',
          '400': '#232629',
          '500': '#1A1C1E',
          '600': '#151719',
          '700': '#111213',
          '800': '#0C0D0E',
          '900': '#070808',
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
          '900': '#525252',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        '.bg-grid': {
          'background-size': '40px 40px',
          'background-image': `
            linear-gradient(to right, ${theme('colors.light.100')}5F 1px, transparent 1px),
            linear-gradient(to bottom, ${theme('colors.light.100')}5F 1px, transparent 1px)`,
        },
        '.bg-grid-dark': {
          'background-size': '40px 40px',
          'background-image': `
            linear-gradient(to right, ${theme('colors.dark.400')}5F 1px, transparent 1px),
            linear-gradient(to bottom, ${theme('colors.dark.400')}5F 1px, transparent 1px)`,
        },
        '.shadow-glass': {
          'box-shadow': `
            0 0 0 1px ${theme('colors.light.300')},
            0 0 30px 1px rgba(0,0,0,0.2),
            -1px -1px 0 1px ${theme('colors.light.200')}
          `,
        },
        '.shadow-glass-dark': {
          'box-shadow': `
            0 0 0 1px ${theme('colors.dark.300')},
            0 0 30px 1px rgba(0,0,0,0.2),
            -1px -1px 0 1px ${theme('colors.dark.200')}
          `,
        },
        '.scrollbar-hide': {
          '&::-webkit-scrollbar': {
            'display': 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      })
    }),
  ],
}
