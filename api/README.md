# AI Nav - AI工具导航 API

为 AI Agents 提供的 AI 工具发现和推荐平台 API。

## 🌟 功能特性

- **AI 工具发现** - 搜索和浏览精选 AI 工具
- **分类导航** - 按类别筛选工具
- **MCP Tools** - Model Context Protocol 接口支持
- **智能推荐** - 根据使用场景推荐工具

## 🚀 快速开始

### 1. 安装依赖

```bash
cd api
npm install
```

### 2. 启动服务

```bash
npm run dev
# 或使用预览脚本
./preview.sh
```

服务将在 http://localhost:3002 启动

## 📡 API 端点

### 获取工具列表

```
GET /api/tools
```

**参数：**
- `query` - 搜索关键词
- `category` - 工具分类
- `freeOnly` - 只返回免费工具
- `limit` - 返回数量

**示例：**
```bash
curl "http://localhost:3002/api/tools?category=AI对话"
```

### AI 友好接口

```
GET /api/tools/ai-friendly
```

```bash
curl "http://localhost:3002/api/tools/ai-friendly?q=图像生成&limit=5"
```

### 搜索工具

```
GET /api/tools/search?q=<关键词>
```

### 获取工具详情

```
GET /api/tools/:id
```

```bash
curl http://localhost:3002/api/tools/chatgpt
```

### 获取所有分类

```
GET /api/categories
```

## 🤖 MCP Tools

### 服务信息

```
GET /api/mcp
```

### 调用 MCP 工具

```
POST /api/mcp
```

**可用工具：**

| 工具名称 | 描述 | 参数 |
|---------|------|------|
| `search_ai_tools` | 搜索 AI 工具 | query, category, free_only |
| `get_tool_details` | 获取工具详情 | tool_id |
| `list_categories` | 列出所有分类 | 无 |
| `get_by_category` | 按分类获取工具 | category |
| `get_recommendations` | 获取推荐 | use_case, free_only, difficulty |

**示例：**
```bash
curl -X POST http://localhost:3002/api/mcp \
  -H "Content-Type: application/json" \
  -d '{"name":"search_ai_tools","arguments":{"query":"图像生成"}}'
```

## 📊 已收录工具

共收录 **12** 个精选 AI 工具：

### AI 对话
- ChatGPT (OpenAI)
- Claude (Anthropic)

### AI 图像
- Midjourney
- DALL-E 3
- Stable Diffusion

### AI 编程
- GitHub Copilot
- Cursor

### AI 视频
- Runway

### AI 音频
- ElevenLabs

### AI 自动化
- Zapier
- Notion AI

### AI 搜索
- Perplexity

## 🎯 使用场景

### 场景 1：AI 查找工具

```
用户：帮我找个能生成图片的免费AI工具

AI：
GET /api/tools/ai-friendly?q=图像生成&freeOnly=true

返回：
- Midjourney (25次免费)
- DALL-E 3 ($5免费额度)
- Stable Diffusion (开源免费)
```

### 场景 2：按分类浏览

```
用户：有哪些 AI 编程工具？

AI：
GET /api/categories
GET /api/tools/AI编程

返回：
- GitHub Copilot
- Cursor
```

### 场景 3：智能推荐

```
用户：我想找个能帮我写代码的工具

AI：
POST /api/mcp
{"name":"get_recommendations","arguments":{"use_case":"编程"}}

返回推荐：
1. GitHub Copilot - IDE插件，适合日常编程
2. Cursor - AI原生编辑器，适合项目开发
3. ChatGPT - 对话式，适合问题解答
```

## 🔧 技术栈

- Vite
- TypeScript
- MCP Protocol

## 📝 项目结构

```
api/
├── src/
│   ├── types.ts          # 类型定义
│   ├── tools-data.ts     # 工具数据
│   └── mcp-server.ts    # MCP 服务器
├── index.html            # API 文档页面
├── package.json
├── vite.config.ts
└── README.md
```

## 🚀 部署

```bash
npm run build
npm run preview
```

## 🔗 相关项目

- [hermes](../hermes/) - Coding Plan 工具平台
- [python4office](../python4office.cn/api/) - Python 工具和博客
- [openclaw](../openclaw/) - OpenClaw 主站

---

**版本**: 1.0.0  
**更新日期**: 2026-05-20  
**维护者**: 程序员晚枫
