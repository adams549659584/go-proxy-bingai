# go-proxy-bing

基于微软 New Bing 简单定制，拥有一致的 UI 体验，支持 ChatGPT 提示词，国内可用，基本兼容微软 Bing AI 所有功能，无需登录即可畅聊。

⭐ 国内可用 （部署服务器需要直连 www.bing.com 不重定向 CN ，可配置 socks 连接）

⭐ 支持现有开源提示词库

⭐ 需要画图等高级功能时(需选更有创造力模式或右上角设置中的图像创建)，可登录微软账号设置用户 Cookie 进行体验

⭐ 遇到一切问题，先点左下角 ![新主题](./docs/img/bing-clear.png) 试试，不行使用刷新大法（Shift + F5 或 Ctrl + Shift + R 或 右上角设置中的一键重置），最终大招就 清理浏览器缓存 及 Cookie ，比如（24 小时限制、未登录提示等等）

- [go-proxy-bing](#go-proxy-bing)
  - [网页展示](#网页展示)
  - [侧边栏](#侧边栏)
  - [演示站点](#演示站点)
  - [获取 Cookie](#获取Cookie)
  - [环境变量](#环境变量)
  - [部署](#部署)
    - [Docker](#Docker)
    - [Release](#Release)
    - [Railway](#Railway)
    - [Vercel](#Vercel)
    - [Render](#Render)
  - [TODO](#TODO)

## 网页展示

- 电脑端未登录状态

![电脑未登录](./docs/img/bing-nologin.png)

- 电脑端登录

![电脑端登录](./docs/img/bing-login-1.png)
![提示词1](./docs/img/bing-prompt-1.png)
![提示词2](./docs/img/bing-prompt-2.png)

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

## 演示站点

### 甲骨文小鸡仔，轻虐

- https://bing.vcanbb.top

### Railway 搭建

- https://bing-railway.vcanbb.top

- https://go-proxy-bingai-production.up.railway.app

### Vercel 搭建

- https://bing-vercel.vcanbb.top

- https://go-proxy-bingai-adams549659584.vercel.app

### Render 搭建

- https://bing-render.vcanbb.top

- https://go-proxy-bingai.onrender.com

## 获取 Cookie

- 访问 https://www.bing.com/ 或 https://cn.bing.com/ ，登录

- F12 或 Ctrl + Shift + I 打开控制台

- 拿到 Cookie 后，在网站设置用户 Cookie 弹窗填入即可。

![获取Cookie](./docs/img/bing-cookie.png)

## 环境变量

```bash
# 运行端口 默认 8080 可选
PORT=8080
# Socks 环境变量 示例 可选
Go_Proxy_BingAI_SOCKS_URL=192.168.0.88:1070
# Socks 账号、密码 可选
Go_Proxy_BingAI_SOCKS_USER=xxx
Go_Proxy_BingAI_SOCKS_PWD=xxx
# 默认用户 Cookie 设置，可选，不推荐使用，固定前缀 Go_Proxy_BingAI_USER_TOKEN 可设置多个，未登录用户将随机使用，多人共用将很快触发图形验证，并很快达到该账号的24小时限制
Go_Proxy_BingAI_USER_TOKEN_1=xxx
Go_Proxy_BingAI_USER_TOKEN_2=xxx
Go_Proxy_BingAI_USER_TOKEN_3=xxx ...
```

## 部署

> ⭐ 需 https 域名 (自行配置 nginx 等) (前后端都有限制 只有在HTTPS的情况下，浏览器 Accept-Encoding 才会包含 br , localhost 除外)

> 支持 Linux (amd64 / arm64)、Windows (amd64 / arm64)

> 国内机器部署可配置 socks 环境变量

### Docker

> 参考 [Dockerfile](./docker/Dockerfile) 、[docker-compose.yml](./docker/docker-compose.yml)

- docker 示例

```bash
# 运行容器 监听8080 端口
docker run -d -p 8080:8080 --name go-proxy-bingai --restart=unless-stopped adams549659584/go-proxy-bingai

# 配置 socks 环境变量
docker run -e Go_Proxy_BingAI_SOCKS_URL=192.168.0.88:1070 -e Go_Proxy_BingAI_SOCKS_USER=xxx -e Go_Proxy_BingAI_SOCKS_PWD=xxx -d -p 8080:8080 --name go-proxy-bingai --restart=unless-stopped adams549659584/go-proxy-bingai
```

- docker compose 示例

```yaml
version: '3'

services:
  go-proxy-bingai:
    # 镜像名称
    image: adams549659584/go-proxy-bingai
    # 容器名称
    container_name: go-proxy-bingai  
    # 自启动
    restart: unless-stopped
    ports:
      - 8080:8080
    # environment:
    #   - Go_Proxy_BingAI_SOCKS_URL=192.168.0.88:1070
    #   - Go_Proxy_BingAI_SOCKS_USER=xxx
    #   - Go_Proxy_BingAI_SOCKS_PWD=xxx
    #   - Go_Proxy_BingAI_USER_TOKEN_1=xxx
    #   - Go_Proxy_BingAI_USER_TOKEN_2=xxx    
```

### Release

在 [GitHub Releases](https://github.com/adams549659584/go-proxy-bingai/releases) 下载适用于对应平台的压缩包，解压后可得到可执行文件 go-proxy-bingai，直接运行即可。

### Railway

> 主要配置 Dockerfile 路径 及 端口就可以

```bash
PORT=8080
RAILWAY_DOCKERFILE_PATH=docker/Dockerfile
```

一键部署，点这里 => [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/uIckWS?referralCode=BBs747)

![Railway 模板部署](./docs/img/railway-1.png)

自行使用 Railway 部署配置如下

![Railway 环境变量](./docs/img/railway-2.png)

![Railway 域名](./docs/img/railway-3.png)

### Vercel

一键部署，点这里 => [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/adams549659584/go-proxy-bingai&project-name=go-proxy-bingai&repository-name=go-proxy-bingai-vercel)

![Vercel 一键部署](./docs/img/vercel-1.png)

![Vercel 域名](./docs/img/vercel-2.png)

### Render

一键部署，点这里 => [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/adams549659584/go-proxy-bingai)

![Render 一键部署](./docs/img/render-1.png)

![Render 域名](./docs/img/render-2.png)

## TODO

- [x] 撰写
- [x] Vue3 重构
- [x] 提示词
- [x] 历史聊天
- [ ] 导出消息到本地（Markdown、图片、PDF）
- [ ] 简单访问权限控制
