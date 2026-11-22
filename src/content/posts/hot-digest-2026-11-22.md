---
title: "热点速递 · 11月22日：Lean 社区正式认证黎曼猜想证明成立"
description: "Lean 与 Mathlib 社区发表联合声明，确认 Alpöge 的广义黎曼猜想证明成立；同一天另一份纯人类证明刚公布就被指出问题；rust-anything 六天破七千星、GTA 6 被重编译到 PC、巴西税务局开源税款计算器、iPhone Duo 折叠测试破 50 万次。"
pubDate: 2026-11-22
section: "hot"
category: "热点速递"
tags: ["黎曼猜想", "Lean", "Rust", "GTA 6", "开源", "iPhone"]
---

昨天的头条今天有了下文：Lean 社区正式认证了那份 AI 生成的黎曼猜想证明。以下数据为 2026-11-22 快照。

## 1. Lean 社区认证：Alpöge 的黎曼猜想证明成立

昨天还在验证中的广义黎曼猜想证明，今天有了正式结论。Lean 与 Mathlib 社区发表联合声明，确认 Levent Alpöge 的证明成立，理由是四点都过关：证明的命题就是 Mathlib 里经过专家审核的黎曼猜想表述；一千七百万行代码能正常编译，几十人复现了同样的结果；用两个独立工具核对过，代码证明的正是那个表述；导出的证明经过 Lean 官方内核和多个独立检查器验证，其中两个检查器本身还有形式化证明，保证它们不会接受错误的证明。

同一天还出了另一条消息：数学家 Alessandro Maria Masullo 也公布了一份广义黎曼猜想的证明，这份是纯人类的，没有 AI 参与，菲尔兹奖得主 Ravi Vakil 转发时说 Brian Conrad 审了几个月、目前看着不错。结果公布不到一天，就有人借助不同的 AI 模型在证明里找出了问题，Vakil 也更新说，所有问题都要等数学界解决满意了才能算数。两份证明、两种命运，对比挺有意思的。

来源：https://leanprover-community.github.io/blog/posts/riemann-hypothesis/ 、https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/

## 2. rust-anything 六天破七千星，一天又涨近 800

前两天写过的 Rust 渐进重构工具 rust-anything，今天星数到了 7,404，昨天是 6,628，一天涨了 776。这个 11 月 16 日才创建的仓库，六天破七千星，涨势还在继续。

仓库：https://github.com/erkamyaman/rust-anything

## 3. 有人把 GTA 6 的 Xbox 版重编译到了 PC，一天 5,135 星

一个 11 月 20 日才创建的仓库 Leonida，现在已经 5,135 星。做的是把 GTA 6 的 Xbox 版本原生重编译到 PC 上运行。GTA 6 本来还没出 PC 版，这个项目一出来就冲上了 GitHub 热榜。提醒一句：这类重编译项目常涉及版权问题，能走多远不好说，先当技术新闻看。

仓库：https://github.com/ItsNotRexed/Leonida

## 4. 巴西税务局把税款计算器开源了，MIT 协议

巴西联邦税务局在 GitHub 上开源了税款计算器的源代码，用 MIT 协议发布，说是为了提高税制改革的透明度。这条在 Hacker News 上拿了 708 分、226 条评论。政府部门直接把核心业务代码开源出来，还用最宽松的协议，这事本身比代码更有意思。

来源：https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/novembro/receita-federal-publica-primeiro-codigo-fonte-aberto-no-github-e-amplia-transparencia-da-reforma-tributaria

## 5. iPhone Duo 折叠测试破 50 万次，还在继续

CNET 的实验室测试里，iPhone Duo 已经扛过了 50 万次折叠，测试还在进行。相关视频在 YouTube 上已有 1,430 万次播放。折叠屏最让人担心的就是铰链和屏幕寿命，50 万次折叠大概相当于普通人用好几年的开合次数，这个数字算是个有分量的参考。

视频：https://www.youtube.com/watch?v=cvgiyCgme70

---

更多内容见 zqaq.cc.cd。
