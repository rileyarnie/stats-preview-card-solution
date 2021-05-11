module.exports = {
  purge: {
    content: ["./public/**/*.html"]
  }
  ,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(233,47%,7%)",
        desaturatedBlue: "hsl(244, 38%, 16%)",
        softViolet: {
          900: "hsl(277, 64%, 11%)",
          800: "hsl(277, 64%, 21%)",
          700: "hsl(277, 64%, 31%)",
          600: "hsl(277, 64%, 41%)",
          500: "hsl(277, 64%, 51%)",
          400: "hsl(277, 64%, 61%)",
          300: "hsl(277, 64%, 71%)",
          200: "hsl(277, 64%, 81%)",
          100: "hsl(277, 64%, 91%)",
        }
      },
      backgroundImage: theme => ({
        'desktop': "url('./public/images/image-header-desktop.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
