# Chat Mentor - AI 应用平台

一个基于 Next.js 的多功能 AI 应用平台，集成了多种 AI 工具和服务。

## 📋 目录

- [项目概述](#项目概述)
- [技术栈](#技术栈)
- [功能特性](#功能特性)
- [项目结构](#项目结构)
- [安装指南](#安装指南)
- [开发指南](#开发指南)
- [部署指南](#部署指南)
- [API 文档](#api-文档)
- [贡献指南](#贡献指南)

## 🚀 项目概述

Chat Mentor 是一个现代化的 AI 应用平台，提供多种 AI 工具和服务，包括内容生成、图像处理、个性化服务等。平台采用 Next.js 14 构建，具有优秀的性能和用户体验。

### 主要特点

- 🎯 **多 AI 工具集成** - 集成多种 AI 服务
- ⚡ **高性能** - 基于 Next.js 14 的 SSR/SSG 架构
- 🎨 **现代化 UI** - 使用 Tailwind CSS 构建响应式界面
- 🔐 **安全认证** - 集成 NextAuth.js 用户认证
- 📱 **移动端友好** - 完全响应式设计
- 🚀 **云服务集成** - 支持 Vercel 和 Cloudflare 服务

## 🛠 技术栈

### 核心框架
- **Next.js 14.0.1** - React 全栈框架，支持 SSR/SSG
- **React 18.2.0** - 前端 UI 库
- **TypeScript 5.2.2** - 类型安全的 JavaScript 超集

### 样式和 UI
- **Tailwind CSS 3.3.5** - 实用优先的 CSS 框架
- **PostCSS** - CSS 处理工具
- **SCSS/Sass** - CSS 预处理器
- **AOS 2.3.4** - 滚动动画库
- **Swiper 11.0.3** - 触摸滑块组件
- **FSLightbox React** - 灯箱/模态组件
- **RemixIcon** - 图标库

### AI 和 API 集成
- **OpenAI 4.80.0** - ChatGPT 和其他 AI 模型 API
- **Replicate 1.0.1** - 开源 AI 模型平台 API

### 认证
- **NextAuth.js 4.24.11** - Next.js 认证解决方案
- **@auth/core 0.34.2** - 认证核心库

### 表单和用户交互
- **React Hook Form 7.47.0** - 高性能表单库
- **React Hot Toast 2.5.1** - 通知提示组件

### 云服务和分析
- **Vercel Analytics** - 网站分析
- **Vercel Speed Insights** - 性能监控
- **Cloudflare R2** - 对象存储服务

### 开发工具
- **ESLint** - 代码质量检查
- **Sharp 0.32.6** - 图像处理库
- **UUID** - 唯一标识符生成

## ✨ 功能特性

### AI 工具
- 🤖 **AI 占卜师** - 智能占卜和预测服务
- 👤 **AI 个性生成器** - 个性化内容生成
- 📖 **AI 故事生成器** - 创意故事创作
- 🖼️ **图像描述生成器** - 智能图像描述
- 🎨 **图像转提示词** - 图像到文本提示转换
- 🐦 **Twitter 回复生成器** - 社交媒体内容生成
- ✍️ **内容写作助手** - AI 辅助写作工具

### 应用展示
- 💰 **费用追踪应用** - 个人财务管理
- 🎮 **游戏应用** - 娱乐游戏平台
- 💸 **转账应用** - 移动支付解决方案
- 🏦 **在线银行应用** - 数字银行服务
- 📊 **SaaS 应用** - 软件即服务平台
- ✅ **任务管理应用** - 项目管理工具

### 其他功能
- 📝 **博客系统** - 内容管理和发布
- 👥 **团队展示** - 团队成员介绍
- 📞 **联系表单** - 用户反馈系统
- ❓ **FAQ 系统** - 常见问题解答
- 📄 **法律文档** - 隐私政策、服务条款等

## 📁 项目结构

```
chat-mentor.com/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── api/               # API 路由
│   │   │   ├── ai/           # AI 相关 API
│   │   │   ├── auth/         # 认证 API
│   │   │   └── upload/       # 文件上传 API
│   │   ├── blog/             # 博客页面
│   │   ├── features/         # AI 功能页面
│   │   └── [其他页面]        # 各种应用展示页面
│   ├── components/            # React 组件
│   │   ├── Authentication/   # 认证组件
│   │   ├── Blog/            # 博客组件
│   │   ├── CaptionGenerator/ # 标题生成器组件
│   │   ├── Common/          # 通用组件
│   │   ├── Features/        # 功能组件
│   │   └── [其他组件]       # 各种应用组件
│   └── providers/            # 上下文提供者
├── public/                   # 静态资源
│   ├── images/              # 图片资源
│   ├── fonts/               # 字体文件
│   └── css/                 # 样式文件
└── [配置文件]               # 各种配置文件
```

## 🚀 安装指南

### 环境要求
- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. **克隆项目**
   ```bash
   git clone [项目地址]
   cd chat-mentor.com
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或
   yarn install
   ```

3. **环境配置**
   ```bash
   # 复制环境变量模板
   cp .env.example .env.local
   
   # 编辑环境变量文件，添加必要的 API 密钥
   nano .env.local
   ```

4. **启动开发服务器**
   ```bash
   npm run dev
   # 或
   yarn dev
   ```

5. **访问应用**
   打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 🔧 开发指南

### 开发脚本
```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint
```

### 环境变量配置
创建 `.env.local` 文件并配置以下变量：

```env
# OpenAI API
OPENAI_API_KEY=your_openai_api_key

# Replicate API
REPLICATE_API_TOKEN=your_replicate_token

# NextAuth.js
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Cloudflare R2
R2_ACCOUNT_ID=your_r2_account_id
R2_ACCESS_KEY_ID=your_r2_access_key
R2_SECRET_ACCESS_KEY=your_r2_secret_key
R2_BUCKET_NAME=your_bucket_name

# Vercel Analytics
VERCEL_ANALYTICS_ID=your_analytics_id
```

### 代码规范
- 使用 TypeScript 进行类型检查
- 遵循 ESLint 规则
- 使用 Prettier 进行代码格式化
- 组件使用 PascalCase 命名
- 文件使用 kebab-case 命名

## 🚀 部署指南

### Vercel 部署（推荐）

1. **连接 GitHub 仓库**
   - 在 Vercel 中导入项目
   - 配置环境变量

2. **自动部署**
   - 推送到主分支自动触发部署
   - 支持预览部署

### 其他部署方式

#### Docker 部署
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### 传统服务器部署
```bash
# 构建项目
npm run build

# 启动生产服务器
npm run start
```

## 📚 API 文档

### AI API 端点

#### 内容写作 API
- **POST** `/api/ai/content-writing`
  - 生成各种类型的内容
  - 支持多种写作风格

#### 图像处理 API
- **POST** `/api/ai/image-to-text`
  - 图像转文本描述
  - 支持多种图像格式

#### 标题生成 API
- **POST** `/api/ai/caption-generator`
  - 社交媒体标题生成
  - 支持多平台格式

### 认证 API
- **POST** `/api/auth/[...nextauth]`
  - NextAuth.js 认证端点

### 文件上传 API
- **POST** `/api/upload`
  - 文件上传到 Cloudflare R2
  - 支持图片和文档

## 🤝 贡献指南

### 贡献流程

1. **Fork 项目**
2. **创建功能分支**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **提交更改**
   ```bash
   git commit -m "feat: add new feature"
   ```
4. **推送到分支**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **创建 Pull Request**

### 代码贡献规范

- 遵循现有的代码风格
- 添加必要的测试
- 更新相关文档
- 确保所有测试通过

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE)。

## 📞 联系我们

- **项目主页**: [https://chat-mentor.com](https://chat-mentor.com)
- **问题反馈**: [GitHub Issues](https://github.com/your-repo/issues)
- **邮箱**: [contact@chat-mentor.com](mailto:contact@chat-mentor.com)

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者和用户！

---

**注意**: 这是一个活跃开发中的项目，功能可能会随时更新。请关注我们的更新日志获取最新信息。  
