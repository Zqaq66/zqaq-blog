# DESIGN.md — zqaq 的博客

> 界面数值的唯一来源。改 UI 前先读完本文件；新数值先加到这里，再写进代码 token。
> 方向来源：better-design skill 的 house style（premium ultra-minimal，用户点名
> 「像 Linear 官网或苹果备忘录」）+ Anthropic 官方 frontend-design skill 的
> 反模板与自我批评流程。学习日期：2026-11-21。

Updated: 2026-11-21

## Direction

- **Direction:** house style，premium ultra-minimal（单色、内容主导、跟随系统深浅色）。
- **Concept:** 一个独立开发者的备忘录——文章就是笔记，首页就是备忘录的列表视图。
- **Qualities:** 安静、精确、内容本身是唯一的颜色。
- **Avoid:** 渐变与光晕、图标卡片网格、眉题标签、胶囊徽章、中点拼接的元信息、
  给链接粘箭头、每个区块都淡入、平坦层级（标题和正文一样大）。
- **Motion:** 平静而有分量；小控件立即回应按压，大元素不移动。签名动效无——
  博客的签名是列表本身（index 姿势：列表即视觉）。
- **Signature detail:** 首页第一篇以 display 级标题领起全页，其余文章收进一个
  分组圆角列表（备忘录 / iOS 设置式），分隔线只缩进到文字键线。

## 与 house style preset 的偏差（Discrepancies）

| 规则 | 本项目取值 | 原因 |
| --- | --- | --- |
| 字体 Geologica | 苹果系统栈（SF Pro / PingFang SC / 微软雅黑） | Geologica 无中文字形；备忘录类产品在原生端本就用平台字体 |
| 字重 340 正文 | 400 正文 / 500 标题 | PingFang 无 340；400/500 是其可用且清晰的两档 |
| 深色为默认主题 | 跟随系统（prefers-color-scheme） | 备忘录跟随系统；读者多在夜间/日间混合场景 |
| 浅色 canvas #ffffff | 列表页 canvas 用 #f5f5f7（surface 色） | 分组列表图案要求灰底白卡（iOS 分组列表）；文章页 canvas 仍为 #fff |
| 正文行高 1.5 | 文章正文 1.8 | 中文阅读行高需更高才不挤 |

## Code tokens

| Platform | File | Naming |
| --- | --- | --- |
| web | `src/styles/global.css` `:root` | `--canvas`、`--group`、`--text`、`--space-*` 等角色名 |

Units: CSS px。Theme：`:root` 浅色，`@media (prefers-color-scheme: dark)` 深色。

## Fonts

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| 全部 | -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", sans-serif | 400, 500 | 数字用 tabular-nums（日期、星数） |

## Type scale

| Role | Token | Size（桌面 / 手机） | Line height | Weight | Tracking | Usage |
| --- | --- | --- | --- | --- | --- | --- |
| display | `--type-display` | 40 / 32 | 1.1 | 500 | -0.025em | 首页领起文章标题，每页至多一个 |
| large-title | `--type-large` | 34 / 28 | 1.15 | 500 | -0.025em | 栏目/工具/搜索/关于页标题 |
| article-title | — | 34 / 28 | 1.2 | 500 | -0.02em | 文章页标题 |
| h2 | — | 22 | 1.3 | 500 | -0.01em | 文章内二级标题 |
| h3 / row-title | — | 17 | 1.35 | 500 | 0 | 文章三级标题、列表行标题 |
| lead | — | 19 | 1.5 | 400 | 0 | 领起文章的摘要 |
| body | — | 17 | 1.6（文章 1.8） | 400 | 0 | 正文 |
| small | — | 14 | 1.45 | 400 | 0.005em | 行摘要、导航、筛选 |
| caption | — | 12 | 1.35 | 400 | 0.01em | 日期、页脚 |

## Color

