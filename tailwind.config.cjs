/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forest: 'var(--brand-forest)',
        green: 'var(--brand-green)',
        orange: 'var(--brand-orange)',
        gold: 'var(--brand-gold)',
        ink: 'var(--brand-ink)',
        surface: 'var(--surface)',
        muted: 'var(--surface-muted)',
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px -30px rgba(31, 41, 51, 0.35)',
      },
      maxWidth: {
        site: '72rem',
      },
    },
  },
  plugins: [],
};
