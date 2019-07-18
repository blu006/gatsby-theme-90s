import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as ThemeLayout, Header, Main, Container } from "theme-ui"
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
      <Header>
        <Navbar />
      </Header>
      <Main>
        <h1>{data.site.siteMetadata.title}</h1>
        <Container>{children}</Container>
      </Main>
    </ThemeLayout>
  )
}

export default Layout
