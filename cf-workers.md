在vercel上设置子域名  www.域名.eu.org 获得解析域名
到 cf
绑定域名              域名.eu.org
添加 CNAME 子域名   www.域名.eu.org
设置SSL 为 严格
建立workers ，复制代码，部署
为worker添加域名   域名.eu.org
为worker添加路由   www.yumin.eu.org/sydney/*

