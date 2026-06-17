import { Link } from 'react-router-dom'
import './FAQ.css'

const GITHUB_EDIT_URL = 'https://github.com/CoderWanFeng/ai-nav/edit/master/src/pages/FAQ.jsx'

const faqData = {
  general: {
    title: 'AI工具常见问题',
    icon: '💡',
    items: [
      {
        q: '什么是AI工具导航？',
        a: 'AI工具导航是一个收录各类人工智能工具的网站平台，帮助用户快速找到适合自己的AI工具。白开水AI导航收录了100+热门AI工具，包括AI对话（如ChatGPT、Claude）、AI绘画（如Midjourney、Stable Diffusion）、AI办公、AI编程等分类。我们相信AI应该像白开水一样纯净、易用、人人可及。'
      },
      {
        q: '白开水AI导航收录了哪些AI工具？',
        a: '白开水AI导航收录了100+热门AI工具，主要分类包括：\n\n• AI对话工具：ChatGPT、Claude、Gemini、文心一言、通义千问等\n• AI办公工具：AIPPT、Notion AI、Jasper、秘塔写作猫等\n• AI绘画工具：Midjourney、Stable Diffusion、DALL·E 3、通义万相等\n• AI编程工具：GitHub Copilot、Cursor、通义灵码等\n• AI软件：Python、WorkBuddy等\n• AI开源项目：OpenClaw、python-office等'
      },
      {
        q: 'AI工具导航是免费的吗？',
        a: '是的，白开水AI导航是完全免费的AI工具导航平台。我们收录的AI工具中，部分是免费工具（如Stable Diffusion、文心一言基础版），部分是付费工具（如Midjourney、Notion AI专业版），用户可以根据自身需求选择使用。网站本身不收取任何费用。'
      },
      {
        q: '如何提交自己的AI工具到导航网站？',
        a: '白开水AI导航欢迎用户推荐优秀的AI工具。您可以通过以下方式提交：\n\n1. 加入我们的AI交流群，直接推荐工具\n2. 关注公众号「白开水AI」，发送工具信息\n3. 在GitHub上提交Issue或Pull Request\n\n我们会定期审核并添加优质工具到导航中。'
      },
      {
        q: '白开水AI导航更新的频率是怎样的？',
        a: '我们每周都会更新工具列表，包括：\n\n• 新增热门AI工具\n• 更新已有工具的链接和描述\n• 移除已停服或质量下降的工具\n• 补充用户推荐的优质工具\n\n如果您发现链接失效或有优质工具推荐，请及时联系我们。'
      }
    ]
  },
  tools: {
    title: 'AI工具使用问题',
    icon: '🤖',
    items: [
      {
        q: 'ChatGPT和Claude哪个更好用？',
        a: 'ChatGPT和Claude各有优势，选择取决于您的使用场景：\n\nChatGPT（OpenAI）：\n• 创意写作能力强，生成内容流畅\n• 代码生成生态完善，插件丰富\n• GPT-4版本功能强大，支持多模态\n• 适合需要创意和广泛知识的场景\n\nClaude（Anthropic）：\n• 长文本处理能力强，支持20万token上下文\n• 安全性和对齐做得更好\n• 逻辑推理能力强，适合分析任务\n• 适合长文档处理和复杂分析\n\n两者都可以在白开水AI导航中找到并直接访问。'
      },
      {
        q: '有哪些免费的AI绘画工具推荐？',
        a: '以下是免费好用的AI绘画工具推荐：\n\n免费工具：\n• Stable Diffusion：开源免费，可本地部署，社区生态丰富\n• 通义万相：阿里出品，每日免费额度，风格多样\n• 文心一格：百度出品，有免费试用次数，中文支持好\n• Leonardo.ai：每日免费Token，画质优秀\n\n付费工具（行业标杆）：\n• Midjourney：效果惊艳，社区活跃\n• DALL·E 3：OpenAI出品，与ChatGPT集成\n\n这些工具都可以在白开水AI导航的「AI绘画」分类中找到。'
      },
      {
        q: 'AI编程助手哪个最适合程序员？',
        a: '不同AI编程工具有不同定位：\n\n专业级：\n• GitHub Copilot：与VS Code深度集成，代码补全准确\n• Cursor：专为AI时代打造的编辑器，协作能力强\n• 通义灵码：阿里出品，中文编程支持好，免费使用\n\n入门级：\n• CodeWhisperer：AWS出品，亚马逊用户免费\n• Cody：Sourcegraph出品，适合代码搜索和分析\n\n学生/个人开发者：\n• GitHub Copilot学生认证免费\n• Cursor有免费额度\n\n更多工具可在「AI编程」分类中查看。'
      },
      {
        q: 'AI写作工具哪个最好用？',
        a: '不同场景有不同的最佳选择：\n\n中文写作：\n• 秘塔写作猫：专注中文写作，改写润色能力强\n• 文心一言：百度出品，中文理解优秀\n• 通义千问：阿里出品，逻辑性强\n\n英文写作：\n• ChatGPT：通用性强，各场景都适用\n• Claude：长文本处理好，适合论文\n• Jasper：营销文案专用，模板丰富\n• Copy.ai：快速生成各种文案\n\n办公文档：\n• Notion AI：与Notion笔记无缝集成\n• AIPPT：专门做PPT，AI一键生成\n\n根据您的写作场景选择合适的工具。'
      },
      {
        q: '国内有哪些好用的AI工具？',
        a: '国内AI工具发展迅速，以下是各领域的优秀产品：\n\nAI对话：\n• 文心一言（百度）- 免费使用，中文能力强\n• 通义千问（阿里）- 超长上下文，免费可用\n• 豆包（字节）- 抖音生态集成\n• Kimi（月之暗面）- 长文本处理强\n• 智谱清言（智谱AI）- 学术场景表现好\n\nAI绘画：\n• 通义万相（阿里）- 每日免费\n• 文心一格（百度）- 中文理解好\n• 哩布哩布（国产Stable Diffusion）- 社区活跃\n\nAI办公：\n• WPS AI - 文档处理\n• 飞书妙记 - 会议记录\n• 腾讯文档AI - 在线协作\n\n这些都可以在白开水AI导航找到直达链接。'
      }
    ]
  },
  tech: {
    title: '技术相关问题',
    icon: '⚙️',
    items: [
      {
        q: '什么是AIGC？和AI有什么区别？',
        a: 'AIGC = AI-Generated Content（人工智能生成内容），是AI应用的一个重要分支。\n\nAI（人工智能）的范围更广，包括：\n• 机器学习\n• 计算机视觉\n• 自然语言处理\n• 机器人技术等\n\nAIGC特指利用AI技术自动生成内容，包括：\n• 文字（文章、代码、对话）\n• 图片（绘画、设计）\n• 视频（动画、短视频）\n• 音频（音乐、语音合成）\n\n简单说：AIGC是AI在内容创作领域的具体应用。'
      },
      {
        q: 'AI工具会取代人类工作吗？',
        a: 'AI工具不会完全取代人类，但会改变工作方式：\n\n会被影响的岗位：\n• 简单重复性工作（如基础翻译、客服）\n• 标准化内容生产（如新闻稿、基础代码）\n• 初级设计工作（如简单配图）\n\n不会被取代的能力：\n• 创意和创新能力\n• 复杂决策和判断\n• 人际沟通和协作\n• 专业领域深度经验\n\n最佳策略是：学会使用AI工具，让AI成为你的助手而不是对手。白开水AI导航正是帮助您找到这些AI助手工具的平台。'
      },
      {
        q: '如何学习使用AI工具？',
        a: '学习AI工具的路径建议：\n\n入门阶段（1-2周）：\n1. 注册ChatGPT或文心一言，体验AI对话\n2. 尝试用AI绘画工具生成图片\n3. 用AI辅助写作或翻译\n\n进阶阶段（1个月）：\n1. 学习提示词（Prompt）工程\n2. 深入使用1-2个专业工具\n3. 加入AI社区，学习他人经验\n\n专业阶段（长期）：\n1. 关注AI最新发展\n2. 尝试API调用和自动化\n3. 将AI融入工作流程\n\n推荐资源：关注白开水AI公众号，定期分享AI使用技巧。'
      },
      {
        q: 'AI工具的API是什么？怎么使用？',
        a: 'API = Application Programming Interface（应用程序接口），是软件之间交互的桥梁。\n\nAI工具API的用途：\n• 将AI能力集成到自己的应用\n• 批量处理任务\n• 实现自动化工作流\n• 开发自定义AI产品\n\n常见AI API：\n• OpenAI API：最强大，但需要科学上网\n• Claude API：Anthropic官方提供\n• 百度文心API：国内可用\n• 阿里通义API：性价比高\n\n使用API需要：\n1. 注册开发者账号\n2. 获取API Key\n3. 阅读官方文档\n4. 调用相应接口\n\n如果您是开发者，可以关注白开水AI导航的「AI编程」分类获取开发工具。'
      }
    ]
  }
}

