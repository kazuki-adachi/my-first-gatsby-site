require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Dev Blog",
    description: "Gatsbyで作成したブログサイトです。",
    author: "Engineer X",
    siteUrl: `https://gatsby-starter-portfolio.nakamu.life`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    "gatsby-redirect-from",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId:`7uitmub34nzv`,
        accessToken:`CUfW1WGxZaRkWc2mEnMMsc5anGKpCNZtNrKLyS9sTeA`
      }
    },
    "gatsby-plugin-meta-redirect", // make sure this is always the last one
  ],
  
}