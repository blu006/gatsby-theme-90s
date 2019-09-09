/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby Theme 90s Demo",
    author: `Jackie Luc`,
    description: `90s is a Gatsby Theme with a flash from the past.`,
    url: "https://gatsby-theme-90s.netlify.com/",
    image: "/images/Dvd.gif",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "data",
      },
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "Project",
      },
    },
    {
      resolve: "gatsby-theme-90s",
      options: {
        basePath: "/",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-144938091-1",
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-simple-analytics",
      options: {
        domain: "gatsby-theme-90s.netlify.com",
      },
    },
  ],
}