function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": Object.values(faqData).flatMap(section =>
      section.items.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a.replace(/\n\n/g, ' ').replace(/\n/g, ' ')
        }
      }))
    )
  };

  return (
    <div className="faq-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <header className="faq-header">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">首页</Link>
            <span>/</span>
            <span>AI工具常见问题</span>
          </nav>
          <h1>🤔 AI工具常见问题</h1>
          <p className="subtitle">关于AI工具导航和AI工具使用的常见问题解答</p>
        </div>
      </header>

      <main className="faq-main">
        <div className="container">
          {/* Schema标记的FAQ内容 */}
          <div className="faq-intro">
            <h2>关于白开水AI导航</h2>
            <p>
              白开水AI导航（python4office.cn）是专业的免费AI工具导航平台，致力于帮助用户发现和找到最实用的AI工具。
              我们收录了100+热门AI工具，涵盖AI对话、AI办公、AI绘画、AI编程等多个分类，帮助每个人更好地利用人工智能提升工作效率。
              以下整理了用户最常问的问题，希望对您有所帮助。
            </p>
          </div>

          {Object.entries(faqData).map(([key, section]) => (
            <section key={key} className="faq-section">
              <h2 className="faq-section-title">
                <span>{section.icon}</span>
                {section.title}
              </h2>
              <div className="faq-list">
                {section.items.map((item, index) => (
                  <details key={index} className="faq-item">
                    <summary className="faq-question">
                      <span className="faq-q-icon">Q</span>
                      {item.q}
                    </summary>
                    <div className="faq-answer">
                      {item.a.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}

          <section className="faq-cta">
            <h2>还有其他问题？</h2>
            <p>如果您还有其他问题，欢迎通过以下方式联系我们：</p>
            <div className="cta-buttons">
              <a href="https://www.python4office.cn/bks-ai/" target="_blank" rel="noopener noreferrer" className="cta-btn primary">
                加入AI交流群
              </a>
              <Link to="/" className="cta-btn secondary">
                浏览AI工具导航
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default FAQ
