/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      // container: {
      //   center: false,
      // },
      colors: {
        'content': "#f9f9fc",
        'text-primary': "#1a1a1a",
        'text-secondary': "#7e7e7e",
      },
      boxShadow: {
        'custom-3px': '3px 0 5px #f5f5f5',
        'custom-10px': '0 0 10px rgb(0 0 0 / 8%)',
      },
      fontFamily: {
        'poppins': ['Poppins'],
      }
    },
  },
  plugins: [],
}
