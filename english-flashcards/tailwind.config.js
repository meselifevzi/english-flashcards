module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f5f5f5',
          dark: '#1a1a1a'
        },
        card: {
          light: '#ffffff',
          dark: '#2d2d2d'
        },
        primary: {
          light: '#1f2937',
          dark: '#e2e8f0'
        },
        secondary: {
          light: '#4b5563',
          dark: '#9ca3af'
        },
        accent: {
          light: '#3b82f6',
          dark: '#60a5fa'
        }
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out'
      }
    }
  },
  plugins: [],
}