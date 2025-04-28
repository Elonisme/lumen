# Lumen - Hugo 主题
Lumen 是一个简洁清新的 Hugo 主题，具有类 Markdown 风格的用户界面。

从 [Archie 主题](https://github.com/athul/archie) 分支而来。

## 演示
![](/images/theme.png)
![](/images/archie-dark.png)

## 特性
- Google Analytics 脚本
- 提示框
- 标签
- 自动暗黑模式（根据系统主题）
- 暗/亮模式切换
- tldr; 前端数据
- 目录生成
- CSS 文件的缓存破坏
- Disqus 评论
- 支持本地 Hitokoto
- 支持中文化
- 支持图片自定义大小
- 支持网易云外置播放器

## 安装
在 Hugo 网站目录中，创建一个新的文件夹命名为 `theme`，然后克隆仓库：
```bash
$ mkdir themes
$ cd themes
$ git clone https://github.com/Elonisme/lumen.git
```
编辑 `config.toml` 文件，设置 `theme="archie"`。
更多信息请参阅 Hugo 的官方 [安装指南](https://gohugo.io/installation/)。

如果遇到 Google Analytics 问题，请将 Hugo 更新到 v0.125.0 或更高版本，并确保使用最新的主题版本。

## 撰写文章
在 *content/posts* 文件夹中创建一个新的 `.md` 文件：
```yml
---
title: 文章标题
description:
date:
tldr: (可选)
draft: true/false (可选)
tags: [标签名] (可选)
toc: true/false (可选)
---
```

## 贡献
从 [Archie 主题](https://github.com/athul/archie.git) 分支而来，并遵循 MIT 许可证。
灵感来源于 blog.jse.li 的设计。

----

## 配置选项

### 自定义 CSS
可以通过 `customcss` 配置参数来引入自定义 CSS 文件。

注意：CSS 文件应放置在 `assets` 目录下，例如 `assets/css/first.css`。

```toml
[params]
	customcss = ["css/first.css", "css/second.css"]
```

### 提示框

主题提供了五种不同类型的提示框，包括原始的提示框和自定义提示框。这些提示框兼容暗黑模式和亮模式。

![截图](https://github.com/user-attachments/assets/bcaf7c3c-2339-449f-8bcb-8a2906d7ddcf)

#### 原始

此设置确保与之前的提示框保持向后兼容。

```markdown                                                                                                                                                                                                    
{{< callout emoji="⚡️" text="原始提示框。" >}}
```

#### 警告
```markdown
{{< callout type="alert" text="这是一个警告提示框。" >}}
```

#### 自定义

包括设置自定义的提示框 emoji、标题和 CSS 样式。

```markdown
{{< callout type="custom" emoji="⚡️" title="自定义提示框" text="这是自定义提示框的文本。" style="background-color: transparent; border: 3px solid #d340e0;" >}}
```

#### 提示

```markdown
{{< callout type="tip" text="这是一个提示提示框。" >}}
```

#### 警告

```markdown
{{< callout type="warning" text="这是一个警告提示框。" >}}
```

#### 网易云外置音乐播放器
```markdown
{{< music id="5007195" >}}
```

#### 图片自定义大小
```markdown
{{< myimg src="/imgs/yangwenli.jpg" alt="杨威利" width="300" height="200" >}}
```

## 演示网站的配置

```toml
baseURL = "https://xxxx.github.io/xxxx/"
languageCode = "zh-cn"
title = "Lumen"
theme="archie"
copyright = "© XXXX"
# 代码高亮
pygmentsstyle = "monokai"
pygmentscodefences = true
pygmentscodefencesguesssyntax = true

disqusShortname = "yourDisqusShortname"

paginate=3 # 每页文章数

[params]
	mode="auto" # 颜色模式 → light, dark, toggle 或 auto
	useCDN=false # 不使用 CDN 提供字体和图标，而是本地托管
	subtitle = "简洁清新的 [Hugo 博客主题](https://github.com/athul/archie)"
	mathjax = true # 启用 MathJax 支持
	katex = true # 启用 KaTeX 支持
	enableHitokoto = true # 启用 Hitokoto 支持

# 社交标签

[[params.social]]
name = "GitHub"
icon = "github"
url = "https://github.com/athul/archie"

[[params.social]]
name = "Twitter"
icon = "twitter"
url = "https://twitter.com/athulcajay/"

[[params.social]]
name = "GitLab"
icon = "gitlab"
url = "https://gitlab.com/athul/"

[[menu.main]]
name = "主页"
url = "/"
weight = 1

[[menu.main]]
name = "文章集"
url = "/posts"
weight = 2

[[menu.main]]
name = "分类"
url = "/tags"
weight = 3

[[menu.main]]
name = "关于"
url = "/about"
weight = 4
```