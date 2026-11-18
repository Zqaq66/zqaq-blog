export interface Tool {
  name: string;
  repo: string;
  url: string;
  desc: string;
  stars: string;
  language: string;
  addedDate: string;
}

export const tools: Tool[] = [
  {
    name: 'Wireless-Device-Battery-Monitor',
    repo: 'krisgfx9/Wireless-Device-Battery-Monitor',
    url: 'https://github.com/krisgfx9/Wireless-Device-Battery-Monitor',
    desc: '把无线鼠标、耳机、键盘、手柄的电量显示到 Windows 10/11 任务栏，免装厂商软件，支持罗技、雷蛇、SteelSeries、海盗船、HyperX、DualSense、Xbox 手柄及蓝牙设备。',
    stars: '3,384',
    language: 'C++',
    addedDate: '2026-11-18',
  },
  {
    name: 'T3 Code',
    repo: 'pingdotgg/t3code',
    url: 'https://github.com/pingdotgg/t3code',
    desc: '用手机或任何一台电脑，远程操控 Claude Code、Codex 等编程 Agent 干活。',
    stars: '64,642',
    language: 'TypeScript',
    addedDate: '2026-11-18',
  },
  {
    name: 'Open Code Review',
    repo: 'alibaba/open-code-review',
    url: 'https://github.com/alibaba/open-code-review',
    desc: '阿里开源的代码审查工具：确定性流水线 + LLM Agent 混合架构，给出精确到行的审查评论，内置 NPE、线程安全、XSS、SQL 注入等规则。',
    stars: '54,060',
    language: 'Go',
    addedDate: '2026-11-18',
  },
  {
    name: 'agent-browser',
    repo: 'vercel-labs/agent-browser',
    url: 'https://github.com/vercel-labs/agent-browser',
    desc: 'Vercel 出品、专门给 AI Agent 用的浏览器自动化 CLI，Rust 编写。',
    stars: '52,503',
    language: 'Rust',
    addedDate: '2026-11-18',
  },
  {
    name: 'Univer',
    repo: 'dream-num/univer',
    url: 'https://github.com/dream-num/univer',
    desc: '开源的 Office 套件 SDK，把文档、表格、幻灯片和在线协作嵌进你自己的产品里。',
    stars: '29,748',
    language: 'TypeScript',
    addedDate: '2026-11-18',
  },
];
