---
title: "榜单解读 · 11月23日：GTA 6 重编译三天冲近一万五千星，GitHub 热榜被游戏项目接管"
description: "Leonida 三天从 0 冲到 14,855 星，单日涨了 9,720，是本周 GitHub 涨势最猛的新仓；同主题的 Xbox2Windows 和 xbox-emulator 也在同一天冒头。rust-anything 同样在涨，逼近八千星。"
pubDate: 2026-11-23
section: "rankings"
category: "榜单解读"
tags: ["GitHub", "榜单", "GTA 6", "Rust"]
---

今天的 GitHub 新仓榜被一个游戏项目接管了。以下数据为 2026-11-23 快照，星数来自 GitHub API 当日读数。

## Leonida：三天 14,855 星，单日涨 9,720

Leonida（ItsNotRexed/Leonida）11 月 20 日创建，做的是把 GTA 6 的 Xbox 版本原生重编译到 PC 上运行。昨天这个时候它还是 5,135 星，今天已经 14,855 星，单日涨幅 9,720，fork 数也到了 1,209。

三天冲到近一万五千星，这个速度在今年的新仓里也是少见的。原因不难理解：GTA 6 本来还没出 PC 版，市面上有大量等着在 PC 上玩的玩家，一个“能跑起来”的重编译项目，正好撞上了这个需求。热度本身也带自我强化：星数越高，越多人点进来围观。

## 不只一个项目：重编译成了一波小潮

同一个主题下，这几天接连冒出新仓库：

- **Xbox2Windows**（R0Y00/Xbox2Windows）：GTA VI 静态重编译研究，11 月 20 日创建，1,300 星。作者自己的说明很谨慎：两个着色器翻译结果和硬件参考输出一致，但完整游戏启动尚未验证。
- **xbox-emulator**（omonkeyz/xbox-emulator）：Xbox Series X|S 在 PC 上运行的进展记录，11 月 21 日创建，1,301 星。

三个项目同一时间出现，说明这不是某个人的单点子，而是一批开发者同时在往同一个方向钻。值得提醒的是，这类重编译项目常涉及版权问题，能走多远不好说，星数涨得快不等于项目走得远。

## 对照：rust-anything 逼近八千星

另一边，本周一直在涨的 rust-anything 今天到了 7,983 星，昨天 7,404，单日 +579，离八千星只差一步。从 11 月 16 日创建到现在，七天时间，它每天都在榜上。和 Leonida 的爆发式增长比起来，rust-anything 的涨法更像稳步爬升——每天几百星，但一天都没断过。

## 怎么看

这一周的榜单格局很清楚：游戏重编译靠一个未满足的大需求爆发，Rust 重构工具靠持续的实用价值稳步上涨。前者看的是热度能维持多久，后者看的是涨势能持续几天。两类项目都值得继续盯着。

仓库：https://github.com/ItsNotRexed/Leonida 、https://github.com/R0Y00/Xbox2Windows 、https://github.com/omonkeyz/xbox-emulator 、https://github.com/erkamyaman/rust-anything
