# Go-Proxy-BingAI

基于微软 New Bing 用 Vue3 和 Go 简单定制的微软 New Bing 演示站点，拥有一致的 UI 体验，支持 ChatGPT 提示词，国内可用，基本兼容微软 Bing AI 所有功能，无需登录即可畅聊。

## 目录

- [Go-Proxy-BingAI](#Go-Proxy-BingAI)
  
  - [教程](#教程（十分重要）)
  
  - [特色简介](#特色简介)
  
  - [一键部署](#一键部署)
  
  - [网页展示](#网页展示)
  
  - [侧边栏](#侧边栏)

  - [免责声明](#免责声明)

## 教程（十分重要）

查看 [**>>>快速教程<<<**](https://github.com/Harry-zklcdc/go-proxy-bingai/wiki)

## 一键部署

[![部署到HuggingFace](https://camo.githubusercontent.com/ba70ca1f05c27211bd0c30f9ff4f4232d9855a94a0941fa2a40a38b736b60c26/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2545372538322542392545352538372542422545392538332541382545372542442542322d2546302539462541342539372d666666)](https://huggingface.co/login?next=%2Fspaces%2Fdongsiqie%2Fbing%3Fduplicate%3Dtrue%26visibility%3Dpublic)

[![Run on Repl.it](https://camo.githubusercontent.com/22ead53ef89feb9eb14b0bc9d01ecc7867e940747ce133a50ac49f186a72d6bb/68747470733a2f2f7265706c2e69742f62616467652f6769746875622f797a736f6e6730362f5265706c69742d476f2d50726f78792d42696e674169)](https://replit.com/@sanwuchengqun/Go-Proxy-BingAi?v=1)

## 特色简介

⭐ 聊天服务器 (暂时默认 Cloudflare Workers，请求数每天限额 100,000，撑不了多久 ，推荐自行部署，参考下面 [部署聊天服务器](#部署聊天服务器) ) 可在右上角 设置 => 服务选择 中切换

⭐ 提供免费云服务器一键部署

⭐ 国内可用 （部署服务器需要直连 [Bing国际](https://www.bing.com) 不重定向 CN ，可配置 socks 连接）

⭐ 支持现有开源 ChatGPT 提示词库

⭐ 需要画图等高级功能时(需选更有创造力模式或右上角 **设置 => 图像创建** )，可登录微软账号设置用户 Cookie 进行体验

⭐ 遇到一切问题，先点左下角 ![新主题](./docs/img/bing-clear.png) 试试，不行使用刷新大法（Shift + F5 或 Ctrl + Shift + R 或者右上角设置中的一键重置），最终大招就清理浏览器缓存及Cookie，比如（24小时限制、未登录提示等等）

⭐ Bing 官方聊天服务器（相对较快和稳定，推荐）不可用（中国用户）时，可参考以下方案（过于麻烦）：

> 1. 可用 ModHeader 添加 X-Forwarded-For 请求头，对应 URL 是 wss://sydney.bing.com/sydney/ChatHub，具体可参考 [issues #71](https://github.com/adams549659584/go-proxy-bingai/issues/71) 及 https://zhuanlan.zhihu.com/p/606655303
> 2. 本地部署再部署一份作为聊天中转服务，或下载 Release 直接运行，自定义聊天服务器中填入 http://localhost:8080，并选择它。

## 网页展示

- 电脑端未登录状态

![电脑未登录](./docs/img/bing-nologin.png)

- 电脑端登录

![电脑端登录](./docs/img/bing-login-1.png)
![提示词1](./docs/img/bing-prompt-1.png)
![提示词2](./docs/img/bing-prompt-2.png)
![聊天服务器选择](./docs/img/bing-sydney-service-1.png)

- 电脑端画图

> ⭐ 需登录，并选择**更有创造力**对话模式

![电脑端画图](./docs/img/bing-draw.png)

- 手机端未登录状态

![手机端未登录](./docs/img/bing-m-nologin.png)

## 侧边栏

- 在 Edge 浏览器可把聊天和撰写分别添加侧边栏

![添加侧边栏](./docs/img/sidebar-add.png)

![聊天](./docs/img/sidebar-chat.png)

![撰写](./docs/img/sidebar-compose.png)

## 免责声明

> 本项目所有功能仅供学习和娱乐交流使用，不代表微软的官方观点或立场。本项目不对任何由使用本项目产生的直接或间接损失负责，包括但不限于数据丢失、系统损坏、法律风险等。本项目不保证本站点的功能完整性、稳定性、安全性和准确性，也不保证本项目与微软 New Bing 的一致性。本项目不对本站点的内容进行审核或监督，用户应自行承担使用本站点的风险和责任。本项目保留随时修改或终止本站点的权利，恕不另行通知。

> This project is a demonstration site based on Microsoft New Bing, All function just for learning and entertainment purposes only, and does not represent the official views or positions of Microsoft. This project is not responsible for any direct or indirect losses caused by using this site, including but not limited to data loss, system damage, legal risks, etc. This project does not guarantee the functionality, stability, security and accuracy of this site, nor does it guarantee the consistency of this site with Microsoft New Bing. This project does not review or supervise the content of this site, and users should bear the risks and responsibilities of using this site. This project reserves the right to modify or terminate this site at any time without prior notice.