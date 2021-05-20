module.exports = {
  siteMetadata: {
    title: "Traken | Smart energy solutions.",
    siteUrl: `http://traken.co/`,
    description: "Smart energy solutions.",
  },
  // pathPrefix: `/traken/`,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-json",
    "gatsby-transformer-inline-svg",
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: '/traken/',
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true
      }
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:100, 200, 400, 600`,
          `Raleway\:200, 400, 600`
        ]
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://casus.us4.list-manage.com/subscribe/post?u=0ee5b09351183922fff6654e8&amp;id=76080a1ffe",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "images",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/team/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/data/`,
      },
    }
  ],
};
