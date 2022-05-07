/*
 * @Description: 开发环境下的配置文件
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-21 23:37:55
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-23 23:34:43
 */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  // 系统配置 例如 mysql redis 都可以在这里配置
  const config = {};
  // 用户自定义配置，例如服务基础配置
  const userConfig = {};

  // cookie使用时候的key
  config.keys = appInfo.name + '_1600702277549_7136';

  // 中间件配置
  config.middleware = [ 'errorHandler' ];
  config.responseBodyMsg = {
    200: '请求成功',
    400: '',
    401: '未授权',
    404: '资源不存在',
    422: '参数错误',
    500: '内部服务异常',
    599: '返回为空',
  };

  // 定义项目启动端口
  config.cluster = {
    listen: {
      port: 8848,
      path: '',
      hostname: '127.0.0.1',
    },
  };
  // 配置数据库 【备用】
  config.sequelizePlus = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'egg-demo',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
    options: {
      timezone: 'Asia/Shanghai',
      // 连接池，设置最大连接数
      pool: {
        maxConnections: 5,
      },
    },
  };
  // 官方支持的ORM
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'egg-demo',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
    options: {
      timezone: 'Asia/Shanghai',
      // 连接池，设置最大连接数
      pool: {
        maxConnections: 10,
      },
    },
  };
  // redis配置
  config.redis = {
    client: { // instanceName. See below
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: 'auth',
      db: 10,
    },
  };

  // 静态资源渲染
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  // 配置参数校验[convertType自动规则转换]
  config.validate = {
    convert: true, // 对参数可以使用convertType规则进行类型转换
    // validateRoot: false,  // 校验根目录
  };
  // 安全设置
  config.security = {
    csrf: {
      // 关闭csrf  线上开启
      enable: false,
      ignoreJSON: true,
    },
    // domainWhiteList: [ 'http://localhost:8848' ],
  };
  // 配置跨域
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  return {
    ...config,
    ...userConfig,
  };
};
