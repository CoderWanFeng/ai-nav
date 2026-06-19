# 白开水AI导航 🚰

> 让 AI 像白开水一样纯净、易用、人人可及

[白开水AI导航](https://python4office.cn/ai-nav/) 是一个**专业、免费、收录全面的 AI 工具导航平台**。覆盖 AI 对话、AI 办公、AI 绘画、AI 编程、AI 视频、AI 搜索、AI 音频、AI 开源项目、AI 设计、AI 营销、AI 学习、AI 效率工具等 **15 个分类**，收录 **400+ 热门 AI 工具**，帮助用户快速发现和上手最实用的 AI 工具。

同时，本仓库自带一个面向 **AI Agent 的 MCP Server 子项目**（`api/`），让 Claude / GPT / Cursor 等大模型也能直接搜索和推荐 AI 工具。

[![GitHub stars](https://img.shields.io/github/stars/CoderWanFeng/ai-nav.svg)](https://github.com/CoderWanFeng/ai-nav)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%E2%89%A518-green.svg)](package.json)
[![Vite](https://img.shields.io/badge/vite-6-purple.svg)](https://vite.dev/)

🔗 **在线访问**：[https://python4office.cn/ai-nav/](https://python4office.cn/ai-nav/)
🤖 **MCP API 文档**：[https://python4office.cn/ai-nav/api/](https://python4office.cn/ai-nav/api/)

---

## 目录

- [✨ 功能特性](#-功能特性)
- [🛠 技术栈](#-技术栈)
- [📁 项目结构](#-项目结构)
- [🚀 快速开始](#-快速开始)
- [📦 部署上线](#-部署上线)
- [🤖 MCP Server (api 子项目)](#-mcp-server-api-子项目)
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
- **🎯 场景化入口**：6 大高频场景（AI 聊天、写周报、生成图片、写代码、做 PPT、生成视频）一键直达，每个场景自动把 Top5 工具置顶
- **🔍 全文模糊搜索**：跨分类 / 跨工具名 / 跨描述的实时过滤，输入即出结果
- **📑 分类导航**：15 个分类、400+ 工具，覆盖 AI 全场景；新分类自动追加到尾部
- **📌 首次引导**：首卡气泡延迟 600ms 亮起、6s 后自动消失，写入 `localStorage` 不再骚扰
- **🎁 福利弹窗 + 悬浮按钮**：首次访问弹窗，关闭后切换为右下角悬浮入口
- **📱 响应式设计**：移动端 / 平板 / 桌面三端自适应，桌面侧边栏 + 移动抽屉
- **🐙 GitHub 角标**：右上角章鱼猫一键直达源码

### ⚙️ 工程能力
- **📦 路由级代码分包**：`/faq` 和 `/about` 走 `React.lazy`，首屏不下载次要页
- **🖼️ 图片懒加载**：原生 `loading="lazy"` + `decoding="async"`
- **📂 构建产物分目录**：`assets/js | css | img` 分类输出，便于 CDN 缓存与永久缓存
- **🗜️ esbuild 压缩**：默认 minify + `target: es2020`，gzip 后体积再减 70%
- **🧩 Vendor 拆包**：`react / scheduler / react-router` 单独成包，长期缓存命中率↑
- **📈 Service Worker 三策略**：
  - 带 hash 的构建产物 → **cache-first**
  - HTML 导航 → **network-first**，离线回退缓存
  - 第三方资源（GA / Clarity / AdSense）→ **stale-while-revalidate**
- **🔍 SEO + GEO 双优化**：
  - 完整 Open Graph / Twitter Card / canonical
  - JSON-LD（WebSite + Organization + SearchAction）注入
  - `robots.txt` 显式放行 GPTBot / Claude-Web / Google-Extended 等 AI 爬虫
- **📊 数据分析**：Google Analytics + Microsoft Clarity + Google AdSense

---

## 🛠 技术栈

### 主项目（前端导航）
| 类别 | 选型 |
| --- | --- |
| 构建工具 | [Vite 6](https://vite.dev/) + [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) |
| 框架 | [React 18](https://react.dev/) |
| 路由 | [React Router 7](https://reactrouter.com/) |
| 压缩 | esbuild（内建） |
| 数据 | 本地 JS 模块（`src/data/`） |
| 样式 | 原生 CSS（`App.css` / `index.css`） |
| 部署 | 静态文件（Nginx） |

### API 子项目（`api/`）
| 类别 | 选型 |
| --- | --- |
| 构建工具 | [Vite 6](https://vite.dev/) |
| 语言 | [TypeScript 5.6](https://www.typescriptlang.org/) |
| 协议 | [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) |

---

## 📁 项目结构

```
ai-nav/
├── api/                              # 🔌 MCP Server 子项目（TS，面向 AI Agent）
│   ├── src/
│   │   ├── mcp-server.ts             # MCP 请求路由与处理
│   │   ├── tools-data.ts             # 精选工具数据（带能力 / 价格 / 难度）
│   │   └── types.ts                  # 类型定义
│   ├── index.html                    # API 在线文档页（可独立部署）
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── preview.sh                    # 一键清缓存 + 重启预览
│   └── README.md
├── public/                           # 不参与构建的静态资源
│   ├── robots.txt                    # SEO + GEO（放行 AI 爬虫）
│   ├── sitemap.xml
│   ├── sw.js                         # Service Worker（缓存三策略）
│   └── vite.svg
├── scripts/                          # 部署 / 预览脚本
│   ├── deploy.py                     # 一键部署（rsync 到远程，含 .env 支持）
│   └── preview.sh                    # 一键清缓存 + 重启预览
├── src/
│   ├── assets/                       # 构建参与的资源
│   ├── components/                   # 展示型组件
│   │   ├── SeoSchema.jsx             # JSON-LD Organization 注入
│   │   ├── cards/                    # 卡片类（ScenarioCard / ToolCard）
│   │   ├── layout/                   # 布局类（Header / Sidebar / Footer）
│   │   └── sections/                 # 业务区块（SearchBar / Scenarios / ToolGrid / LiveModal / LiveButton）
│   ├── data/                         # 静态数据（单一数据源）
│   │   ├── categories.js             # 分类元数据（图标 / 描述 / 排序）
│   │   ├── scenarios.js              # 6 大场景入口
│   │   └── tools.js                  # 400+ AI 工具数据
│   ├── hooks/                        # 自定义 Hooks（副作用下沉）
│   │   ├── useFilteredTools.js       # 搜索 + 分类 + 场景三合一过滤
│   │   ├── useLiveModal.js           # 福利弹窗 / 悬浮按钮状态
│   │   └── useScenarioGuide.js       # 首卡引导气泡（延迟显示 + 自动消失）
│   ├── pages/                        # 次要页面（React.lazy 分包）
│   │   ├── About.jsx / About.css
│   │   └── FAQ.jsx / FAQ.css
│   ├── utils/                        # 工具函数
│   │   └── categories.js             # 分类图标 / 描述 / 防抖 / 滚动
│   ├── App.css
│   ├── App.jsx                       # 主页组合根（< 120 行）
│   ├── index.css
│   └── main.jsx                      # 入口 + 路由 + SW 注册
├── .gitignore
├── index.html                        # 入口 HTML（含完整 SEO + JSON-LD + 预连接）
├── package.json
├── vite.config.js                    # 构建配置（拆包 / 资源目录）
└── README.md
```

### 设计原则
- **数据 / 视图分离**：所有工具数据放在 `src/data/`，UI 通过 props 接收
- **容器 / 展示分离**：`App.jsx` 只做状态管理，子组件只做渲染
- **Hook 抽副作用**：定时器、过滤逻辑、弹窗控制都封装在 `hooks/`
- **路由级分包**：次要页面用 `React.lazy` 异步加载
- **资源分目录**：构建产物按 `assets/js | css | img` 分目录输出
- **单一数据源**：分类图标 / 描述 / 排序集中在 `categories.js`，避免散落

---

## 🚀 快速开始

### 环境要求
- **Node.js** ≥ 18（推荐 LTS 20+）
- **npm** ≥ 9 / pnpm ≥ 8 / yarn ≥ 1.22
- **rsync**（仅部署需要，macOS 自带）

### 安装依赖
```bash
npm install
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
# 方式一：vite 自带预览
npm run preview
# → http://localhost:4173/ai-nav/

# 方式二：一键清缓存 + 重建 + 预览（推荐调试 SW 时使用）
./scripts/preview.sh
```

---

## 📦 部署上线

### 方式一：Nginx 静态部署（推荐）
```bash
# 1. 上传代码
git clone https://github.com/CoderWanFeng/ai-nav.git
cd ai-nav

# 2. 构建
npm install && npm run build

# 3. 复制到 Nginx 目录
cp -r dist/* /var/www/ai-nav/
```

Nginx 配置示例：
```nginx
server {
  listen 80;
  server_name python4office.cn;

  # 带 hash 的构建产物：永久缓存
  location ~* /assets/.+\.(js|css|png|jpe?g|gif|svg|webp|avif|woff2?)$ {
    root /var/www/ai-nav;
    expires 1y;
    add_header Cache-Control "public, immutable";
  }

  # HTML 导航：不缓存，兜底走 SPA
  location /ai-nav/ {
    root /var/www/ai-nav;
    index index.html;
    try_files $uri $uri/ /ai-nav/index.html;
    add_header Cache-Control "no-cache";
  }

  # API 子项目独立路径
  location /ai-nav/api/ {
    root /var/www/ai-nav;
    index index.html;
  }
}
```

### 方式二：一键脚本部署
通过 `scripts/deploy.py` 把 `dist/` 同步到远程服务器，支持 `.env` 和 `DRY_RUN`：

```bash
# 在项目根目录建 .env
echo "TENCENT_SERVER_HOST=1.2.3.4" > .env

# 默认路径：/opt/website/opc-website/ai-nav
./scripts/deploy.py

# 自定义远程目录
REMOTE_DIR=/data/www/ai-nav ./scripts/deploy.py

# 只打印 rsync 命令不执行
DRY_RUN=true ./scripts/deploy.py

# 跳过构建，使用现有 dist/
SKIP_BUILD=true ./scripts/deploy.py
```

支持的环境变量：
| 变量 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `TENCENT_SERVER_HOST` | ✅ | — | 服务器 IP 或域名 |
| `TENCENT_SERVER_USER` | ❌ | `root` | SSH 用户 |
| `TENCENT_SERVER_PORT` | ❌ | `22` | SSH 端口 |
| `TENCENT_SSH_KEY` | ❌ | `~/.ssh/id_rsa` | 私钥路径 |
| `REMOTE_DIR` | ❌ | `/opt/website/opc-website/ai-nav` | 远端目标目录 |
| `SKIP_BUILD` | ❌ | `false` | 跳过 `npm run build` |
| `DRY_RUN` | ❌ | `false` | 只打印不执行 |

### 方式三：静态托管
`dist/` 目录可直接上传到 Vercel / Netlify / Cloudflare Pages / 阿里云 OSS / 腾讯云 COS 等任意静态托管平台。

---

## 🤖 MCP Server (api 子项目)

`api/` 是独立的 Vite + TypeScript 子项目，实现 [Model Context Protocol](https://modelcontextprotocol.io/)，让 **Claude / GPT / Cursor 等 AI Agent** 能直接调用本导航的工具体系。

### 快速启动
```bash
cd api
npm install
npm run dev          # http://localhost:3002
```

### 可用 MCP 工具

| 工具名 | 描述 | 关键参数 |
| --- | --- | --- |
| `search_ai_tools` | 按关键词 / 分类 / 能力搜索 | `query`, `category`, `free_only`, `capabilities` |
| `get_tool_details` | 获取工具详情 | `tool_id` |
| `list_categories` | 列出全部分类 | — |
| `get_by_category` | 按分类取工具列表 | `category` |
| `get_recommendations` | 基于场景的智能推荐 | `use_case`, `free_only`, `difficulty` |

### 调用示例
```bash
# 自然搜索
curl -X POST http://localhost:3002/api/mcp \
  -H "Content-Type: application/json" \
  -d '{"name":"search_ai_tools","arguments":{"query":"图像生成","free_only":true}}'

# 智能推荐
curl -X POST http://localhost:3002/api/mcp \
  -H "Content-Type: application/json" \
  -d '{"name":"get_recommendations","arguments":{"use_case":"写代码","free_only":true}}'

# REST 兜底接口
curl "http://localhost:3002/api/tools?category=AI对话&freeOnly=true"
```

更多细节见 [api/README.md](api/README.md)。

---

## 📊 数据结构

### 工具数据 (`src/data/tools.js`)
```js
export const aiTools = [
  {
    category: 'AI对话',                 // 分类名
    items: [
      {
        name: 'ChatGPT',               // 工具名
        url: 'https://chatgpt.com',    // 跳转地址（可为相对广告链接）
        desc: 'OpenAI的AI对话助手',    // 简介（参与搜索匹配）
        icon: '🤖',                    // emoji 或 '/绝对路径.png'
        badge: '赞助',                 // 可选：角标（赞助 / 推荐 等）
      },
      // ...
    ],
  },
  // ...
]
```

### 场景数据 (`src/data/scenarios.js`)
```js
export const SCENARIOS = [
  {
    id: 'chat',                        // 唯一 id
    emoji: '💬',                       // 卡片图标
    title: 'AI 聊天',                   // 标题
    desc: 'ChatGPT、Claude、DeepSeek', // 副标题
    category: 'AI对话',                // 点击后切换的分类
    featured: [                        // 进入场景后置顶的工具名（Top5）
      'ChatGPT', 'Claude', 'DeepSeek', 'Kimi', '豆包',
    ],
  },
  // ... write / image / code / ppt / video
]
```

### 分类元数据 (`src/data/categories.js`)
```js
export const CATEGORY_ICONS = { 'AI对话': '💬', 'AI绘画': '🎨', /* ... */ }
export const CATEGORY_DESCRIPTIONS = { /* 分类详情文案 */ }
export const CATEGORY_ORDER = [        // 侧边栏排序（未列出的新分类自动追加到尾部）
  'AI对话', 'AI办公', 'AI绘画', 'AI编程', 'AI视频', /* ... */
]
```

### 添加 / 修改工具
1. 打开 `src/data/tools.js`
2. 在对应分类的 `items` 数组里增删一条
3. 保存即可（HMR 自动热更新）
4. 新增分类时，同步更新 `src/data/categories.js` 的 `CATEGORY_ICONS / CATEGORY_DESCRIPTIONS / CATEGORY_ORDER`

---

## ⚡ 性能优化

### 已落地
| 优化项 | 实现方式 | 收益 |
| --- | --- | --- |
| 路由级代码分包 | `React.lazy` + `Suspense` | 首屏 JS 减少 ~30% |
| Vendor 拆包 | `manualChunks` 把 react / router 独立 | 长期缓存命中率↑ |
| 图片懒加载 | `loading="lazy"` + `decoding="async"` | 首屏图片请求↓ |
| 资源分目录 | `assets/js \| css \| img` 分类输出 | CDN 缓存友好 |
| esbuild 压缩 | `minify: 'esbuild'` + `target: 'es2020'` | JS 体积减少 ~70% |
| 三策略 SW | cache-first / network-first / stale-while-revalidate | 二次访问秒开 |
| 第三方预连接 | `<link rel="preconnect">` | 第三方握手时延↓ |
| SEO + GEO | JSON-LD + robots.txt 放行 AI 爬虫 | 搜索引擎 & 大模型收录↑ |
| 构建提速 | `esbuild.legalComments: 'none'` | 构建时间↓ |
| 防抖 / 滚动 | `utils/categories.js` 封装 `debounce` / `scrollToTop` | 交互更丝滑 |

### 建议：服务器端 gzip / br 压缩
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
gzip_min_length 1000;
gzip_comp_level 6;

# 推荐同时开启 brotli
brotli on;
brotli_comp_level 6;
brotli_types text/plain text/css application/json application/javascript text/xml application/xml;
```

### 建议：HTTP/2
单连接多路复用，资源并行加载更高效。

---

## 🔧 配置说明

### Vite (`vite.config.js`)
- `base: '/ai-nav/'`：部署到子路径时的基础 URL（必须与 `main.jsx` 的 `basename` 保持一致）
- `manualChunks`：react / scheduler → `react-vendor`，react-router → `router`
- `assetFileNames`：按扩展名分发到 `assets/js | css | img`
- `target: 'es2020'`：编译目标

### 路由 (`src/main.jsx`)
- `basename="/ai-nav"`：与 `base` 一致
- 三个路由：`/`（主导航）、`/faq`、`/about`
- 次要页用 `React.lazy` + `Suspense` 异步加载

### Service Worker (`public/sw.js`)
- 缓存版本号在 `CACHE_VERSION` 常量中，发布新版本时递增即可让旧缓存失效
- `BASE = '/ai-nav/'`：必须与 vite `base` 保持一致
- 预缓存：`/ai-nav/`、`/ai-nav/about`、`/ai-nav/faq`

### 入口 HTML (`index.html`)
- 含 WebSite + Organization 两种 JSON-LD 结构化数据
- 预连接 `googlesyndication.com / googletagmanager.com / clarity.ms`
- 完整的 Open Graph / Twitter Card / canonical

### GitHub 角标
修改 `index.html` 中的 `href` 和 `.github-corner` 的 `width` / `height` 即可。

---

## ❓ 常见问题

### Q1：构建后页面 404？
A：检查 `vite.config.js` 的 `base` 与 `main.jsx` 的 `basename` 是否一致，并确保 Nginx 配置了 SPA fallback（`try_files ... /index.html`）。

### Q2：Service Worker 不生效？
A：SW 只能在 **HTTPS** 或 **localhost** 下注册。本地 `npm run preview` 默认是 HTTP，可改用 `serve --ssl-cert` 测试。

### Q3：GitHub 角标被其他元素遮挡？
A：调整 `.github-corner` 的 `z-index`（默认 9999），或调小尺寸。

### Q4：怎么自定义弹窗文案？
A：编辑 `src/components/sections/LiveModal.jsx`，对应样式在 `App.css` 的 `.modal-*` 类。

### Q5：图片显示 404？
A：emoji 直接使用 Unicode 字符；如要用 PNG，放在 `src/assets/`，以 `/xxx.png` 开头即可。

### Q6：怎么添加新的场景？
A：在 `src/data/scenarios.js` 末尾追加一项，`featured` 数组是进入场景后置顶的工具名（建议 3~5 个）。

### Q7：依赖安装失败？
A：删除 `node_modules` 和 `package-lock.json` 后重试，或切换 npm 源：
```bash
npm config set registry https://registry.npmmirror.com
```

### Q8：怎么让 AI 大模型收录本导航？
A：`public/robots.txt` 已放行 GPTBot / ChatGPT-User / Claude-Web / Google-Extended / Bytespider / Diffbot / FacebookBot。保持 URL 稳定 + 持续更新 `sitemap.xml` 即可。

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
- **GitHub**：<https://github.com/CoderWanFeng>
- **公众号**：白开水AI
- **交流群**：见 [关于我们页](https://python4office.cn/ai-nav/about)

---

<p align="center">
  如果这个项目对你有帮助，欢迎点一个 ⭐ Star 支持一下！<br/>
  Made with ❤️ by <a href="https://github.com/CoderWanFeng">程序员晚枫</a>
</p>