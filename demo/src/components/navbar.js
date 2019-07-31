import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
    <nav className="Navbar" role="navigation">
      <ul>
        {projects.map(project => {
          const link = project.link ? project.link : project.slug

          return (
            <li key={project.name}>
              <a href={link}>{project.name}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
