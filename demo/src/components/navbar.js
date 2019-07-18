import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Styled } from "gatsby-plugin-theme-ui"

/** @jsx jsx */
import { jsx } from "theme-ui"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          navHeaders
        }
      }
    }
  `)

  return (
    <nav className="Navbar" role="navigation">
      <ul>
        {data.site.siteMetadata.navHeaders.map(link => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
