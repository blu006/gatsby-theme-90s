import React from "react"
import { css, Global } from "@emotion/core"
import {
  Layout as ThemeLayout,
  Header,
  Main,
  Container,
  Footer,
} from "theme-ui"
import { Styled } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "./SEO"
import Navbar from "./navbar"

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
      <Main>
        <Header>
          <Styled.h1>{data.site.siteMetadata.title}</Styled.h1>
        </Header>
        {/* <Sidebar /> */}
        <Container>{children}</Container>
        <Footer />
      </Main>
    </ThemeLayout>
  )
}

export default Layout
