import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}", // in case
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 25s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
                'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'blob': 'blob 7s infinite',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            },
            colors: {
                // Primary: Deep Hunter Green (#1F4037)
                brand: {
                    50: '#f2f7f6',
                    100: '#dcece8',
                    200: '#badad3',
                    300: '#93c2b8',
                    400: '#6ca69a',
                    500: '#4a8a7d',
                    600: '#1F4037', // MAIN BRAND COLOR
                    700: '#18332c',
                    800: '#122520',
                    900: '#0d1a17',
                },
                // Secondary: Marigold Yellow (#FDB827)
                secondary: {
                    50: '#fffef9',
                    100: '#fffbe6',
                    200: '#fff3bf',
                    300: '#ffeb99',
                    400: '#ffe066',
                    500: '#FDB827', // ACCENT COLOR
                    600: '#db9d1f',
                    700: '#b88218',
                    800: '#966812',
                    900: '#75500d',
                }
            }
        },
    },
    plugins: [],
};
export default config;
