# go-proxy-bing

一个用 GO 写的微软 Bing AI 的代理服务。 使用微软原始页面简单定制，基本兼容微软 Bing AI 所有功能。

- 电脑端已登录状态

![电脑已登录](./docs/img/1.png)

- 电脑端未登录状态

![电脑未登录](./docs/img/2.png)

- 手机端已登录状态

![手机已登录](./docs/img/3.png)

- 手机端未登录状态

![手机未登录](./docs/img/4.png)

### 演示站点：

> 甲骨文小鸡仔，轻虐

- https://bing.vcanbb.top

### 获取cookies

- 访问 https://www.bing.com/ 或 https://cn.bing.com/ ，登录

- F12 或 Ctrl + Shift + I 打开控制台

- 拿到 Cookie 后，在网站设置用户Cookie弹窗填入即可。

![获取Cookie](./docs/img/5.png)

### 部署

> 需 https 域名

- docker 部署 , 参考 [Dockerfile](./docker/Dockerfile) 、[docker-compose.yml](./docker/docker-compose.yml)