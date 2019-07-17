module.exports = ({ contentPath = "data", basePath = "/" }) => ({
  siteMetadata: {
    title: "Gatsby Theme 90s",
    author: `Jackie Luc`,
    description: `90s is a Gatsby Theme with a flash from the past.`,
    navHeaders: [
      "Home",
      "Weekly Ad",
      "Product Info",
      "Services",
      "Locations",
      "Company Info",
      "Index",
    ],
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
