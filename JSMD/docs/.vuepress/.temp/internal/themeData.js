export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"logoDark\":\"/images/logoDark.png\",\"navbar\":[{\"text\":\"JavaScript\",\"link\":\"/Page/JavascriptMd/\"},{\"text\":\"面试\",\"link\":\"/Page/Interview/\"}],\"sidebar\":{\"/Page/JavascriptMd/\":[{\"text\":\"微前端\",\"collapsible\":true,\"children\":[{\"text\":\"这是一段文字\",\"link\":\"https://github.com\",\"children\":[]}]},{\"text\":\"III\",\"link\":\"/Page/foo/iiii.md\"}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
