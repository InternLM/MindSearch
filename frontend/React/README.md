## 开始

### 准备node.js开发环境

如需安装环境，可参照：https://nodejs.org/zh-cn/download/package-manager，从官网下载对应平台的安装程序并安装。

如环境已经准备好，跳转下一步

### 安装依赖

```bash
npm install
```

### 启动
```bash
npm start
```
启动成功后，界面将出现可访问的本地url

### 配置

#### 接口请求配置

- 如您需要配置的服务支持跨域，可至[cgi.ts](./src/config/cgi.ts)中修改请求链接，请求链接为http://ip:port/path;

- 如您需要配置的服务不支持跨域，可至 [vue.config.ts](./vite.config.ts) 中配置proxy，示例如下

  ```
    server: {
      port: 8080,
      proxy: {
        "/solve": {
          target: "https://example.com",
          changeOrigin: true,
        }
      }
    }
  ```


### 知悉

- 前端服务基于react开发，如需了解react相关知识，可参考：https://react.dev/
