---
title: "热点速递 · 11月23日：GTA 6 重编译项目三天冲到近一万五千星"
description: "GTA 6 重编译项目 Leonida 一天涨了近一万星；OpenAI 的 GPT-6.2 Astra 和 Sol 正式发布；AI 智能体开始公开攻关 P vs NP，Masullo 的黎曼猜想证明也在被社区形式化；微软宣布 To Do 明年 6 月 30 日停用；rust-anything 逼近八千星。"
pubDate: 2026-11-23
section: "hot"
category: "热点速递"
tags: ["GTA 6", "GitHub", "GPT-6.2", "P vs NP", "微软", "Rust"]
---

昨天刚写过的 GTA 6 重编译项目，今天星数直接翻了三倍。以下数据为 2026-11-23 快照。

## 1. Leonida 一天涨了近一万星，三天冲到 14,855

昨天这个时候还是 5,135 星的 Leonida，今天已经 14,855 星，一天涨了 9,720。这个 11 月 20 日才创建的仓库，做的是把 GTA 6 的 Xbox 版本原生重编译到 PC 上运行，GTA 6 本身还没出 PC 版。

不只是它一个。同主题的项目也在冒头：Xbox2Windows（GTA VI 静态重编译研究，1,300 星）和 xbox-emulator（Xbox Series X|S 模拟器进展记录，1,301 星），都是这几天创建的。提醒一句：这类重编译项目常涉及版权问题，能走多远不好说，先当技术新闻看。

仓库：https://github.com/ItsNotRexed/Leonida

## 2. OpenAI 发布 GPT-6.2 Astra 和 Sol

OpenAI 在 11 月 17 日发布了 GPT-6.2 Astra 和 Sol，两个模型同一天进了 ChatGPT Work、Codex 和 API。Astra 定位最难的专业工作，API 定价每百万 token 输入 8 美元、输出 40 美元，比上一代便宜了两成；Sol 定位日常工作，输入 2 美元、输出 10 美元，和上一代持平。官方说法里，Astra 在内部 ExploitBench 测试上比上一代高了 22 分，同时两个模型都收紧了高风险网络安全请求的默认防护。

来源：https://community.openai.com/t/gpt-6-2-astra-and-sol-are-now-available/1417531

## 3. AI 智能体开始公开攻关 P vs NP，Masullo 的证明也在被社区形式化

数学圈这周很热闹，而且都是公开进行的。一个叫 pequalnp.com 的网站上，一支 AI 智能体舰队正在实时攻关 P vs NP：每条引理的状态都公开记录，验算过的、被推翻的、被判定死路的，全都能看到。结论目前仍然是开放的，这更像一场公开实验，而不是已经有答案的宣告。

另一边，Masullo 那份纯人类写的广义黎曼猜想证明，社区正在用 Lean 把它形式化，进度地图公开在网上。提醒一句：进度条算的是已处理的问题占已发现问题的比例，不是证明正确的程度，一处关键漏洞就能让整份证明垮掉，之前已经有人在证明里找出了问题。

来源：https://pequalnp.com/ 、https://github.com/mccorvie/riemann-masullo

## 4. 微软 To Do 明年 6 月 30 日停用，个人用户没有替代品

微软在 Ignite 期间确认，Microsoft To Do 将在 2027 年 6 月 30 日停用，网页、Windows、Mac、iOS 和 Android 全平台同步。工作和学校账号可以转到 Planner，新的“我的任务”页面从今年 12 月开始上线；个人账号没有微软提供的替代品，官方建议是自己另找一款待办应用。现有的任务和清单不会自动迁移，微软承诺在截止日期前提供导出方式，但具体时间和细节还没公布。To Do 的前身是微软 2015 年收购的 Wunderlist，算下来这款待办应用走了快十年。

来源：https://www.ghacks.net/2026/11/19/microsoft-is-retiring-to-do-in-june-2027-and-personal-users-get-no-replacement/

## 5. rust-anything 逼近八千星，还带火了一个“反向”项目

Rust 渐进重构工具 rust-anything 今天 7,983 星，昨天是 7,404，一天又涨了 579，离八千星只差一步。同一波热度里还冒出一个思路相反的新项目 fast-anything：别把整个应用重写成 Rust，只把最慢的那 5% 找出来重写，11 月 21 日创建，现在已经 1,870 星。

仓库：https://github.com/erkamyaman/rust-anything 、https://github.com/EL4CTEO/fast-anything

---

更多内容见 zqaq.cc.cd。
