module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        bling: "bling 1.5s ease-in-out",
        "fade-in": "fadeIn 0.8s ease-out",
        "zoom-in": "zoomIn 0.6s ease-out",
        "zoom-in-delay": "zoomInDelay 0.8s ease-out"
      },
      keyframes: {
        bling: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        zoomInDelay: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      }
    }
  },
  plugins: [],
}
