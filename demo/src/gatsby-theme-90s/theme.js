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
      nav: {
        ...baseTheme.styles.Layout.nav,
        paddingTop: ["40px", "20px"],
      },
      ".tiny-banner": {
        color: "primary",
        fontSize: "12px",
        padding: "0",
        position: "absolute",
        textAlign: "center",
        width: "100%",
        textShadow: "2px 2px 1px black",
        letterSpacing: "2px",
        background: baseTheme.colors.navbar,
      },
      ".project-details": {
        paddingLeft: "3",
        maxWidth: "600px",
        margin: "0 auto",
        lineHeight: "body",
      },
    },
    Footer: {
      ...baseTheme.styles.Footer,
      ".footer-nav": {
        flexDirection: ["column", "row"],
      },
      ".theme-details": {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      },
    },
    p: {
      ...baseTheme.styles.p,
      display: "inline-block",
    },
    a: {
      ...baseTheme.styles.a,
      display: "inline-block",
    },
  },
}
