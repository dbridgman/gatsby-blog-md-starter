/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: {
        content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
        options: {
            safelist: [
                'bg-primary',
                'bg-black',
                'bg-lightgrey',
                'bg-white',
                'bg-darkmain',
                'bg-darksecondary'
            ]
        }
    },
    theme: {
        colors: {
            'primary': '#B5018B',
            'secondary': '#92D6FF',
            'lightgrey': '#EBF8FF',
            'black': '#000000',
            'white': '#FFFFFF',
            'darkmain': '#10132B',
            'darksecondary': '#1C203E'

        },
        fontFamily: {
            'display': 'urbane-rounded, sans-serif',
            'body': 'bookmania, serif',
        },
        maxWidth: {
            '1/2': '50%',
        },
        extend: {},
    },
    plugins: [],
}