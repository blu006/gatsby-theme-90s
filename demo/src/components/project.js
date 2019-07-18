import React from "react"

const Project = ({ name, body, link }) => (
  <div className="project">
    <header>
      <h1>{name}</h1>
    </header>
    <div className="project-details">
      <p>{body}</p>
    </div>
  </div>
)

export default Project
