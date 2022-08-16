export const themeData = JSON.parse("{\"lastUpdatedText\":\"上次更新\",\"contributorsText\":\"作者\",\"logo\":\"/images/logo.png\",\"logoDark\":\"/images/logoDark.png\",\"navbar\":[{\"text\":\"前端\",\"children\":[{\"text\":\"JavaScript\",\"link\":\"/Page/JavascriptMd/\"}]},{\"text\":\"面试\",\"link\":\"/Page/Interview/\"},{\"text\":\"随笔杂谈\",\"link\":\"/Page/InformalEssay/\"},{\"text\":\"观书有感\",\"link\":\"/Page/LookBookInspiration/\"},{\"text\":\"杂七杂八\",\"link\":\"/Page/Clutter/\"}],\"sidebar\":{\"/Page/JavascriptMd/\":[{\"text\":\"JavaScript基础\",\"collapsible\":true,\"children\":[\"/Page/JavascriptMd/jsNote/cookie.md\",\"/Page/JavascriptMd/jsNote/tongyuan.md\",\"/Page/JavascriptMd/jsNote/storage.md\",\"/Page/JavascriptMd/jsNote/history.md\",\"/Page/JavascriptMd/jsNote/Location-URL.md\",\"/Page/JavascriptMd/jsNote/BlobObject.md\",\"/Page/JavascriptMd/jsNote/git.md\"]},{\"text\":\"ES6\",\"collapsible\":true,\"children\":[\"/Page/JavascriptMd/ECMAScript6/\"]}],\"/Page/Interview/\":[{\"text\":\"面试题\",\"collapsible\":true,\"children\":[{\"text\":\"JavaScript基础\",\"link\":\"/Page/Interview/JSquestion/\",\"children\":[\"/Page/Interview/JSquestion/JsInterView/jsInterView1.md\",\"/Page/Interview/JSquestion/JsInterView/jsInterView2.md\"]},{\"text\":\"React\",\"link\":\"/Page/Interview/ReactQuestion/\",\"children\":[\"/Page/Interview/ReactQuestion/ReactInterView/\"]}]}],\"/Page/InformalEssay/\":[{\"text\":\"随笔杂谈\",\"link\":\"/Page/InformalEssay/\",\"children\":[\"/Page/InformalEssay/Life/README.md\"]}],\"/Page/LookBookInspiration/\":[{\"text\":\"观书有感\",\"link\":\"/Page/LookBookInspiration/\",\"children\":[\"/Page/LookBookInspiration/inspiration/\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
