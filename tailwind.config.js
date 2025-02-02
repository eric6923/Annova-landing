/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        secondary: ['Poppins', 'sans-serif'], 
      },
      colors: {
        violet: {
          '50': '#f5f3ff',
          '100': '#ede9fe',
          '200': '#ddd6fe',
          '300': '#c4b5fd',
          '400': '#a78bfa',
          '500': '#8b5cf6',
          '600': '#7c3aed',
          '700': '#6d28d9',
          '800': '#5b21b6',
          '900': '#4c1d95',
          '950': '#2e1065'
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'drift-1': 'drift1 25s ease-in-out infinite',
        float: 'float 15s ease-in-out infinite',
        'glow-slow': 'staticGlow 1s forwards',
        'marquee-left': 'marqueeLeft 30s linear infinite',
        'marquee2-left': 'marquee2Left 30s linear infinite',
        'marquee-right': 'marqueeRight 30s linear infinite',
        'marquee2-right': 'marquee2Right 30s linear infinite',
        orbit: 'orbit calc(var(--duration)*1s) linear infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideUp: {
          '0%': {
            transform: 'translateY(100%)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        drift1: {
          '0%': {
            transform: 'translate(-50%, -50%) translateX(-3px)'
          },
          '25%': {
            transform: 'translate(-50%, -50%) translate(3px, 3px)'
          },
          '50%': {
            transform: 'translate(-50%, -50%) translateX(-3px)'
          },
          '75%': {
            transform: 'translate(-50%, -50%) translate(3px, -3px)'
          },
          '100%': {
            transform: 'translate(-50%, -50%) translateX(-3px)'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: '0.15'
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(1.03)',
            opacity: '0.12'
          }
        },
        staticGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px 5px rgba(139, 92, 246, 0.3), inset 0 0 20px 5px rgba(139, 92, 246, 0.3)'
          }
        },
        marqueeLeft: {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        },
        marquee2Left: {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        },
        marqueeRight: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        },
        marquee2Right: {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(100%)'
          }
        },
        orbit: {
          '0%': {
            transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
          },
          '100%': {
            transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))'
          }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};