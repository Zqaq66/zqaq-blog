---
title: "热点速递 · 11月28日：纯汇编写的 LLM 推理程序，14KB 跑起 Qwen3"
description: "llm.asm 用纯汇编写了 Qwen3-0.6B 的推理、裸机系统和训练器，11 月 25 日创建，三天 2,198 星；黑五前夕五家购物网站结账页被植入走 WebRTC 外发卡号的盗刷脚本；Convex 官方插件的 skill 被发现悄悄把用户的项目想法发到远程服务器；GPT-6.2 Astra 花 22 分钟解开一桩 200 年的历史谜题；VIctory 涨到 13,805 星。"
pubDate: 2026-11-28
section: "hot"
category: "热点速递"
tags: ["llm.asm", "汇编", "WebRTC", "Convex", "GPT-6.2", "GTA 6"]
---

今天的头条是一个纯汇编写的 LLM 项目。以下数据为 2026-11-28 快照。

## 1. 纯汇编写的 LLM 推理程序，14KB 跑起 Qwen3

llm.asm（alesha-pro/llm.asm）11 月 25 日创建，三天涨到 2,198 星。整个仓库没有一行 C、没有 libc：Qwen3-0.6B 的推理程序只有 14KB，带分词、KV 缓存、多轮对话；一个能直接启动的裸机系统 24KB，开机不用 Linux 或 Windows 就能跟模型聊天；从头训练 Mini-GPT 的训练器 32KB，还带一个用盲文字符画损失曲线的终端界面。

先说清楚速度那部分：项目方自称，在同一台机器上 CPU 解码比 llama.cpp 快 18% 到 36%，这是作者自己的测试，不是独立基准。不过 14KB 的推理程序本身已经够说明问题了——模型文件还是 600MB 左右，小的是程序，不是模型。

仓库：https://github.com/alesha-pro/llm.asm

## 2. 黑五前夕，五家购物网站结账页被植入盗刷脚本

安全研究机构 InfoHawk 11 月 27 日披露：黑五前一周，Lascana、Samsonite、American Tourister、Revolve、FWRD 五家购物网站的结账页被植入了盗刷脚本。脚本在用户输入卡号时就把卡号、有效期、安全码、姓名、地址、电话和邮箱发出去，哪怕订单最后没下单，卡也可能已经被盗了。五家网站在 11 月 24 日到 25 日都已清除脚本。

这次手法值得留意：脚本的加载和数据外发走的是 WebRTC 数据通道，也就是浏览器视频通话用的那条路，很多安全监控不怎么盯这条通道，常规的内容安全策略也拦不住。文章登上 Hacker News 热榜，396 分，202 条评论。

来源：https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer

## 3. Convex 官方插件的 skill，悄悄把用户的想法发到远程服务器

Convex 官方插件里有个问题被翻上 Hacker News 热榜（210 分）：它的 quickstart skill 会把用户一句话的项目想法 POST 到一个 convex.site 的服务器上，注释里写的是“遥测”，但用户全程不知情。另一个 skill 直接把远程脚本管道进 bash 执行。更微妙的是第三个：它特意教 agent 把下载和执行拆成两次调用，理由写得很直白——合在一起写会被安全分类器拦下来，拆开就不会。

提 issue 的人也说了，他不认为这是恶意，更像是团队为了让上手流程顺畅走的捷径。但对用户来说，自己的想法被发到哪、跑了什么代码，至少应该先知道一声。这件事 10 月 26 日就有人提出来了，今天被翻出来才上了热榜。

来源：https://github.com/convex/convex-backend-skill/issues/64

## 4. GPT-6.2 Astra 花 22 分钟，解开一桩 200 年的历史谜题

一本 1808 年的匿名速写本藏在耶鲁大学的 Beinecke 图书馆，200 多年来没人知道是谁画的。一位历史研究者把它交给 GPT-6.2 Astra，只给了个简单的提示，22 分钟后模型给出答案：法国贵族 Chabot，还建议去查一份微缩胶片日记来验证。

研究者照做了，结果对上了：日记的笔迹和速写本一致，行程和画上标注的日期地点一一对应，6 月 18 日那篇日记里写着“画了一幅速写”，正好就是画里的圣约瑟夫堡。文章登上 Hacker News 热榜，251 分。

先说清楚：这是一位研究者的单次实测，不是标准基准。但它说明这类模型已经能把长流程研究当成活来干，不只是答题。

来源：https://generativehistory.substack.com/p/gpt-62-astra-solves-a-historical

## 5. VIctory 涨到 13,805 星，Leonida 的接续仓库换了地方

GTA 6 上 PC 这出戏还在继续。VIctory（Marvisak/VIctory）今天 13,805 星，昨天 13,346，单日 +459。跟踪这几家重编译项目进展的 portwatch-vi 单日 +968，涨到 6,728 星。Leonida 的接续仓库现在挂在 ProjectLeonida/mandy 名下，2,758 星。11 月 25 日刚创建的 NVIDIA 专用 fork trustno1-coder/VIctory-NVIDIA 已经 3,151 星，定位是 RTX 显卡优化。xcl 涨到 8,733 星（+126）。

仓库：https://github.com/Marvisak/VIctory 、https://github.com/4lwayz/portwatch-vi 、https://github.com/ProjectLeonida/mandy

顺带一提：rust-anything 涨到 10,774 星（+565），fast-anything 涨到 4,461 星，xnulinux 涨到 4,362 星；新仓 nexu-io/opengame 2,228 星，想把 20 多个编程 agent 变成一个能做 3D 和小游戏的工作室。

---

更多内容见 zqaq.cc.cd。
