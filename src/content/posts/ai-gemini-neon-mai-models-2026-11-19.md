---
title: "Gemini 4 Neon 与微软七模型同一天登场：模型竞争换了打法"
description: "11 月 18 日，Google 发布 Gemini 4 Neon，微软在 Ignite 上一口气推出七款 MAI 模型。两家不约而同把卖点从“更强”换成了“更便宜、更适合跑 Agent”，模型竞争的主战场正在从能力榜单转向每任务成本。"
pubDate: 2026-11-19
section: "ai-agent"
category: "AI 与 Agent 动态"
tags: ["Gemini", "微软", "AI 模型", "Agent"]
---

11 月 18 日是模型发布扎堆的一天：Google 上午推出 Gemini 4 Neon，微软在 Ignite 上一口气发布七款 MAI 系列模型。两家新品的共同点很明显——不再只比谁更强，开始比谁更便宜、更适合让 Agent 天天跑。

## Neon：卡在中间的那个位置

Gemini 4 家族现在是三档：Carbon 负责最难的长周期任务，Hydrogen 负责日常快活，Neon 卡在中间，面向复杂但高频的工作，比如长时间编程、多文件重构、企业里的知识工作。

按 Google 官方的说法，Neon 在 Artificial Analysis 智能指数上拿到 61 分，总榜第三；编程 Agent 指数排第一，Terminal-Bench 4.1 得分 65.2%。价格是输入 3 美元、输出 15 美元每百万 token，上下文 100 万 token。官方还给了个成本账：默认档位下，每任务成本比自家 Carbon 低 32%，比竞品的顶级模型低 50% 到 80%。这些都是官方口径，实际用起来如何，还得看开发者们的实测。

值得注意的一点是，Neon 的介绍里花了不少篇幅讲安全：专门有个“Neon for cyber”版本，号称在找漏洞、验证可利用性、打补丁这条线上都做到前沿水平，还要向可信的防御方开放。配合头条的 Nginx 漏洞来看，AI 找漏洞这件事，正从研究走向产品。

## 微软：七款模型，一套定价逻辑

微软的七款模型分工更细：MAI Code 2 和 Code 2 Flash 管编程，Cyber 2 Flash 管安全，Image 2.7 管图像编辑，Realtime 1 管实时语音，Decision 1.1 管模型路由，再加上第二代自研芯片 Maia 200。

微软的卖点比 Google 更直白，就是价格。官方说法：MAI Code 2 达到 GPT-6.1 Sol 约 98% 的编程能力，价格只要四成；对上 Opus 5.5，96% 的能力、5% 的价格；Cyber 2 Flash 在网络安全基准上打平 GPT-6 Astra，单任务成本不到 2%。数字都是微软自己公布的，留待第三方验证，但定价策略本身很清楚：不跟最强的模型拼极限，拼的是“够用且便宜到能 24 小时跑”。

## 换打法意味着什么

过去一年，模型发布的主旋律是“更大、更强、榜单更高”。这两天的新品换了个说法：Neon 强调“前沿水平、更低的每任务成本”，微软直接把“可扩展的性价比”写进标题。

这背后是 Agent 落地的现实：模型不再是偶尔调用一次的演示品，而是要 24 小时挂着干活的工人。能力够用的前提下，成本、速度和稳定性开始决定选型。接下来值得看的是两件事：一是 Neon 和 MAI Code 2 在真实编程任务里的表现能不能对上官方数字，二是这种“便宜大碗”的路线会不会把其他厂商也拉进价格战。

来源：https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/ ；https://microsoft.ai/news/microsoft-ignite-2026/

*数据来源：Google 与微软官方博客，数据为官方说法，发布日期为 2026-11-18。更多内容见 zqaq.cc.cd。*
