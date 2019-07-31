import React from "react"
import { Header } from "theme-ui"
import { Styled } from "theme-ui"

const Project = ({ name, tagline, body }) => (
  <div className="project">
    <Header>
      <h1>{name}</h1>
      <p>{tagline}</p>
    </Header>
    <div className="project-details">
      <div
        contentEditable="false"
        dangerouslySetInnerHTML={{ __html: body }}
      ></div>
    </div>
  </div>
)

export default Project
