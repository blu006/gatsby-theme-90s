import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Styled } from "theme-ui"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allProject {
        nodes {
          name
          link
          slug
        }
      }
    }
  `)

  const projects = data.allProject.nodes

  return (
    <div>
      <hr />
      <ul className="footer-nav">
        {projects.map(project => {
          const link = project.link ? project.link : project.slug

          return (
            <li key={project.name}>
              <a href={link}>[{project.name}]</a>
            </li>
          )
        })}
      </ul>
      <div className="theme-details">
        <Styled.p>Last Updated July 31st, 1990 1:50 AM</Styled.p>
        <Styled.p>
          This theme was made in tribute to the themes of the web in the 1990s.
        </Styled.p>
        <div style={{ display: "block" }}>
          <Styled.p>Built with&nbsp;</Styled.p>
          <Styled.a href="https://www.gatsbyjs.org">Gatsby</Styled.a>
        </div>
        <div className="contact">
          <Styled.p>
            Comments or questions on this theme, contact the&nbsp;
          </Styled.p>
          <Styled.a href="https://github.com/jackieluc/gatsby-theme-90s/pulls">
            Webmaster
          </Styled.a>
        </div>
      </div>
    </div>
  )
}

export default Footer
