# zqaq 科技雷达（zqaq-blog）

独立开发者 zqaq 的个人科技博客：每天追踪全球科技热点，实测 GitHub 开源工具。

- 正式域名：https://zqaq.cc.cd
- 技术栈：Astro 静态站，文章用 Markdown + 内容集合管理

## 栏目

- 热点速递 `/hot/`
- 开源工具实测 `/reviews/`
- AI 与 Agent 动态 `/ai-agent/`
- 榜单解读 `/rankings/`
- 工具库 `/tools/`（可搜索）
- 关于 `/about/`

## 本地开发

```sh
npm install
npm run dev      # 本地预览
npm run build    # 构建到 dist/
npm run preview  # 预览构建产物
```

## 写新文章

在 `src/content/posts/` 下新建 `.md` 文件，frontmatter 需要：

```yaml
---
title: "文章标题"
description: "一句话摘要"
pubDate: 2026-11-18
section: "reviews"   # hot / reviews / ai-agent / rankings
category: "开源工具实测"
tags: ["GitHub"]
---
```

工具库数据在 `src/data/tools.ts`，栏目定义在 `src/data/sections.ts`。
