module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsbyxsanity",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "hdeyuxv8",
        dataset: "production",
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token:
          "sk3tk9v8QWOgxeM3uyBki48EJ6ocGys5GKbDy3bLChhothjaYvF0V6biB3y0hdOuimxRUcK7KbIlDvKZF",
        watchMode: true,
        overlayDrafts: true,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
