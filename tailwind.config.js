module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: "'Poppins', sans-serif",
      nunito: "'Nunito', sans-serif",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        nav: "url('/src/assets/img/nav.png')",
        ham: "url('/src/assets/img/Hamburger Menu.png')",
        signbg: "url('/src/assets/img/Signupbg.png')",
        sidebarbg: "url('/src/assets/img/sidebarBg.png')",
        bg: "url('/src/assets/img/bg.png')",
        mobileHanbg: "url('/src/assets/img/Hamburgermobilebg.png')",
      },
      colors: {
        primary: "#050402",
        secondary: "#1C1D24",
        tertiary: "#131419",
        accent: {
          DEFAULT: "#3171ED",
          hover: "#3171ED",
        },
        paragraph: "#878e99",
        bgColor:
          "linear-gradient(180deg, rgba(139, 198, 236, 0.00) 0%, rgba(139, 198, 236, 0.12) 52.08%, rgba(208, 227, 239, 0.00) 100%);",
      },
    },
  },
  plugins: [],
};
