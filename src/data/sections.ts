export interface Section {
  slug: 'hot' | 'reviews' | 'ai-agent' | 'rankings' | 'science';
  name: string;
  desc: string;
}

export const sections: Section[] = [
  { slug: 'hot', name: '热点速递', desc: 'X、YouTube、Hacker News 与国内社区的科技热点，第一时间速递。' },
  { slug: 'reviews', name: '开源工具实测', desc: 'GitHub 上值得一试的开源小工具，逐个上手实测。' },
  { slug: 'ai-agent', name: 'AI 与 Agent 动态', desc: '大模型、编程 Agent 与 AI 基础设施的新动向。' },
  { slug: 'rankings', name: '榜单解读', desc: 'GitHub Trending、Product Hunt 等榜单背后的趋势解读。' },
  { slug: 'science', name: '科普', desc: '把复杂的科学讲清楚，从基因编辑到前沿研究，一篇一篇慢慢拆解。' },
];

export const sectionName = (slug: string) =>
  sections.find((s) => s.slug === slug)?.name ?? slug;
