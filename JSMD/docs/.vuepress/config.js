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
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  theme: defaultTheme({
    lastUpdatedText:'上次更新',
    contributorsText:'作者',
    logo: '/images/logo.png',
    logoDark: '/images/logoDark.png',
    // 默认主题配置
    navbar: [
     
      {
        text: "前端",
        children:[
          {
            text:'JavaScript',
            link: "/Page/JavascriptMd/",
          },
          {
            text:'React相关',
            link: "/Page/ReactMd/",
          }
        ]
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
      {
        text: "杂七杂八",
        link: "/Page/Clutter/",
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
          children: [
            '/Page/JavascriptMd/jsNote/cookie.md',
            '/Page/JavascriptMd/jsNote/tongyuan.md',
            '/Page/JavascriptMd/jsNote/storage.md',
            '/Page/JavascriptMd/jsNote/history.md',
            '/Page/JavascriptMd/jsNote/Location-URL.md',
            '/Page/JavascriptMd/jsNote/BlobObject.md',
            '/Page/JavascriptMd/jsNote/git.md',
            '/Page/JavascriptMd/jsNote/jsValue.md',
          ]
        },

        // es6
        {
          text: "ES6",
          // 可折叠的侧边栏
          collapsible: true,
          children: ["/Page/JavascriptMd/ECMAScript6/"],
        },
      ],

      // React
      '/Page/ReactMd/':[
        {
          text: "React",
          // 可折叠的侧边栏
          collapsible: true,
          children: [
            '/Page/ReactMd/State.md',
            '/Page/ReactMd/dva.md',
          ]
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
              children: [
                '/Page/Interview/JSquestion/JsInterView/jsInterView1.md',
                '/Page/Interview/JSquestion/JsInterView/jsInterView2.md',
              ],
            },
            {
              text: 'React相关',
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
  themeConfig: {
    lastUpdated: '上次更新', // string | boolean
  },

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