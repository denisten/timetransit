// tailwind.config.js
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}', // если твои компоненты лежат в src/
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
        'bg-[#c3202b]', // или замени на класс из Tailwind palette, например bg-red-700
        'text-white',
        'text-black',
        'bg-transparent',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
