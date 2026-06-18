/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#52B4DA',
          mid: '#336DA6',
          dark: '#1E3E85',
          deep: '#377999',
          ice: '#C2EEFF',
          teal: '#19CDB8',
        },
        ink: {
          DEFAULT: '#11142D',
          soft: '#323445',
          muted: '#6D6E7A',
          faint: '#767784',
          quiet: '#808191',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
