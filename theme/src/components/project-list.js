import React from "react"
import { Link } from "gatsby"
import { Styled } from "theme-ui"

const ProjectList = ({ projects }) => (
  <>
    <Styled.h1>My Projects</Styled.h1>
    <ul>
      {projects.map(project => (
        <li key={project.id}>
          <strong>
            <Link to={project.slug}>{project.name}</Link>
          </strong>
          <br />
          {new Date(project.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </li>
      ))}
    </ul>
  </>
)

export default ProjectList
