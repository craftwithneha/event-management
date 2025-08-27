// // tailwind.config.js
// import { fontFamily } from "tailwindcss/defaultTheme"

// export default {
//   darkMode: ["class"],
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Inter", ...fontFamily.sans],
//       },
//       borderRadius: {
//         xl: `calc(var(--radius) + 4px)`,
//         '2xl': `calc(var(--radius) + 8px)`,
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// }





import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      colors: {
        primary: "#7635FF",
        secondary: "#B28DFF",
        textDark: "#595959",
        textLight: "#FFFFFF",
        bg: "#FFFFFF",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
  plugins: [require("tailwindcss-animate")],
}
