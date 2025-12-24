/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#078203',
                    light: '#09A604',
                    dark: '#056002',
                },
                teal: {
                    100: '#e0f2f1',
                    500: '#208c9e',
                    600: '#1d7480',
                    700: '#1565c0',
                },
                slate: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                },
                rose: {
                    50: '#fff1f2',
                    500: '#f43f5e',
                    700: '#be123c',
                },
                emerald: {
                    50: '#ecfdf5',
                    100: '#d1fae5',
                    500: '#10b981',
                    700: '#047857',
                },
                amber: {
                    50: '#fffbeb',
                    500: '#f59e0b',
                    700: '#b45309',
                },
                indigo: {
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    700: '#4338ca',
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
