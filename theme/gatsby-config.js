const path = require("path")

module.exports = () => ({
  siteMetadata: {
    title: "Gatsby Theme 90s",
    author: `Jackie Luc`,
    description: `gatsby-theme-90s is a Gatsby Theme with some flair from the old web.`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: path.resolve(`${__dirname}/src/utils/typography`),
      },
    },
  ],
})
