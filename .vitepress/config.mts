import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Écume des jours',
  description: 'Blog',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Category', link: '/categories' },
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/myowoon/myowoon.github.io' },
    ],

    search: {
      provider: 'local',
    },
  },
})
