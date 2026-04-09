# 项目记忆

## ai-nav 项目（白开水AI导航）

### 项目信息
- **位置**: /Users/wanfeng/code/ai-nav
- **技术栈**: React 19 + Vite 4 + React Router
- **部署**: 子路径 /ai-nav/
- **作者**: 白开水AI团队
- **ICP**: 鲁ICP备2021040536号-2

### 项目结构
```
src/
├── App.jsx          # 主页面（AI工具导航）
├── App.css          # 主样式
├── pages/
│   ├── FAQ.jsx      # 常见问题页面（GEO优化）
│   ├── FAQ.css
│   ├── About.jsx    # 关于我们页面（GEO优化）
│   └── About.css
└── assets/
    └── aippt-logo.png
public/
├── sitemap.xml      # 站点地图（SEO）
└── robots.txt       # 爬虫协议（允许AI bots）
```

### 主要功能
- AI工具分类导航（6大分类）
- 搜索过滤功能
- 分类Tab筛选
- 福利弹窗（首次访问）
- FAQ页面
- About页面
- SPA路由（React Router）

### SEO优化（已完成）
- sitemap.xml 站点地图
- robots.txt 允许AI bots
- index.html 结构化数据（WebSite、Organization、FAQPage、BreadcrumbList、ItemList Schema）
- FAQ页面 + About页面
- 面包屑导航

### GEO优化（已完成）
- FAQPage Schema（JSON-LD）
- 高质量深度内容（FAQ 14个问题、About 6个板块）
- 允许ChatGPT、Claude、Gemini等AI bots爬取
- 语义化标题和描述

### 更新记录
- 2026-04-10: 完成SEO+GEO全面优化
