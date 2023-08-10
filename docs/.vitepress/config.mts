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
          { text: '02 操作 Vim 的每一行', link: '/02操作Vim的每一行' },
          { text: '03 Vim 的语法', link: '/03Vim的语法' },
          { text: '04 高效删改和撤销重做', link: '/04高效删改和撤销重做' },
          { text: '05 掌握可视化模式', link: '/05掌握可视化模式' },
          { text: '06 文本对象', link: '/06文本对象' },
          { text: '07 在单文件中移动得更快', link: '/07在单文件中移动得更快' },
          { text: '08 掌握搜索', link: '/08掌握搜索' },
          { text: '', link: '' },
          { text: '', link: '' },
        ] 
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/VectorLu' }
    ]
  }
})
