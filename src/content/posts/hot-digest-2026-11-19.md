---
title: "热点速递 · 11月19日：Nginx 两个严重漏洞，HTTP/2 用户尽快升级"
description: "Nginx 曝出两个未授权远程代码执行漏洞，CVSS 9.2，11 月 18 日已公开修复；同一天 Google 发布 Gemini 4 Neon、微软一口气推出七款新模型；另有 Rust 渐进重构工具 rust-anything 和 Quad9 撤出法国的消息。"
pubDate: 2026-11-19
section: "hot"
category: "热点速递"
tags: ["Nginx", "安全漏洞", "Gemini", "微软", "Rust", "DNS"]
---

今天的头条是安全圈的大事：Nginx 曝出两个能远程执行代码的漏洞。与此同时，Google 和微软同一天发布新模型，模型这场仗的打法正在变。以下数据为 2026-11-19 快照。

## 1. Nginx 两个未授权 RCE 漏洞，CVSS 9.2

两个漏洞编号 CVE-2026-123633 和 CVE-2026-123007，都是 HTTP/2 处理里的内存安全问题，未经身份验证就能在服务器上执行任意代码，CVSS 4.0 评分 9.2。其中一个从 2015 年的 Nginx 1.9.5 起就存在，藏了十多年。11 月 18 日 F5 已随安全版本公开披露，修复版是 1.30.7（稳定版）和 1.31.9（主线版）。Wiz 的报告还提到，这两个漏洞是研究人员借助 AI 代码扫描发现的，多个团队独立撞上了同一个问题。

如果你在用 Nginx，第一步是确认有没有开 HTTP/2，有的话尽快升级；暂时升不了的，先把 HTTP/2 关掉顶一顶。

来源：https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities

## 2. Google 发布 Gemini 4 Neon，主打快和便宜

Google 在 11 月 18 日发布 Gemini 4 Neon，定位在 Gemini 4 家族中间：比 Carbon 轻，比 Hydrogen 深。官方说法是，智能指数 61 分排在 Artificial Analysis 总榜第三，100 万 token 上下文，输入 3 美元、输出 15 美元每百万 token，默认档位下每任务成本比 Carbon 低 32%。已经在 Gemini API、AI Studio 和 Gemini 应用里向付费用户开放。

来源：https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/

## 3. 微软 Ignite 一口气推出七款新模型

微软在 Ignite 2026 上发布了七款 MAI 系列模型：MAI Code 2 和 Code 2 Flash 做日常编程，MAI Cyber 2 Flash 做安全，MAI Image 2.7 做图像编辑，MAI Realtime 1 做实时语音，还有决策模型 Decision 1.1 和第二代自研芯片 Maia 200。官方通稿反复强调的只有一个词：性价比——比如 MAI Code 2 达到 GPT-6.1 Sol 约 98% 的编程能力，价格只要四成左右。

来源：https://microsoft.ai/news/microsoft-ignite-2026/

## 4. rust-anything：把应用一点点重构成 Rust

一个 11 月 16 日才创建的 Rust 工具，三天拿到 3,327 星。思路很实在：不用一次性重写，先把原应用的行为录下来，再一块一块用 Rust 替换，每步都拿录好的行为做对照，支持 TypeScript、Python、C、Go、Ruby、Java 的项目。想把关键模块换成 Rust 又怕改出毛病的团队，可以留意一下。

仓库：https://github.com/erkamyaman/rust-anything

## 5. Quad9 宣布 11 月 24 日撤出法国

免费公共 DNS 解析器 Quad9（9.9.9.9）宣布，将于 11 月 24 日停止响应来自法国的查询。原因是巴黎法院因它拒绝屏蔽盗版体育直播域名，开出每天 1,000 欧元的罚单，而法国还有大约 20 起类似案件在排队。Quad9 是家非营利机构，表示付不起累积的罚单，只能退出。法国用户失去的是一个带恶意域名过滤的解析器，盗版站点本身并不会因此下线。

来源：https://techstackups.com/articles/quad9-leaves-france-dns-blocking/

*数据来源：各来源页面与 API，星数与分数为 2026-11-19 当日快照；厂商数据为官方说法。更多内容见 zqaq.cc.cd。*
