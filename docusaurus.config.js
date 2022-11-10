// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SportSee documentation for developers",
  tagline: "This doc will help you understand the code",
  url: "https://localhost:3000",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/fav.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sviosdi", // Usually your GitHub org/user name.
  projectName: "docP12", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/sviosdi/docP12",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "SportSee Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "/docs/getting-started",
            position: "left",
            label: "Getting Started",
          },
          {
            href: "/docs/category/documentation-for-the-developer",
            position: "left",
            label: "Documentation",
          },
          {
            href: "http://localhost:3000/jsdocs",
            label: "Project JSDoc",
            position: "right",
          },
          {
            href: "https://github.com/sviosdi/P12",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation for the developer",
                to: "/docs/category/documentation-for-the-developer",
              },
              {
                label: "Project JSDoc",
                href: "http://localhost:3000/jsdocs/",
              },
            ],
          },
          {
            title: "Technologies",
            items: [
              {
                label: "d3js",
                href: "https://d3js.org/",
              },
              {
                label: "React",
                href: "https://fr.reactjs.org/",
              },
              {
                label: "React-Router",
                href: "https://reactrouter.com/en/main",
              },
              {
                label: "Docusaurus",
                href: "https://docusaurus.io/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Project's GitHub",
                href: "https://github.com/sviosdi/P12",
              },
              {
                label: "Doc's GitHub",
                href: "https://github.com/sviosdi/docP12",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SportSee, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
