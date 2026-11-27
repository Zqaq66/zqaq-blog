---
title: "热点速递 · 11月27日：rust-anything 破了一万星，VIctory 还在涨"
description: "rust-anything 涨到 10,209 星，破了一万星关口；VIctory 涨到 13,346 星，还冒出一个 AMD 专用 fork；AMD 显卡跑 llama.cpp 有个提速补丁，作者实测生成速度从 35 涨到 55 token/秒；AI 让自托管又好玩了；Intel 的开源等宽字体登上 Hacker News 热榜。"
pubDate: 2026-11-27
section: "hot"
category: "热点速递"
tags: ["rust-anything", "GTA 6", "llama.cpp", "自托管", "字体"]
---

今天的头条是 rust-anything 破了一万星。以下数据为 2026-11-27 快照。

## 1. rust-anything 破了一万星

rust-anything（erkamyaman/rust-anything）今天 10,209 星，昨天 9,603，单日 +606，正式跨过一万星关口。这个工具的思路是：把老程序换成 Rust 之前，先把老程序的行为录下来当标准答案，新版要逐条对答案，全对才准换上，对不上当场抓出来，还能一键退回老版。

我 11 月 25 日实测过它：440 条答案全对，程序快了约 11.6 倍；故意写错一版，当场被抓出 96 条。完整实测见那篇长文。

仓库：https://github.com/erkamyaman/rust-anything

## 2. VIctory 涨到 13,346 星，还冒出一个 AMD 专用 fork

GTA 6 上 PC 这出戏还在继续。VIctory（Marvisak/VIctory）今天 13,346 星，昨天 12,597，单日 +749。跟踪这几家重编译项目进展的 portwatch-vi 涨到了 5,760 星，单日 +1,658，是这几天里涨得最快的一个。11 月 25 日刚创建的 AMD 专用 fork Belobug/VIctory-Belobug-AMD 已经 2,837 星，11 月 24 日的 fork fxceless/victory-fork 涨到 3,280 星。xcl 涨到 8,607 星（+296），Leonida 的接续仓库 ubiquitarianism/leonida 涨到 2,529 星（+203）。

仓库：https://github.com/Marvisak/VIctory 、https://github.com/4lwayz/portwatch-vi 、https://github.com/Belobug/VIctory-Belobug-AMD

## 3. AMD 显卡跑 llama.cpp，有个提速补丁

最近冒出一批针对特定硬件的推理引擎 fork，思路是：通用引擎要照顾所有硬件，针对自家显卡专门优化能跑得更快。一篇上了 Hacker News 热榜的文章（267 分）测了其中一个：stew675/llama-cpp-rdna-boosts，给 llama.cpp 打一套 AMD RDNA 专用补丁。

作者在自己的机器上实测：一块 RX 9700 显卡接笔记本，跑 Qwen3.5-27B 的量化版，预填充从每秒约 700 token 涨到约 1,300，生成速度从每秒约 35 token 涨到约 55。先说清楚：这是作者一台机器上的实测，不是官方基准，不同显卡、不同模型结果会不一样。

文章里还有个值得留意的提醒：有些新引擎为了冲速度，改的不是硬件层面的优化，而是让模型少算点东西——比如只用显存里已有的专家，跳过本该选的专家。速度上去了，答案质量可能悄悄变了，挑这类项目的时候得留意。

仓库：https://github.com/stew675/llama-cpp-rdna-boosts
来源：https://devnull.land/amd-specific-llama-cpp

## 4. AI 让自托管又好玩了

一篇登上 Hacker News 热榜的博文（192 分，109 条评论）讲了个挺有共鸣的事：博主自己搭服务器、自己托管服务很多年了，中间一度热情减退，只求现有服务别出问题；最近几个月，AI 又让他重新有了折腾的劲头。

原因不复杂：他的基础设施配置都放在 Git 仓库里，Docker Compose 文件、脚本、系统配置，AI 编程助手可以直接像改普通项目一样改这些配置。想试个新服务、调个配置、自动化点什么，不用再花一晚上翻文档、排故障，点子更容易落地。他还用 AI 啃下了以前一直想试但没啃动的 NixOS，以及给 VPS 做自己的 Debian 启动镜像。

他也留了个提醒：服务越多，维护负担越重；AI 生成的配置一样可能有 bug 和安全问题，交给 AI 改不等于不用自己看懂改了什么。好玩归好玩，值不值得上，还得自己掂量。

来源：https://janlukas.blog/posts/ai-self-hosting

## 5. Intel 的开源等宽字体，登上 Hacker News 热榜

Intel One Mono 是 Intel 2023 年开源的一款等宽字体，带连字，瞄准的是写代码和终端场景。今天它被翻出来登上 Hacker News 热榜，448 分，234 条评论，仓库现在 10,773 星。

字体这东西，榜单上不常出现，能冲到热榜第一梯队，多少说明大家对“顺眼的等宽字体”一直有需求。仓库里字体文件、用法都齐全，直接能下。

仓库：https://github.com/intel/intel-one-mono

顺带一提：fast-anything 涨到 4,228 星，xnulinux 涨到 4,235 星；Mac 触控板震动发声的小玩具 nospeaker 涨到 1,955 星。

---

更多内容见 zqaq.cc.cd。
