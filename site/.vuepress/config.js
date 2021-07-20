module.exports = {
    title: 'Nils Breyer',
    description: 'Nils Breyer is ....',

    plugins: [
        ['@vuepress/blog', {
            directories: [{
                id: 'article',
                dirname: '_articles',
                itemPermalink: '/articles/:slug',
                pagination: {
                    lengthPerPage: 2,
                },
            }, {
                id: 'project',
                dirname: '_projects',
                itemPermalink: '/projects/:slug',
                pagination: {
                    lengthPerPage: 2,
                },
            }],
            sitemap: {
                hostname: 'https://nilsbreyer.eu'
            },
        }]
    ],

    themeConfig: {
        author: 'Nils Breyer',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/articles/' },
            { text: 'Projects', link: '/projects/' },
            { text: 'CV', link: '/cv/' },
        ],
    }
}
