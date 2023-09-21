/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
animation: {
          marquee: 'marquee 120s linear infinite',
          'fade-in': 'fade-in 1.5s linear ',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          'fade-in': {
            from: {
              opacity: 0,
            },
            to: {
              opacity: 1,
            },
          },
        },
    extend: {},
  },
	plugins: [],
}
