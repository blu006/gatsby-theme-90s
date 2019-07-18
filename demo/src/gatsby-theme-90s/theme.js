import { theme as baseTheme } from "gatsby-theme-90s/src/theme"

export const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
  },
  styles: {
    ...baseTheme.styles,
    Layout: {
      ...baseTheme.styles.Layout,
      ".tiny-banner": {
        color: "white",
        fontSize: "12px",
        padding: "0",
        position: "absolute",
        textAlign: "center",
        width: "100%",
      },
    },
    Main: {
      ...baseTheme.styles.Main,
    },
    Container: {
      ...baseTheme.styles.Container,
    },
  },
}
