module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--color-background)',
                'text-main': 'var(--color-text-main)',
                'secondary': 'var(--color-secondary)',
            },
            fontFamily: {
                shantell: ['var(--font-shantell)'],
                zain: ['var(--font-zain)'],
            },
        },
    },
    plugins: [],
}