/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
            "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#F5F5F5',
        'secondary': '#EFEFED',
        'text-color': '#242424',
      }
    },
  },
  plugins: [],
}

