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
├── main.jsx         # 路由配置
└── pages/
    ├── FAQ.jsx      # 常见问题页面（GEO优化）
    ├── FAQ.css
    ├── About.jsx    # 关于我们页面（GEO优化）
    └── About.css
public/
├── sitemap.xml      # 站点地图（SEO）
└── robots.txt       # 爬虫协议（允许AI bots）
```

### 主要功能
- AI工具分类导航（8大分类，80+工具）
- 搜索过滤功能
- 分类Tab筛选
- 福利弹窗（首次访问）
- FAQ页面 + About页面
- SPA路由（React Router）

### AI工具分类（共80+个工具）
1. **AI对话**（12个）：ChatGPT、Claude、Kimi、豆包、DeepSeek、腾讯元宝、通义千问、文心一言、智谱清言、讯飞星火、Gemini、Perplexity
2. **AI办公**（12个）：AIPPT、WPS AI、腾讯文档AI、飞书AI、百度文库AI、Notion AI、秘塔写作猫、ChatDOC、Monica、Copy.ai、Jasper、QuillBot
3. **AI绘画**（12个）：Midjourney、Stable Diffusion、DALL·E 3、Leonardo AI、Ideogram、即梦AI、可灵AI、通义万相、哩布哩布、吐司AI、Adobe Firefly、Canva AI
4. **AI编程**（12个）：GitHub Copilot、Cursor、Bolt.new、Lovable、Windsurf、Codeium、通义灵码、CodeWhisperer、Devin、Tabnine、Augment、Continue
5. **AI视频**（10个）：Sora、Runway、Pika、Luma Dream Machine、海螺AI、腾讯智影、剪映、万兴播爆、Fliki、Opus Clip
6. **AI搜索**（8个）：Perplexity、You.com、秘塔AI搜索、天工AI、纳米AI搜索、Devv AI、Phind、Kimi
7. **AI音频**（6个）：ElevenLabs、剪映配音、讯飞听见、标小智AI logo、Uberduck、Murf AI
8. **AI项目**（8个）：OpenClaw、python-office、popdf、LangChain、LlamaIndex、Ollama、AnythingLLM、FastGPT

### SEO优化（已完成）
- sitemap.xml 站点地图（10个URL）
- robots.txt 允许AI bots（GPTBot、Claude-Web等）
- index.html 结构化数据（WebSite、Organization、FAQPage、BreadcrumbList、ItemList Schema）
- FAQ页面 + About页面
- 面包屑导航
- 响应式设计

### GEO优化（已完成）
- FAQPage Schema（JSON-LD）
- 高质量深度内容（FAQ 14个问题、About 6个板块）
- 允许ChatGPT、Claude、Gemini等AI bots爬取
- 语义化标题和描述
- ItemList Schema列出所有80+工具

### 更新记录
- 2026-04-10: 完成SEO+GEO全面优化
- 2026-04-10: 扩充AI工具从22个到80+个，新增AI视频、AI搜索、AI音频3个分类
