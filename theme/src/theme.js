export const theme = {
  space: [0, 4, 8, 16, 32],
  fonts: {
    header: "Sunshiney",
    body:
      "Arial, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    body: 1.45,
    heading: 1.1,
  },
  colors: {
    gray: ["#efefef", "#ddd", "#333", "#111"],
    navbar: "#0000ce",
    background: "#fff",
    primary: "#ffcc01",
    blues: ["#3000ce", "#6363ff"],
  },
  sizes: {
    default: "90vw",
    max: "540px",
    widthMax: "100%",
  },
  styles: {
    Layout: {
      color: "gray.2",
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "body",
      nav: {
        backgroundColor: "navbar",
        color: "primary",
        fontWeight: "bold",
        fontSize: 2,
        display: "flex",
        justifyContent: "center",
        maxWidth: "widthMax",
        padding: 2,
        width: "widthMax",
        ul: {
          display: "flex",
          justifyContent: "center",
          li: {
            margin: "0 15px",
            a: {
              color: "primary",
              textShadow: "2px 2px 1px black",
              letterSpacing: "2px",
              textDecoration: "none",
            },
          },
        },
      },
    },
    Header: {
      h1: {
        fontFamily: "header",
      },
    },
    Main: {
      margin: "0 auto",
      maxWidth: "max",
      width: "default",
    },
    Container: {
      padding: 3,
    },
    Footer: {
      padding: 3,
    },
    h1: {
      color: "gray.3",
      fontSize: 5,
      fontWeight: "bold",
      lineHeight: "heading",
      margin: 0,
      marginTop: 3,
    },
    ul: {
      borderTop: "1px solid",
      borderColor: "gray.0",
      listStyle: "none",
      padding: 0,
    },
    li: {
      borderBottom: "1px solid",
      borderColor: "gray.0",
      padding: 2,
      "&:focus-within, &:hover": {
        backgroundColor: "gray.0",
      },
    },
  },
}
