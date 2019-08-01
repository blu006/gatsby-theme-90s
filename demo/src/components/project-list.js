import React from "react"

const ProjectList = ({ projects }) => (
  <>
    <ul>
      {projects.map(project =>
        project.image ? (
          <li key={project.id}>
            <img src={project.image} alt={project.name} />

            <div className="project-info" style={{ padding: "16px" }}>
              <h3>{project.name}</h3>
              {project.link ? (
                <a href={project.link}>{project.tagline}</a>
              ) : (
                <a href={project.slug}>{project.tagline}</a>
              )}
            </div>
          </li>
        ) : (
          ""
        )
      )}
    </ul>
  </>
)

export default ProjectList
