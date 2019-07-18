const fs = require("fs")
const path = require("path")

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "data"

  if (!fs.existsSync(contentPath)) {
    reporter.info(`Creating the ${contentPath} directory.`)
    fs.mkdirSync(contentPath)
  }
}

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Project implements Node @dontInfer {
      id: ID!
      name: String!
      date: Date! @dateformat
      body: String!
      tags: [String]!
      slug: String!
    }
  `)
}

exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || "/"

  // Create our own slugs
  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")

    return `/${basePath}/${slug}`.replace(/\/\/+/g, "/")
  }

  createResolvers({
    Project: {
      slug: {
        resolve: source => path.join(basePath, slugify(source.name)),
      },
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || "/"

  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/projects.js"),
  })

  const result = await graphql(`
    query {
      allProject(sort: { fields: date, order: ASC }) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Error loading projects", reporter.errors)
    return
  }

  const projects = result.data.allProject.nodes

  projects.forEach(project => {
    const slug = project.slug
    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/project.js"),
      context: {
        projectID: project.id,
      },
    })
  })
}
