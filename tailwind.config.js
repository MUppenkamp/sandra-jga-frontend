/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
    },
    extend: {
      colors: {
        'wedding-rose': '#F0B7C8',
        'wedding-peach': '#F4C7B4',
        'wedding-mint': '#BFE9D8',
        'wedding-lilac': '#D4B8F0',
        'wedding-ivory': '#FAF3EE',
        'bouquet-red': '#e73520',
        'bouquet-lilac': '#A72F81',
        'bouquet-yellow': '#fcd764',
        'bouquet-orange': '#ea4622',
        'bouquet-pink': '#dc263e',
        'bouquet-red-pastel': '#F4C3CE',
        'bouquet-lilac-pastel': '#DECDF6',
        'bouquet-yellow-pastel': '#F7E2A8',
        'bouquet-orange-pastel': '#F7D0B5',
        'bouquet-pink-pastel': '#F1C6DE',
        'bouquet-ivory': '#FAF3EE',
      },
      boxShadow: {
        inputs: '0 0 0 .2rem #F1C6DE',
      },
    },
  },
  plugins: [],
};
