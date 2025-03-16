import type { ThemeConfig } from 'antd'

export const theme = {
  token: {
    colorPrimary: '#4a79d8',
  },
  cssVar: true
} as ThemeConfig

export const config = {
  // 主题配置
  theme,
  // 后台名称
  title: 'react-admin',
  // 后台logo
  logo: '/vite.svg',
  // 主页路径
  homePath: '/home',
  // 登录页路径
  loginPath: '/login',
  // 侧边栏宽度
  siderWidth: 216,
  // 侧边栏布局
  layout: 'mix' as 'side' | 'top' | 'mix',
  // 水印
  waterMark: 'default waterMark',
}
