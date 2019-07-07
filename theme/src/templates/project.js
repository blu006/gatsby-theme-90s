import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/project"

export const query = graphql`
  query($projectID: String!) {
    project(id: { eq: $projectID }) {
      name
      body
      date(formatString: "MMMM D, YYYY")
      tags
    }
  }
`

const ProjectTemplate = ({ data: { project } }) => (
  <Layout>
    <Project {...project} />
  </Layout>
)

export default ProjectTemplate
