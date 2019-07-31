const backgroundGradient = ["#3000ce", "#6363ff"]

const heading = {
  color: "primary",
  fontWeight: "normal",
  lineHeight: "heading",
  margin: 0,
  textShadow: "2px 2px 1px black",
  letterSpacing: "2px",
}

export const theme = {
  space: [0, 4, 8, 16, 20, 32],
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
    background: backgroundGradient,
    primary: "#ffcc01",
    hover: "#27e666",
  },
  sizes: {
    default: "90vw",
    max: "600px",
    widthMax: "100%",
  },
  styles: {
    Layout: {
      color: "gray.2",
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "body",
      display: "block",
      height: "100%",
      background: `linear-gradient(to left, ${backgroundGradient[0]}, ${
        backgroundGradient[1]
      })`,
      nav: {
        backgroundColor: "navbar",
        color: "primary",
        fontSize: 2,
        display: "flex",
        justifyContent: "center",
        maxWidth: "widthMax",
        padding: "20px 0 10px 0",
        width: "widthMax",
        ul: {
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
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
      gridArea: "header",
      display: "flex",
      flexDirection: "column",
      padding: "3",
      h1: {
        ...heading,
      },
    },
    Main: {
      color: "#fff",
      display: "grid",
      gridTemplateColumns: "auto",
      gridTemplateRows: "0.5fr 4fr auto 2fr",
      gridTemplateAreas: `"header" "container" "." "footer"`,
      margin: "0 auto",
      maxWidth: "widthMax",
      width: "widthMax",
    },
    Container: {
      gridArea: "container",
      padding: 3,
      ul: {
        display: "grid",
        gridGap: "25px",
        gridTemplateColumns: ["1fr", "1fr 1fr"],
        gridTemplateRows: "auto",
      },
    },
    Footer: {
      gridArea: "footer",
      maxWidth: "max",
      margin: "0 auto",
      ul: {
        display: "flex",
        justifyContent: "space-evenly",
        li: {
          listStyle: "none",
          a: {
            color: "#fff",
          },
        },
      },
    },
    h1: {
      ...heading,
      fontSize: 5,
      marginTop: 3,
      background: "transparent",
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    ul: {
      padding: 0,
    },
    li: {
      display: "flex",
      flexDirection: ["column", "row"],
      padding: 2,
      "&:focus-within, &:hover": {
        backgroundColor: "hover",
        p: {
          color: "gray.0",
        },
      },
      img: {
        paddingRight: 2,
        maxWidth: "50px",
        height: "100%",
        maxHeight: "80px",
      },
    },
    a: {
      color: "#fff",
      "&:visited": {
        color: "gray.2",
      },
    },
  },
}
