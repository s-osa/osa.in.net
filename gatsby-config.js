/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-theme-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "osa.in.net",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-51724899-4",
        respectDNT: true,
      },
    },
  ],
}
