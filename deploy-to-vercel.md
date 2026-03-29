# Vercel 部署指南

## 方式一：通过 Vercel CLI 部署（推荐）

### 1. 安装 Vercel CLI
```bash
npm i -g vercel
```

### 2. 登录 Vercel
```bash
vercel login
```
按照提示完成登录

### 3. 部署项目
```bash
vercel
```
第一次部署会提示配置项目，按提示操作即可

### 4. 后续更新
```bash
vercel --prod
```

---

## 方式二：通过 Git 仓库部署（推荐长期使用）

### 1. 创建 GitHub 仓库
- 在 GitHub 创建新仓库
- 将代码推送到仓库

### 2. 连接 Vercel
- 访问 https://vercel.com
- 使用 GitHub 账号登录
- 点击 "Add New Project"
- 选择你的仓库
- 点击 "Import"

### 3. 配置项目
- Framework Preset: 选择 "Vite"
- Build Command: `npm run build`
- Output Directory: `dist`
- 点击 "Deploy"

### 4. 自动部署
- 每次推送到 main 分支，Vercel 会自动重新部署

---

## 方式三：拖拽部署（最简单）

### 1. 准备 dist 文件夹
确保 `dist` 文件夹存在且包含构建好的文件

### 2. 访问 Vercel
- 打开 https://vercel.com
- 登录账号
- 点击 "Add New..." → "Project"

### 3. 导入项目
- 选择 "Import Git Repository" 或直接将 dist 文件夹拖拽到界面

---

## 自定义域名（可选）

1. 在 Vercel 控制台进入项目
2. 点击 "Settings" → "Domains"
3. 添加你的域名
4. 按照提示配置 DNS 记录

---

## 项目已配置

- `vercel.json` - Vercel 配置文件，处理前端路由
- `package.json` - 已添加 Node.js 版本要求
- `dist` - 构建好的生产文件

现在可以直接使用以上任一方式部署！
