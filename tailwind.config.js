/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#FBF6EE',
        sand: '#F3E7D3',
        ink: '#2B2622',
        'ink-muted': '#6B5F55',
        line: '#E2D3BA',
        terracotta: { DEFAULT: '#B5502F', dark: '#8F3B20' },
        corn: '#F2B84B',
        sunset: '#E8742A',
        ocean: '#0F4C5C',
        'on-dark': '#D9CBB8',
      },
      fontFamily: {
        logo: ['var(--font-logo)', 'serif'],
        latin: ['"Playfair Display"', 'serif'],
        heading: ['"Shippori Mincho"', '"Hiragino Mincho ProN"', 'serif'],
        sans: ['"Noto Sans JP"', '"Hiragino Sans"', '"Yu Gothic"', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2rem, 1.2rem + 3.4vw, 3.5rem)', { lineHeight: '1.3' }],
        h2: ['clamp(1.75rem, 1.3rem + 1.9vw, 2.5rem)', { lineHeight: '1.35' }],
        h3: ['clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)', { lineHeight: '1.4' }],
        body: ['1rem', { lineHeight: '1.8' }],
        small: ['0.875rem', { lineHeight: '1.7' }],
      },
      borderRadius: { sm: '8px', md: '16px', lg: '24px' },
      boxShadow: {
        card: '0 4px 16px rgba(43,38,34,0.08)',
        cardHover: '0 8px 24px rgba(43,38,34,0.14)',
        header: '0 2px 12px rgba(43,38,34,0.10)',
      },
      maxWidth: { container: '1120px' },
    },
  },
  plugins: [],
}
