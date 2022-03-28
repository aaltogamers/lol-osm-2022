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
      name: translations.tournamentTitle.fi,
      short_name: translations.tournamentTitleShort.fi,
      description: translations.siteDescription.fi,
      start_url: `/`,
      lang: "fi",
      background_color: `#d0d0d0`,
      theme_color: `#E70657`,
      display: `standalone`,
      localize: [
        {
          start_url: `/`,
          lang: `en`,
          name: translations.tournamentTitle.en,
          short_name: translations.tournamentTitleShort.en,
          description: translations.siteDescription.en,
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