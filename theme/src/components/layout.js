import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as ThemeLayout, Header, Main, Container } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"

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
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header>
        <h1>{data.site.siteMetadata.title}</h1>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </ThemeLayout>
  )
}

export default Layout
