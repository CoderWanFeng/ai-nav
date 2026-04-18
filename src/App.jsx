import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import aipptLogo from './assets/ai-办公/aippt-logo.png'

const aiTools = [
  {
    category: 'AI对话',
    items: [
      { name: 'ChatGPT', url: 'https://chatgpt.com', desc: 'OpenAI的AI对话助手', icon: '🤖' },
      { name: 'Claude', url: 'https://claude.ai', desc: 'Anthropic的AI助手', icon: '🧠' },
      { name: 'Gemini', url: 'https://gemini.google.com', desc: 'Google的AI对话模型', icon: '💎' },
      { name: 'DeepSeek', url: 'https://chat.deepseek.com', desc: '深度求索AI 推理能力强', icon: '🔍' },
      { name: 'Grok', url: 'https://x.com/i/grok', desc: 'xAI推出的AI对话助手', icon: '🌌' },
      { name: 'Kimi', url: 'https://kimi.moonshot.cn', desc: '月之暗面AI 超长上下文', icon: '🌙' },
      { name: '豆包', url: 'https://www.doubao.com', desc: '字节跳动AI助手', icon: '🫘' },
      { name: '腾讯元宝', url: 'https://yuanbao.tencent.com', desc: '腾讯混元AI 微信生态', icon: '🐧' },
      { name: '通义千问', url: 'https://tongyi.aliyun.com', desc: '阿里AI大模型', icon: '🏗️' },
      { name: '文心一言', url: 'https://yiyan.baidu.com', desc: '百度AI对话产品', icon: '📖' },
      { name: '智谱清言', url: 'https://www.zhipuai.cn', desc: '智谱AI对话助手', icon: '⚡' },
      { name: '讯飞星火', url: 'https://xinghuo.xfyun.cn', desc: '科大讯飞AI大模型', icon: '🔥' },
      { name: 'Perplexity', url: 'https://www.perplexity.ai', desc: 'AI搜索引擎 带引用', icon: '🔭' },
      { name: 'OpenClaw', url: 'https://openclaw.ai', desc: '开源个人AI智能体', icon: '🦞' },
      { name: 'Pi', url: 'https://pi.ai', desc: 'Inflection AI的个人AI助手', icon: '💙' },
      { name: 'Character.AI', url: 'https://character.ai', desc: 'AI角色对话平台', icon: '🎭' },
      { name: 'Poe', url: 'https://poe.com', desc: 'Quora AI聊天聚合平台', icon: '📚' },
      { name: 'Coze', url: 'https://www.coze.cn', desc: '字节AI应用开发平台', icon: '🔧' },
      { name: 'Coze AI', url: 'https://coze.com', desc: '国际版AI Bot开发平台', icon: '🤖' },
      { name: 'Dify', url: 'https://dify.ai', desc: '开源LLM应用开发平台', icon: '🔮' },
      { name: '钉钉AI', url: 'https://www.dingtalk.com', desc: '钉钉AI助理', icon: '📌' },
      { name: '企业微信AI', url: 'https://work.weixin.qq.com', desc: '企业微信AI助手', icon: '💼' },
      { name: '跃问', url: 'https://yuewen.cn', desc: '上海人工智能实验室AI', icon: '🚀' },
      { name: '万知', url: 'https://wanzi.co', desc: '零一万物AI助手', icon: '💫' },
      { name: '商量', url: 'https://商量.sensetime.com', desc: '商汤AI大语言模型', icon: '🧮' },
      { name: '海螺AI', url: 'https://hailuoai.video', desc: '字节AI对话助手', icon: '🐚' },
      { name: 'MiniMax', url: 'https://www.minimax.io', desc: '稀宇科技AI平台', icon: '🤍' },
      { name: '百小应', url: 'https://www.baicheng-ai.com', desc: '百川AI助手', icon: '🌊' },
      { name: 'Zhipu AI', url: 'https://open.bigmodel.cn', desc: '智谱GLM大模型API', icon: '⚙️' },
      { name: 'Moonshot', url: 'https://platform.moonshot.cn', desc: 'Kimi API平台', icon: '🌕' },
      { name: '硅基流动', url: 'https://siliconflow.cn', desc: 'AI大模型API聚合', icon: '💧' },
      { name: 'Groq', url: 'https://console.groq.com', desc: '极速LLM推理平台', icon: '⚡' },
      { name: 'Together AI', url: 'https://together.ai', desc: '开源模型推理平台', icon: '🤝' },
      { name: 'Anthropic API', url: 'https://console.anthropic.com', desc: 'Claude API', icon: '🧠' },
      { name: 'OpenAI API', url: 'https://platform.openai.com', desc: 'ChatGPT API', icon: '🤖' },
      { name: 'Google AI Studio', url: 'https://aistudio.google.com', desc: 'Gemini API', icon: '🌐' },
      { name: 'Mistral', url: 'https://mistral.ai', desc: '欧洲AI模型公司', icon: '🌍' },
      { name: 'Cohere', url: 'https://cohere.com', desc: '企业AI搜索和对话', icon: '🔗' },
      { name: 'AI21', url: 'https://ai21.com', desc: 'Jurassic AI模型', icon: '🦖' },
      { name: '面壁智能', url: 'https://www.modelbest.cn', desc: '国产大模型公司', icon: '🧱' },
      { name: '天工开放平台', url: 'https://model-platform.tiangong.cn', desc: '天工AI API', icon: '⚔️' },
      { name: '360智脑', url: 'https://ai.360.com', desc: '360 AI助手', icon: '🔒' },
      { name: '出门问问', url: 'https://www.chumenwenwen.com', desc: '出门问问AI', icon: '🎯' },
      { name: 'AutoGLM', url: 'https://www.autoglm.cn', desc: '智谱AI浏览器Agent', icon: '🕸️' },
      { name: 'Genspark', url: 'https://www.genspark.ai', desc: 'AI搜索和助手', icon: '✨' },
      { name: 'HuggingChat', url: 'https://huggingface.co/chat', desc: '开源AI聊天', icon: '🤗' },
    ]
  },
  {
    category: 'AI办公',
    items: [
      { name: 'AI免费生成PPT', url: 'https://www.aippt.cn', desc: '一句话，一分钟，一键生成PPT', icon: '📊' },
      { name: 'WPS AI', url: 'https://ai.wps.cn', desc: '金山办公AI助手', icon: '📄' },
      { name: '腾讯文档AI', url: 'https://docs.qq.com', desc: '在线文档AI助手', icon: '📝' },
      { name: '飞书AI', url: 'https://www.feishu.cn', desc: '字节跳动办公AI', icon: '🚀' },
      { name: '百度文库AI', url: 'https://wenku.baidu.com', desc: '百度文档智能处理', icon: '📚' },
      { name: 'Notion AI', url: 'https://www.notion.so/product/ai', desc: '智能写作助手', icon: '✍️' },
      { name: '秘塔写作猫', url: 'https://xiezuocat.com', desc: '中文AI写作改写', icon: '🐱' },
      { name: 'ChatDOC', url: 'https://chatdoc.com', desc: 'AI文档分析和问答', icon: '📋' },
      { name: 'Monica', url: 'https://monica.im', desc: 'AI助手 浏览器插件', icon: '🎭' },
      { name: 'Copy.ai', url: 'https://www.copy.ai', desc: 'AI营销文案生成', icon: '📢' },
      { name: 'Jasper', url: 'https://www.jasper.ai', desc: '企业级AI内容创作', icon: '💼' },
      { name: 'QuillBot', url: 'https://quillbot.com', desc: 'AI写作润色改写', icon: '✏️' },
      { name: 'Gamma', url: 'https://gamma.app', desc: 'AI生成PPT和文档', icon: '📽️' },
      { name: 'Beautiful.ai', url: 'https://www.beautiful.ai', desc: 'AI演示文稿生成', icon: '🎨' },
      { name: 'Tome', url: 'https://tome.app', desc: 'AI驱动PPT讲故事', icon: '📖' },
      { name: 'Slidesgo', url: 'https://slidesgo.com', desc: 'AI幻灯片模板', icon: '🖥️' },
      { name: 'Microsoft Copilot', url: 'https://copilot.microsoft.com', desc: '微软AI助手', icon: '🪟' },
      { name: 'Google Workspace AI', url: 'https://workspace.google.com', desc: 'Google办公AI', icon: '🌐' },
      { name: 'Overleaf AI', url: 'https://www.overleaf.com', desc: 'LaTeX AI写作', icon: '📐' },
      { name: 'Craft AI', url: 'https://www.craft.do', desc: 'AI笔记和文档', icon: '🎒' },
      { name: 'FlowUs', url: 'https://flowus.cn', desc: '国产AI协作文档', icon: '🌊' },
      { name: '印象笔记AI', url: 'https://www.yinxiang.com', desc: '印象笔记AI助手', icon: '📓' },
      { name: '有道云笔记AI', url: 'https://note.youdao.com', desc: '网易有道云笔记AI', icon: '📔' },
      { name: 'Zoom AI', url: 'https://zoom.us', desc: 'Zoom会议AI助手', icon: '📹' },
      { name: 'Otter AI', url: 'https://otter.ai', desc: '会议转录AI', icon: '🦦' },
      { name: 'Fireflies.ai', url: 'https://fireflies.ai', desc: '会议纪要AI', icon: '🐸' },
      { name: 'Fathom', url: 'https://fathomai.com', desc: '会议AI总结', icon: '📊' },
      { name: 'Notta', url: 'https://www.notta.com', desc: 'AI会议记录', icon: '🎙️' },
      { name: '讯飞听见', url: 'https://www.iflyrec.com', desc: '语音转文字', icon: '👂' },
      { name: '通义听悟', url: 'https://tingwu.aliyun.com', desc: '阿里会议AI', icon: '👂' },
      { name: '飞书妙记', url: 'https://www.feishu.cn', desc: '飞书会议记录', icon: '🎬' },
      { name: 'Boardmix', url: 'https://boardmix.cn', desc: 'AI白板协作', icon: '🖼️' },
      { name: 'ProcessOn', url: 'https://www.processon.com', desc: '在线思维导图AI', icon: '🧠' },
      { name: 'XMind Copilot', url: 'https://xmind.cn', desc: '思维导图AI助手', icon: '💡' },
      { name: '亿图脑图', url: 'https://www.edrawsoft.cn', desc: 'AI思维导图', icon: '🗺️' },
      { name: 'GitMind', url: 'https://gitmind.cn', desc: '免费AI思维导图', icon: '🧩' },
      { name: 'Miro AI', url: 'https://miro.com', desc: '在线白板AI', icon: '🖼️' },
      { name: 'Lucidchart AI', url: 'https://www.lucidchart.com', desc: '图表AI生成', icon: '📈' },
      { name: 'ChartGPT', url: 'https://chartgpt.io', desc: 'AI图表生成', icon: '📊' },
      { name: '酷表ChatExcel', url: 'https://chatexcel.com', desc: '用对话操作Excel', icon: '📊' },
      { name: 'SheetPlus', url: 'https://sheetplus.ai', desc: 'AI Excel助手', icon: '📈' },
      { name: 'Ajelix', url: 'https://ajelix.com', desc: 'Excel AI处理', icon: '📉' },
      { name: 'Humata', url: 'https://humata.ai', desc: '文档理解AI', icon: '📄' },
      { name: 'AskYourPDF', url: 'https://askyourpdf.com', desc: 'PDF问答助手', icon: '❓' },
      { name: 'PandaAI', url: 'https://pandaai.cn', desc: '中文文档AI分析', icon: '🐼' },
      { name: '司马阅', url: 'https://smartread.cn', desc: 'AI文档阅读', icon: '📖' },
      { name: 'Kimi文档', url: 'https://kimi.moonshot.cn', desc: 'Kimi处理文档', icon: '🌙' },
      { name: '包阅AI', url: 'https://baoyueai.com', desc: '全格式文档AI阅读', icon: '📚' },
      { name: 'ChatPDF', url: 'https://chatpdf.com', desc: 'PDF对话AI', icon: '💬' },
      { name: 'LightPDF', url: 'https://lightpdf.com', desc: 'AI PDF工具箱', icon: '📄' },
      { name: 'Smallpdf', url: 'https://smallpdf.com', desc: 'PDF处理AI', icon: '📎' },
      { name: 'iLovePDF', url: 'https://www.ilovepdf.com', desc: 'PDF全能工具', icon: '🔗' },
      { name: 'Zapier AI', url: 'https://zapier.com', desc: '办公自动化AI', icon: '⚡' },
      { name: 'Make AI', url: 'https://www.make.com', desc: '自动化工作流AI', icon: '🔧' },
      { name: 'n8n', url: 'https://n8n.io', desc: '开源工作流自动化', icon: '🔗' },
      { name: '钉钉AI助理', url: 'https://ai.dingtalk.com', desc: '钉钉AI功能', icon: '📌' },
      { name: '语雀AI', url: 'https://www.yuque.com', desc: '阿里语雀AI', icon: '🦜' },
      { name: '妙办AI', url: 'https://imiaoban.com', desc: '流程图白板AI', icon: '📊' },
      { name: '图怪兽', url: 'https://818ps.com', desc: 'AI图片设计', icon: '🎨' },
      { name: '创客贴AI', url: 'https://www.chuangkit.com', desc: 'AI设计平台', icon: '🖼️' },
      { name: '稿定AI', url: 'https://www.gaoding.com', desc: 'AI设计工具', icon: '✂️' },
      { name: '腾讯问卷AI', url: 'https://wj.qq.com', desc: '问卷调查AI', icon: '📋' },
      { name: '问卷星AI', url: 'https://www.wjx.cn', desc: '在线问卷AI', icon: '📝' },
      { name: '二六三AI', url: 'https://www.263ai.com', desc: '企业办公AI', icon: '🏢' },
      { name: '飞书多维表格AI', url: 'https://www.feishu.cn', desc: '飞书多维表格AI', icon: '📊' },
      { name: '知料AI', url: 'https://zhiliaoai.cn', desc: 'AI知识库问答', icon: '🧠' },
      { name: '石墨文档AI', url: 'https://shimo.im', desc: '在线协作文档AI', icon: '📝' },
      { name: '我来 wolai', url: 'https://www.wolai.com', desc: '国产AI知识管理', icon: '🌊' },
      { name: '印象团队', url: 'https://team.yinxiang.com', desc: '印象笔记团队版AI', icon: '👥' },
      { name: 'Tower AI', url: 'https://tower.im', desc: '团队协作AI', icon: '🗼' },
      { name: 'Teambition AI', url: 'https://www.teambition.com', desc: '阿里团队协作AI', icon: '📋' },
      { name: '幕布AI', url: 'https://mubu.com', desc: '思维笔记AI', icon: '📓' },
      { name: '飞书云文档', url: 'https://www.feishu.cn', desc: '飞书云文档', icon: '☁️' },
      { name: '百度如流', url: 'https://ruli-liuhe.baidu.com', desc: '百度智能办公', icon: '🌊' },
      { name: 'WeLink AI', url: 'https://www.welink.huaweicloud.com', desc: '华为WeLink AI', icon: '🐚' },
      { name: 'ChatSpace', url: 'https://www.chatspace.cn', desc: '企业文档AI', icon: '🚀' },
    ]
  },
  {
    category: 'AI绘画',
    items: [
      { name: 'Midjourney', url: 'https://www.midjourney.com', desc: '顶级AI绘画工具', icon: '🎨' },
      { name: 'Stable Diffusion', url: 'https://stability.ai', desc: '开源AI绘画模型', icon: '🖼️' },
      { name: 'DALL·E 3', url: 'https://openai.com/dall-e-3', desc: 'OpenAI图像生成', icon: '🌟' },
      { name: 'Leonardo AI', url: 'https://leonardo.ai', desc: 'AI游戏资产生成', icon: '🎮' },
      { name: 'Ideogram', url: 'https://ideogram.ai', desc: 'AI图像生成 文字渲染强', icon: '💫' },
      { name: '即梦AI', url: 'https://jimeng.jianying.com', desc: '字节AI绘画视频', icon: '✨' },
      { name: '可灵AI', url: 'https://klingai.kuaishou.com', desc: '快手AI视频生成', icon: '🎬' },
      { name: '通义万相', url: 'https://tongyi.aliyun.com/wanxiang', desc: '阿里AI绘画', icon: '🎭' },
      { name: '哩布哩布', url: 'https://liblib.ai', desc: '国产AI绘画社区', icon: '🌈' },
      { name: '吐司AI', url: 'https://tusi.art', desc: 'AI模型分享社区', icon: '🎨' },
      { name: 'Adobe Firefly', url: 'https://firefly.adobe.com', desc: 'Adobe生成式AI', icon: '🔥' },
      { name: 'Canva AI', url: 'https://www.canva.com', desc: '在线设计AI助手', icon: '🖌️' },
      { name: 'Bing Image Creator', url: 'https://www.bing.com/create', desc: '微软AI图像生成', icon: '🔍' },
      { name: 'Adobe Express', url: 'https://express.adobe.com', desc: 'AI图片设计', icon: '✏️' },
      { name: 'Picsart AI', url: 'https://picsart.com', desc: 'AI图片编辑', icon: '🖍️' },
      { name: 'Photoroom', url: 'https://www.photoroom.com', desc: 'AI商品图处理', icon: '📦' },
      { name: 'Remove.bg', url: 'https://www.remove.bg', desc: 'AI一键去背景', icon: '🪄' },
      { name: 'Civitai', url: 'https://civitai.com', desc: 'AI模型分享社区', icon: '🤖' },
      { name: 'PixAI', url: 'https://pixai.art', desc: '二次元AI绘画', icon: '🌸' },
      { name: 'NovelAI', url: 'https://novelai.net', desc: 'AI图像和写作', icon: '📚' },
      { name: 'SeaArt', url: 'https://www.seaart.ai', desc: 'AI绘画平台', icon: '🌊' },
      { name: 'Artguru', url: 'https://www.artguru.ai', desc: 'AI艺术生成', icon: '🎭' },
      { name: 'NightCafe', url: 'https://nightcafe.studio', desc: 'AI艺术创作', icon: '🌙' },
      { name: 'Starryai', url: 'https://starryai.com', desc: 'AI图像生成App', icon: '⭐' },
      { name: 'Wombo Dream', url: 'https://www.wombo.ai', desc: 'AI图片生成', icon: '💭' },
      { name: 'Deep Dream Generator', url: 'https://deepdreamgenerator.com', desc: 'AI风格迁移', icon: '🌌' },
      { name: 'Playground AI', url: 'https://playgroundai.com', desc: '免费AI图像生成', icon: '🎪' },
      { name: 'Kandinsky', url: 'https://fusionbrain.ai', desc: '俄罗斯AI绘画', icon: '🖼️' },
      { name: 'Tensor.art', url: 'https://tensor.art', desc: 'AI模型分享', icon: '🔢' },
      { name: '秒画', url: 'https://miaohua.sensetime.com', desc: '商汤AI绘画', icon: '⏱️' },
      { name: '6pen Art', url: 'https://6pen.art', desc: '中文AI绘画', icon: '✒️' },
      { name: 'Draft.art', url: 'https://draft.art', desc: 'AI绘图社区', icon: '📝' },
      { name: '文心一格', url: 'https://yige.baidu.com', desc: '百度AI绘画平台', icon: '🖌️' },
      { name: '造梦日记', url: 'https://www.printidea.art', desc: 'AI绘画创作', icon: '🖼️' },
      { name: 'Tiamat', url: 'https://www.tiamat.com', desc: '国产AI绘画', icon: '🌸' },
      { name: '元象XVERSE', url: 'https://xverse.cn', desc: 'AI绘画大模型', icon: '🦄' },
      { name: '奇域AI', url: 'https://www.qiyuai.net', desc: 'AI艺术创作', icon: '🖼️' },
      { name: 'Bigjpg', url: 'https://bigjpg.com', desc: 'AI图片放大', icon: '📏' },
      { name: "Let's Enhance", url: 'https://letsenhance.io', desc: 'AI图片增强', icon: '🔍' },
      { name: 'Upscayl', url: 'https://upscayl.org', desc: '开源AI图片放大', icon: '⬆️' },
      { name: 'Magnific AI', url: 'https://magnific.ai', desc: 'AI图片高清化', icon: '🔮' },
      { name: 'Relight', url: 'https://relight.so', desc: 'AI图片打光', icon: '💡' },
      { name: 'Cleanup.pictures', url: 'https://cleanup.pictures', desc: 'AI图片去杂物', icon: '🧹' },
      { name: 'Magic Eraser', url: 'https://www.magiceraser.io', desc: 'AI去水印', icon: '🪄' },
      { name: 'Clipdrop', url: 'https://clipdrop.co', desc: 'AI图片处理全家桶', icon: '📎' },
      { name: 'Leiapix', url: 'https://www.leiapix.com', desc: 'AI图片转3D', icon: '🎲' },
      { name: '触手AI', url: 'https://www.douchu666.com', desc: 'AI绘画工具', icon: '✋' },
      { name: '云雾AI', url: 'https://www.yunwuai.com', desc: 'AI艺术创作', icon: '☁️' },
      { name: '画宇宙', url: 'https://ai.artngame.com', desc: 'AI绘画平台', icon: '🌌' },
      { name: '灵动AI', url: 'https://www.dongmai.art', desc: 'AI图片生成', icon: '⚡' },
      { name: 'AI改图神器', url: 'https://img.logosc.cn', desc: 'AI图片处理工具箱', icon: '🛠️' },
      { name: '吐司AI生图', url: 'https://tusiart.com', desc: '国产AI绘画', icon: '🍞' },
      { name: 'LiblibAI在线', url: 'https://www.liblibalib.cn', desc: '在线AI绘画', icon: '📚' },
      { name: 'Runway ML', url: 'https://runwayml.com', desc: 'AI视频和图像', icon: '🎬' },
      { name: 'Shakker AI', url: 'https://www.shakker.ai', desc: 'AI图像生成', icon: '🎨' },
      { name: '意间AI', url: 'https://www.yijian.ai', desc: 'AI绘画工具', icon: '🎯' },
    ]
  },
  {
    category: 'AI编程',
    items: [
      { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', desc: '微软AI编程助手', icon: '💻' },
      { name: 'Cursor', url: 'https://cursor.sh', desc: 'AI原生代码编辑器', icon: '✏️' },
      { name: 'Bolt.new', url: 'https://bolt.new', desc: 'AI全栈Web开发', icon: '⚡' },
      { name: 'Lovable', url: 'https://lovable.dev', desc: 'AI应用构建平台', icon: '❤️' },
      { name: 'Windsurf', url: 'https://codeium.com/windsurf', desc: 'AI代码编辑器', icon: '🌊' },
      { name: 'Codeium', url: 'https://codeium.com', desc: '免费AI代码补全', icon: '🚀' },
      { name: '通义灵码', url: 'https://tongyi.aliyun.com/lingma', desc: '阿里AI编程助手', icon: '🔧' },
      { name: 'CodeWhisperer', url: 'https://aws.amazon.com/codewhisperer', desc: 'AWS AI编程工具', icon: '🔩' },
      { name: 'Devin', url: 'https://devin.ai', desc: 'AI软件工程师', icon: '🤖' },
      { name: 'Tabnine', url: 'https://tabnine.com', desc: 'AI代码补全助手', icon: '📋' },
      { name: 'Augment', url: 'https://www.augmentcode.com', desc: '个人AI编程助手', icon: '💪' },
      { name: 'Continue', url: 'https://continue.dev', desc: '开源AI代码助手', icon: '▶️' },
      { name: 'Replit Agent', url: 'https://replit.com', desc: 'AI编程助手', icon: '🔄' },
      { name: 'Vercel v0', url: 'https://v0.dev', desc: 'AI生成前端代码', icon: '▲' },
      { name: 'Mutable AI', url: 'https://mutable.ai', desc: 'AI产品开发', icon: '🧬' },
      { name: 'Blackbox AI', url: 'https://www.blackbox.ai', desc: 'AI代码助手', icon: '📦' },
      { name: 'CodeRabbit', url: 'https://coderabbit.ai', desc: 'AI代码审查', icon: '🐇' },
      { name: 'Sweep AI', url: 'https://sweep.dev', desc: 'AI代码修复', icon: '🧹' },
      { name: 'Cody', url: 'https://sourcegraph.com/cody', desc: 'Sourcegraph AI编程', icon: '🐮' },
      { name: 'JetBrains AI', url: 'https://www.jetbrains.com/ai', desc: 'JetBrains AI助手', icon: '🚀' },
      { name: 'Fig AI', url: 'https://fig.io', desc: '终端AI补全', icon: '🖥️' },
      { name: 'Zed AI', url: 'https://zed.dev', desc: 'AI代码编辑器Zed', icon: '⚡' },
      { name: 'Trae', url: 'https://www.trae.com.cn', desc: '字节AI代码编辑器', icon: '⭐' },
      { name: '豆包MarsCode', url: 'https://www.marscode.cn', desc: '字节AI编程助手', icon: '🫘' },
      { name: '文心快码', url: 'https://cloud.baidu.com/product/cb', desc: '百度AI编程', icon: '🔍' },
      { name: 'CodeBuddy', url: 'https://www.codebuddy.ai', desc: '腾讯云AI编程助手', icon: '💡' },
      { name: 'Qoder', url: 'https://qoder.com', desc: '阿里Agentic编程', icon: '🚀' },
      { name: 'AskCodi', url: 'https://askcodi.com', desc: 'AI编程助手', icon: '❓' },
      { name: 'Aider', url: 'https://aider.chat', desc: '终端AI编程', icon: '💬' },
      { name: 'Phind', url: 'https://www.phind.com', desc: '开发者AI搜索', icon: '🔍' },
      { name: 'GitHub', url: 'https://github.com', desc: '代码托管平台', icon: '🐙' },
      { name: 'Linear', url: 'https://linear.app', desc: '项目追踪AI', icon: '📊' },
      { name: 'ClickUp AI', url: 'https://clickup.com', desc: '项目管理AI', icon: '🖱️' },
      { name: 'Mintlify', url: 'https://mintlify.com', desc: 'AI代码文档生成', icon: '📖' },
      { name: 'Docus', url: 'https://docus.io', desc: 'AI文档网站生成', icon: '📄' },
      { name: 'Scribe', url: 'https://scribehow.com', desc: 'AI操作指南生成', icon: '📜' },
      { name: 'Safurai', url: 'https://www.safurai.com', desc: 'AI编程助手', icon: '🦾' },
      { name: 'Codegen', url: 'https://codegen.com', desc: 'AI代码生成平台', icon: '⚙️' },
      { name: 'GPT Engineer', url: 'https://github.com/Ps02/gpt-engineer', desc: 'AI代码生成工程', icon: '👷' },
      { name: 'Starcoder', url: 'https://huggingface.co/bigcode/starcoder', desc: 'HuggingFace代码模型', icon: '⭐' },
      { name: 'Mistral Code', url: 'https://mistral.ai', desc: 'Mistral代码模型', icon: '🌍' },
      { name: 'GitLab AI', url: 'https://gitlab.com', desc: '代码协作平台', icon: '🦊' },
      { name: 'Stack Overflow AI', url: 'https://stackoverflow.com', desc: '编程问答社区', icon: '📚' },
      { name: 'Amazon CodeWhisperer', url: 'https://aws.amazon.com/q/developer', desc: 'AWS AI编程', icon: '📦' },
      { name: 'Codellama', url: 'https://ai.meta.com/tools/code-llama', desc: 'Meta代码模型', icon: '🦙' },
      { name: 'Mistral Codestral', url: 'https://mistral.ai', desc: 'Mistral代码模型', icon: '🌍' },
      { name: 'DeepSeek Coder', url: 'https://coder.deepseek.com', desc: 'DeepSeek代码模型', icon: '🔍' },
      { name: 'CodeGeex', url: 'https://codegeex.cn', desc: '讯飞AI编程', icon: '💻' },
    ]
  },
  {
    category: 'AI视频',
    items: [
      { name: 'Sora', url: 'https://openai.com/sora', desc: 'OpenAI视频生成', icon: '🎥' },
      { name: 'Runway', url: 'https://runwayml.com', desc: 'AI视频编辑生成', icon: '🎬' },
      { name: 'Pika', url: 'https://pika.art', desc: 'AI视频生成工具', icon: '🍿' },
      { name: 'Luma Dream', url: 'https://lumalabs.ai/dream-machine', desc: 'AI视频图片生成', icon: '✨' },
      { name: '海螺AI', url: 'https://hailuoai.video', desc: '字节AI视频生成', icon: '🐚' },
      { name: '腾讯智影', url: 'https://zenvideo.qq.com', desc: '腾讯AI视频创作', icon: '📹' },
      { name: '剪映', url: 'https://www.jianying.com', desc: '字节AI视频剪辑', icon: '✂️' },
      { name: '万兴播爆', url: 'https://virbo.wondershare.cn', desc: 'AI数字人视频', icon: '🎙️' },
      { name: 'Fliki', url: 'https://fliki.ai', desc: 'AI文本转视频', icon: '🎞️' },
      { name: 'Opus Clip', url: 'https://opus.pro', desc: 'AI长视频转短视频', icon: '📺' },
      { name: 'Synthesia', url: 'https://www.synthesia.io', desc: 'AI数字人视频', icon: '🎭' },
      { name: 'HeyGen', url: 'https://heygen.com', desc: 'AI数字人制作', icon: '👤' },
      { name: 'D-ID', url: 'https://www.d-id.com', desc: 'AI数字人视频', icon: '🖼️' },
      { name: 'DeepBrain AI', url: 'https://www.deepbrain.io', desc: 'AI数字人平台', icon: '🧠' },
      { name: 'Gen-3 Alpha', url: 'https://runwayml.com/gen3', desc: 'Runway第三代视频', icon: '🌟' },
      { name: 'Kling AI', url: 'https://klingai.kuaishou.com', desc: '快手可灵视频', icon: '🎬' },
      { name: 'Vidu', url: 'https://www.vidu.cn', desc: '生数科技视频生成', icon: '🎥' },
      { name: 'ModelScope', url: 'https://modelscope.cn', desc: '阿里视频生成', icon: '🔬' },
      { name: '腾讯混元', url: 'https://hunyuan.tencent.com', desc: '腾讯视频AI', icon: '🐧' },
      { name: 'Wink', url: 'https://wink.beauty321.com', desc: '美图AI视频编辑', icon: '✨' },
      { name: '必剪', url: 'https://dc.jijupeng.com', desc: 'B站AI视频剪辑', icon: '📺' },
      { name: '快影AI', url: 'https://www.kuaishou.com', desc: '快手AI视频', icon: '🎥' },
      { name: '秒创', url: 'https://aigc.cn', desc: 'AI视频创作平台', icon: '⏱️' },
      { name: '一帧秒创', url: 'https://aigc.yizhentv.com', desc: 'AI视频生成', icon: '🎬' },
      { name: '拓幻AI', url: 'https://www.tuhuansoft.com', desc: 'AI视频特效', icon: '🪄' },
      { name: '来画', url: 'https://www.laihua.com', desc: 'AI动画视频', icon: '🎞️' },
      { name: '万兴天幕', url: 'https://www.wondershare.cn', desc: '万兴AI视频', icon: '🎥' },
      { name: 'Captions', url: 'https://captions.ai', desc: 'AI视频配音字幕', icon: '💬' },
      { name: 'Rask AI', url: 'https://rask.ai', desc: 'AI视频翻译配音', icon: '🌍' },
      { name: 'Shuffll', url: 'https://shuffll.com', desc: 'AI视频制作', icon: '🎥' },
      { name: 'Vidyo', url: 'https://vidyo.ai', desc: 'AI视频剪辑', icon: '✂️' },
      { name: 'Vrew', url: 'https://vrew.jp', desc: 'AI视频剪辑', icon: '🎞️' },
      { name: 'Capcut AI', url: 'https://www.capcut.com', desc: '剪映国际版AI', icon: '✂️' },
      { name: 'InVideo', url: 'https://invideo.io', desc: 'AI视频模板', icon: '🎬' },
      { name: 'Synthesys', url: 'https://synthesys.io', desc: 'AI数字人视频', icon: '🎭' },
      { name: 'Elai', url: 'https://elai.io', desc: 'AI视频动画', icon: '🎞️' },
      { name: 'Steve AI', url: 'https://www.steve.ai', desc: 'AI视频制作', icon: '🤖' },
      { name: 'Pictory', url: 'https://pictory.ai', desc: 'AI视频摘要', icon: '📽️' },
      { name: 'Lumen5', url: 'https://lumen5.com', desc: '文章转视频AI', icon: '📰' },
      { name: 'Twelve Labs', url: 'https://twelvelabs.io', desc: '视频理解AI', icon: '🔍' },
      { name: 'Rephrase AI', url: 'https://www.rephrase.ai', desc: 'AI数字人口播', icon: '👄' },
      { name: 'Klap', url: 'https://klap.app', desc: 'AI视频重制', icon: '🔄' },
      { name: 'HeyLabs', url: 'https://heylabs.com', desc: 'AI视频生成', icon: '🎬' },
      { name: 'Innodata', url: 'https://innodata.com', desc: 'AI数据处理', icon: '📊' },
      { name: 'PixVerse', url: 'https://pixverse.ai', desc: 'AI视频生成', icon: '✨' },
      { name: 'Morph Studio', url: 'https://www.morphstudio.com', desc: 'AI视频创作', icon: '🎬' },
      { name: 'Stable Video', url: 'https://stabletvideo.ai', desc: 'Stability AI视频', icon: '🎥' },
    ]
  },
  {
    category: 'AI搜索',
    items: [
      { name: 'Perplexity', url: 'https://www.perplexity.ai', desc: 'AI搜索引擎 带来源', icon: '🔭' },
      { name: 'You.com', url: 'https://you.com', desc: 'AI搜索引擎 隐私保护', icon: '👤' },
      { name: '秘塔AI搜索', url: 'https://metaso.cn', desc: 'AI搜索引擎 无广告', icon: '🐴' },
      { name: '天工AI', url: 'https://www.tiangong.cn', desc: '昆仑万维AI搜索', icon: '⚔️' },
      { name: '纳米AI搜索', url: 'https://www.n.cn', desc: '360 AI搜索', icon: '🔬' },
      { name: 'Devv AI', url: 'https://devv.ai', desc: '程序员AI搜索引擎', icon: '👨‍💻' },
      { name: 'Phind', url: 'https://www.phind.com', desc: '开发者AI搜索', icon: '🔍' },
      { name: 'Kimi', url: 'https://kimi.moonshot.cn', desc: 'AI助手 联网搜索', icon: '🌙' },
      { name: 'ChatGPT Search', url: 'https://chatgpt.com', desc: 'ChatGPT联网搜索', icon: '🤖' },
      { name: 'Gemini Search', url: 'https://gemini.google.com', desc: 'Gemini联网搜索', icon: '💎' },
      { name: 'Claude Search', url: 'https://claude.ai', desc: 'Claude联网功能', icon: '🧠' },
      { name: 'Grok Search', url: 'https://x.com/i/grok', desc: 'Grok实时搜索', icon: '🌌' },
      { name: 'Felo AI', url: 'https://felo.ai', desc: '日语AI搜索', icon: '🇯🇵' },
      { name: 'Genspark', url: 'https://www.genspark.ai', desc: 'AI搜索助手', icon: '✨' },
      { name: 'Andi', url: 'https://andisearch.com', desc: 'AI对话式搜索', icon: '💬' },
      { name: 'Komo AI', url: 'https://komo.ai', desc: 'AI搜索引擎', icon: '🌿' },
      { name: '夸克AI', url: 'https://www.quark.cn', desc: '夸克AI搜索', icon: '🌪️' },
      { name: '百度AI搜索', url: 'https://chaifa.baidu.com', desc: '百度AI搜索', icon: '🔍' },
      { name: '360AI搜索', url: 'https://so.360.com', desc: '360AI搜索', icon: '🔒' },
      { name: '神马搜索AI', url: 'https://www.sm.cn', desc: 'UC神马AI', icon: '🦘' },
      { name: '必应AI', url: 'https://www.bing.com', desc: '微软Bing AI搜索', icon: '🔎' },
      { name: 'Brave Search AI', url: 'https://search.brave.com', desc: '隐私AI搜索', icon: '🦁' },
      { name: 'DuckDuckGo AI', url: 'https://duckduckgo.com', desc: 'AI搜索保护隐私', icon: '🦆' },
      { name: 'Exa AI', url: 'https://exa.ai', desc: 'AI内容搜索引擎', icon: '🚀' },
      { name: 'Metaphor', url: 'https://metaphor.systems', desc: 'AI互联网搜索', icon: '🔮' },
      { name: 'Ivy.ai', url: 'https://ivy.ai', desc: '企业AI搜索', icon: '🏢' },
      { name: 'App.ai', url: 'https://app.haoio.com', desc: 'AI搜索助手', icon: '🔎' },
    ]
  },
  {
    category: 'AI音频',
    items: [
      { name: 'ElevenLabs', url: 'https://elevenlabs.io', desc: 'AI语音合成克隆', icon: '🎙️' },
      { name: '讯飞听见', url: 'https://www.iflyrec.com', desc: '语音转文字', icon: '👂' },
      { name: '标小智', url: 'https://biaoti.com', desc: 'AI logo生成', icon: '🏷️' },
      { name: 'Uberduck', url: 'https://uberduck.ai', desc: 'AI语音合成', icon: '🦆' },
      { name: 'Murf AI', url: 'https://murf.ai', desc: 'AI语音生成', icon: '🗣️' },
      { name: 'Voicemaker', url: 'https://voicemaker.in', desc: 'AI文字转语音', icon: '🔊' },
      { name: 'NaturalReader', url: 'https://www.naturalreaders.com', desc: '文字转语音', icon: '📖' },
      { name: 'Play.ht', url: 'https://play.ht', desc: 'AI语音合成', icon: '🎧' },
      { name: 'Speechify', url: 'https://speechify.com', desc: 'AI朗读听书', icon: '📚' },
      { name: 'Cartesia AI', url: 'https://cartesia.ai', desc: '实时语音AI', icon: '💎' },
      { name: 'Fish Audio', url: 'https://fish.audio', desc: '开源语音合成', icon: '🐟' },
      { name: 'Coqui', url: 'https://coqui.ai', desc: '开源语音AI', icon: '🦜' },
      { name: 'XTTS', url: 'https://coqui.ai/xtts', desc: 'Coqui多语言配音', icon: '🌍' },
      { name: 'Bark', url: 'https://github.com/suno-ai/bark', desc: 'Suno AI语音生成', icon: '🌳' },
      { name: 'Suno', url: 'https://suno.ai', desc: 'AI音乐生成', icon: '🎵' },
      { name: 'Udio', url: 'https://udio.com', desc: 'AI音乐创作', icon: '🎶' },
      { name: 'Stable Audio', url: 'https://stableaudio.com', desc: 'Stability AI音乐', icon: '🎵' },
      { name: 'Mubert', url: 'https://mubert.com', desc: 'AI背景音乐', icon: '🎼' },
      { name: 'Soundraw', url: 'https://soundraw.io', desc: 'AI音乐生成', icon: '🎹' },
      { name: 'Boomy', url: 'https://boomy.com', desc: 'AI音乐创作', icon: '🎸' },
      { name: 'AIVA', url: 'https://www.aiva.ai', desc: 'AI配乐生成', icon: '🎻' },
      { name: 'Soundful', url: 'https://www.soundful.com', desc: 'AI音乐制作', icon: '🎧' },
      { name: 'Loudly', url: 'https://www.loudly.com', desc: 'AI音乐适配', icon: '🔊' },
      { name: '网易天音', url: 'https://tianyin.music.163.com', desc: '网易AI音乐', icon: '🎵' },
      { name: '腾讯音乐AI', url: 'https://y.qq.com', desc: 'QQ音乐AI功能', icon: '🎧' },
      { name: '剪映配音', url: 'https://www.jianying.com', desc: 'AI配音字幕', icon: '🎵' },
      { name: '魔音工坊', url: 'https://www.moyin.com', desc: 'AI配音合成', icon: '🎙️' },
      { name: '讯飞智作', url: 'https://zhizuo.com', desc: '讯飞AI配音', icon: '🗣️' },
      { name: '配音神器', url: 'https://www.peiyongshenqi.com', desc: 'AI文字转语音', icon: '📢' },
      { name: '腾讯智影配音', url: 'https://zenvideo.qq.com', desc: '腾讯AI配音', icon: '🐧' },
      { name: '通义听悟', url: 'https://tingwu.aliyun.com', desc: '阿里语音AI', icon: '👂' },
      { name: 'Whisper AI', url: 'https://openai.com/index/whisper', desc: 'OpenAI语音识别', icon: '🤫' },
      { name: 'WhisperX', url: 'https://github.com/m-bain/whisperX', desc: 'Whisper增强版', icon: '🔍' },
      { name: 'Faster-Whisper', url: 'https://github.com/guillaumekln/faster-whisper', desc: '快速Whisper推理', icon: '⚡' },
      { name: 'Buzz', url: 'https://github.com/jianfong/buzz', desc: '本地语音转字幕', icon: '🐝' },
      { name: 'Amadeus Code', url: 'https://www.amadeuscode.com', desc: 'AI作曲助手', icon: '🎼' },
      { name: '标小智AI', url: 'https://biaoti.com', desc: 'AI音频处理', icon: '🔊' },
    ]
  },
  {
    category: 'AI开源项目',
    items: [
      { name: 'OpenClaw', url: 'https://www.python-office.com/openclaw/', desc: '开源AI爬虫工具', icon: '🦞' },
      { name: 'python-office', url: 'https://atomgit.com/CoderWanFeng1/python-office', desc: '自动化办公Python库', icon: '📊' },
      { name: 'popdf', url: 'https://atomgit.com/python4office/popdf', desc: 'PDF智能处理库', icon: '📄' },
      { name: 'LangChain', url: 'https://www.langchain.com', desc: 'AI应用开发框架', icon: '⛓️' },
      { name: 'LlamaIndex', url: 'https://www.llamaindex.ai', desc: 'LLM数据框架', icon: '🐪' },
      { name: 'Ollama', url: 'https://ollama.com', desc: '本地运行LLM', icon: '🦙' },
      { name: 'AnythingLLM', url: 'https://anythingllm.com', desc: '本地AI知识库', icon: '📚' },
      { name: 'FastGPT', url: 'https://fastgpt.cn', desc: 'AI知识库问答', icon: '⚡' },
      { name: 'ChatGLM', url: 'https://github.com/THUDM/ChatGLM-6B', desc: '清华开源对话模型', icon: '💬' },
      { name: 'Qwen', url: 'https://github.com/QwenLM/Qwen', desc: '阿里通义千问开源', icon: '🏗️' },
      { name: 'DeepSeek Code', url: 'https://github.com/deepseek-ai/DeepSeek-Coder', desc: 'DeepSeek代码模型', icon: '🔍' },
      { name: 'LLaMA', url: 'https://github.com/meta-llama/llama', desc: 'Meta开源大模型', icon: '🦙' },
      { name: 'Mistral', url: 'https://github.com/mistralai/mistral-src', desc: 'Mistral开源模型', icon: '🌍' },
      { name: 'Mixtral', url: 'https://mistral.ai', desc: 'Mistral混合专家模型', icon: '🌪️' },
      { name: 'Phi', url: 'https://huggingface.co/microsoft/phi-2', desc: '微软小模型Phi', icon: 'Φ' },
      { name: 'Gemma', url: 'https://ai.google.dev/gemma', desc: 'Google开源 Gemma', icon: '💎' },
      { name: 'StarCoder', url: 'https://huggingface.co/bigcode/starcoder', desc: 'HuggingFace代码模型', icon: '⭐' },
      { name: 'CodeGen', url: 'https://github.com/salesforce/CodeGen', desc: 'Salesforce代码模型', icon: '⚡' },
      { name: 'WizardCoder', url: 'https://github.com/nickel-lang/WizardCoder', desc: 'Wizard代码模型', icon: '🧙' },
      { name: 'LLaVA', url: 'https://llava-vl.github.io', desc: '多模态视觉语言模型', icon: '👁️' },
      { name: 'MiniGPT-4', url: 'https://minigpt-4.com', desc: '轻量级GPT-4开源', icon: '🐭' },
      { name: 'VisualGLM', url: 'https://github.com/THUDM/VisualGLM-6B', desc: '中文多模态模型', icon: '👁️' },
      { name: 'Stable Diffusion WebUI', url: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui', desc: 'SD WebUI界面', icon: '🖼️' },
      { name: 'ComfyUI', url: 'https://github.com/comfyanonymous/ComfyUI', desc: 'SD可视化工作流', icon: '🎨' },
      { name: 'Fooocus', url: 'https://github.com/lllyasviel/Fooocus', desc: 'SD本地运行界面', icon: '🎯' },
      { name: 'ControlNet', url: 'https://github.com/lllyasviel/ControlNet', desc: 'SD控制网络', icon: '🎛️' },
      { name: 'LoRA', url: 'https://github.com/microsoft/LoRA', desc: '低秩适应技术', icon: '🔧' },
      { name: 'Axolotl', url: 'https://github.com/OpenAccess-AI-Collective/axolotl', desc: 'LLM微调工具', icon: '🦎' },
      { name: 'vLLM', url: 'https://github.com/vllm-project/vllm', desc: '高速LLM推理引擎', icon: '🚀' },
      { name: 'Text Generation WebUI', url: 'https://github.com/oobabooga/text-generation-webui', desc: 'LLM Web界面', icon: '🌐' },
      { name: 'LocalAI', url: 'https://localai.io', desc: '本地AI API网关', icon: '🏠' },
      { name: 'llama.cpp', url: 'https://github.com/ggerganov/llama.cpp', desc: '纯C/C++ LLM推理', icon: '🐘' },
      { name: 'LM Studio', url: 'https://lmstudio.ai', desc: '本地LLM运行', icon: '📦' },
      { name: 'Jan', url: 'https://jan.ai', desc: '本地AI应用', icon: '🧨' },
      { name: 'GPT4All', url: 'https://gpt4all.io', desc: '本地开源LLM', icon: '🤖' },
      { name: 'Open WebUI', url: 'https://openwebui.com', desc: 'Ollama网页界面', icon: '🌐' },
      { name: 'Dify', url: 'https://dify.ai', desc: '开源LLM应用平台', icon: '🔮' },
      { name: 'LangFlow', url: 'https://github.com/logspace-ai/langflow', desc: 'LangChain可视化', icon: '🌊' },
      { name: 'Flowise', url: 'https://flowiseai.com', desc: 'LangChain可视化', icon: '🌊' },
      { name: 'MaxKB', url: 'https://maxkb.cn', desc: '开源知识库问答', icon: '📖' },
      { name: 'RAGFlow', url: 'https://ragflow.io', desc: '深度文档理解RAG', icon: '📚' },
      { name: 'Quivr', url: 'https://quivr.com', desc: '本地AI知识库', icon: '🧠' },
      { name: 'AutoGen', url: 'https://github.com/microsoft/autogen', desc: '微软多智能体框架', icon: '🤖' },
      { name: 'CrewAI', url: 'https://github.com/joaomdmoura/crewAI', desc: 'AI多智能体编排', icon: '👥' },
      { name: 'MetaGPT', url: 'https://github.com/geekan/MetaGPT', desc: 'AI多智能体协作', icon: '🎭' },
      { name: 'ChatDev', url: 'https://github.com/OpenBMB/ChatDev', desc: 'AI软件公司多智能体', icon: '🏢' },
      { name: 'Ollama WebUI', url: 'https://github.com/ollama-webui/ollama-webui', desc: 'Ollama网页界面', icon: '🌐' },
      { name: 'Ax', url: 'https://github.com/axinc-ai/ax-platform', desc: '自适应实验平台', icon: '🔬' },
      { name: ' Otter', url: 'https://otter-mt.github.io', desc: '多模态模型', icon: '🦦' },
    ]
  },
  {
    category: 'AI设计',
    items: [
      { name: 'Figma AI', url: 'https://figma.com', desc: '设计协作AI', icon: '🎨' },
      { name: 'Framer AI', url: 'https://framer.com', desc: 'AI网站设计', icon: '🏗️' },
      { name: 'Uizard', url: 'https://uizard.io', desc: 'AI原型设计', icon: '✏️' },
      { name: 'Galileo AI', url: 'https://usegalileo.ai', desc: 'AI UI设计', icon: '🖼️' },
      { name: 'Magician', url: 'https://magician.design', desc: 'Figma AI插件', icon: '🧙' },
      { name: 'Designs.ai', url: 'https://designs.ai', desc: 'AI设计工具', icon: '🎨' },
      { name: 'Khroma', url: 'https://khroma.co', desc: 'AI配色方案', icon: '🌈' },
      { name: 'Huemint', url: 'https://huemint.com', desc: 'AI智能配色', icon: '🎨' },
      { name: 'Coolors', url: 'https://coolors.co', desc: '配色方案生成', icon: '🌈' },
      { name: 'Colormind', url: 'http://colormind.io', desc: 'AI配色灵感', icon: '💡' },
      { name: 'Remove.bg', url: 'https://www.remove.bg', desc: 'AI去背景', icon: '🪄' },
      { name: 'Photoroom', url: 'https://www.photoroom.com', desc: 'AI产品图', icon: '📦' },
      { name: 'Looka', url: 'https://looka.com', desc: 'AI logo设计', icon: '🏷️' },
      { name: 'Brandmark', url: 'https://brandmark.io', desc: 'AI品牌设计', icon: '✂️' },
      { name: 'Logo AI', url: 'https://www.logoai.com', desc: 'AI logo生成', icon: '🏅' },
      { name: 'Visme', url: 'https://www.visme.co', desc: 'AI信息图设计', icon: '📊' },
      { name: 'Piktochart', url: 'https://piktochart.com', desc: 'AI图表制作', icon: '📈' },
      { name: 'Venngage', url: 'https://venngage.com', desc: 'AI信息图', icon: '📊' },
      { name: 'Snappa', url: 'https://snappa.com', desc: 'AI图形设计', icon: '🎨' },
      { name: 'Pixelcut', url: 'https://pixelcut.ai', desc: 'AI产品设计', icon: '✂️' },
      { name: 'Craiyon', url: 'https://craiyon.com', desc: 'AI图像生成', icon: '🖍️' },
      { name: 'ZMO AI', url: 'https://www.zmo.ai', desc: 'AI模特图', icon: '👗' },
      { name: 'Flair AI', url: 'https://flair.ai', desc: 'AI产品摄影', icon: '📷' },
      { name: 'Booth AI', url: 'https://www.booth.ai', desc: 'AI品牌摄影', icon: '🛍️' },
      { name: 'Fontjoy', url: 'https://fontjoy.com', desc: 'AI字体搭配', icon: '🔤' },
      { name: 'Fontpair', url: 'https://fontpair.co', desc: '字体组合推荐', icon: '✒️' },
      { name: 'Microsoft Designer', url: 'https://designer.microsoft.com', desc: '微软Designer', icon: '✂️' },
      { name: '稿定设计', url: 'https://www.gaoding.com', desc: 'AI在线设计', icon: '📐' },
      { name: '创客贴', url: 'https://www.chuangkit.com', desc: 'AI设计模板', icon: '🖼️' },
      { name: '图怪兽', url: 'https://818ps.com', desc: 'AI图片设计', icon: '🎨' },
      { name: '醒图', url: 'https://xingtu.jiyong.cn', desc: '字节AI修图', icon: '✨' },
      { name: '轻颜相机', url: 'https://qingyan.mobi', desc: 'AI美颜拍照', icon: '📸' },
      { name: '美图秀秀AI', url: 'https://xiuxiu.meitu.com', desc: '美图AI工具', icon: '🪄' },
      { name: '即时AI', url: 'https://jsai.cc', desc: '即时设计AI', icon: '⚡' },
      { name: 'Mastergo AI', url: 'https://mastergo.com', desc: 'Mastergo AI', icon: '🛠️' },
      { name: 'IconifyAI', url: 'https://iconifyai.com', desc: 'AI图标生成', icon: '🖼️' },
      { name: 'Lucide AI', url: 'https://lucide.dev', desc: '开源图标库', icon: '📦' },
      { name: 'Adobe Sensei', url: 'https://www.adobe.com/sensei', desc: 'Adobe AI引擎', icon: '🔥' },
      { name: 'Adobe Express', url: 'https://express.adobe.com', desc: 'AI图片设计', icon: '✏️' },
      { name: 'Vista Create', url: 'https://create.vista.com', desc: 'AI设计工具', icon: '🖼️' },
      { name: 'Brandfetch', url: 'https://brandfetch.com', desc: '品牌资源获取', icon: '🏷️' },
      { name: 'Pattern AI', url: 'https://patternmakerai.com', desc: 'AI图案设计', icon: '🔲' },
      { name: 'Typewolf', url: 'https://www.typewolf.com', desc: '字体网站灵感', icon: '🔤' },
      { name: 'Canva AI', url: 'https://www.canva.com', desc: 'Canva AI设计', icon: '🖌️' },
      { name: 'Designs.ai Logo', url: 'https://designs.ai/logo-maker', desc: 'AI标志设计', icon: '🎖️' },
      { name: 'Picsart AI', url: 'https://picsart.com', desc: 'AI图片编辑', icon: '🖍️' },
      { name: 'AI Designer', url: 'https://designer.microsoft.com', desc: '微软AI设计', icon: '🎨' },
      { name: '图可丽', url: 'https://www.tukelafu.com', desc: 'AI图片处理', icon: '🖼️' },
    ]
  },
  {
    category: 'AI营销',
    items: [
      { name: 'Jasper', url: 'https://www.jasper.ai', desc: 'AI营销文案', icon: '💼' },
      { name: 'Copy.ai', url: 'https://www.copy.ai', desc: 'AI文案生成', icon: '📢' },
      { name: 'Writesonic', url: 'https://writesonic.com', desc: 'AI内容创作', icon: '✍️' },
      { name: 'Rytr', url: 'https://rytr.me', desc: 'AI写作助手', icon: '✍️' },
      { name: 'Anyword', url: 'https://anyword.com', desc: 'AI文案优化', icon: '📈' },
      { name: 'Peppertype', url: 'https://www.peppertype.ai', desc: 'AI内容助手', icon: '🌶️' },
      { name: 'Copysmith', url: 'https://copysmith.ai', desc: 'AI广告文案', icon: '📝' },
      { name: 'Ocoya', url: 'https://www.ocoya.com', desc: 'AI社媒内容', icon: '📱' },
      { name: 'Predis AI', url: 'https://predis.ai', desc: 'AI社媒营销', icon: '📲' },
      { name: 'BlogSEO AI', url: 'https://blogseo.ai', desc: 'AI SEO优化', icon: '🔍' },
      { name: 'Surfer SEO', url: 'https://surferseo.com', desc: 'AI SEO分析', icon: '🌊' },
      { name: 'Scalenut', url: 'https://www.scalenut.com', desc: 'AI SEO内容', icon: '🌿' },
      { name: 'Outranking', url: 'https://outranking.io', desc: 'AI SEO策略', icon: '🏆' },
      { name: 'MarketMuse', url: 'https://www.marketmuse.com', desc: 'AI内容规划', icon: '📊' },
      { name: 'SEMrush AI', url: 'https://www.semrush.com', desc: 'SEO分析AI', icon: '🔎' },
      { name: 'Ahrefs AI', url: 'https://ahrefs.com', desc: 'SEO工具AI', icon: '🔗' },
      { name: 'Similarweb AI', url: 'https://www.similarweb.com', desc: '网站分析AI', icon: '📊' },
      { name: 'Brand24 AI', url: 'https://brand24.com', desc: '社媒监测AI', icon: '📡' },
      { name: 'Mention', url: 'https://mention.com', desc: '品牌监测AI', icon: '📣' },
      { name: 'Sprout Social AI', url: 'https://sproutsocial.com', desc: '社媒管理AI', icon: '🌱' },
      { name: 'Hootsuite AI', url: 'https://www.hootsuite.com', desc: '社交管理AI', icon: '🦉' },
      { name: 'Buffer AI', url: 'https://buffer.com', desc: '社媒排程AI', icon: '📦' },
      { name: 'Later AI', url: 'https://later.com', desc: 'Instagram排程AI', icon: '⏰' },
      { name: 'Manychat', url: 'https://manychat.com', desc: 'AI客服机器人', icon: '💬' },
      { name: 'Intercom AI', url: 'https://www.intercom.com', desc: '客服AI Fin', icon: '🤖' },
      { name: 'Zendesk AI', url: 'https://www.zendesk.com', desc: '客服AI助手', icon: '🛎️' },
      { name: 'Drift AI', url: 'https://www.drift.com', desc: 'AI销售对话', icon: '📈' },
      { name: 'Conversica', url: 'https://www.conversica.com', desc: 'AI销售助理', icon: '💼' },
      { name: 'Clay', url: 'https://www.clay.com', desc: 'AI数据富化', icon: '🏺' },
      { name: 'Instantly AI', url: 'https://instantly.ai', desc: 'AI邮件外发', icon: '⚡' },
      { name: 'Smartlead', url: 'https://smartlead.ai', desc: 'AI邮件营销', icon: '📬' },
      { name: 'Lavender AI', url: 'https://www.lavender.ai', desc: 'AI邮件优化', icon: '💜' },
      { name: 'Mutiny AI', url: 'https://www.mutinyhq.com', desc: 'AI个性化网页', icon: '🎯' },
      { name: 'AdCreative AI', url: 'https://www.adcreative.ai', desc: 'AI广告素材', icon: '🎨' },
      { name: 'Vidyard AI', url: 'https://www.vidyard.com', desc: 'AI视频营销', icon: '📹' },
      { name: 'Wistia AI', url: 'https://wistia.com', desc: '视频托管AI', icon: '🎬' },
      { name: 'Scripta', url: 'https://scripta.app', desc: 'AI社媒脚本', icon: '📜' },
      { name: 'ContentBlaze', url: 'https://www.contentblaze.ai', desc: 'AI内容规划', icon: '🔥' },
      { name: 'Phraser', url: 'https://phraser.ai', desc: 'AI创作工具', icon: '🎨' },
      { name: 'Neuronwriter', url: 'https://neuronwriter.com', desc: 'AI内容优化', icon: '🧠' },
      { name: 'Clearscope', url: 'https://www.clearscope.io', desc: 'AI内容SEO', icon: '🔍' },
      { name: 'Frase', url: 'https://frase.io', desc: 'AI SEO问答', icon: '❓' },
      { name: 'Exceed.ai', url: 'https://exceed.ai', desc: 'AI潜在客户', icon: '🎯' },
      { name: 'Leadfeeder AI', url: 'https://www.leadfeeder.com', desc: 'AI销售线索', icon: '🎣' },
      { name: 'Apollo AI', url: 'https://apollo.io', desc: 'AI销售情报', icon: '🗺️' },
      { name: 'Taplio AI', url: 'https://taplio.com', desc: 'AI LinkedIn', icon: '💼' },
      { name: 'PhantomBuster AI', url: 'https://phantombuster.com', desc: 'AI数据提取', icon: '👻' },
      { name: 'Superhuman AI', url: 'https://superhuman.com', desc: '极速邮件AI', icon: '🚀' },
      { name: 'Flowrite', url: 'https://flowrite.com', desc: 'AI邮件写作', icon: '✍️' },
      { name: 'Crystal AI', url: 'https://www.crystalknows.com', desc: 'AI性格邮件', icon: '💎' },
      { name: 'Bardeen AI', url: 'https://www.bardeen.ai', desc: 'AI工作流自动化', icon: '🤖' },
      { name: 'Pattern AI', url: 'https://pattern91.com', desc: 'AI广告优化', icon: '📐' },
    ]
  },
  {
    category: 'AI学习',
    items: [
      { name: 'Khan Academy Khanmigo', url: 'https://khanacademy.org', desc: 'AI家教Khanmigo', icon: '🎓' },
      { name: 'Duolingo Max', url: 'https://www.duolingo.com', desc: 'AI语言学习', icon: '🦜' },
      { name: 'Coursera AI', url: 'https://www.coursera.org', desc: 'AI课程学习', icon: '📚' },
      { name: 'edX AI', url: 'https://www.edx.org', desc: '在线课程AI', icon: '🎓' },
      { name: 'Quizlet AI', url: 'https://quizlet.com', desc: 'AI学习卡片', icon: '📇' },
      { name: 'Chegg AI', url: 'https://www.chegg.com', desc: 'AI学习辅导', icon: '📖' },
      { name: 'Brilliant', url: 'https://brilliant.org', desc: 'AI数学科学学习', icon: '💡' },
      { name: 'IXL Learning', url: 'https://www.ixl.com', desc: 'AI个性化学习', icon: '📊' },
      { name: 'Socratic', url: 'https://socratic.org', desc: 'Google AI学习', icon: '🔍' },
      { name: 'Photomath', url: 'https://photomath.com', desc: 'AI数学解题', icon: '📐' },
      { name: 'Mathway', url: 'https://www.mathway.com', desc: 'AI数学助手', icon: '➗' },
      { name: 'Wolfram Alpha', url: 'https://www.wolframalpha.com', desc: '计算知识引擎', icon: '🔢' },
      { name: 'Symbolab', url: 'https://www.symbolab.com', desc: 'AI数学计算', icon: '📐' },
      { name: 'Microsoft Math Solver', url: 'https://math.microsoft.com', desc: '微软数学AI', icon: '🪟' },
      { name: 'Anki', url: 'https://apps.ankiweb.net', desc: '间隔重复记忆AI', icon: '🧠' },
      { name: 'RemNote', url: 'https://www.remnote.com', desc: 'AI笔记记忆', icon: '📝' },
      { name: 'Obsidian AI', url: 'https://obsidian.md', desc: '笔记软件AI插件', icon: '🐉' },
      { name: 'Heptabase', url: 'https://heptabase.com', desc: 'AI知识图谱', icon: '🗺️' },
      { name: 'Readwise', url: 'https://readwise.io', desc: 'AI阅读笔记', icon: '📖' },
      { name: 'Hugging Face', url: 'https://huggingface.co', desc: 'AI模型社区', icon: '🤗' },
      { name: 'Kaggle', url: 'https://www.kaggle.com', desc: '数据科学竞赛', icon: '🏁' },
      { name: 'Fast.ai', url: 'https://fast.ai', desc: '深度学习课程', icon: '🚀' },
      { name: 'DeepLearning.AI', url: 'https://www.deeplearning.ai', desc: '吴恩达深度学习', icon: '🧠' },
      { name: 'Google ML', url: 'https://developers.google.com/machine-learning', desc: 'Google机器学习', icon: '🔵' },
      { name: 'Papers with Code', url: 'https://paperswithcode.com', desc: '论文代码结合', icon: '📄' },
      { name: 'arXiv', url: 'https://arxiv.org', desc: 'AI学术论文', icon: '📜' },
      { name: 'Connected Papers', url: 'https://www.connectedpapers.com', desc: '论文关系图谱', icon: '🔗' },
      { name: 'Elicit', url: 'https://elicit.org', desc: 'AI研究助手', icon: '💡' },
      { name: 'Consensus', url: 'https://consensus.app', desc: 'AI学术搜索', icon: '📊' },
      { name: 'Semantic Scholar', url: 'https://www.semanticscholar.org', desc: 'AI学术搜索', icon: '🔍' },
      { name: 'Research Rabbit', url: 'https://researchrabbit.ai', desc: 'AI论文发现', icon: '🐰' },
      { name: 'NoteGPT', url: 'https://notegpt.io', desc: 'AI课程笔记', icon: '📝' },
      { name: 'Yomu AI', url: 'https://yomu.ai', desc: 'AI文档阅读', icon: '📖' },
      { name: 'Swimm AI', url: 'https://swimm.io', desc: 'AI代码文档', icon: '💻' },
      { name: 'Scrimba', url: 'https://scrimba.com', desc: '互动编程学习', icon: '🎥' },
      { name: 'Codecademy AI', url: 'https://www.codecademy.com', desc: '编程学习AI', icon: '💻' },
      { name: 'DataCamp AI', url: 'https://www.datacamp.com', desc: '数据科学AI', icon: '📊' },
      { name: 'Dataquest AI', url: 'https://www.dataquest.io', desc: 'Python AI学习', icon: '🐍' },
      { name: 'Korey AI', url: 'https://korey.ai', desc: 'AI学习助手', icon: '📚' },
      { name: 'TutorAI', url: 'https://www.tutorai.me', desc: 'AI私人导师', icon: '👨‍🏫' },
      { name: 'Humand', url: 'https://www.humand.io', desc: 'AI学习伙伴', icon: '👥' },
      { name: 'Scispace AI', url: 'https://scispace.com', desc: 'AI科研助手', icon: '🔬' },
      { name: 'Scrimba AI', url: 'https://scrimba.com', desc: 'AI编程学习', icon: '🎬' },
      { name: 'Course Hero AI', url: 'https://www.coursehero.com', desc: 'AI学习资料', icon: '📄' },
      { name: 'Studocu AI', url: 'https://www.studocu.com', desc: 'AI学习笔记', icon: '📓' },
      { name: 'Perplexity Scholar', url: 'https://www.perplexity.ai', desc: 'AI学术搜索', icon: '🔭' },
      { name: 'Scopus AI', url: 'https://www.scopus.com', desc: '学术文献AI', icon: '📚' },
    ]
  },
  {
    category: 'AI效率工具',
    items: [
      { name: 'Notion AI', url: 'https://www.notion.so', desc: 'AI笔记和文档', icon: '📝' },
      { name: 'Raycast AI', url: 'https://raycast.com', desc: 'AI效率启动器', icon: '⚡' },
      { name: 'Alfred AI', url: 'https://www.alfredapp.com', desc: 'Mac效率AI', icon: '🅰️' },
      { name: 'TextExpander', url: 'https://textexpander.com', desc: 'AI文本片段', icon: '📋' },
      { name: 'CleanEmail', url: 'https://cleanemail.com', desc: 'AI邮件整理', icon: '📧' },
      { name: 'SaneBox AI', url: 'https://www.sanebox.com', desc: 'AI邮件过滤', icon: '📬' },
      { name: 'Superhuman AI', url: 'https://superhuman.com', desc: '极速邮件AI', icon: '🚀' },
      { name: 'Shortwave AI', url: 'https://shortwave.com', desc: 'AI邮件管理', icon: '📩' },
      { name: 'Draft AI', url: 'https://draft.ai', desc: 'AI邮件草稿', icon: '📧' },
      { name: 'Flowrite', url: 'https://flowrite.com', desc: 'AI邮件写作', icon: '✍️' },
      { name: 'Lavender AI', url: 'https://www.lavender.ai', desc: 'AI邮件优化', icon: '💜' },
      { name: 'Apollo AI', url: 'https://apollo.io', desc: 'AI销售情报', icon: '🗺️' },
      { name: 'Instantly AI', url: 'https://instantly.ai', desc: 'AI冷邮件', icon: '⚡' },
      { name: 'Taplio AI', url: 'https://taplio.com', desc: 'AI LinkedIn', icon: '💼' },
      { name: 'PhantomBuster AI', url: 'https://phantombuster.com', desc: 'AI数据提取', icon: '👻' },
      { name: 'Bardeen AI', url: 'https://www.bardeen.ai', desc: 'AI工作流自动化', icon: '🤖' },
      { name: 'Zapier AI', url: 'https://zapier.com', desc: 'AI自动化平台', icon: '⚡' },
      { name: 'Make AI', url: 'https://www.make.com', desc: '工作流自动化AI', icon: '🔧' },
      { name: 'n8n AI', url: 'https://n8n.io', desc: '开源工作流AI', icon: '🔗' },
      { name: 'Pipedream AI', url: 'https://pipedream.com', desc: 'AI工作流', icon: '🌊' },
      { name: 'Kortex AI', url: 'https://www.kortex.ai', desc: 'AI时间管理', icon: '⏰' },
      { name: 'Clockwise AI', url: 'https://www.getclockwise.com', desc: 'AI日程管理', icon: '🕐' },
      { name: 'Reclaim AI', url: 'https://reclaim.ai', desc: 'AI日历优化', icon: '📅' },
      { name: 'Motion AI', url: 'https://www.usemotion.com', desc: 'AI任务管理', icon: '⚡' },
      { name: 'Timely AI', url: 'https://www.timelyapp.com', desc: 'AI时间追踪', icon: '⏱️' },
      { name: 'Rewind AI', url: 'https://www.rewind.ai', desc: 'AI记忆助手', icon: '⏪' },
      { name: 'Mem AI', url: 'https://mem.ai', desc: 'AI知识管理', icon: '🧠' },
      { name: 'Linear', url: 'https://linear.app', desc: 'AI项目追踪', icon: '📊' },
      { name: 'Asana AI', url: 'https://asana.com', desc: '项目管理AI', icon: '📋' },
      { name: 'Monday AI', url: 'https://monday.com', desc: '工作平台AI', icon: '📆' },
      { name: 'ClickUp AI', url: 'https://clickup.com', desc: 'AI任务管理', icon: '✅' },
      { name: 'Todoist AI', url: 'https://todoist.com', desc: '待办事项AI', icon: '📝' },
      { name: 'Zotero AI', url: 'https://www.zotero.org', desc: 'AI文献管理', icon: '📚' },
      { name: 'Tana AI', url: 'https://tana.inc', desc: 'AI知识工作区', icon: '🌿' },
      { name: 'Arc AI', url: 'https://arc.net', desc: 'AI浏览器', icon: '🌈' },
      { name: 'Sigma AI', url: 'https://sigma.ai', desc: 'AI搜索浏览器', icon: 'σ' },
      { name: 'Monica AI', url: 'https://monica.im', desc: 'AI浏览器助手', icon: '🎭' },
      { name: 'Sider AI', url: 'https://sider.ai', desc: 'AI侧边栏助手', icon: '📌' },
      { name: 'Merlin AI', url: 'https://merlin.ai', desc: '浏览器AI助手', icon: '🔮' },
      { name: 'Reader AI', url: 'https://reader.ai', desc: 'AI阅读助手', icon: '📄' },
      { name: 'Crystal AI', url: 'https://www.crystalknows.com', desc: 'AI性格邮件', icon: '💎' },
      { name: 'Troops AI', url: 'https://troops.ai', desc: 'AI邮件助手', icon: '🤖' },
      { name: 'Espionage', url: 'https://www.espionage.io', desc: 'AI隐私保护', icon: '🕵️' },
      { name: 'Trichrome', url: 'https://www.trichrome.co', desc: 'AI效率工具', icon: '🎨' },
      { name: 'Heptabase', url: 'https://heptabase.com', desc: 'AI知识可视化', icon: '🗺️' },
      { name: 'Readwise AI', url: 'https://readwise.io', desc: 'AI阅读记忆', icon: '📖' },
      { name: 'Elicit AI', url: 'https://elicit.org', desc: 'AI论文研究', icon: '💡' },
      { name: 'Scispace AI', url: 'https://scispace.com', desc: 'AI科研助手', icon: '🔬' },
    ]
  },
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('全部')
  const [showLiveModal, setShowLiveModal] = useState(true)
  const [showLiveButton, setShowLiveButton] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const categories = ['全部', ...aiTools.map(t => t.category)]

  // 关闭弹窗
  const handleCloseModal = () => {
    setShowLiveModal(false)
    setShowLiveButton(true) // 显示悬浮按钮
    localStorage.setItem('liveModalShown', 'true')
  }

  // 重新打开弹窗
  const handleOpenModal = () => {
    setShowLiveModal(true)
    setShowLiveButton(false)
  }

  // 检查是否已经显示过
  useState(() => {
    const hasShown = localStorage.getItem('liveModalShown')
    if (hasShown === 'true') {
      setShowLiveModal(false)
      setShowLiveButton(true) // 显示悬浮按钮
    }
  })

  const filteredTools = aiTools.flatMap(category =>
    category.items.map(item => ({ ...item, category: category.category }))
  ).filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.desc.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === '全部' || tool.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="app">
      {/* 侧边栏 */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-logo">🚀 白开水AI</h2>
          <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>
            ✕
          </button>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-section">
            <h3 className="nav-section-title">分类导航</h3>
            <ul className="nav-list">
              {categories.map(cat => (
                <li key={cat}>
                  <button
                    className={`nav-item ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => {
                      setActiveCategory(cat)
                      setSidebarOpen(false)
                    }}
                  >
                    {cat === '全部' ? '🏠 全部工具' : getCategoryIcon(cat) + ' ' + cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="sidebar-footer">
          <p className="sidebar-copyright">© 2026 白开水AI</p>
        </div>
      </aside>

      {/* 移动端遮罩 */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* 主内容区 */}
      <div className="main-wrapper">
        {/* 移动端顶部栏 */}
        <div className="mobile-header">
          <button className="menu-toggle" onClick={() => setSidebarOpen(true)}>
            ☰
          </button>
          <h1 className="mobile-title">白开水AI</h1>
        </div>

        <header className="header">
          <h1>🚀 白开水AI</h1>
          <p>发现最实用的AI工具，提升工作效率 - 专业AI导航平台</p>
        </header>

        <div className="search-section">
          <input
            type="text"
            className="search-input"
            placeholder="搜索AI工具..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

      <div className="category-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 直播预告弹窗 */}
      {showLiveModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <h2 className="modal-title">🎁 福利教程</h2>
            <div className="modal-live-info">
              <div className="modal-live-item">
                <div className="modal-live-time">⏰ 本月更新！</div>
                <h3 className="modal-live-topic">OpenClaw入门教程 + 实战案例库</h3>
                <p className="modal-live-desc">有手就行，一起养虾</p>
              </div>
            </div>
            <div className="modal-actions">
              <a
                href="https://www.python-office.com/openclaw/"
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn modal-btn-primary"
              >
                🎁 点击领取
              </a>
            </div>
          </div>
        </div>
      )}

      <main className="main-content">
        {activeCategory === '全部' && !searchTerm ? (
          aiTools.map(category => (
            <section key={category.category} className="category-section">
              <h2 className="category-title">{category.category}</h2>
              <div className="tools-grid">
                {category.items.map(tool => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tool-card"
                  >
                    <div className="tool-icon">
                      {tool.icon.startsWith('/') ? (
                        <img src={tool.icon} alt={tool.name} className="tool-icon-img" />
                      ) : (
                        tool.icon
                      )}
                    </div>
                    <div className="tool-info">
                      <h3 className="tool-name">{tool.name}</h3>
                      <p className="tool-desc">{tool.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="tools-grid">
            {filteredTools.map(tool => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tool-card"
              >
                <div className="tool-icon">
                      {tool.icon.startsWith('/') ? (
                        <img src={tool.icon} alt={tool.name} className="tool-icon-img" />
                      ) : (
                        tool.icon
                      )}
                    </div>
                <div className="tool-info">
                  <h3 className="tool-name">{tool.name}</h3>
                  <p className="tool-category">{tool.category}</p>
                  <p className="tool-desc">{tool.desc}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>
      </div>

      {/* 直播预告悬浮按钮 */}
      {showLiveButton && (
        <button className="live-float-button" onClick={handleOpenModal}>
          <span className="live-button-icon">🔴</span>
          <span className="live-button-text">直播</span>
        </button>
      )}

      <section className="about-section">
          <div className="about-content">
            <h2 className="about-title">📖 关于我们</h2>
            <p className="about-text">
              白开水 AI 社区致力于分享最实用、最有价值的 AI 工具和资源，
              帮助每个人更好地利用人工智能提升工作效率。
              我们相信 AI 应该像白开水一样纯净、易用、人人可及。
            </p>
            <a
              href="https://www.python4office.cn/bks-ai/readme/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              加入 AI 交流群 →
            </a>
          </div>
        </section>

      <footer className="footer">
        <p>© 2026 白开水AI导航 | 让AI成为你的得力助手</p>
        <p className="footer-links">
          <Link to="/about">关于我们</Link>
          <Link to="/faq">常见问题</Link>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="icp-link"
          >
            鲁ICP备2021040536号-2
          </a>
        </p>
        {/* 跨站项目导流 */}
        <div className="cross-site-links">
          <a href="https://python4office.cn" target="_blank" rel="noopener noreferrer">技术博客</a>
          <a href="https://www.python-office.com" target="_blank" rel="noopener noreferrer">python-office</a>
          <a href="https://www.python-office.com/openclaw" target="_blank" rel="noopener noreferrer">OpenClaw</a>
          <a href="https://www.python-office.com/how-to-digital-nomad" target="_blank" rel="noopener noreferrer">数字游民</a>
          <a href="https://www.python-office.com/opc" target="_blank" rel="noopener noreferrer">建站教程</a>
        </div>
      </footer>
    </div>
  )
}

// 获取分类图标
function getCategoryIcon(category) {
  const icons = {
    'AI对话': '💬',
    'AI绘画': '🎨',
    'AI编程': '💻',
    'AI写作': '✍️',
    'AI教程': '📚'
  }
  return icons[category] || '📦'
}

export default App
