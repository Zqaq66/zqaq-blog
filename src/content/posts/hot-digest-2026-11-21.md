---
title: "热点速递 · 11月21日：有人宣称用 AI 证明了广义黎曼猜想"
description: "数学家 Levent Alpöge 宣称借助 AI 生成了广义黎曼猜想的 Lean 形式化证明，同一天还公布了欧拉方程与纳维-斯托克斯方程有限时间爆破的证明；另有 Thinking Machines Lab 发布可在笔记本上跑的 Inkling 2 Mini、rust-anything 五天破六千星、Blender AI 插件与 iOS 安卓模拟器 Andarium 上架。"
pubDate: 2026-11-21
section: "hot"
category: "热点速递"
tags: ["黎曼猜想", "AI", "Inkling", "Rust", "Blender", "iOS"]
---

今天的头条是数学界的大消息：有人宣称用 AI 证明了广义黎曼猜想——先说清楚，是“宣称”，证明还在验证中。以下数据为 2026-11-21 快照。

## 1. 有人宣称用 AI 证明了广义黎曼猜想，证明还在验证

数学家 Levent Alpöge 公布了一份广义黎曼猜想（GRH）的证明，特点是这份证明完全是 Lean 形式化证明，由内部 AI 模型生成，篇幅巨大。消息一出，Hacker News 上冲到 2,286 分、1,549 条评论，成了当天最热的话题。

同一天 Alpöge 还和合作者公布了另外两个结果：无外力三维不可压缩欧拉方程的有限时间爆破证明，以及纳维-斯托克斯方程的有限时间爆破证明，同样有 Lean 形式化版本。陶哲轩在博客里逐一确认了这三件事，并说明广义黎曼猜想的证明目前正在验证和消化中，从初步分析看用到了朗兰兹纲领与算术几何的现代成果。

要提醒一句：形式化证明能被机器逐行检查，这是它比传统论文更硬的地方；但“证明成立”这个结论要等数学界消化完才能下，急不得。

来源：https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/

## 2. Thinking Machines Lab 发布 Inkling 2 Mini：笔记本上能跑的小模型

Thinking Machines Lab 发布了 Inkling 2 Mini，一个总参数 26.4B、激活 3.4B 的混合专家模型，权重开源。它的特别之处是“循环 transformer”：中间层每个 token 跑三遍，用更少的 token 做更多推理，在 agentic 编程基准 DeepSWE v1.1 上拿到 48.2%，在同尺寸开源权重模型里领先。

整个模型量化后约 20GB，能在消费级笔记本上离线跑，官方演示里在一台 MacBook Pro 上用它几分钟搭了个可玩的飞行模拟器。短板也写明了：多轮对话和复杂约束指令不如 Qwen3.8-27B，知识型基准也没因为循环而变强。

来源：https://thinkingmachines.ai/news/inkling-2-mini/

## 3. rust-anything 五天破六千星，一天又涨近 1,500

昨天刚写过的 Rust 渐进重构工具 rust-anything，今天星数已经到了 6,628，昨天是 5,151，一天涨了 1,477。这个 11 月 16 日才创建的仓库，五天破六千星，涨势还没停。

仓库：https://github.com/erkamyaman/rust-anything

## 4. Blender AI MCP 插件：把 AI 助手接进 Blender

一个 11 月 19 日创建的新仓库，现在 1,764 星。做的是 Blender 的 AI 助手和 MCP 服务器：可视化对话、场景工具、多 agent 工作流，能接 ChatGPT、Claude、Gemini、Ollama、OpenCode，用 bpy 脚本直接操作 Blender。做 3D 又想试 AI 工作流的可以留意一下。

仓库：https://github.com/bookwjitchieni1986/blender-ai-mcp-addon

## 5. iOS 上的安卓模拟器 Andarium 通过苹果审核上架

开发者 imxieyi 的安卓模拟器 Andarium 通过苹果审核，上架了 App Store，底层是开源项目 Kernarium——在 iOS 上原生跑真正的 Linux 内核。Kernarium 现在 2,000 星，11 月 7 日创建。iOS 上跑安卓模拟器这事以前基本走侧载，能进官方商店是个不小的变化。

仓库：https://github.com/imxieyi/Kernarium

---

更多内容见 zqaq.cc.cd。
