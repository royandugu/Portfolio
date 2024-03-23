/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#232738',
        'secondary': '#303551',
        'ternary':'#ffce8a'
      }
    }
  }
  // ...
}