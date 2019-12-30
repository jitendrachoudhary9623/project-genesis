const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://interviewbot.io",
    gaTrackingId: null
  },
  header: {
    logo: "",
    logoLink: "",
    title: "Project Genesis",
    githubUrl: "https://github.com/jitendrasteam/project-genesis",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: ["/welcome", "/wave1"],
    collapsedNav: ["/wave1"],
    links: [{ text: "InterviewBot", link: "https://interviewbot.io" }],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: "Project Genesis",
    description: "Documenting the development of genesis ",
    ogImage: null,
    docsLocation:
      "https://github.com/jitendrasteam/project-genesis/tree/master/content",
    favicon: ""
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: "Project Genesis",
      short_name: "Genesis",
      start_url: "/",
      background_color: "#fffff",
      theme_color: "#ffffff",
      display: "standalone",
      crossOrigin: "use-credentials",
      icons: [
        {
          src: "src/pwa-512.png",
          sizes: `512x512`,
          type: `image/png`
        }
      ]
    }
  }
};

module.exports = config;
