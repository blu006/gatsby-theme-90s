module.exports = ({ contentPath = "data", basePath = "/" }) => ({
  siteMetadata: {
    title: "Gatsby Theme Monochrome",
    author: `Jackie Luc`,
    description: `Monochrome is a Gatsby Theme.`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: contentPath,
      },
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "Project",
      },
    },
  ],
})
