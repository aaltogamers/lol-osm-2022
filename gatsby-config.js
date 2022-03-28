const { translations } = require("./src/translations")

module.exports = {
  siteMetadata: {
    title: `.`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ['gatsby-plugin-postcss', "gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: "src/images/teemolit.png",
      name: translations.tournamentTitle.FI,
      short_name: translations.tournamentTitleShort.FI,
      description: translations.siteDescription.FI,
      start_url: `/`,
      lang: "fi",
      background_color: `#d0d0d0`,
      theme_color: `#E70657`,
      display: `standalone`,
      localize: [
        {
          start_url: `/`,
          lang: `en`,
          name: translations.tournamentTitle.EN,
          short_name: translations.tournamentTitleShort.EN,
          description: translations.siteDescription.EN,
        },
      ],
    },
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};