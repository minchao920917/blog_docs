module.exports = {
  title: "闵超",
  description: '今天你不做的事，明天你更不会做',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间', link: '/timeline/', icon: 'reco-date' },
      { text: '文档', 
        icon: 'reco-api',
        items: [
          { text: 'mcf-cli', link: '/docs/mcf-cli/' },
          { text: 'mc-ui', link: '/docs/mc-ui/' }
        ]
      },
      { text: '旧版博客', 
        icon: 'reco-blog',
        link: 'https://minchao920917.github.io/'
      },
      { text: '联系 or 支持', icon:'reco-account', link: '/contact/' },
      { text: '连接', 
        icon: 'reco-message',
        items: [
          { text: '掘金', link: 'https://juejin.cn/user/2119514150414702', icon: 'reco-juejin' },
          { text: 'GitHub', link: 'https://github.com/minchao920917', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
      '/docs/mcf-cli/': [
        '',
      ],
      '/docs/mc-ui/': [
        {
          title: '介绍 Introduction',
          collapsable: false,
          children: [
            '',
            '更新日志',
          ]
        },
        {
          title: '使用安装 Install',
          collapsable: false,
          children: [
            '使用指南'
          ]
        },

        {
          title: '基础组件 Basic',
          collapsable: false,
          children: [
            '色彩',
            '布局',
            '字体图标',
            '按钮'
          ]
        },
        {
          title: '表单组件 Form',
          collapsable: false,
          children: [
            '输入框',
            
          ]
        },
      ]
    },  
    sidebarDepth: 3,
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        link:"test",
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '博客' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '最新更新',
    // 作者
    author: '闵超',
    // 作者头像
    authorAvatar: '/logo.png',
    // 备案号
    record: '苏ICP备17060053号',
    recordLink: 'http://beian.miit.gov.cn',
    // 项目开始时间
    startYear: '2015'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    },
  },
  plugins: ['demo-container'],
}  
