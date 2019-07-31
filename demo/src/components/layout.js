import React from "react"
import { css, Global } from "@emotion/core"
import {
  Layout as ThemeLayout,
  Header,
  Main,
  Container,
  Footer as FooterTheme,
} from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "./SEO"
import Navbar from "./navbar"
import Footer from "./footer"

/** @jsx jsx */
import { jsx } from "theme-ui"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeLayout>
      <SEO />
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <p className="tiny-banner" role="banner">
        the official demo website of the Gatsby Theme 90s
      </p>
      <Navbar />
      <Main role="main">
        <Header>
          <h1>{data.site.siteMetadata.title}</h1>
        </Header>
        <Container>{children}</Container>
        <FooterTheme role="contentinfo">
          <Footer />
        </FooterTheme>
      </Main>
    </ThemeLayout>
  )
}

export default Layout
