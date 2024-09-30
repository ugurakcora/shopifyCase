/** @type {import('tailwindcss').Config} */
import remToPxPlugin from 'tailwindcss-rem-to-px';

module.exports = {
  content: ['./**/*.{js,liquid,json}'],
  theme: {
    extend: {},
  },
  plugins: [
    remToPxPlugin({
      baseFontSize: 16,
    }),
  ],
};
