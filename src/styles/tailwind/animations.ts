
const animations = {
  keyframes: {
    'accordion-down': {
      from: { height: '0' },
      to: { height: 'var(--radix-accordion-content-height)' },
    },
    'accordion-up': {
      from: { height: 'var(--radix-accordion-content-height)' },
      to: { height: '0' },
    },
    'float': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    'pulse-glow': {
      '0%, 100%': { 
        opacity: '1',
        filter: 'brightness(1)',
      },
      '50%': { 
        opacity: '0.8',
        filter: 'brightness(1.2)',
      },
    },
    'pulse-slow': {
      '0%': { transform: 'translateY(0) scale(1)', opacity: '0.4' },
      '50%': { transform: 'translateY(-10px) scale(1.05)', opacity: '0.5' },
      '100%': { transform: 'translateY(0) scale(1)', opacity: '0.4' },
    },
    'rotate-slow': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    'text-reveal': {
      '0%': { transform: 'translateY(20px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    'gradient-background': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
    'text-gradient': {
      to: { backgroundPosition: '200% center' },
    },
    'shimmer': {
      '0%': { backgroundPosition: '200% 0' },
      '100%': { backgroundPosition: '-200% 0' },
    },
    'breath': {
      '0%, 100%': { 
        boxShadow: '0 0 25px rgba(14, 243, 75, 0.4)'
      },
      '50%': { 
        boxShadow: '0 0 60px rgba(14, 243, 75, 0.6)'
      },
    },
    'blip': {
      '0%': {
        transform: 'scale(0)',
        opacity: '1'
      },
      '100%': {
        transform: 'scale(1.5)',
        opacity: '0'
      }
    },
    'fade-in': {
      '0%': {
        opacity: '0',
        transform: 'translateY(10px)'
      },
      '100%': {
        opacity: '1',
        transform: 'translateY(0)'
      }
    },
    'glitch': {
      '0%': {
        clipPath: 'inset(40% 0 61% 0)',
        transform: 'translate(-2px, 2px)'
      },
      '20%': {
        clipPath: 'inset(92% 0 1% 0)',
        transform: 'translate(1px, 1px)'
      },
      '40%': {
        clipPath: 'inset(43% 0 1% 0)',
        transform: 'translate(3px, 1px)'
      },
      '60%': {
        clipPath: 'inset(25% 0 58% 0)',
        transform: 'translate(1px, -1px)'
      },
      '80%': {
        clipPath: 'inset(54% 0 7% 0)',
        transform: 'translate(-2px, -2px)'
      },
      '100%': {
        clipPath: 'inset(58% 0 43% 0)',
        transform: 'translate(2px, -1px)'
      }
    }
  },
  animation: {
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out',
    'float': 'float 6s ease-in-out infinite',
    'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
    'pulse-slow': 'pulse-slow 10s ease-in-out infinite',
    'rotate-slow': 'rotate-slow 12s linear infinite',
    'text-reveal': 'text-reveal 0.8s ease forwards',
    'text-reveal-delay-1': 'text-reveal 0.8s 0.2s ease forwards',
    'text-reveal-delay-2': 'text-reveal 0.8s 0.4s ease forwards',
    'gradient-background': 'gradient-background 15s ease infinite',
    'text-gradient': 'text-gradient 3s ease infinite',
    'shimmer': 'shimmer 3s linear infinite',
    'breath': 'breath 4s ease-in-out infinite',
    'blip': 'blip 2s infinite',
    'fade-in': 'fade-in 0.5s ease-out',
    'glitch': 'glitch 1s linear infinite'
  },
};

export default animations;
