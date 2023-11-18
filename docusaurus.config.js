// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PixConf',
  tagline: 'Modern event based configuration management system',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://pixconf.vitalvas.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pixconf', // Usually your GitHub org/user name.
  projectName: 'pixconf-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ docPath }) => {
            return (
              'https://github.com/pixconf/pixconf-docs/blob/main/docs/' + docPath
            )
          }
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'PixConf',
        logo: {
          alt: 'PixConf Logo',
          src: 'img/pixconf.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/pixconf/pixconf',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            label: 'Community',
            to: 'https://github.com/orgs/pixconf/discussions'
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PixConf`,
      },
      // prism: {
      //   theme: require('prism-react-renderer/themes/github'),
      //   darkTheme: require('prism-react-renderer/themes/dracula'),
      // },
    }),
};

module.exports = config;
