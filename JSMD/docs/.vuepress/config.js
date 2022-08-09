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
      {
        text: "随笔杂谈",
        link: "/Page/InformalEssay/",
      },
      {
        text: "观书有感",
        link: "/Page/LookBookInspiration/",
      },
    ],
    // 侧边栏
    sidebar: {

      // JavaScript
      "/Page/JavascriptMd/": [
         // JavaScript基础
        {
          text: "JavaScript基础",
          // 可折叠的侧边栏
          collapsible: true,
          children: ['/Page/JavascriptMd/jsNote/',],
        },

        // es6
        {
          text: "ES6",
          // 可折叠的侧边栏
          collapsible: true,
          children: ["/Page/JavascriptMd/ECMAScript6/"],
        },
      ],

      // 面试
      "/Page/Interview/": [
        {
          text: "面试题",
          // 可折叠的侧边栏
          collapsible: true,
          children: [
            {
              text: 'JavaScript基础',
              link: '/Page/Interview/JSquestion/',
              children: ['/Page/Interview/JSquestion/JsInterView/'],
            },
            {
              text: 'React',
              link: '/Page/Interview/ReactQuestion/',
              children: ['/Page/Interview/ReactQuestion/ReactInterView/'],
            },
          ],
        },
      ],
      // 随笔杂谈
      "/Page/InformalEssay/":[
        {
          text: '随笔杂谈',
          link: '/Page/InformalEssay/',
          children: ['/Page/InformalEssay/Life/README.md'],
        },
      ],

      "/Page/LookBookInspiration/":[
        {
          text: '观书有感',
          link: '/Page/LookBookInspiration/',
          children: ['/Page/LookBookInspiration/inspiration/'],
        }
      ]

    },
  }),

  plugins: [
    // 搜索
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
    // 复制
    copyCodePlugin({
      // 插件选项
      // pure:true
    }),

  ],

}