const { defaultTheme } = require('@vuepress/theme-default')
// const moment = require('moment')
const { searchPlugin } = require('@vuepress/plugin-search')
const { copyCodePlugin } = require("vuepress-plugin-copy-code2");
module.exports = {
  lang: 'zh-CN',
  title: '卷王同志，你好',
  port: 8888,
  description: '逝者如斯夫，不舍昼夜',
  colorModeSwitch: true,
  theme: defaultTheme({
    logo: '/images/logo.png',
    logoDark: '/images/logoDark.png',
    // 默认主题配置
    navbar: [
      {
        text: "JavaScript",
        link: "/Page/JavascriptMd/",
      },
      {
        text: "面试",
        link: "/Page/Interview/",
      },
    ],
    // 侧边栏
    sidebar: {
      //
      "/Page/JavascriptMd/": [
        {
          text: "微前端",
          // 可折叠的侧边栏
          collapsible: true,
          children: [
            {
              text: '这是一段文字',
              link: 'https://github.com',
              children: [],
            },
          ],
        },
        {
          text: "III",
          link: '/Page/foo/iiii.md'
        }
      ],
    },

    // sidebar:[
    //   '/Page/',
    //   '/Page/index copy.md'
    // ]
  }),

  plugins: [
    searchPlugin({
      // 配置项
      '/': {
        placeholder: 'Search',
      },
      '/zh/': {
        placeholder: '搜索',
      },
      maxSuggestions:10
    }),

    copyCodePlugin({
      // 插件选项
      // pure:true
    }),

  ],

}