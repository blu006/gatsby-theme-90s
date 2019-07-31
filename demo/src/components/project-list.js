import React from "react"
import { Styled } from "theme-ui"

/** @jsx jsx */
import { jsx } from "theme-ui"

const ProjectList = ({ projects }) => (
  <>
    <Styled.ul>
      {projects.map(project => (
        <Styled.li key={project.id}>
          <img src={project.image} alt={project.name} />
          <div className="project-info">
            <Styled.h3>{project.name}</Styled.h3>
            {project.link ? (
              <Styled.a href={project.link} sx={{ padding: "16px" }}>
                {project.body}
              </Styled.a>
            ) : (
              <Styled.a href={project.slug} sx={{ padding: "16px" }}>
                {project.body}
              </Styled.a>
            )}
          </div>
        </Styled.li>
      ))}
    </Styled.ul>
  </>
)

export default ProjectList
