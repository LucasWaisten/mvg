module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--color-background)',
                foreground: 'var(--color-foreground)',
                'text-main': 'var(--color-text-main)',
                'secondary': 'var(--color-secondary)',
                primary: 'var(--color-primary)',
                accent: 'var(--color-accent)',
                'neutral-soft': 'var(--color-neutral-soft)',
                'dark-soft': 'var(--color-dark-soft)',
                marble: 'var(--color-marble)',
                stone: 'var(--color-stone)',
                bronze: 'var(--color-bronze)',
                ivory: 'var(--color-ivory)',
            },
            fontFamily: {
                sans: ['var(--font-sans)'],
                display: ['var(--font-display)'],
                playfair: ['var(--font-playfair)'],
                lora: ['var(--font-lora)'],
            },
            boxShadow: {
                '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
                'neoclassical': '0 4px 6px -1px rgba(44, 24, 16, 0.1), 0 2px 4px -1px rgba(44, 24, 16, 0.06), 0 0 0 1px rgba(212, 175, 55, 0.1)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}