module.exports = {
  locales: {
    '/': {
      lang: 'en',
    },
    '/zh/': {
      lang: 'zh-CN',
    }
  },
  themeConfig: {
    locales: {
      '/': {
        sidebar: [
          '/',
          '/foo',
          '/bar',
        ]
      },
      '/zh/': {
        sidebar: [
          '/zh/',
          '/zh/foo',
          '/zh/bar',
        ]
      },
    }
  },
  plugins: [
    'vuepress-plugin-i18n-fallback'
  ],
}
