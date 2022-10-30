/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {},
    fontFamily: {
      heading: ['Poppins'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('flowbite/plugin')],
};
