const { defaultTheme } = require("vuepress");
module.exports = {
  lang: "zh-CN",
  title: "Unit.Domains",
  description: "The Documents of Unit.Domains",
  dest: "dist",
  head: [["link", { rel: "icon", href: "/images/logo.svg" }]],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en-US",
      title: "Unit.Domains",
      description: "Unit.Domains Help Center",
    },

    "/zh/": {
      lang: "zh-CN",
      title: "Unit.Domains",
      description: "Unit.Domains帮助中心",
    },
  },

  theme: defaultTheme({
    logo: "/images/logo.svg",
    locales: {
      "/": {
        selectLanguageName: "English",
      },
      "/zh/": {
        selectLanguageName: "简体中文",
      },
    },
    navbar: [
      // NavbarItem
      {
        text: "Github",
        link: "https://github.com/UnitDomains",
      },
    ],
    subSidebar: "auto",
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebar: {
      "/zh/": [
        "/zh/Introduction.md",

        "/zh/Terminology.md",

        "/zh/SupportDomains.md",

        {
          text: "域名管理",
          link: "/zh/domains/",
          children: [
            "/zh/domains/Search.md",
            "/zh/domains/Register.md",
            "/zh/domains/Settings.md",
            "/zh/domains/Reverse.md",
            "/zh/domains/Subdomain.md",
            "/zh/domains/Opensea.md",
          ],
        },

        "/zh/FAQ.md",
        "/zh/TermsofService.md",
      ],

      "": [
        "/Introduction.md",

        "/Terminology.md",

        "/SupportDomains.md",

        {
          text: "Domain Management",
          link: "/domains/",
          children: [
            "/domains/Search.md",
            "/domains/Register.md",
            "/domains/Settings.md",
            "/domains/Reverse.md",
            "/domains/Subdomain.md",
            "/domains/Opensea.md",
          ],
        },

        "/FAQ.md",
        "/TermsofService.md",
      ],
    },
  }),
};
