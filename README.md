# 白开水AI导航 🚰

> 让 AI 像白开水一样纯净、易用、人人可及

[白开水AI导航](https://python4office.cn/ai-nav/) 是一个**专业、免费、收录全面的 AI 工具导航平台**，覆盖 AI 对话、AI 办公、AI 绘画、AI 编程、AI 视频、AI 搜索、AI 音频、AI 开源项目、AI 设计、AI 营销、AI 学习、AI 效率工具等十余个分类，**收录 400+ 热门 AI 工具**，帮助用户快速发现和上手最实用的 AI 工具。

[![GitHub stars](https://img.shields.io/github/stars/CoderWanFeng/ai-nav.svg)](https://github.com/CoderWanFeng/ai-nav)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## 目录

- [✨ 功能特性](#-功能特性)
- [🛠 技术栈](#-技术栈)
- [📁 项目结构](#-项目结构)
- [🚀 快速开始](#-快速开始)
- [📦 部署上线](#-部署上线)
- [📊 数据结构](#-数据结构)
- [⚡ 性能优化](#-性能优化)
- [🔧 配置说明](#-配置说明)
- [❓ 常见问题](#-常见问题)
- [🤝 贡献指南](#-贡献指南)
- [📄 开源协议](#-开源协议)
- [📮 联系我们](#-联系我们)

---

## ✨ 功能特性

### 🎯 用户体验
- **🎯 场景化入口**：6 大高频场景（AI 聊天、写周报、生成图片、写代码、做 PPT、生成视频）一键直达
- **🔍 全文搜索**：跨分类、跨工具名、跨描述的实时模糊搜索
- **📑 分类导航**：15+ 分类，400+ 工具，覆盖 AI 工具全场景
- **🌟 场景精选**：进入场景后自动把 Top5 工具置顶
- **📱 响应式设计**：移动端 / 平板 / 桌面三端自适应
- **🎁 福利弹窗**：首次访问弹出福利引导
- **🐙 GitHub 角标**：右上角章鱼猫一键查看源码

### ⚙️ 工程能力
- **📦 路由级代码分包**：`/faq` 和 `/about` 走 `React.lazy`，首屏不下载
- **🖼️ 图片懒加载**：原生 `loading="lazy"` + `decoding="async"`
- **📂 构建产物分目录**：JS / CSS / 图片分类输出，便于 CDN 缓存
- **🗜️ esbuild 压缩**：默认 minify，gzip 后体积再减 70%
- **📈 缓存策略**：
  - 构建产物（带 hash）走 **cache-first**
  - HTML 导航走 **network-first**，离线时回退到缓存
  - 第三方资源走 **stale-while-revalidate**
- **🔍 SEO 完善**：Open Graph、Twitter Card、JSON-LD（WebSite / Organization / FAQPage / ItemList）全配置
- **📊 数据接入分析**：Google Analytics + Microsoft Clarity + Google AdSense

---

## 🛠 技术栈

| 类别 | 选型 |
| --- | --- |
| 构建工具 | [Vite 6](https://vite.dev/) + [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) |
| 框架 | [React 18](https://react.dev/) |
| 路由 | [React Router 7](https://reactrouter.com/) |
| 压缩 | esbuild (内建) |
| 部署 | 静态文件 (Nginx) |
| 数据 | 本地 JS 模块（`src/data/`） |
| 样式 | 原生 CSS (`App.css` / `index.css`) |

---

## 📁 项目结构

```
ai-nav/
├── api/                              # 独立子项目：MCP Server（TS）
│   ├── src/
│   │   ├── mcp-server.ts
│   │   ├── tools-data.ts
│   │   └── types.ts
│   └── package.json
├── public/                           # 不参与构建的静态资源
│   ├── assets/                       # 图片素材
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── sw.js                         # Service Worker（缓存策略）
│   └── vite.svg
├── scripts/                          # 部署 / 预览脚本
│   ├── deploy.sh                     # 生产部署（Nginx）
│   ├── deploy.py                     # Python 版部署
│   └── preview.sh
├── templates/                        # 跨项目复用的 HTML 片段
│   └── projects-showcase.html
├── src/
│   ├── assets/                       # 构建参与的资源（图、SVG）
│   ├── components/                   # 展示型组件
│   │   ├── SeoSchema.jsx             # JSON-LD 结构化数据注入
│   │   ├── cards/                    # 卡片类组件
│   │   │   ├── ScenarioCard.jsx
│   │   │   └── ToolCard.jsx
│   │   ├── layout/                   # 布局类组件
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Sidebar.jsx
│   │   └── sections/                 # 业务区块
│   │       ├── LiveButton.jsx
│   │       ├── LiveModal.jsx
│   │       ├── Scenarios.jsx
│   │       ├── SearchBar.jsx
│   │       └── ToolGrid.jsx
│   ├── data/                         # 静态数据（单一数据源）
│   │   ├── categories.js             # 分类元数据（图标 / 描述）
│   │   ├── scenarios.js              # 场景入口
│   │   └── tools.js                  # 400+ AI 工具数据
│   ├── hooks/                        # 自定义 Hooks
│   │   ├── useFilteredTools.js       # 搜索 + 分类 + 场景三合一过滤
│   │   ├── useLiveModal.js           # 福利弹窗 / 悬浮按钮
│   │   ├── useLocalStorage.js        # localStorage 双向同步
│   │   └── useScenarioGuide.js       # 首卡引导气泡
│   ├── pages/                        # 次要页面（路由级分包）
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── FAQ.jsx
│   │   └── FAQ.css
│   ├── utils/                        # 工具函数
│   │   └── categories.js             # 分类图标 / 描述 / 防抖 / 滚动
│   ├── App.css
│   ├── App.jsx                       # 主页组合根（< 120 行）
│   ├── index.css
│   └── main.jsx                      # 入口 + 路由 + SW 注册
├── .gitignore
├── eslint.config.js
├── index.html                        # 入口 HTML（含 GitHub 角标）
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js                    # 构建配置（拆包 / 资源目录）
```

### 设计原则
- **数据 / 视图分离**：所有工具数据放在 `src/data/`，UI 通过 props 接收
- **容器 / 展示分离**：`App.jsx` 只做状态管理，子组件只做渲染
- **Hook 抽副作用**：localStorage、定时器、过滤逻辑都封装在 `hooks/`
- **路由级分包**：次要页面用 `React.lazy` 异步加载
- **资源分目录**：构建产物按 `assets/js | css | img` 分目录输出

---

## 🚀 快速开始

### 环境要求
- **Node.js** ≥ 18（推荐 LTS 20+）
- **npm** ≥ 9 / pnpm ≥ 8 / yarn ≥ 1.22

### 安装依赖
```bash
npm install
# 或
pnpm install
# 或
yarn install
```

### 启动开发服务器
```bash
npm run dev
```
默认运行在 `http://localhost:3002`，HMR 即时热更新。

### 生产构建
```bash
npm run build
```
产物输出到 `dist/`，含带 hash 的 JS / CSS / 图片资源。

### 本地预览构建产物
```bash
npm run preview
```
在 `http://localhost:4173/ai-nav/` 预览生产包。

---

## 📦 部署上线

### 方式一：Nginx 静态部署（推荐）
```bash
# 1. 上传代码到服务器
git clone https://github.com/CoderWanFeng/ai-nav.git
cd ai-nav

# 2. 构建
npm install
npm run build

# 3. 复制到 Nginx 目录
cp -r dist/* /var/www/ai-nav/

# 4. Nginx 配置示例
cat > /etc/nginx/conf.d/ai-nav.conf <<'EOF'
server {
  listen 80;
  server_name python4office.cn;

  # 静态资源：永久缓存
  location ~* \.(js|css|png|jpe?g|gif|svg|webp|avif|woff2?)$ {
    root /var/www/ai-nav;
    expires 1y;
    add_header Cache-Control "public, immutable";
  }

  # HTML：不缓存或短缓存
  location /ai-nav/ {
    root /var/www/ai-nav;
    index index.html;
    try_files $uri $uri/ /ai-nav/index.html;  # SPA fallback
    add_header Cache-Control "no-cache";
  }
}
EOF

nginx -s reload
```

### 方式二：使用 `scripts/deploy.sh`
脚本已封装完整流程：拉代码 → 装依赖 → 构建 → 复制 → 重载 Nginx。
```bash
./scripts/deploy.sh
```

### 方式三：其他静态托管
`dist/` 目录可直接上传到任何静态托管平台（Vercel / Netlify / Cloudflare Pages / 阿里云 OSS / 腾讯云 COS 等）。

---

## 📊 数据结构

### 工具数据 (`src/data/tools.js`)
```js
{
  category: 'AI对话',                  // 分类名
  items: [
    {
      name: 'ChatGPT',                  // 工具名
      url: 'https://chatgpt.com',       // 跳转地址
      desc: 'OpenAI的AI对话助手',        // 简介
      icon: '🤖',                       // emoji 或 '/绝对路径.png'
      badge: '赞助',                    // 可选：角标（赞助 / 推荐 等）
    }
  ]
}
```

### 场景数据 (`src/data/scenarios.js`)
```js
{
  id: 'chat',                           // 唯一 id
  emoji: '💬',                          // 卡片图标
  title: 'AI 聊天',                      // 标题
  desc: 'ChatGPT、Claude、DeepSeek',     // 副标题
  category: 'AI对话',                    // 点击后切换的分类
  featured: ['ChatGPT', 'Claude'],       // 精选置顶的工具名
}
```

### 添加 / 修改工具
1. 打开 `src/data/tools.js`
2. 在对应分类的 `items` 数组里增删一条
3. 保存即可（HMR 自动热更新）
4. 如需新增分类，分类图标 / 描述请同步更新 `src/data/categories.js`

---

## ⚡ 性能优化

### 已落地
| 优化项 | 实现方式 | 收益 |
| --- | --- | --- |
| 路由级代码分包 | `React.lazy` + `Suspense` | 首屏 JS 减少 ~30% |
| 第三方库拆包 | `manualChunks` 把 react / router 独立 | 长期缓存命中率↑ |
| 图片懒加载 | `loading="lazy"` + `decoding="async"` | 首屏图片请求↓ |
| 资源分目录 | `assets/js | css | img` 分类输出 | CDN 缓存友好 |
| 压缩 | esbuild minify | JS 体积减少 ~70% |
| 缓存策略 | Service Worker 三策略 | 二次访问秒开 |
| 第三方预连接 | `<link rel="preconnect">` | 第三方握手时延↓ |
| SEO 优化 | 完整 JSON-LD 结构化数据 | 搜索引擎收录↑ |
| 构建提速 | `esbuild` 跳过 legal comments | 构建时间↓ |

### 建议：服务器端 gzip / br 压缩
在 Nginx 中启用：
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
gzip_min_length 1000;
gzip_comp_level 6;

# 如支持 brotli（推荐）
brotli on;
brotli_comp_level 6;
brotli_types text/plain text/css application/json application/javascript text/xml application/xml;
```

### 建议：开启 HTTP/2
单连接多路复用，资源并行加载更高效。

---

## 🔧 配置说明

### Vite (`vite.config.js`)
- `base: '/ai-nav/'`：部署到子路径时的基础 URL
- `manualChunks`：拆包策略，按需调整
- `target: 'es2020'`：编译目标

### 路由 (`src/main.jsx`)
- `basename="/ai-nav"`：与 `base` 保持一致
- 三个路由：`/` `/faq` `/about`

### GitHub 角标 (`index.html`)
修改链接和大小：
```html
<a href="https://github.com/你的用户名/你的仓库" class="github-corner" ...>
  <svg width="60" height="60" ...>...</svg>
</a>
```

### Service Worker (`public/sw.js`)
缓存版本号在 `CACHE_VERSION` 常量中，发布新版本时递增即可让旧缓存失效。

---

## ❓ 常见问题

### Q1：构建后页面 404？
A：检查 `vite.config.js` 的 `base` 与 `main.jsx` 的 `basename` 是否一致，并确保 Nginx 配置了 SPA fallback（`try_files ... /index.html`）。

### Q2：Service Worker 不生效？
A：SW 只能在 **HTTPS** 或 **localhost** 环境下注册。本地 `npm run preview` 默认是 HTTP，可改用 `serve --ssl-cert` 测试。

### Q3：GitHub 角标被其他元素遮挡？
A：调整 `.github-corner` 的 `z-index`（默认 9999），或调小尺寸（修改 `width` / `height`）。

### Q4：怎么自定义弹窗文案？
A：编辑 `src/components/sections/LiveModal.jsx`，对应样式在 `App.css` 的 `.modal-*` 类。

### Q5：图片显示 404？
A：emoji 直接使用 Unicode 字符；如要用 PNG，放在 `src/assets/`，以 `/xxx.png` 开头即可。

### Q6：怎么添加新的场景？
A：在 `src/data/scenarios.js` 末尾追加一项，结构参考现有场景。

### Q7：依赖安装失败？
A：删除 `node_modules` 和 `package-lock.json` 后重试，或切换 npm 源：
```bash
npm config set registry https://registry.npmmirror.com
```

---

## 🤝 贡献指南

欢迎贡献！无论是新增工具、修复 Bug、优化样式还是完善文档，都非常感谢 🎉

### 提交流程
1. **Fork** 本仓库
2. 创建特性分支：`git checkout -b feature/your-feature`
3. 提交修改：`git commit -m "feat: 新增 XX 工具"`
4. 推送分支：`git push origin feature/your-feature`
5. 提交 **Pull Request**

### 提交规范（Conventional Commits）
- `feat: 新增功能 / 工具`
- `fix: 修复 Bug`
- `docs: 文档变更`
- `style: 样式调整（不影响逻辑）`
- `refactor: 重构`
- `perf: 性能优化`
- `chore: 构建 / 工具链变更`

### 添加新工具的 PR 模板
```markdown
### 新增工具
- 名称：
- 分类：
- 网址：
- 简介：
- 图标（emoji 或 PNG）：
```

---

## 📄 开源协议

本项目基于 [MIT](LICENSE) 协议开源。

---

## 📮 联系我们

- **作者**：程序员晚枫
- **技术博客**：<https://python4office.cn>
- **GitHub**：<https://github.com/CoderWanFeng1>
- **公众号**：白开水AI
- **交流群**：见 [关于我们页](https://python4office.cn/ai-nav/about)

---

<p align="center">
  如果这个项目对你有帮助，欢迎点一个 ⭐ Star 支持一下！<br/>
  Made with ❤️ by <a href="https://github.com/CoderWanFeng1">程序员晚枫</a>
</p>
