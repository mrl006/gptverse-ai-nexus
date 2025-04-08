
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				alien: {
					'neon': '#0ef34b',
					'blue': '#00aeff',
					'cyan': '#0FF5CE',
					'magenta': '#d946ef',
					'dark': '#040812',
					'darker': '#03060a',
					'navy': '#06101a',
					'deep-navy': '#051118',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
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
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif'],
				'mono': ['Space Mono', 'monospace']
			},
			backgroundImage: {
				'hero-pattern': 'radial-gradient(circle at 30% 30%, rgba(14, 243, 75, 0.15) 0%, transparent 30%), radial-gradient(circle at 70% 60%, rgba(217, 70, 239, 0.1) 0%, transparent 30%), radial-gradient(circle at 50% 50%, rgba(0, 174, 255, 0.05) 0%, rgba(4, 8, 18, 1) 70%)',
				'alien-gradient': 'linear-gradient(135deg, rgba(4, 8, 18, 0.8) 0%, rgba(6, 16, 26, 0.8) 100%)',
				'glass-gradient': 'linear-gradient(135deg, rgba(14, 243, 75, 0.05) 0%, rgba(0, 174, 255, 0.05) 100%)',
				'card-gradient': 'linear-gradient(135deg, rgba(6, 16, 26, 0.5) 0%, rgba(10, 24, 38, 0.2) 100%)',
				'neon-gradient': 'linear-gradient(90deg, #0ef34b 0%, #00aeff 100%)',
				'magenta-gradient': 'linear-gradient(90deg, #d946ef 0%, #00aeff 100%)',
				'alien-tech-grid': 'radial-gradient(rgba(14, 243, 75, 0.15) 2px, transparent 2px)',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("tailwind-scrollbar")
	],
} satisfies Config;
