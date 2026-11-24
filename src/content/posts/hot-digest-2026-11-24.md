---
title: "热点速递 · 11月24日：黄仁勋复职，英伟达单日暴涨 31%"
description: "黄仁勋辞职 11 天后复职，英伟达股价单日涨 31%、市值逼近 4 万亿美元；智谱发布 GLM-5.4，Loop Transformer 架构让 28 层跑两遍；自研浏览器 Ladybird 进入 alpha；Leonida 破三万星，fast-anything 三天破三千星。"
pubDate: 2026-11-24
section: "hot"
category: "热点速递"
tags: ["英伟达", "黄仁勋", "GLM-5.4", "Ladybird", "GitHub"]
---

辞职 11 天，黄仁勋回来了，英伟达股价一天涨了三成。以下数据为 2026-11-24 快照。

## 1. 黄仁勋复职，英伟达单日暴涨 31%

英伟达董事会 11 月 23 日宣布，恢复黄仁勋的总裁、首席执行官和董事职务，立即生效。11 天前他刚因个人争议辞职，董事会当时还说不打算让他回来，11 天后全票通过请他回来。

市场反应很直接：英伟达股价周一收涨 31%，报 165.05 美元，市值单日增加近 1 万亿美元，逼近 4 万亿美元；纳斯达克综合指数涨 6.51%，标普 500 涨 4.73%。董事会说，在做决定时听取了美国政府高层的意见，认为复职不构成国家安全风险，不过针对黄仁勋的内部调查还会继续。12 月 1 日和 3 日他还要去国会作证。

来源：https://www.aljazeera.com/economy/2026/11/23/nvidia-board-reinstates-jensen-huang-as-ceo

## 2. 智谱发布 GLM-5.4：28 层跑两遍的 Loop Transformer

智谱 11 月 23 日发布 GLM-5.4，第一个用 Loop Transformer 架构的旗舰模型。做法是把 GLM-5 底座的 28 层在一次前向计算里跑两遍，第二遍复用第一遍的权重，网络变深了，参数没变多，总参数约 7500 亿。官方说法是，智能水平可比 2 万亿到 3 万亿参数的模型，速度空闲时最高每秒 200 个 token、高峰时 70 到 80 个——这些都是官方说法，这次发布还没有公开的 benchmark 可以对照。

另外两个变化：旗舰线第一次加上视觉能力，能直接看截图和图片；上下文窗口 100 万 token。目前只能通过 GLM Coding Plan 订阅用上，API 要等安全评估之后，权重开源也还在等。智谱还透露，约 3 万亿参数的 GLM-5.5 预计 12 月发布。

来源：https://z.ai/blog/glm-5.4

## 3. 自研浏览器 Ladybird 进入 alpha，可以下载试用了

做了多年的独立浏览器引擎 Ladybird 正式进入 alpha，macOS 和 Linux 版可以直接下载，不用再从源码编译。这是少数从零写起、不用 Chromium 也不是 Firefox 分支的浏览器引擎。

作者在公告里说得很实在：alpha 版有些网站打不开，也会崩溃，崩了可以从浏览器里上报；安全方面不做任何承诺，欢迎来“黑”它，好让他们加固。alpha 是滚动更新通道，之后会持续推送自动更新。

来源：https://ladybird.org/posts/alpha/

## 4. Leonida 破三万星，一天又涨了一万六千多

昨天还是 14,855 星的 Leonida，今天早上已经 31,349 星，单日涨了 16,494，fork 也到了 2,841。GTA 6 重编译这波热度还在扩：昨天刚创建的 VIctory（同样是尝试在 PC 上跑 GTA VI）已经 1,371 星，Xbox Series 兼容层 xcl 到了 1,666 星。

提醒一句：这类重编译项目常涉及版权问题，能走多远不好说，先当技术新闻看。

仓库：https://github.com/ItsNotRexed/Leonida

## 5. fast-anything 三天破三千星，xnulinux 把 macOS 内核塞进 Linux

fast-anything 今天 3,112 星，昨天 1,870，一天涨了 1,242。它和 rust-anything 思路相反：不把整个应用重写成 Rust，只找出最慢的那 5% 重写。rust-anything 自己也还在涨，今天 8,703 星，破了八千。

另一个新面孔是 xnulinux，11 月 20 日创建，2,012 星：把 macOS 的 XNU 内核做成 Linux 下可加载的内核模块，让 arm64 Linux 跑出 macOS 的“性格”。还在早期，但想法够大胆。

仓库：https://github.com/EL4CTEO/fast-anything 、https://github.com/AFK-surf/xnulinux

---

更多内容见 zqaq.cc.cd。
