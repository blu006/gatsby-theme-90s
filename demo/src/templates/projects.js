import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import ProjectList from "../components/project-list"

const ProjectsTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allProject(sort: { fields: date, order: ASC }) {
        nodes {
          id
          name
          date
          body
          tags
          slug
        }
      }
    }
  `)

  const projects = data.allProject.nodes

  return (
    <Layout>
      <ProjectList projects={projects} />
    </Layout>
  )
}

export default ProjectsTemplate
