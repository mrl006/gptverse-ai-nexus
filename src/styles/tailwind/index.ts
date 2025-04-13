import colors from './colors';
import animations from './animations';
import typography from './typography';
import backgrounds from './backgrounds';
import { Config } from 'tailwindcss';

const tailwindTheme = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px'
    }
  },
  extend: {
    colors: {
      primary: {
        DEFAULT: 'hsl(142, 89%, 50%)',
        foreground: 'hsl(240, 5.9%, 10%)'
      },
      secondary: {
        DEFAULT: 'hsl(199, 92%, 56%)',
        foreground: 'hsl(0, 0%, 98%)'
      },
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
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
    ...animations,
    ...typography,
    ...backgrounds,
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)'
    },
  }
};

export const tailwindConfig: Partial<Config> = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: tailwindTheme,
  plugins: [
    require("tailwindcss-animate")
    // Removing tailwind-scrollbar plugin to avoid dependency conflicts
  ],
};

export default tailwindConfig;
