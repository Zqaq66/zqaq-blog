---
title: "热点速递 · 11月26日：1Password 出了安全事件，GPT-6.2 Astra 刷新代码高尔夫纪录"
description: "1Password 承认后端被入侵，部分用户的姓名邮箱被下载，但密码库没被碰；GPT-6.2 Astra 在代码高尔夫上第一次超过谷歌员工的人类纪录；VIctory 涨到 12,597 星，还冒出一个三千星的 fork；有人靠延迟指纹认出 Jev 很可能就是 Qwen3.5；黎曼广义猜想的 Lean 证明出了更短的版本。"
pubDate: 2026-11-26
section: "hot"
category: "热点速递"
tags: ["1Password", "GPT-6.2", "GTA 6", "黎曼猜想", "Rust"]
---

今天的头条是 1Password 的安全事件，模型那边也有个有意思的纪录。以下数据为 2026-11-26 快照。

## 1. 1Password 出了安全事件：密码库没事，姓名邮箱被下载了

1Password 11 月 19 日发现，攻击者进了一名员工的企业 GitHub 账号，往后端服务推了恶意代码，下载了一部分用户的管理数据：姓名、邮箱、账号标识、创建时间、最后登录时间，还有邀请和找回流程里邮件链接的 token。好消息是密码库内容、保护密码库的密钥、账号密码和 Secret Key 都没被碰到，1Password 本来就不存用户密码和 Secret Key。

官方已经吊销了被盗 token、轮换了可能泄露的内部凭证，还把邀请和找回邮件里的验证码从 6 位数字加长到 10 位字母数字。受影响的主要是收到过邀请或找回邮件的少量用户，官方说已经单独通知了他们。

给用户的一句提醒：最近提到 1Password、邀请或账号找回的邮件、短信和电话要多留个心眼，谨防钓鱼。1Password 永远不会主动找你要密码或 Secret Key。

来源：https://1password.com/blog/update-on-nov-2026-security-incident

## 2. GPT-6.2 Astra 破了谷歌员工的代码高尔夫纪录

go/codegolf 是一个挺有意思的基准：256 道题、8 种语言，模型要在 30 分钟内把解法写得尽可能短，按字节数打分。GPT-6.2 Astra 在 JavaScript、Python、C++ 三项合计拿到 92.265%，超过了谷歌员工人类纪录的 87.533%，是第一个做到这点的模型，而且三项每一项都超过了人类。

这个纪录的含金量在于，它不是现成的参考答案：这些题是谷歌内部每周比赛的题，参赛的员工花了一周时间抠最短解法，还能事后继续挑战。模型在 96 个格子里赢了 62 格，人类还守着 14 格。

来源：https://bjin.github.io/go-codegolf-benchmark/

## 3. VIctory 涨到 12,597 星，还冒出一个三千星的 fork

GTA 6 上 PC 这出戏还在继续。VIctory（Marvisak/VIctory）今天 12,597 星，昨天 11,279，单日 +1,318。跟踪这几家重编译项目进展的 portwatch-vi 也涨到了 4,102 星，单日 +1,277。11 月 24 日刚创建的 fork fxceless/victory-fork 已经 3,061 星。xcl 涨到 8,311 星（+496），Leonida 的接续仓库 ubiquitarianism/leonida 涨到 2,326 星（+461）。

仓库：https://github.com/Marvisak/VIctory 、https://github.com/4lwayz/portwatch-vi 、https://github.com/xcl-dev/xcl

## 4. Jev 很可能就是 Qwen3.5：靠延迟“指纹”认出来的

Jev 是 TypeSafe 的 System One 模型，专门输出带校准的判断，不怎么生成长文本。它到底基于哪个模型一直是个谜，Modaic 11 月 24 日发了一篇分析，用延迟数据给它做了“指纹鉴定”，结论是：最可能的基座是 Qwen3.5-35B-A3B。

证据有几条。第一是速度：近一万次请求测下来，Jev 的中位延迟只有 77 到 155 毫秒，p50 到 p99 的差距始终只有几十毫秒，吞吐量能冲到每秒 9 万 token 以上，稠密的 27B 模型在 3.5 万就到顶了——这像是稀疏 MoE 的身材，不是稠密模型。第二是分词器：Jev 官方报告的 token 数和任何已知分词器都对不上，但用 Qwen 分词器数出来的 token 数最能预测它的延迟。第三是自我识别：问它“你想说自己是什么模型”，74% 的回答是 Qwen；问“你是 DeepSeek 吗”，95% 以上说不是。作者也留了余地：Qwen3.6 和 3.5 架构相同，光靠吞吐量分不出来，标题里的“probably”不是客气，是真的没法定死。

来源：https://modaic.dev/blog/latency-doesnt-lie

## 5. 黎曼广义猜想的 Lean 证明，出了更短的版本

Anthropic 的研究员参与做了一个更短的 Lean 4 版广义黎曼猜想证明，仓库 lsernau/grh-lean，11 月 25 日创建，今天 142 星。分两个版本：可读版约 30 万行，紧凑版约 7.6 万行，证明的是黎曼猜想和 Dirichlet L 函数的广义黎曼猜想。

先说清楚边界：这份证明只通过了机器检查，还没有数学家通读全文，也没有附论文。作者在 README 里写明了这一点。

仓库：https://github.com/lsernau/grh-lean

顺带一提：rust-anything 今天 9,603 星，离一万星还差 397；fast-anything 涨到 3,951 星，xnulinux 涨到 3,930 星。

---

更多内容见 zqaq.cc.cd。
