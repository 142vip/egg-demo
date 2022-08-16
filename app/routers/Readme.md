<!--
 * @Description: 介绍routers目录用途
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-23 23:32:58
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-23 23:33:26
-->

## 目录用途

单独采用routers目录来区分模块路由，原则是：

- 一个js文件区分一个模块，例如user.js 标记 user模块的路由
- 特殊情况除外，路由一般采用GET|POST类型
- 参数传递Query|Params|Body都可以，Header传参一般用来做授权校验

### 路由命名

一般格式： /api/项目名称/版本号/功能模块/具体功能

```shell
## 例如：用户模块，账号相关
/api/egg-demo/v1/user/account
```

建议：

- 路由采用小写，遵守下划线小驼峰等
- 路有里面最好不要直接指明功能，例如：createAccount
- 避免接口见名知意，导致公网被恶意请求

### 采用swagger自动注册路由

结合egg-swagger-docs插件，自动注册路由，可用于通用路由注册【中间使用中间件的，可自行手动注册】