---
title: "rust-anything 实测：想把老程序换成 Rust？它先把原版录下来当标准答案"
description: "rust-anything 一周涨到九千四百多星。它最厉害的地方是：动手改代码之前，先把老程序的行为录成一份标准答案；你写的新版要逐条对答案，全对才准换上，对不上当场抓出来，还能一键退回老版。我完整测了一遍：440 条答案全对，程序快了约 11.6 倍；故意写错一版，当场被抓出 96 条。"
pubDate: 2026-11-25
section: "reviews"
category: "开源工具实测"
tags: ["Rust", "开源", "重构", "实测"]
---

先说它能干什么。

假设你有一个用了很久的老程序，想把它换成 Rust 写的版本——Rust 版通常跑得更快、更省内存。但重写代码最怕一件事：新版看起来和老版一样，实际算出来的结果悄悄变了，等发现的时候已经出问题了。

rust-anything 解决的就是这个。它的做法分三步：动手之前，先把老程序的行为录下来，做成一份“标准答案”；等你把新版写好，它拿标准答案逐条对，对不上就不许换，对得上才放行；换上去之后要是后悔，还能一键退回老版。说白了，它把“重写代码”这件凭感觉的事，变成了有录像、有考卷、有判卷、还能反悔的操作。这个工具最近一周涨到了 9,454 星。

先纠正一个最容易有的误会：**它不帮你翻译代码，也不调用大模型。**写 Rust 这一步还是你自己（或者你自己的编程助手）来做，它负责的是录、考、判、退。工具本身不需要任何 API key，不花钱。

注：我实测用的是 2026-11-22 发布的 v3.2.0；发稿时最新版已到 v4.1.0（2026-11-24 发布），下面的数字都是 v3.2.0 的实测结果，没有在新版重测。

演示视频（70 秒，有配音）：

<iframe src="https://www.youtube.com/embed/z35YQdaw5Z8" title="rust-anything 实测演示" style="width:100%;aspect-ratio:16/9;border:0" allowfullscreen></iframe>

## 想自己试，先装上

一行命令就行（电脑上要先有 Rust 工具链）：

```sh
cargo install rust-anything
```

装完再跑一次 `rust-anything setup`，它会把自己登记到你用的编程助手里。还没有 Rust 工具链的话，它的 GitHub 发布页有现成的安装包；做 JavaScript 项目的也可以用 `npm install -g rust-anything`，装的是同一个工具。

## 我是怎么测的

用它官方自带的示例：一个 Python 小程序，里面有两个函数，一个算两个词有多像，一个给列表去重。我把整个流程走了一遍：先让工具录下原版的行为，再自己动手写 Rust 版，然后让工具逐条对答案、做压力测试、测速度，最后把程序正式切换到 Rust 版跑一遍。

被测的程序就是下面这两个文件，贴出来，你可以直接拿去试。第一个是干活的，两个函数都在里面：

```python
"""Near-duplicate names: every pair whose edit distance is at most `limit`."""


def levenshtein(a: str, b: str) -> int:
    previous = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        current = [i]
        for j, cb in enumerate(b, 1):
            current.append(min(previous[j] + 1, current[j - 1] + 1, previous[j - 1] + (ca != cb)))
        previous = current
    return previous[-1]


def dedupe(names: list[str], limit: int) -> list[list[str]]:
    pairs = []
    for i in range(len(names)):
        for j in range(i + 1, len(names)):
            if levenshtein(names[i], names[j]) <= limit:
                pairs.append([names[i], names[j]])
    return pairs
```

第二个负责生成一堆人名再跑一遍去重，测速度时跑的就是它：

```python
import sys

from fuzzy import dedupe

FIRST = ["anna", "ben", "carla", "dmitri", "elif", "farid", "greta", "hugo", "ines", "jonas"]
LAST = ["yilmaz", "smith", "kovacs", "novak", "silva", "berg", "rossi", "lind", "moreau", "kaya"]


def names(n: int) -> list[str]:
    out = []
    for k in range(n):
        name = f"{FIRST[k % 10]} {LAST[(k * 7) % 10]}{k // 100}"
        if k % 3 == 0:
            name = name[:-2] + name[-1] + name[-2]
        out.append(name)
    return out


if __name__ == "__main__":
    pairs = dedupe(names(int(sys.argv[1]) if len(sys.argv) > 1 else 400), 1)
    print(len(pairs), "near-duplicate pairs")
```


## 结果：440 条答案全对，程序快了约 11.6 倍

工具一共录了 **440 条标准答案**，只花了 0.13 秒。而且这些答案不是随便凑的，里面全是容易翻车的输入：带特殊字母的土耳其语、德语单词，希腊语，带肤色标记的 emoji，空列表，还有大到离谱的数字。写程序的人都知道， bug 最爱藏在这些边边角角里。

我写的 Rust 版拿去对答案：**440 条全对**。之后又拿近 3.8 万条新编的输入再考一轮，也全对。正式切换后跑同一个任务，原版要 3.0 秒，Rust 版只要 0.259 秒，**快了约 11.6 倍**。最后我又试了退回老版：文件和原来逐字节一致，退得干干净净。

## 故意写错一版，看它抓不抓得出来

光说全对没意思，得看判卷是不是走过场。我故意把 Rust 版写错——用一种看着没问题、但处理外语和 emoji 会出错的写法——再跑一遍对答案：440 条当场挂了 **96 条**，挂的全是那些带陷阱的输入，每条都列清了“正确答案是什么、你算出来是什么”。这种错误平时极难发现：拿普通英文输入测，怎么测都是对的。能把这种错当场抓出来，才是这个工具真正值钱的地方。

## 三个短板，先说清楚

**第一，它只能考录到的部分。**没录进去的输入、没测到的情况，它保证不了。440 条全对不等于新版和老版在任何情况下都一模一样，真用在正经项目上，得把真实数据和自己的测试都喂进去，录得越全，考得越准。

**第二，写代码这一步省不掉。**它只负责判卷，不负责答题。不会写 Rust、也没有编程助手的人，用不上它。

**第三，第一次用有点折腾。**第一次编译要等约一分钟，工具链也要先装好（我装的时候还失败过一次，重跑才装上）。另外它自己也提醒：不是什么代码搬到 Rust 都更快，搬错地方反而更慢，得先看它测出来的数据再决定搬哪一块。

## 适合谁

适合手里有现成程序、想一块一块慢慢换成 Rust、又怕换出问题的人。有了录像、考卷和一键退回，改坏了能当场发现、能立刻撤回，胆子可以大一点。不适合想点一下按钮就把整个项目自动翻译完的人——它不做这件事，也没打算做。

## 更新 · 11月27日：破了一万星

rust-anything 今天涨到 10,209 星，正式跨过一万星关口。11 月 25 日发稿时是 9,454 星，昨天 9,603 星，两天涨了约 750 星。上面实测的结论不变：这个数字是 GitHub 星数快照，不是实测结果重测。

仓库：https://github.com/erkamyaman/rust-anything
