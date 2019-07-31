import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Styled } from "theme-ui"

const Navbar = () => {
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
    <nav role="navigation">
      <Styled.ul>
        {projects.map(project => {
          const link = project.link ? project.link : project.slug

          return (
            <li key={project.name}>
              <strong>
                <a href={link}>{project.name}</a>
              </strong>
            </li>
          )
        })}
      </Styled.ul>
    </nav>
  )
}

export default Navbar
