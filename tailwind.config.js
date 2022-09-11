/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primaryDark': '#36393B',
        'secundaryDark': '#508ED1',

        'primaryLight': '#EEF0F2',
        'secundaryLight': '#508ED1',

        'accent': '#508ED1',
      }
    }
  }
}
