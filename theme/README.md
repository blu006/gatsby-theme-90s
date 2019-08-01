# gatsby-theme-90s

This is a Gatsby theme project that pays homage to the old roots of the web! Please note that `gatsby-theme-90s` has a dependency on [theme-ui](https://theme-ui.com/getting-started).

Check out the [live demo](https://gatsby-theme-90s.netlify.com)!

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1. Install the theme

```sh
npm install --save gatsby-theme-90s
```

2. Add the theme to your `gatsby-config.js`:

```js
module.exports = {
  plugins: ["gatsby-theme-90s"],
}
```

3. Start your site

```sh
gatsby develop
```

## Usage

If you wish to use the layout of the theme, please set up the Layout as follows. If you follow this markup structure, it will be a frictionless experience with using the theme.

```javascript
import React from "react"
import {
  Layout as ThemeLayout,
  Header,
  Main,
  Container,
  Footer as FooterTheme,
} from "theme-ui"

/** @jsx jsx */
import { jsx } from "theme-ui"

const Layout = () => (
  <ThemeLayout>
    <Navbar />
    <Main role="main">
      <Header>
        <h1 sx={{ fontFamily: "header" }}>Hello World!</h1>
      </Header>
      <Container>
        <ul>
          <li>
            <img src="hello.jpg" alt="hello-tag" />
            <h3>Hello</h3>
            <a href="www.hello.com">Hello</a>
          </li>
          <li>
            <img src="world.jpg" alt="world-tag" />
            <h3>World</h3>
            <a href="www.world.com">World</a>
          </li>
        </ul>
      </Container>
      <FooterTheme role="contentinfo">
        <Footer />
      </FooterTheme>
    </Main>
  </ThemeLayout>
)

export default Layout
```

### Individual Styling

This is how you would use the individual styles if you wish to have more controls over styles.

```javascript
import React from "react"
import { Styled } from "theme-ui"

const Navbar = () => {
  return (
    <nav role="navigation">
      <Styled.ul>
        <Styled.li>
          <a href="/">Home</a>
        </Styled.li>
        <Styled.li>
          <a href="/hello">Hello</a>
        </Styled.li>
        <Styled.li>
          <a href="/world">World</a>
        </Styled.li>
      </Styled.ul>
    </nav>
  )
}

export default Navbar
```

## Theme Component Shadowing

Please follow this [guide](https://egghead.io/lessons/gatsby-use-component-shadowing-to-override-gatsby-theme-components) to override or extend this `gatsby-theme-90s`.

### Example

```javascript
/**
 * ! NOTE
 *
 * Shadow the folder structure of the theme: ./src/gatsby-theme-90s/theme.js
 */

import { theme as baseTheme } from "gatsby-theme-90s/src/theme"

export const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: "tomato", // Change the primary colour
  },
  styles: {
    ...baseTheme.styles,
    p: {
      ...baseTheme.styles.p,
      fontWeight: "bold", // Change the font weight of "p" tag
    },
  },
}
```
