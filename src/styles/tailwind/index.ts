
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
    ...colors,
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
