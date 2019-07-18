import React from "react"
import { css, Global } from "@emotion/core"
import {
  Layout as ThemeLayout,
  Header,
  Main,
  Container,
  Footer,
} from "theme-ui"
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
      <Navbar />
      <Header>
        <h1>{data.site.siteMetadata.title}</h1>
      </Header>
      <Main>
        {/* <Sidebar /> */}
        <Container>{children}</Container>
      </Main>
      <Footer />
    </ThemeLayout>
  )
}

export default Layout
