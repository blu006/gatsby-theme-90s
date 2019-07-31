import React from "react"
import { Styled } from "theme-ui"

/** @jsx jsx */
import { jsx } from "theme-ui"

const ProjectList = ({ projects }) => (
  <>
    <Styled.ul>
      {projects.map(project =>
        project.image ? (
          <Styled.li key={project.id}>
            <img src={project.image} alt={project.name} />

            <div className="project-info" style={{ padding: "16px" }}>
              <Styled.h3>{project.name}</Styled.h3>
              {project.link ? (
                <Styled.a href={project.link}>{project.tagline}</Styled.a>
              ) : (
                <Styled.a href={project.slug}>{project.tagline}</Styled.a>
              )}
            </div>
          </Styled.li>
        ) : (
          ""
        )
      )}
    </Styled.ul>
  </>
)

export default ProjectList
