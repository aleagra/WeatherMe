module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                black: '#1d1d1d',
                white: '#ffffff',
                primary: '#5A36D0',
            },
            screens: {
                1600: '1600px',
                1353: '1353px',
                420: '420px',
            },
        },
    },
    plugins: [],
};
