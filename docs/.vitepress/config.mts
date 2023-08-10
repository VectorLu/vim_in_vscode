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
          { text: '09 Vim 任意门', link: '/09Vim任意门' },
          { text: '10 数字和点命令', link: '/10数字和点命令' },
          { text: '11 反复横跳', link: '/11反复横跳' },
          { text: '12 vim-surround', link: '/12vim-surround' },
          { text: '13 Vim 替换文本', link: '/13Vim替换文本' },
          { text: '14 Vim 提示注释等', link: '/14Vim提示注释等' },
          { text: '15 Vim 窗口管理', link: '/15Vim窗口管理' },
          { text: '16 Vim 删除函数', link: '/16Vim删除函数' },
          { text: '17 Vim 宏', link: '/17Vim宏' },
          { text: '18 Vim 和 vscode 我都要', link: '/18Vim调用vscode命令' },
          { text: '19 vscode 操作文件', link: '/19vscode操作文件' },
        ] 
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/VectorLu' }
    ]
  }
})
