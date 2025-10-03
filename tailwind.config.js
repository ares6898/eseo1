module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        bling: "bling 1.5s ease-in-out",
        "fade-in": "fadeIn 0.8s ease-out",
        "zoom-in": "zoomIn 0.6s ease-out",
        "zoom-in-delay": "zoomInDelay 0.8s ease-out",
        // ✨ 추가된 고급스러운 광택 효과
        subtleShine: "subtleShine 4s ease-in-out infinite"
      },
      keyframes: {
        bling: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" }
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        zoomInDelay: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        // ✨ 추가된 광택 키프레임
        subtleShine: {
          "0%, 100%": {
            opacity: "0.96",
            transform: "scale(1.000)"
          },
          "50%": {
            opacity: "0.90",
            transform: "scale(1.008)"
          }
        }
      }
    }
  },
  plugins: []
};
