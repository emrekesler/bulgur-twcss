module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'rubik': "'Rubik', serif",
      },
      colors: {
        cpurple: {
          100: "#fdcede",
          200: "#fb9cbd",
          300: "#fa6b9c",
          400: "#f8397b",
          500: "#f6085a",
          600: "#c50648",
          700: "#940536",
          800: "#620324",
          900: "#310212"
        },
        cgreen: {
          100: "#f5ffcc",
          200: "#ebff99",
          300: "#e2ff66",
          400: "#d8ff33",
          500: "#ceff00",
          600: "#a5cc00",
          700: "#7c9900",
          800: "#526600",
          900: "#293300"
        },
        cgray: {
          100: "#d3d3d3",
          200: "#a6a6a6",
          300: "#7a7a7a",
          400: "#4d4d4d",
          500: "#212121",
          600: "#1a1a1a",
          700: "#141414",
          800: "#0d0d0d",
          900: "#070707"
        },
      },
      fontSize: {
        'tiny': '.875rem',
      },
      backgroundImage: {
        'blog1': "url('https://blogzine.webestica.com/assets/images/blog/1by1/01.jpg')",
        'coin': "url('https://images.unsplash.com/photo-1643488056768-fe017dc164b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80')",
        'food': "url('https://images.unsplash.com/photo-1632158930341-46604b637a0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')",
        'hottub': "url('https://images.unsplash.com/photo-1532926381893-7542290edf1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"
      },
      spacing: {
        '128': '35rem',
      }
    },

  },
  plugins: [],
}
