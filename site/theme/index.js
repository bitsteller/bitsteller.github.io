
module.exports = {
    extend: '@vuepress/theme-default',
    plugins: [
      ['@vuepress/blog', {
        directories: [
          {
            id: 'blog',
            dirname: 'blog',
            path: '/blog/',
            layout: "Posts",
            itemLayout: "Post",
            pagination: {
              perPagePosts: 2,
            },
            itemPermalink: '/blog/:year/:month/:day/:slug'
          },
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ['tag', 'tags'],
            path: '/tag/',
            layout: 'Tag',
            frontmatter: { title: 'Tag' },
            itemlayout: 'Tag',
            pagination: {
              perPagePosts: 3
            }
          },
        ]
      }],
    ],
  }