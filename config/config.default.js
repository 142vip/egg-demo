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
  // cookie使用时候的key
  config.keys = appInfo.name + '_520_19980115';
  // 中间件配置
  config.middleware = [ 'errorHandler', 'responseHandler' ];
  // 全局统一错误处理
  config.errorHandler = {
    ignore: [
      // 验证码
      '/api/v1/randomVerifyCode',
      '/api/v1/oauth2/authorize',
      '/api/v1/oauth2/token',
      '/swagger*', // swagger相关
      '/favicon*',
      '/public',
    ],
  };
  // // 正常情况下，接口返回数据封装
  // config.responseHandler = {
  //   ignore: [
  //     '/swagger*', // swagger相关
  //     '/favicon*',
  //     '/public',
  //   ],
  // };
  // 配置静态资源目录
  config.static = {
    prefix: '/test',
  };
  config.responseBodyMsg = {
    200: '请求成功',
    400: '客户端请求异常',
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
  };
  // @142vip的egg-sequelize插件
  config.sequelize = {
    // 单个客户端
    client: {
      username: 'root',
      password: '123456',
      database: 'egg-demo',
      delegate: 'model',
      baseDir: 'model', // 数据库模型存放的目录
      exclude: '', // 支持数组或者字符串
      Sequelize: require('sequelize'), // 指定Sequelize模块版本
      // 其他配置，参考：https://github.com/sequelize/sequelize/blob/main/src/sequelize.js
    },
    // 支持多客户端 ctx.sequelize.get('fairy_sister').xxxx
    // clients: {
    //   younger_sister: {
    //     username: 'root',
    //     password: '123456',
    //     database: '142vip_db_test',
    //     delegate: 'young_model',
    //     baseDir: 'model', // 数据库模型存放的目录
    //     exclude: '', // 支持数组或者字符串
    //     Sequelize: require('sequelize'), // 指定Sequelize模块版本
    //     // 其他配置，参考：https://github.com/sequelize/sequelize/blob/main/src/sequelize.js
    //   },
    //   fairy_sister: {
    //     username: 'root',
    //     password: '123456',
    //     database: '142vip_db_test',
    //     delegate: 'fairy_model',
    //     baseDir: 'model', // 数据库模型存放的目录
    //     exclude: '', // 支持数组或者字符串
    //     Sequelize: require('sequelize'), // 指定Sequelize模块版本
    //     // 其他配置，参考：https://github.com/sequelize/sequelize/blob/main/src/sequelize.js
    //   },
    // },
    app: true,
    agent: false,
  };
  // redis配置
  config.redis = {
    client: {
      // instanceName. See below
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: 'auth',
      db: 10,
    },
  };

  // swagger 配置
  config.swaggerdoc = {
    dirScanner: './app/controller', // 配置自动扫描的控制器路径
    apiInfo: {
      title: 'egg-demo接口文档', // 接口文档的标题
      description: 'swagger 测试接口文档', // 接口文档描述
      version: 'Beta0.0.1', // 接口文档版本
      // termsOfService: 'http://baidu.com', // 服务条件
      // contact: {
      //   email: 'sunjianfeng@csxiaoyao.com', // 联系方式
      // },
      // license: {
      //   name: 'Apache 2.0',
      //   url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
      // },
    },
    basePath: '/', // 配置基础路径
    schemes: [ 'http', 'https' ], // 配置支持的协议
    consumes: [ 'application/json' ], // 指定处理请求的提交内容类型 (Content-Type)，如 application/json、text/html
    produces: [ 'application/json' ], // 指定返回的内容类型，仅当 request 请求头中的(Accept)类型中包含该指定类型才返回
    securityDefinitions: {}, // 配置接口安全授权方式
    enableSecurity: false, // 是否启用授权，默认 false
    // enableValidate: true, // 是否启用参数校验，默认 true
    routerMap: true, // 是否启用自动生成路由(实验功能)，默认 true
    enable: true, // 默认 true
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

  return config;
};
