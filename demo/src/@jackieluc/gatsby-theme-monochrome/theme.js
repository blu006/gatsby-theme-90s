import { theme as baseTheme } from "gatsby-theme-90s/src/theme"

export const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: "tomato",
  },
  styles: {
    ...baseTheme.styles,
    Header: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: 0,
      h1: {
        display: "block",
        fontSize: 5,
        margin: "0 auto",
        maxWidth: "container",
        padding: 3,
        width: "90vw",
      },
    },
    Main: {
      ...baseTheme.styles.Main,
      margin: "0 auto",
      maxWidth: "container",
      width: "90vw",
      fontSize: 1,
    },
    Container: {
      ...baseTheme.styles.Container,
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
    },
  },
}
