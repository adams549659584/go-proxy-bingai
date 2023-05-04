# go-proxy-bing

一个用 GO 写的微软 Bing AI 的代理服务。 使用微软原始页面简单定制，基本兼容微软 Bing AI 所有功能。

⭐ 这个主要是为了避免不开全局，总是跳 https://cn.bing.com/

⭐ 需要已加入 New Bing 候补名单的账号

- [go-proxy-bing](#go-proxy-bing)
	- [演示站点](#演示站点)
	- [获取Cookie](#获取Cookie)
	- [部署](#部署)
		- [Docker](#Docker)
		- [Release](#Release)
		- [Railway](#Railway)
		- [Vercel](#Vercel)
    
- 电脑端已登录状态

![电脑已登录](./docs/img/1.png)

- 电脑端未登录状态

![电脑未登录](./docs/img/2.png)

- 手机端已登录状态

![手机已登录](./docs/img/3.png)

- 手机端未登录状态

![手机未登录](./docs/img/4.png)

## 演示站点

### 甲骨文小鸡仔，轻虐

- https://bing.vcanbb.top

### Railway 

- https://bing-railway.vcanbb.top

- https://go-proxy-bingai-production.up.railway.app

### Vercel

- https://bing-vercel.vcanbb.top

- https://go-proxy-bingai-vercel.vercel.app

## 获取Cookie

- 访问 https://www.bing.com/ 或 https://cn.bing.com/ ，登录

- F12 或 Ctrl + Shift + I 打开控制台

- 拿到 Cookie 后，在网站设置用户Cookie弹窗填入即可。

![获取Cookie](./docs/img/5.png)

## 部署

> 需 https 域名 (自行配置 nginx 等)

> 支持 Linux (amd64 / arm64)

### Docker

> 参考 [Dockerfile](./docker/Dockerfile) 、[docker-compose.yml](./docker/docker-compose.yml)

示例

```bash
# 运行容器 监听8080 端口
docker run -d -p 8080:8080 --name go-proxy-bingai --restart=unless-stopped adams549659584/go-proxy-bingai
```

### Release

在 [Github Releases](https://github.com/adams549659584/go-proxy-bingai/releases) 下载适用于对应平台的压缩包，解压后可得到可执行文件 go-proxy-bingai，直接运行即可。

### Railway

> 主要配置 Dockerfile 路径 及 端口就可以

```bash
PORT=8080
RAILWAY_DOCKERFILE_PATH=docker/Dockerfile
```
一键部署，点这里 =>  [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/uIckWS?referralCode=BBs747) 

![Railway 模板部署](./docs/img/railway-1.png)

自行使用 Railway 部署配置如下

![Railway 环境变量](./docs/img/railway-2.png)

![Railway 域名](./docs/img/railway-3.png)

### Vercel

一键部署，点这里 => [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/adams549659584/go-proxy-bingai&project-name=go-proxy-bingai&repository-name=go-proxy-bingai-vercel)

![Vercel 一键部署](./docs/img/vercel-1.png)

![Vercel 域名](./docs/img/vercel-2.png)