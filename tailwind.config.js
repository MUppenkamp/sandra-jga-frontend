/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
    },
    extend: {
      colors: {
        'jga-background': '#fdf6f5',
        'jga-text': '#7d6f62',
        'jga-blue': '#99beee',
        'jga-blue-light': '#cbe2f0',
        'jga-lilac': '#a84583',
        'jga-lilac-light': '#e3a2c3',
        'jga-rose': '#c75370',
        'jga-rose-light': '#fab9d2',
        'jga-yellow': '#f2ad51',
        'jga-yellow-light': '#eacba6',
        'jga-orange': '#d8754d',
        'jga-orange-light': '#ffa156',
        'jga-red': '#cc3538',
        'jga-red-light': 'f2908e',
        'jga-green': '#7a9e6c',
        'jga-green-light': '#b4d19f',
      },
      boxShadow: {
        inputs: '0 0 0 .2rem #F1C6DE',
      },
    },
  },
  plugins: [],
};
