const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '白开水AI',
  description: '专业的免费AI工具导航平台，收录100+热门AI工具，帮助用户发现和找到最实用的AI工具',
  url: 'https://www.python4office.cn/ai-nav/',
  logo: 'https://www.python4office.cn/ai-nav/assets/logo.png',
  founder: { '@type': 'Person', name: '程序员晚枫' },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@python4office.cn',
  },
  sameAs: ['https://www.python4office.cn', 'https://github.com/CoderWanFeng'],
}

/**
 * 注入 Organization 的 JSON-LD 结构化数据
 * 帮助搜索引擎理解站点信息，提升 SEO
 */
function SeoSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
    />
  )
}

export default SeoSchema
