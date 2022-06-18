module.exports = {
  siteMetadata: {
    title: `community-pages`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    `gatsby-transformer-remark`,
  ],
};

// {
//   resolve: "gatsby-plugin-manifest",
//   options: {
//     // icon: "src/images/icon.png",
//   },
// },
