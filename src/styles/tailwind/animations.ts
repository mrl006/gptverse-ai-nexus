
const animations = {
  keyframes: {
    "accordion-down": {
      from: { height: "0", opacity: "0" },
      to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
      to: { height: "0", opacity: "0" },
    },
    "fade-in": {
      "0%": {
        opacity: "0",
        transform: "translateY(10px)"
      },
      "100%": {
        opacity: "1",
        transform: "translateY(0)"
      }
    },
    "pulse-slow": {
      "0%, 100%": {
        opacity: "0.9",
      },
      "50%": {
        opacity: "0.4",
      },
    },
    "pulse-glow": {
      "0%, 100%": {
        opacity: "0.6",
      },
      "50%": {
        opacity: "0.2",
      },
    },
    float: {
      "0%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-10px)" },
      "100%": { transform: "translateY(0px)" },
    },
    "float-slow": {
      "0%": { transform: "translateY(0px) translateX(0px)" },
      "50%": { transform: "translateY(-10px) translateX(5px)" },
      "100%": { transform: "translateY(0px) translateX(0px)" },
    },
    "text-gradient": {
      "0%": {
        "background-position": "0% 50%"
      },
      "100%": {
        "background-position": "100% 50%"
      }
    },
    "rotate-slow": {
      "from": {
        transform: "rotate(0deg)"
      },
      "to": {
        transform: "rotate(360deg)"
      }
    },
    "particle-float": {
      "0%": { transform: "translateY(0px) translateX(0px)", opacity: "0.6" },
      "25%": { transform: "translateY(-15px) translateX(10px)", opacity: "1" },
      "50%": { transform: "translateY(5px) translateX(15px)", opacity: "0.8" },
      "75%": { transform: "translateY(10px) translateX(-5px)", opacity: "1" },
      "100%": { transform: "translateY(0px) translateX(0px)", opacity: "0.6" },
    },
    "shimmer": {
      "0%": {
        backgroundPosition: "-200% 0"
      },
      "100%": {
        backgroundPosition: "200% 0"
      }
    }
  },
  animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
    "fade-in": "fade-in 0.5s ease-out",
    "pulse-slow": "pulse-slow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    "pulse-glow": "pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    "float": "float 6s ease-in-out infinite",
    "float-slow": "float-slow 10s ease-in-out infinite",
    "text-gradient": "text-gradient 5s ease infinite alternate",
    "rotate-slow": "rotate-slow 15s linear infinite",
    "particle-float": "particle-float 12s ease-in-out infinite",
    "shimmer": "shimmer 6s infinite linear"
  },
};

export default animations;
