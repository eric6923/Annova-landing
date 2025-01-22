/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'violet': {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'drift-1': 'drift1 25s ease-in-out infinite',
        'float': 'float 15s ease-in-out infinite',
        'glow-slow': 'staticGlow 1s forwards', // Changed to static glow
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        drift1: {
          '0%': { transform: 'translate(-50%, -50%) translateX(-3px)' },
          '25%': { transform: 'translate(-50%, -50%) translate(3px, 3px)' },
          '50%': { transform: 'translate(-50%, -50%) translateX(-3px)' },
          '75%': { transform: 'translate(-50%, -50%) translate(3px, -3px)' },
          '100%': { transform: 'translate(-50%, -50%) translateX(-3px)' },
        },
        float: {
          '0%, 100%': { 
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: '0.15'
          },
          '50%': { 
            transform: 'translate(-50%, -50%) scale(1.03)',
            opacity: '0.12'
          },
        },
        staticGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px 5px rgba(139, 92, 246, 0.3), inset 0 0 20px 5px rgba(139, 92, 246, 0.3)'
          }
        },
      },
    },
  },
  plugins: [],
};