import React from "react"
import { Link } from "gatsby"
import { Styled } from "theme-ui"

const ProjectList = ({ projects }) => (
  <>
    <Styled.ul>
      {projects.map(project => (
        <Styled.li key={project.id}>
          <strong>
            {project.link ? (
              <a href={project.link}>{project.name}</a>
            ) : (
              <Link to={project.slug}>{project.name}</Link>
            )}
          </strong>
          <br />
          {project.link}
        </Styled.li>
      ))}
    </Styled.ul>
  </>
)

export default ProjectList
