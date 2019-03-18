module.exports = {
    siteMetadata: {
        title: `Go Code Stuff`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://gocodestuff.us20.list-manage.com/subscribe/post?u=dc888837ace8f4ed48db217e6&amp;id=3425d3f723', // see instructions section below
            },
        },
    ],
}