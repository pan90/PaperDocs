import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "纸片文档",
  description: "纸片服务器详细文档",
  lang: 'zh-CN',
  // cleanUrls: true,
  // metaChunk: true,
  lastUpdated: true,
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {

    // 404
    notFound: {
      title: "页面未找到",
      quote: "你来到了没有知识的荒原",
      linkLabel: "返回首页",
      linkText: "返回首页",
      code: "404"
    },

    // 搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: '关闭',
            },
          },
        },
      },
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '官网', link: 'https://paper-card.cn', target: "_self" },
      { text: '介绍', link: '/introduction' },
      { text: '规则', link: '/rules/' },
      { text: '公告', link: '/announcements/' },
      { text: '更新日志', link: '/logs/' },

    ],

    sidebar:
      [
        {
          text: '🕹️介绍',
          link: "/introduction"
        },

        {
          text: '规则',
          link: "/rules/",
          collapsed: true,
          items: [
            { text: "玩家守则", link: "/rules/" },
            { text: `矿透`, link: "/rules/xray" },
            { text: `开挂`, link: "/rules/cheat" },
            { text: `偷东西`, link: "/rules/steal" },
            { text: `模组`, link: "/rules/mods" },
            { text: `邀请`, link: "/plugins/invitation" },
          ]
        },

        {
          text: '玩家筛选',
          link: "/filter-players"
        },

        {
          text: '🧭指令大全',
          link: "/commands"
        },

        {
          text: '封禁、解封与举报',
          link: '/ban/'
        },



        {
          text: '自定义称号',
          link: "/faq/title"
        },


        {
          text: '常见问题',
          collapsed: true,
          link: "/faq/",
          items: []
        },


        {
          text: '🔋电池',
          link: "/coins/",
          collapsed: true,
          items: [
            { text: '月卡', link: "/coins/card" },
            { text: '指令', link: "/coins/command" },
          ]
        },

        {
          text: '支持与赞助',
          link: "/support-us/",
          collapsed: true,
          items: [
            {
              text: '微信或支付宝',
              link: "/support-us/"
            },
            {
              text: '爱发电',
              link: "/support-us/afdian"
            },
            {
              text: "网站开发维护",
              link: "/support-us/docs"
            }
          ]
        },


        {
          text: '插件',
          collapsed: true,
          link: "/plugins/",
          items: [
            { text: '🌊漂流瓶', link: "/plugins/drift-bottle" },
            { text: '🍻酿酒', link: "/plugins/brewing" },
            { text: '🛠️盔甲架自定义', link: "/plugins/armor-stand" },
            { text: '🤺PaperPVP', link: "/plugins/paper-pvp" },
            { text: '👨‍🌾村民优化', link: "/plugins/vo" },
          ]
        },

        {
          text: '更新日志',
          collapsed: true,
          link: "/logs/",
          items: []
        },

        {
          text: '公告',
          collapsed: true,
          link: "/announcements/",
          items: []
        },

        {
          text: '未来计划',
          link: "/future/"
        },

        {
          text: '腐竹笔记',
          link: "/notes/"
        },

      ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pan90/new-docs' }
    ],

    editLink: {
      pattern: 'https://github.com/pan90/new-docs/tree/main/:path',
      text: '编辑'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      level: [2, 3], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '页面导航' // 文字显示
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})