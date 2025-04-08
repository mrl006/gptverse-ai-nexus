
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
				gptv: {
					'blue': '#00AEFF',
					'teal': '#0FF5CE',
					'magenta': '#D946EF',
					'green': '#0EF34B',
					'dark': '#0A0A0F',
					'darker': '#050508',
					'navy': '#101028',
					'deep-navy': '#080818',
					'charcoal': '#12121A',
					'gray': '#1E1E26',
					'light-gray': '#2C2C38',
					'neon-blue': '#00C2FF',
					'neon-cyan': '#00FFEA',
					'neon-violet': '#9D4EDD'
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
						boxShadow: '0 0 25px rgba(0, 194, 255, 0.4)'
					},
					'50%': { 
						boxShadow: '0 0 60px rgba(0, 194, 255, 0.6)'
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 12s linear infinite',
				'text-reveal': 'text-reveal 0.8s ease forwards',
				'text-reveal-delay-1': 'text-reveal 0.8s 0.2s ease forwards',
				'text-reveal-delay-2': 'text-reveal 0.8s 0.4s ease forwards',
				'gradient-background': 'gradient-background 15s ease infinite',
				'text-gradient': 'text-gradient 3s ease infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'breath': 'breath 4s ease-in-out infinite',
				'blip': 'blip 2s infinite'
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif'],
			},
			backgroundImage: {
				'hero-pattern': 'radial-gradient(circle at 30% 30%, rgba(14, 243, 75, 0.15) 0%, transparent 30%), radial-gradient(circle at 70% 60%, rgba(217, 70, 239, 0.1) 0%, transparent 30%), radial-gradient(circle at 50% 50%, rgba(0, 174, 255, 0.05) 0%, rgba(10, 10, 15, 1) 70%)',
				'modern-gradient': 'linear-gradient(135deg, rgba(8, 8, 24, 0.8) 0%, rgba(16, 16, 40, 0.8) 100%)',
				'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
				'card-gradient': 'linear-gradient(135deg, rgba(30, 30, 38, 0.5) 0%, rgba(46, 46, 56, 0.2) 100%)',
				'blue-gradient': 'linear-gradient(90deg, #00AEFF 0%, #0FF5CE 100%)',
				'magenta-gradient': 'linear-gradient(90deg, #D946EF 0%, #FF6B6B 100%)',
				'button-gradient': 'linear-gradient(90deg, rgba(14, 243, 75, 0.8) 0%, rgba(0, 174, 255, 0.8) 100%)',
				'text-gradient': 'linear-gradient(90deg, #0FF5CE, #00AEFF, #D946EF, #0FF5CE)',
				'tech-grid': 'radial-gradient(rgba(0, 194, 255, 0.15) 2px, transparent 2px)',
				'glass-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 100%)',
				'glass-border': 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
