module.exports = {
  siteMetadata: {
    title: 'Rido Blog',
    author: 'Rido',
    description: 'A collection of utilities, curiosities and learnings using and designing the Microsoft developer platform.',
    siteUrl: 'https://blog.rido.dev',
  },
  pathPrefix: '/',
  plugins: [
    {
        resolve: `gatsby-plugin-google-analytics`,
	options: {
          trackingId: "UA-66818411-6",
          head: false,
          anonymize: true,
	  cookieDomain: "blog.rido.dev"
	},
    }, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
