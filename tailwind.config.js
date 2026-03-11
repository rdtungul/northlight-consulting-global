/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black:      '#0A0A0A',
          darkgray:   '#111111',
          purple:     '#9B30FF',
          purpleDeep: '#6B21A8',
          white:      '#FFFFFF',
          silver:     '#A1A1AA',
          gold:       '#F5C518',
        },
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'sans-serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
