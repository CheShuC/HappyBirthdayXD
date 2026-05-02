# 生日快乐页面 🎉

一个精美的生日祝福页面，包含首页祝福和视频播放功能。

## 功能特性

- 🎂 精美的生日祝福页面
- 🎬 视频播放功能
- 📱 响应式设计
- 🎨 渐变背景和动画效果

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 部署到GitHub Pages

### 自动部署（推荐）

1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages：
   - 进入 Settings > Pages
   - Source 选择 "GitHub Actions"

3. 每次推送到 `main` 分支时，GitHub Actions会自动构建并部署

### 手动部署

1. 构建项目：
```bash
npm run build
```

2. 将 `dist` 文件夹内容推送到 `gh-pages` 分支

## 项目结构

```
src/
├── views/
│   ├── HomePage.vue      # 首页
│   └── VideoPage.vue     # 视频页面
├── components/
│   └── FallingFlowers.vue # 飘落动画组件
├── router/
│   └── index.js          # 路由配置
└── main.js               # 应用入口
```

## 自定义

- 修改首页文字：编辑 `src/views/HomePage.vue`
- 更换视频：将视频文件放入 `src/assets/` 目录
- 调整样式：修改各组件中的CSS样式

## 许可证

MIT License# HappyBirthdayXD

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```