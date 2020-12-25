module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#1877f2",
          600: "#166fe5",
        },
        green: {
          500: "#42b72a",
          600: "#36a420",
        },
      },
    },
    screens: {
        'sm': {'min': '0', 'max': '980px'},
        'md': {'min': '981px', 'max': '1023px'},
        'lg': {'min': '1024px'},
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
