# go-proxy-bing

基于微软 New Bing 用 Vue3 和 Go 简单定制的微软 New Bing 演示站点，拥有一致的 UI 体验，支持 ChatGPT 提示词，国内可用，基本兼容微软 Bing AI 所有功能，无需登录即可畅聊。

⭐ Bing 官方聊天服务器（相对较快和稳定，推荐）不可用时，可参考以下方案

  > 1. 可用 ModHeader 添加 X-Forwarded-For 请求头，对应 URL 是 wss://sydney.bing.com/sydney/ChatHub，具体可参考 [issues #71](https://github.com/adams549659584/go-proxy-bingai/issues/71) 及 https://zhuanlan.zhihu.com/p/606655303

  > 2. 本地部署再部署一份作为聊天中转服务，或下载 Release 直接运行，自定义聊天服务器中填入 http://localhost:8080，并选择。

⭐ 聊天服务器 (暂时默认 Cloudflare Workers，请求数每天限额 100,000，撑不了多久 ，推荐自行部署，参考下面 [部署聊天服务器](#部署聊天服务器) ) 可在右上角 设置 => 服务选择 中切换

⭐ 国内可用 （部署服务器需要直连 www.bing.com 不重定向 CN ，可配置 socks 连接）

⭐ 支持现有开源 ChatGPT 提示词库

⭐ 需要画图等高级功能时(需选更有创造力模式或右上角 设置 => 图像创建 )，可登录微软账号设置用户 Cookie 进行体验

⭐ 遇到一切问题，先点左下角 ![新主题](./docs/img/bing-clear.png) 试试，不行使用刷新大法（Shift + F5 或 Ctrl + Shift + R 或 右上角设置中的一键重置），最终大招就 清理浏览器缓存 及 Cookie ，比如（24 小时限制、未登录提示等等）

- [go-proxy-bing](#go-proxy-bing)
  - [网页展示](#网页展示)
  - [侧边栏](#侧边栏)
  - [演示站点](#演示站点)
  - [教程](#教程)
  - [TODO](#TODO)

## 网页展示

- 电脑端未登录状态

![电脑未登录](./docs/img/bing-nologin.png)

- 电脑端登录

![电脑端登录](./docs/img/bing-login-1.png)
![提示词1](./docs/img/bing-prompt-1.png)
![提示词2](./docs/img/bing-prompt-2.png)
![聊天服务器选择](./docs/img/bing-sydney-service-1.png)

- 电脑端画图

> ⭐ 需登录，并选择 更有创造力 对话模式

![电脑端画图](./docs/img/bing-draw.png)

- 手机端未登录状态

![手机端未登录](./docs/img/bing-m-nologin.png)

## 侧边栏

- 在 Edge 浏览器可把聊天和撰写分别添加侧边栏

![添加侧边栏](./docs/img/sidebar-add.png)

![聊天](./docs/img/sidebar-chat.png)

![撰写](./docs/img/sidebar-compose.png)


## 教程

查看 [wiki](https://github.com/Harry-zklcdc/go-proxy-bingai/wiki)

## TODO

- [x] 撰写
- [x] Vue3 重构
- [x] 提示词
- [x] 历史聊天
- [x] 导出消息到本地（Markdown、图片、PDF）
- [x] 简单访问权限控制
