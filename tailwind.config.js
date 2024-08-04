import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // darkmode
                "primary-dark": "#F3F4F6",
                "secondary-dark": "#E5E7EB",
                // lightmode
                "primary-light": "#1F2937",
                "secondary-light": "#374151",
                // gradient
                "primary-gradient": "#FF76CE",
                "secondary-gradient": "#836FFF",
            },
        },
    },

    plugins: [forms],
};
