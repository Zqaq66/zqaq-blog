---
title: "GPT-6.2 Astra 和 Sol 发布：Astra 降价两成，Sol 守住日常定位"
description: "OpenAI 在 11 月 17 日发布 GPT-6.2 Astra 和 Sol，Astra 定位最难的专业工作、API 降价两成，Sol 定位日常工作、价格不变。两个模型同一天进入 ChatGPT Work、Codex 和 API，并收紧了高风险网络安全请求的防护。"
pubDate: 2026-11-23
section: "ai-agent"
category: "AI 与 Agent 动态"
tags: ["OpenAI", "GPT-6.2", "大模型", "Agent"]
---

OpenAI 在 11 月 17 日发布了 GPT-6.2 Astra 和 Sol。这是 Claude 5.2 和 Gemini 4 发布一周之后，OpenAI 的回应。以下信息来自 OpenAI 官方公告，数据为 2026-11-23 快照。

## 发布了什么

两个模型同一天进入 ChatGPT Work、Codex 和 API，模型名分别是 gpt-6.2-astra 和 gpt-6.2-sol。

- **GPT-6.2 Astra**：OpenAI 对它的定位是“最难的项目”，面向长流程的专业工作——文档、表格、法律交付物、科学终端工作和 Agent 编程。API 定价每百万 token 输入 8 美元、输出 40 美元，比 GPT-6 Astra 便宜了两成，缓存输入折扣加深到六折。
- **GPT-6.2 Sol**：定位日常工作和多步 Agent 流程，是默认的通用模型。定价和上一代持平：输入每百万 token 2 美元、输出 10 美元。

两个模型都只在 ChatGPT Work 和 Codex 里提供，没有进普通 Chat。Pro 套餐用户这次也能用上 Ultrafast 模式。

## 官方说法里的两个亮点

一是网络安全能力。OpenAI 说 Astra 是“有史以来网络安全能力最强的模型”，在内部 ExploitBench 测试上比上一代高了 22 分。也正因为能力变强，两个模型发布时都收紧了高风险网络安全请求的默认防护，达到了 OpenAI 内部准备度框架里的 Critical 级别。

二是成本。Astra 降价两成，Sol 保持原价，OpenAI 显然想让 Astra 在高端任务上更有竞争力，同时让 Sol 继续当便宜好用的默认选择。

## 怎么看这次发布

这是一次增量升级，不是换代。模型还是 Astra/Sol 这条双线，架构和定位都没变，变的主要是价格和细节能力。值得注意的信号在时间点上：三家实验室一周之内连发模型，目标都指向同一个方向——让 Agent 长时间干活，同时把每次任务的成本压下来。GPT-6.2 的定价调整，正是这个方向上的一步。

来源：https://community.openai.com/t/gpt-6-2-astra-and-sol-are-now-available/1417531

## 更新 · 11月26日：Astra 在代码高尔夫上超过人类纪录

go/codegolf 基准 11 月 26 日更新了成绩：GPT-6.2 Astra 在 JavaScript、Python、C++ 三项合计 92.265%，超过谷歌员工人类纪录的 87.533%，是第一个做到这点的模型，三项每一项都超过了人类。这个基准比的是把解法写多短，256 道题、每题 30 分钟，模型在 96 个格子里赢了 62 格，人类还守着 14 格。

来源：https://bjin.github.io/go-codegolf-benchmark/