| Role | Token | Light | Dark | Usage |
| --- | --- | --- | --- | --- |
| canvas（列表页） | `--canvas` | #f5f5f7 | #000000 | 页面底 |
| canvas（文章页） | `--canvas-plain` | #ffffff | #000000 | 阅读页底 |
| group | `--group` | #ffffff | #161617 | 分组列表卡 |
| surface | `--surface` | #f5f5f7 | #161617 | 目录块、代码块、引用块 |
| field-bg | `--field-bg` | #ffffff | #1d1d1f | 输入框 |
| hover | `--hover` | #f5f5f7 | #1d1d1f | 行/链接悬停填充 |
| text | `--text` | #1d1d1f | #f5f5f7 | 主文字（对 canvas 16.8 / 19.3 : 1） |
| text-secondary | `--secondary` | #6e6e73 | #a1a1a6 | 次文字（≥ 4.66 : 1） |
| hairline | `--hairline` | rgb(0 0 0 / 0.1) | rgb(255 255 255 / 0.1) | 只用于列表分隔与表格 |
| field-border | `--field` | #86868b | #86868b | 输入框边界（≥ 3 : 1） |
| action | `--action` | #1d1d1f | #f5f5f7 | 选中态筛选片填充 |
| on-action | `--on-action` | #ffffff | #000000 | 填充上的文字 |
| link | `--link` | #0066cc | #2997ff | 正文链接，唯一的彩色 |
| focus | `--focus` | #0071e3 | #2997ff | 焦点环 2px、偏移 2px |
| glass | `--glass` | rgb(255 255 255 / 0.72) | rgb(22 22 23 / 0.8) | 只用于粘性导航，blur 20px saturate 180% |

界面保持单色 + 链接蓝；颜色只来自内容本身。无渐变背景、无阴影（深色靠明度分层）。

## Spacing

Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64。
- 行内（标题→摘要）4；行内边距 12 / 16；组内元素 8–16
- 区块之间 32–48；页面上下边距 32 / 48
- 同类兄弟元素只用一个 gap token，由容器（flex/grid）统一给出，不手调单个偏移
- 容器内边距 ≥ 它包含的 gap

## Alignment

- 列表行：左文字键线统一 16；日期/数值在右键线对齐，tabular-nums
- 分隔线从左键线（16）起，不贯通整行
- 标题、正文、页脚共用同一容器左右边缘

## Radii

| Role | Value | Usage |
| --- | --- | --- |
| group | 18px | 分组列表、目录块 |
| field | 12px | 输入框、代码块 |
| media | 18px | 文章图片 |
| pill | 9999px | 筛选片 |

## Components

- **导航**：高 52，glass 粘性；链接 small 号 secondary 色，当前页 text 色；logo 22px 深底小方标（radius 6）。
- **分组列表行**：最小高 44，内边距 12/16；整行可点；hover 填充 --hover（200ms）；标题 row-title，摘要 small 号 secondary 两行截断（line-clamp 2）；右侧 caption 日期。
- **防孤字**：头条标题 text-wrap: balance、头条摘要与行摘要 text-wrap: pretty，避免最后一行只剩一两个字（2026-11-21 线上审片发现头条摘要吊「了。」后定）。
- **领起文章**（首页第一篇）：display 标题 + lead 摘要，不进分组卡，是全页唯一的视觉主角。
- **筛选片**：高 32，pill，1px field 描边，secondary 字；选中 = action 填充 + on-action 字（不只靠颜色：填充本身即状态）；:active 缩放 0.97。
- **输入框**：高 44，radius 12，field-bg，1px field 边；:focus 边变 focus 色 + 3px 淡蓝环。
- **上下篇**：分组卡两行，行尾 ›（secondary），整行可点。
- **触控目标** ≥ 44×44。

## Layout

- 容器：min(44rem, 100% - 3rem)，全站一个宽度；手机边距 ≥ 24。
- 断点：734（字号台阶）、860 以下导航横滑不折行。

## Motion

| Role | Value |
| --- | --- |
| micro（颜色/填充） | 200ms cubic-bezier(0.25, 0.1, 0.25, 1) |
| press | 80ms，scale 0.97（仅筛选片等小控件） |
| focus 环 | 160ms |

无入场动画、无滚动淡入、无闲置运动。prefers-reduced-motion 时去掉缩放与过渡。

## Voice and copy

- 每个事实只出现一次；标题能说清的，不再加说明段（信息测试：删掉这句，用户少知道什么具体事实？答不上来就删）。
- 占位符只写「搜索」；空状态只写状态本身（「暂无文章。」）。
- 日期格式：YYYY年M月D日。

## Prohibited

slop: flat-hierarchy、eyebrow-and-badge、tracked-caps-label、accented-word、
template-punctuation（中点串元信息、链接粘箭头）、ai-palette、gradient-text、
background-glow、identical-card-grid、page-narration、helper-text-by-default、
scroll-reveal-all。记录在本文件中的 house style 偏差不算 slop。
