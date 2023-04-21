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
                1024: '1024px',
                900: '900px',
                800: '800px',
                1200: '1200px',
                1300: '1300px',
                1400: '1400px',
                1440: '1440px',
                1600: '1600px',
                640:'640px',
            },
        },
    },
    plugins: [],
};
