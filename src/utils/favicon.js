/**
 * 运行时 favicon 解析：优先用工具官网自带的图标，失败时由 ToolCard 回退到 emoji
 *
 * 规则优先级：
 * 1. FAVICON_OVERRIDES 命中（头部/SPA/反爬站点的精确图标地址）
 * 2. SKIP_HOSTS 命中 → 返回 null（走 emoji）：跳转/返佣链接与 GitHub 项目
 * 3. 其余用 `origin + /favicon.ico` 通用推导
 */

// 跳转/返佣/邀请域名，以及 GitHub（31 个项目图标都一样，保留各自 emoji 更有区分度）
const SKIP_HOSTS = [
  'github.com',
  'cgref.cn',
  'kimi-bot.com',
  'python4office.cn',
  'codebuddy.cn',
  'qoder.com.cn',
]

// 头部工具精确图标：均为已直连核实、返回真图片且体积很小的地址
// 说明：国际站（ChatGPT/Claude/Gemini 等）本机无法抓取验证，统一走通用规则，
//       能否显示取决于访问者浏览器网络，失败自动回退 emoji。
const FAVICON_OVERRIDES = {
  '豆包': 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/favicon/new-doubao/64x64.png',
  '文心一言': 'https://eb-static.cdn.bcebos.com/logo/favicon.ico',
  '智谱清言': 'https://www.zhipuai.cn/favicon.png',
  '讯飞星火': 'https://xinghuo.xfyun.cn/spark-icon.ico',
  '腾讯元宝': 'https://static.yuanbao.tencent.com/m/yuanbao-web/favicon_new@32.png',
  '海螺AI': 'https://cdn.hailuoai.video/open-hailuo-video-web/public_assets/favicon.png',
  'DeepSeek': 'https://cdn.deepseek.com/chat/icon.png',
  '即梦AI': 'https://lf3-lv-buz.vlabstatic.com/obj/image-lvweb-buz/common/images/dreamina-v1.ico',
  'Kling AI': 'https://klingai.kuaishou.com/favicon.ico',
}

/**
 * 返回工具应使用的远程 favicon 地址；返回 null 表示应使用 emoji。
 * @param {{ name: string, url: string }} tool
 * @returns {string | null}
 */
export function getFaviconUrl(tool) {
  if (!tool) return null

  // 1. 精确覆盖优先（即便其 url 是返佣链接也照常生效）
  if (FAVICON_OVERRIDES[tool.name]) return FAVICON_OVERRIDES[tool.name]

  // 2. 解析域名，命中跳转/返佣/GitHub → 走 emoji
  try {
    const { hostname, origin } = new URL(tool.url.trim())
    if (SKIP_HOSTS.some((h) => hostname === h || hostname.endsWith(`.${h}`))) {
      return null
    }
    return `${origin}/favicon.ico`
  } catch {
    return null
  }
}
