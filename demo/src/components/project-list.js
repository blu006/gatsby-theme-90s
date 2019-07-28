import React from "react"
import { Link } from "gatsby"
import { Styled } from "theme-ui"

const ProjectList = ({ projects }) => (
  <>
    <Styled.ul>
      {projects.map(project => (
        <Styled.li key={project.id}>
          <img src={project.image} alt={project.name} />
          <div class="project-info">
            <strong>
              {project.link ? (
                <a href={project.link}>{project.name}</a>
              ) : (
                <Link to={project.slug}>{project.name}</Link>
              )}
            </strong>
            <br />
            {project.link}
          </div>
        </Styled.li>
      ))}
    </Styled.ul>
  </>
)

export default ProjectList
