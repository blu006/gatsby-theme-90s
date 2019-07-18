import { theme as baseTheme } from "gatsby-theme-90s/src/theme"

export const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
  },
  styles: {
    ...baseTheme.styles,
    Main: {
      ...baseTheme.styles.Main,
    },
    Container: {
      ...baseTheme.styles.Container,
    },
  },
}
