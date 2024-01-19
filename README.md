<div align="center">

![Go-Proxy-BingAI](./docs/img/header.png)

# Go-Proxy-BingAI

基于微软 New Bing 定制的微软 BingAI 演示站点

一致UI 体验, ChatGPT 提示词, 基本兼容 BingAI 所有功能, 支持 OpenAI 格式 API 调用

一键部署, 国内可用, 无需登录即可畅聊

![Golang](https://img.shields.io/badge/Golang-1.21.6-blue?style=flat-square&logo=go) ![Vue3](https://img.shields.io/badge/Vue-3.3.2-green?style=flat-square&logo=vue.js)

![GitHub stars](https://img.shields.io/github/stars/Harry-zklcdc/go-proxy-bingai.svg?style=flat-square&label=Stars&logo=github) ![GitHub forks](https://img.shields.io/github/forks/Harry-zklcdc/go-proxy-bingai.svg?style=flat-square&label=Forks&logo=github) ![Release](https://img.shields.io/github/v/release/Harry-zklcdc/go-proxy-bingai.svg?style=flat-square&label=Release&logo=github&color=light-green)

</div>

## 📋 目录

- [Go-Proxy-BingAI](#Go-Proxy-BingAI)
  
  - [教程](#-教程十分重要)
  - [一键部署](#-一键部署)
  - [特色简介](#-特色简介)
  - [效果展示](#-效果展示)
  - [用户交流](#%EF%B8%8F-用户交流)
  - [免责声明](#%EF%B8%8F-免责声明)

## 📝 教程（十分重要）

> [!WARNING]
> 查看 [**>>>快速教程<<<**](https://github.com/Harry-zklcdc/go-proxy-bingai/wiki)

## 🚀 一键部署

### BingAI + 人机验证服务器

> #### 🤗 Hugging Face 部署
>
> [![部署到HuggingFace](https://huggingface.co/datasets/huggingface/badges/raw/main/deploy-on-spaces-md.svg)](https://huggingface.co/spaces/Harry-zklcdc/go-proxy-bingai?duplicate=true&visibility=public)

> #### CodeSandbox 部署
>
> [![Edit BingAI](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/devbox/go-proxy-bingai-k5g89n?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clrkh5br100063b6jpvkrj6pc%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clrkh5br000023b6juoy4kphl%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clrkh5br000043b6jf129o7fr%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clrkh5br000053b6jhjpv01cp%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B40%252C60%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clrkh5br000023b6juoy4kphl%2522%253A%257B%2522id%2522%253A%2522clrkh5br000023b6juoy4kphl%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clrkh5br000053b6jhjpv01cp%2522%253A%257B%2522id%2522%253A%2522clrkh5br000053b6jhjpv01cp%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A8080%252C%2522id%2522%253A%2522clrkhtsqx038w3b6jyuq73yit%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252Fweb%252Findex.html%253Fshowconv%253D1%2523%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clrkhtsqx038w3b6jyuq73yit%2522%257D%252C%2522clrkh5br000043b6jf129o7fr%2522%253A%257B%2522id%2522%253A%2522clrkh5br000043b6jf129o7fr%2522%252C%2522tabs%2522%253A%255B%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A11.720116618075807%257D)

### BingAI 本体

> #### Vercel 部署
>
> [![Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHarry-zklcdc%2Fgo-proxy-bingai&env=BYPASS_SERVER&env=USER_KievRPSSecAuth&project-name=go-proxy-bingai&repository-name=go-proxy-bingai)

> #### Replit 部署
>
> [![Run on Repl.it](https://img.shields.io/badge/Run_on_Repl.it-grey?logo=replit&size=large)](https://repl.it/github/Harry-zklcdc/go-proxy-bingai)

> #### Cloudflare Worker 部署
>
> [![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://github.com/Harry-zklcdc/go-proxy-bingai/wiki/Cloudflare-Worker-%E9%83%A8%E7%BD%B2)

### 人机验证服务器

> #### 🤗 Hugging Face 部署
>
> [![部署到HuggingFace](https://huggingface.co/datasets/huggingface/badges/raw/main/deploy-on-spaces-md.svg)](https://huggingface.co/spaces/zklcdc/go-bingai-pass?duplicate=true&visibility=public)

> #### CodeSandbox 部署
>
> [![Edit BingAI](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/devbox/go-bingai-pass-v2ymzk?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clrkih56g00063b6jxhxq77ol%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clrkih56g00023b6jfemvfraa%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clrkih56g00043b6jv0r21tws%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clrkih56g00053b6j2mi0hug0%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B40%252C60%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clrkih56g00023b6jfemvfraa%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clrkih56g00013b6jpqqyhfa3%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clrkih56g00023b6jfemvfraa%2522%252C%2522activeTabId%2522%253A%2522clrkih56g00013b6jpqqyhfa3%2522%257D%252C%2522clrkih56g00053b6j2mi0hug0%2522%253A%257B%2522id%2522%253A%2522clrkih56g00053b6j2mi0hug0%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A8080%252C%2522id%2522%253A%2522clrkilu7l008l3b6jzmyuc23f%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clrkilu7l008l3b6jzmyuc23f%2522%257D%252C%2522clrkih56g00043b6jv0r21tws%2522%253A%257B%2522id%2522%253A%2522clrkih56g00043b6jv0r21tws%2522%252C%2522tabs%2522%253A%255B%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A13.688046647230323%257D)

## 🚧 特色简介

⭐ 聊天服务器 (暂时默认 Cloudflare Workers, 请求数每天限额 100,000, 撑不了多久 , 推荐自行部署, 参考下面 [部署聊天服务器](#部署聊天服务器) ) 可在右上角 设置 => 服务选择 中切换

⭐ 提供免费云服务器一键部署

⭐ 国内可用 （部署服务器需要直连 [Bing国际](https://www.bing.com) 不重定向 CN , 可配置 socks 连接）

⭐ 支持现有开源 ChatGPT 提示词库

⭐ 需要画图等高级功能时(需选更有创造力模式或右上角 **设置 => 图像创建** ), 可登录微软账号设置用户 Cookie 进行体验

⭐ 遇到一切问题, 先点左下角 ![新主题](./docs/img/bing-clear.png) 试试, 不行使用刷新大法（Shift + F5 或 Ctrl + Shift + R 或者右上角设置中的一键重置）, 最终大招就清理浏览器缓存及Cookie, 比如（24小时限制、未登录提示等等）

⭐ 支持 OpenAI 格式 API 调用 - [📝 Wiki文档](https://github.com/Harry-zklcdc/go-proxy-bingai/wiki/BingAPI)

## 📌 效果展示

### 🖥️ 网页展示

<details><summary>点击展开网页效果</summary>

- 电脑端未登录状态

![电脑未登录](./docs/img/bing-nologin.png)

- 电脑端登录

![电脑端登录](./docs/img/bing-login-1.png)
![提示词1](./docs/img/bing-prompt-1.png)
![提示词2](./docs/img/bing-prompt-2.png)
![聊天服务器选择](./docs/img/bing-sydney-service-1.png)

- 电脑端画图

> ⭐ 需登录, 并选择**更有创造力**对话模式

![电脑端画图](./docs/img/bing-draw.png)

- 手机端未登录状态

![手机端未登录](./docs/img/bing-m-nologin.png)

</details>

### 👩🏻‍💻 侧边栏

<details><summary>点击展开侧边栏效果</summary>

- 在 Edge 浏览器可把聊天和撰写分别添加侧边栏

![添加侧边栏](./docs/img/sidebar-add.png)

![聊天](./docs/img/sidebar-chat.png)

![撰写](./docs/img/sidebar-compose.png)

</details>

## 🙋🏻‍♂️ 用户交流

[![加入 QQ 频道](https://img.shields.io/badge/加入_QQ_频道-ProxyBingAI🚀-blue?style=flat-square&logo=tencent-qq&color=red)](https://pd.qq.com/s/55utr9wd4)

[![Github Issus](https://img.shields.io/github/issues/Harry-zklcdc/go-proxy-bingai?style=flat-square&logo=github)](https://github.com/Harry-zklcdc/go-proxy-bingai/issues)

[![加入 Telegram 频道](https://img.shields.io/badge/加入_Telegram_频道-ProxyBingAI🚀-blue?style=flat-square&logo=telegram)](https://t.me/GoProxyBingAI)


## ❗️ 免责声明

> [!NOTE]
> 本项目所有功能仅供学习和娱乐交流使用, 不代表微软的官方观点或立场。本项目不对任何由使用本项目产生的直接或间接损失负责, 包括但不限于数据丢失、系统损坏、法律风险等。本项目不保证本站点的功能完整性、稳定性、安全性和准确性, 也不保证本项目与微软 New Bing 的一致性。本项目不对本站点的内容进行审核或监督, 用户应自行承担使用本站点的风险和责任。本项目保留随时修改或终止本站点的权利, 恕不另行通知。
>
> 在中国大陆范围内使用请遵循[《生成式人工智能服务管理暂行办法》](http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm)的要求, 请勿对中国地区公众提供一切未经备案的生成式人工智能服务。本项目开发者不对使用本项目产生的任何后果负责。

> [!NOTE]
> This project is a demonstration site based on Microsoft New Bing, All function just for learning and entertainment purposes only, and does not represent the official views or positions of Microsoft. This project is not responsible for any direct or indirect losses caused by using this site, including but not limited to data loss, system damage, legal risks, etc. This project does not guarantee the functionality, stability, security and accuracy of this site, nor does it guarantee the consistency of this site with Microsoft New Bing. This project does not review or supervise the content of this site, and users should bear the risks and responsibilities of using this site. This project reserves the right to modify or terminate this site at any time without prior notice.
>
> Please follow the requirements of the [《Interim Measures for the Management of Generative AI Services》](http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm) when using it in Chinese Mainland, and do not provide any unregistered generative AI services to the public in China. The developer of this project is not responsible for any consequences arising from the use of this project.


## ⭐️ Star History

<div align="center">

<a href="https://star-history.com/#Harry-zklcdc/go-proxy-bingai&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=Harry-zklcdc/go-proxy-bingai&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=Harry-zklcdc/go-proxy-bingai&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=Harry-zklcdc/go-proxy-bingai&type=Date" />
  </picture>
</a>

</div>