/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0A1A3A',
          DEFAULT: '#0A1A3A',
          light: '#1C2E4A'
        },
        secondary: {
          DEFAULT: '#007BFF',
          dark: '#0056b3',
          light: '#3395ff'
        },
        accent: {
          DEFAULT: '#00F5FF',
          dark: '#00d6db',
          light: '#60f9ff'
        },
        success: {
          DEFAULT: '#00D68F',
          dark: '#00a36c',
          light: '#33dea6'
        },
        warning: {
          DEFAULT: '#FF9F00',
          dark: '#cc7f00',
          light: '#ffb333'
        },
        error: {
          DEFAULT: '#FF3D71',
          dark: '#cc3057',
          light: '#ff648e'
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 245, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 245, 255, 0.8), 0 0 30px rgba(0, 245, 255, 0.6)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 2px)' },
          '66%': { transform: 'translate(5px, -2px)' }
        }
      }
    },
  },
  plugins: [],
};