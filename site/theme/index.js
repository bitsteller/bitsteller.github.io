
module.exports = {
    extend: '@vuepress/theme-default',
    plugins: [
      ['@vuepress/blog', {
        directories: [
          {
            id: 'post',
            dirname: 'posts',
            path: '/posts/',
            layout: "Posts",
            itemLayout: "Post",
            pagination: {
              perPagePosts: 2,
            },
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