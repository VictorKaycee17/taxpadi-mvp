/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#00B894',
                    light: '#00D2A0',
                    dark: '#008F6E',
                },
                background: {
                    DEFAULT: '#FFFFFF',
                    light: '#F8F9FA',
                },
                text: {
                    DEFAULT: '#2D3436',
                    light: '#636E72',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
