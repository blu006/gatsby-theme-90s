import React from "react"

const Project = ({ name, body, date, tags }) => (
  <div className="project">
    <header>
      <h1>{name}</h1>
      <p>{date}</p>
    </header>
    <div className="project-details">
      <p>{body}</p>
      <ul className="tags">
        {tags.map(tag => (
          <li className={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  </div>
)

export default Project
