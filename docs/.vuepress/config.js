module.exports = {
    base: '/blog/',
    title: "My Blog",
    description: "This is a blog.",
    themeConfig: {
        description: '我的个人网站',
        logo: '/assets/logo/logo.png',
        base: '/', // 这是部署到github相关的配置
        markdown: {
          lineNumbers: false // 代码块显示行号
        },
        nav: [
            { text: '面试宝典', link: '/interview/' },
            { text: '知识点总结', link: '/knowledge/' },
            { text: 'External', link: 'http://itdoc.lesso.com/#/' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                  { text: 'ES6', link: '/language/ES6/' },
                  { text: 'ES7', link: '/language/ES7/' }
                ]
            }
        ],
        sidebar: {
          '/interview/': [
            ''  //该目录下的README.md文件
        ],
          '/knowledge/': [
            ''  //该目录下的README.md文件
        ],
          '/language/ES6/': [
            ''  //该目录下的README.md文件
        ],

        '/language/ES7/': [
            '',
        ],
      },
      sidebarDepth : 2,
      displayAllHeaders: true,
      sidebar: 'auto'
    },
    title: 'Hello VuePress',
    description: 'Just playing around',
    configureWebpack: {
        resolve: {
          alias: {
            '@images': 'images'
          }
        }
      }
  }