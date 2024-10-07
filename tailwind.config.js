/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#E1F5FE',  // Soft and light blue for a calming background
        foreground: '#0D47A1',  // Strong, dark blue for high readability
        card: {
          DEFAULT: '#E1F5FE',   // Keeping the card background soft and subtle
          foreground: '#01579B', // Medium-dark blue for contrast
        },
        popover: {
          DEFAULT: '#E1F5FE',
          foreground: '#0D47A1',
        },
        primary: {
          DEFAULT: '#0277BD',   // Vivid, striking blue for primary actions
          foreground: '#FFFFFF', // White text for strong contrast
        },
        secondary: {
          DEFAULT: '#81D4FA',   // Lighter and softer blue for secondary actions
          foreground: '#01579B', // Dark blue text for readability
        },
        muted: {
          DEFAULT: '#B3E5FC',   // Soft, pastel blue for muted elements
          foreground: '#0277BD', // Slightly darker blue for legibility
        },
        accent: {
          DEFAULT: '#29B6F6',   // Brighter blue to add energy to accent elements
          foreground: '#FFFFFF', // White text for clear contrast
        },
        destructive: {
          DEFAULT: '#D32F2F',   // Red for destructive actions, to stand out clearly
          foreground: '#FFFFFF', // White text for high contrast
        },
        border: '#0288D1',      // Vivid blue for borders, giving a polished look
        input: '#E1F5FE',       // Light blue for input fields, keeping them soft but clear
        ring: '#0288D1',        // Blue for focus rings to match the theme
        chart: {
          1: '#0D47A1',         // Deep blue for chart elements, providing strong contrast
          2: '#0288D1',         // Lighter, vibrant blue for variety
          3: '#81D4FA',         // Soft blue to balance the chart
          4: '#E1F5FE',         // Background blue for lightness
          5: '#D32F2F',         // Red to add contrast and highlight key areas
        },
      },
      borderRadius: {
        lg: '1rem',            // Slightly rounded for modern feel
        md: '0.75rem',         // Medium rounding for balance
        sm: '0.5rem',          // Subtle rounding for smaller components
      },
      boxShadow: {
        DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
        md: '0 6px 10px rgba(0, 0, 0, 0.15)',    // Medium shadow for interactive elements
        lg: '0 10px 15px rgba(0, 0, 0, 0.2)',    // Larger shadow for pop-outs
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
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
