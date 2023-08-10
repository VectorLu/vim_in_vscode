import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vim in vscode",
  description: "Vim and vscode, learn both at once.",
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '简介', link: '/' },
      { text: '教程', link: '/00准备开始' }
    ],

    sidebar: [
      {
        text: 'Vim',
        items: [
          { text: '00 准备开始', link: '/00准备开始' },
          { text: '01 在 Vim 中存活下去', link: '/01在Vim中存活下去' },
        ] 
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/VectorLu' }
    ]
  }
})
