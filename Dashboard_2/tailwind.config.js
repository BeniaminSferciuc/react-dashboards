/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        _primary: '#022213',
        _secondary: '#ADDE34',
      },
      screens: {
        'h-sm': { raw: '(min-height: 630px)' },
        'h-md': { raw: '(min-height: 800px)' },
        'h-lg': { raw: '(min-height: 1000px)' },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
