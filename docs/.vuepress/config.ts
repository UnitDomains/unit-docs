import { defaultTheme } from "vuepress";

export default {
  lang: "en-US",
  title: "Unit.Domains",
  description: "The Documents of Unit.Domains",
  dest: "dist",
  head: [["link", { rel: "icon", href: "/images/logo.svg" }]],
  locales: {
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
    "/hk/": {
      lang: "zh-HK",
      title: "Unit.Domains",
      description: "Unit.Domains幫助中心",
    },
    "/ja/": {
      lang: "ja",
      title: "Unit.Domains",
      description: "Unit.Domains ヘルプセンター",
    },
    "/de/": {
      lang: "de",
      title: "Unit.Domains",
      description: "Unit.Domains Hilfezentrum",
    },
    "/es/": {
      lang: "es",
      title: "Unit.Domains",
      description: "Unit.Domains Centro de ayuda",
    },
    "/fr/": {
      lang: "fr",
      title: "Unit.Domains",
      description: "Unit.Domains Centre d'aide",
    },
    "/ko/": {
      lang: "ko",
      title: "Unit.Domains",
      description: "Unit.Domains 지원 센터",
    },
    "/it/": {
      lang: "it",
      title: "Unit.Domains",
      description: "Unit.Domains Centro Assistenza",
    },
    "/pl/": {
      lang: "pl",
      title: "Unit.Domains",
      description: "Unit.Domains Centrum pomocy",
    },
    "/pt/": {
      lang: "pt",
      title: "Unit.Domains",
      description: "Unit.Domains Centro de ajuda",
    },
    "/ru/": {
      lang: "ru",
      title: "Unit.Domains",
      description: "Unit.Domains центр помощи",
    },
    "/vi/": {
      lang: "vi",
      title: "Unit.Domains",
      description: "Unit.Domains Trung tâm trợ giúp",
    },
  },

  theme: defaultTheme({
    logo: "/images/logo.svg",
    locales: {
      "/": {
        selectLanguageName: "English (EN)",
      },
      "/zh/": {
        selectLanguageName: "简体中文 (CN)",
      },
      "/hk/": {
        selectLanguageName: "繁體中文 (HK)",
      },
      "/ja/": {
        selectLanguageName: "日本語 (JA)",
      },
      "/de/": {
        selectLanguageName: "Deutsch (DE)",
      },
      "/es/": {
        selectLanguageName: "Español (ES)",
      },
      "/fr/": {
        selectLanguageName: "Français (FR)",
      },
      "/ko/": {
        selectLanguageName: "한국어 (KO)",
      },
      "/it/": {
        selectLanguageName: "Italiano (IT)",
      },
      "/pl/": {
        selectLanguageName: "Polski (PL)",
      },
      "/pt/": {
        selectLanguageName: "Português (BR)",
      },
      "/ru/": {
        selectLanguageName: "Pусский (RU)",
      },
      "/vi/": {
        selectLanguageName: "Tiếng Việt (VI)",
      },
    },
    navbar: [
      // NavbarItem
      {
        text: "Github",
        link: "https://github.com/UnitDomains",
      },
    ],
    sidebar: {
      "/": [
        "/en/Introduction.md",

        "/en/Terminology.md",

        "/en/SupportDomains.md",

        {
          text: "Domain Name Management",
          link: "/en/domains/",
          children: [
            "/en/domains/Search.md",
            "/en/domains/Register.md",
            "/en/domains/Settings.md",
            "/en/domains/Reverse.md",
            "/en/domains/Subdomain.md",
            "/en/domains/Opensea.md",
          ],
        },

        {
          text: "Dapp Development",
          link: "/en/dapp/",
          children: [
            "/en/dapp/Introduction.md",
            "/en/dapp/UnitDomainsLib.md",
            "/en/dapp/WorkingWithUnitDomains.md",
            "/en/dapp/ResolvingNames.md",
            "/en/dapp/DomainInfos.md",
          ],
        },

        "/en/FAQ.md",
        "/en/TermsofService.md",
      ],

      "/de/": [
        "/de/Introduction.md",
        "/de/Terminology.md",
        "/de/SupportDomains.md",

        {
          text: "Verwaltung von Domänennamen",
          link: "/de/domains/",
          children: [
            "/de/domains/Search.md",
            "/de/domains/Register.md",
            "/de/domains/Settings.md",
            "/de/domains/Reverse.md",
            "/de/domains/Subdomain.md",
            "/de/domains/Opensea.md",
          ],
        },

        {
          text: "Dapp-Entwicklung",
          link: "/zh/dapp/",
          children: [
            "/de/dapp/Introduction.md",
            "/de/dapp/UnitDomainsLib.md",
            "/de/dapp/WorkingWithUnitDomains.md",
            "/de/dapp/ResolvingNames.md",
            "/de/dapp/DomainInfos.md",
          ],
        },

        "/de/FAQ.md",
        "/de/TermsofService.md",
      ],

      "/es/": [
        "/es/Introduction.md",
        "/es/Terminology.md",
        "/es/SupportDomains.md",

        {
          text: "Gestión de nombres de dominio",
          link: "/es/domains/",
          children: [
            "/es/domains/Search.md",
            "/es/domains/Register.md",
            "/es/domains/Settings.md",
            "/es/domains/Reverse.md",
            "/es/domains/Subdomain.md",
            "/es/domains/Opensea.md",
          ],
        },

        {
          text: "Desarrollo de aplicaciones",
          link: "/es/dapp/",
          children: [
            "/es/dapp/Introduction.md",
            "/es/dapp/UnitDomainsLib.md",
            "/es/dapp/WorkingWithUnitDomains.md",
            "/es/dapp/ResolvingNames.md",
            "/es/dapp/DomainInfos.md",
          ],
        },

        "/es/FAQ.md",
        "/es/TermsofService.md",
      ],

      "/fr/": [
        "/fr/Introduction.md",
        "/fr/Terminology.md",
        "/fr/SupportDomains.md",

        {
          text: "Gestion des noms de domaine",
          link: "/fr/domains/",
          children: [
            "/fr/domains/Search.md",
            "/fr/domains/Register.md",
            "/fr/domains/Settings.md",
            "/fr/domains/Reverse.md",
            "/fr/domains/Subdomain.md",
            "/fr/domains/Opensea.md",
          ],
        },

        {
          text: "Développement Dapp",
          link: "/fr/dapp/",
          children: [
            "/fr/dapp/Introduction.md",
            "/fr/dapp/UnitDomainsLib.md",
            "/fr/dapp/WorkingWithUnitDomains.md",
            "/fr/dapp/ResolvingNames.md",
            "/fr/dapp/DomainInfos.md",
          ],
        },

        "/fr/FAQ.md",
        "/fr/TermsofService.md",
      ],

      "/hk/": [
        "/hk/Introduction.md",
        "/hk/Terminology.md",
        "/hk/SupportDomains.md",

        {
          text: "域名管理",
          link: "/hk/domains/",
          children: [
            "/hk/domains/Search.md",
            "/hk/domains/Register.md",
            "/hk/domains/Settings.md",
            "/hk/domains/Reverse.md",
            "/hk/domains/Subdomain.md",
            "/hk/domains/Opensea.md",
          ],
        },

        {
          text: "Dapp開發",
          link: "/hk/dapp/",
          children: [
            "/hk/dapp/Introduction.md",
            "/hk/dapp/UnitDomainsLib.md",
            "/hk/dapp/WorkingWithUnitDomains.md",
            "/hk/dapp/ResolvingNames.md",
            "/hk/dapp/DomainInfos.md",
          ],
        },

        "/hk/FAQ.md",
        "/hk/TermsofService.md",
      ],

      "/it/": [
        "/it/Introduction.md",
        "/it/Terminology.md",
        "/it/SupportDomains.md",

        {
          text: "Gestione dei nomi di dominio",
          link: "/it/domains/",
          children: [
            "/it/domains/Search.md",
            "/it/domains/Register.md",
            "/it/domains/Settings.md",
            "/it/domains/Reverse.md",
            "/it/domains/Subdomain.md",
            "/it/domains/Opensea.md",
          ],
        },

        {
          text: "Sviluppo DApp",
          link: "/it/dapp/",
          children: [
            "/it/dapp/Introduction.md",
            "/it/dapp/UnitDomainsLib.md",
            "/it/dapp/WorkingWithUnitDomains.md",
            "/it/dapp/ResolvingNames.md",
            "/it/dapp/DomainInfos.md",
          ],
        },

        "/it/FAQ.md",
        "/it/TermsofService.md",
      ],

      "/ja/": [
        "/ja/Introduction.md",
        "/ja/Terminology.md",
        "/ja/SupportDomains.md",

        {
          text: "ドメイン名管理",
          link: "/ja/domains/",
          children: [
            "/ja/domains/Search.md",
            "/ja/domains/Register.md",
            "/ja/domains/Settings.md",
            "/ja/domains/Reverse.md",
            "/ja/domains/Subdomain.md",
            "/ja/domains/Opensea.md",
          ],
        },

        {
          text: "Dapp開発",
          link: "/ja/dapp/",
          children: [
            "/ja/dapp/Introduction.md",
            "/ja/dapp/UnitDomainsLib.md",
            "/ja/dapp/WorkingWithUnitDomains.md",
            "/ja/dapp/ResolvingNames.md",
            "/ja/dapp/DomainInfos.md",
          ],
        },

        "/ja/FAQ.md",
        "/ja/TermsofService.md",
      ],

      "/ko/": [
        "/ko/Introduction.md",
        "/ko/Terminology.md",
        "/ko/SupportDomains.md",

        {
          text: "도메인 이름 관리",
          link: "/ko/domains/",
          children: [
            "/ko/domains/Search.md",
            "/ko/domains/Register.md",
            "/ko/domains/Settings.md",
            "/ko/domains/Reverse.md",
            "/ko/domains/Subdomain.md",
            "/ko/domains/Opensea.md",
          ],
        },

        {
          text: "Dapp 개발",
          link: "/ko/dapp/",
          children: [
            "/ko/dapp/Introduction.md",
            "/ko/dapp/UnitDomainsLib.md",
            "/ko/dapp/WorkingWithUnitDomains.md",
            "/ko/dapp/ResolvingNames.md",
            "/ko/dapp/DomainInfos.md",
          ],
        },

        "/ko/FAQ.md",
        "/ko/TermsofService.md",
      ],

      "/pl/": [
        "/pl/Introduction.md",
        "/pl/Terminology.md",
        "/pl/SupportDomains.md",

        {
          text: "Zarządzanie nazwami domen",
          link: "/pl/domains/",
          children: [
            "/pl/domains/Search.md",
            "/pl/domains/Register.md",
            "/pl/domains/Settings.md",
            "/pl/domains/Reverse.md",
            "/pl/domains/Subdomain.md",
            "/pl/domains/Opensea.md",
          ],
        },

        {
          text: "Rozwój Dappa",
          link: "/pl/dapp/",
          children: [
            "/pl/dapp/Introduction.md",
            "/pl/dapp/UnitDomainsLib.md",
            "/pl/dapp/WorkingWithUnitDomains.md",
            "/pl/dapp/ResolvingNames.md",
            "/pl/dapp/DomainInfos.md",
          ],
        },

        "/pl/FAQ.md",
        "/pl/TermsofService.md",
      ],

      "/pt/": [
        "/pt/Introduction.md",
        "/pt/Terminology.md",
        "/pt/SupportDomains.md",

        {
          text: "Gerenciamento de nomes de domínio",
          link: "/pt/domains/",
          children: [
            "/pt/domains/Search.md",
            "/pt/domains/Register.md",
            "/pt/domains/Settings.md",
            "/pt/domains/Reverse.md",
            "/pt/domains/Subdomain.md",
            "/pt/domains/Opensea.md",
          ],
        },

        {
          text: "Desenvolvimento de Dapps",
          link: "/pt/dapp/",
          children: [
            "/pt/dapp/Introduction.md",
            "/pt/dapp/UnitDomainsLib.md",
            "/pt/dapp/WorkingWithUnitDomains.md",
            "/pt/dapp/ResolvingNames.md",
            "/pt/dapp/DomainInfos.md",
          ],
        },

        "/pt/FAQ.md",
        "/pt/TermsofService.md",
      ],

      "/ru/": [
        "/ru/Introduction.md",
        "/ru/Terminology.md",
        "/ru/SupportDomains.md",

        {
          text: "Управление доменными именами",
          link: "/ru/domains/",
          children: [
            "/ru/domains/Search.md",
            "/ru/domains/Register.md",
            "/ru/domains/Settings.md",
            "/ru/domains/Reverse.md",
            "/ru/domains/Subdomain.md",
            "/ru/domains/Opensea.md",
          ],
        },

        {
          text: "Разработка децентрализованного приложения",
          link: "/ru/dapp/",
          children: [
            "/ru/dapp/Introduction.md",
            "/ru/dapp/UnitDomainsLib.md",
            "/ru/dapp/WorkingWithUnitDomains.md",
            "/ru/dapp/ResolvingNames.md",
            "/ru/dapp/DomainInfos.md",
          ],
        },

        "/ru/FAQ.md",
        "/ru/TermsofService.md",
      ],

      "/vi/": [
        "/vi/Introduction.md",
        "/vi/Terminology.md",
        "/vi/SupportDomains.md",

        {
          text: "Quản lý tên miền",
          link: "/vi/domains/",
          children: [
            "/vi/domains/Search.md",
            "/vi/domains/Register.md",
            "/vi/domains/Settings.md",
            "/vi/domains/Reverse.md",
            "/vi/domains/Subdomain.md",
            "/vi/domains/Opensea.md",
          ],
        },

        {
          text: "Phát triển Dapp",
          link: "/vi/dapp/",
          children: [
            "/vi/dapp/Introduction.md",
            "/vi/dapp/UnitDomainsLib.md",
            "/vi/dapp/WorkingWithUnitDomains.md",
            "/vi/dapp/ResolvingNames.md",
            "/vi/dapp/DomainInfos.md",
          ],
        },

        "/vi/FAQ.md",
        "/vi/TermsofService.md",
      ],

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

        {
          text: "Dapp开发",
          link: "/zh/dapp/",
          children: [
            "/zh/dapp/Introduction.md",
            "/zh/dapp/UnitDomainsLib.md",
            "/zh/dapp/WorkingWithUnitDomains.md",
            "/zh/dapp/ResolvingNames.md",
            "/zh/dapp/DomainInfos.md",
          ],
        },

        "/zh/FAQ.md",
        "/zh/TermsofService.md",
      ],
    },
  }),
};
