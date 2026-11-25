---
title: "热点速递 · 11月25日：Leonida 一夜被下架，VIctory 一天破万星"
description: "Take-Two 一纸版权通知让 Leonida 和 3,006 个 fork 一并消失，15 岁的作者宣布退出；接力的 VIctory 一天冲到 11,279 星，已经能进游戏菜单；5.9GB 的 Bonsai 2.5 让本地跑 agent 又近了一步；rust-anything 破九千星。"
pubDate: 2026-11-25
section: "hot"
category: "热点速递"
tags: ["Leonida", "GTA 6", "GitHub", "Bonsai", "Rust"]
---

昨天还是三万星的 Leonida，今天已经找不到了。以下数据为 2026-11-25 快照。

## 1. Leonida 一夜被下架：3,007 个仓库，连同 fork 一起消失

Take-Two 11 月 24 日向 GitHub 发出版权通知，Leonida 原仓库 ItsNotRexed/Leonida 加上 3,006 个 fork，一共 3,007 个仓库被一并禁用。GitHub 平时一次只处理一个仓库，fork 网络超过 100 个、且权利方声明大多数 fork 以同样方式侵权时，可以整网下架，这次就是走了这条规则。

通知里的关键点是时间线：Take-Two 说，Xbox 版 GTA 6 的游戏文件 11 月 20 日被公开传播，Leonida 仓库第二天就建起来了。项目作者自称只有 15 岁，11 月 23 日晚先在 X 上说“我退出，各位，对不起”，随后又说 Rockstar 下架 Discord 服务器只是退出的部分原因，兼顾学业和体育已经够呛，Discord 里还有人对他大吼大叫。17.9 万人的 Discord 服务器和仓库几乎同时消失。

提醒一句：原项目没了之后，冒名顶替的“PC 版下载”已经出现，有安全公司分析的假安装器会在后台跑窃取凭据的木马。想找 GTA 6 PC 版的，先别点任何下载链接。

来源：https://github.com/github/dmca/blob/master/2026/11/2026-11-24-take-two.md 、https://techcheatcodes.com/news/2026/gta-6-leonida-takedown-3007-github-repos/

## 2. 接力的是 VIctory：一天破万星，已经能进菜单

Leonida 倒下，接力的人马上就来了。VIctory（Marvisak/VIctory）11 月 23 日才创建，昨天 1,371 星，今天早上 11,279 星，单日涨了 9,908。同样做 Xbox Series 兼容层的 xcl 也从 1,666 星涨到 7,815 星，单日 +6,149。

VIctory 的 README 写得很实在：游戏能开机、放片头、进菜单，菜单跑满 30fps，也能加载进世界，但世界画面目前还是黑的，进世界还有可能让显卡驱动崩溃。还不是能玩的状态，但比“跑不起来”又往前走了一步。另有一个 2,825 星的 portwatch-vi 在每天跟踪这几家重编译项目的进展。

仓库：https://github.com/Marvisak/VIctory 、https://github.com/xcl-dev/xcl

## 3. Bonsai 2.5：5.9GB 的模型，本地跑 agent 更能干了

PrismML 11 月 24 日发布 Ternary Bonsai 2.5 27B，基于 Qwen3.8 27B 的三值量化模型，整个模型只有 5.9GB，Apache 2.0 开源，能在消费级显卡甚至苹果设备上本地跑。官方说法是，这一代主要补了 agentic coding 的短板：多轮工具调用、出错后调整、长时间任务不断线。

官方给的 benchmark：SWE-bench Verified 75.6 分（满血的 Qwen3.8 27B 是 80.6，上一代 Bonsai 2 是 60.8），Terminal-Bench 2.1 是 60.1 分。速度上，RTX 4090 官方称每秒能生成 204 个 token。这些都是官方数据，还没有第三方实测对照。

来源：https://prismml.com/news/bonsai-2-5-27b

## 4. rust-anything 破九千星，离一万星不远了

rust-anything 今天 9,202 星，昨天 8,703，单日 +499。11 月 16 日创建到现在九天，每天都在涨，没断过。它的“反向”项目 fast-anything 也还在涨，今天 3,597 星，昨天 3,112，单日 +485。

仓库：https://github.com/erkamyaman/rust-anything 、https://github.com/EL4CTEO/fast-anything

## 5. xnulinux：把 macOS 内核塞进 Linux，一天又涨了一千三百多

xnulinux 今天 3,346 星，昨天 2,012，单日 +1,334。做法是把 macOS 的 XNU 内核做成 Linux 下可加载的内核模块，让 arm64 Linux 跑出 macOS 的“性格”。还在早期，但这个想法本身够大胆，涨势也说明不少人在围观。

仓库：https://github.com/AFK-surf/xnulinux

---

更多内容见 zqaq.cc.cd。
