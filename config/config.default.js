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
  // config.middleware = [ 'errorHandler' ];
  // 配置过滤器忽略
  // config.errorHandler = {
  //   ignore: [
  //     // 验证码
  //     '/api/v1/randomVerifyCode',
  //     '/api/v1/oauth2/authorize',
  //     '/api/v1/oauth2/token',
  //     '/swagger-ui.html',
  //   ],
  // };
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

  // swagger 配置
  config.swaggerdoc = {
    dirScanner: './app/controller', // 配置自动扫描的控制器路径
    apiInfo: {
      title: '接口文档', // 接口文档的标题
      description: 'swagger 测试接口文档', // 接口文档描述
      version: '1.0.0', // 接口文档版本
      termsOfService: 'http://swagger.io/terms/', // 服务条件
      contact: {
        email: 'sunjianfeng@csxiaoyao.com', // 联系方式
      },
      license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
      },
    },
    basePath: '/', // 配置基础路径
    schemes: [ 'http', 'https' ], // 配置支持的协议
    consumes: [ 'application/json' ], // 指定处理请求的提交内容类型 (Content-Type)，如 application/json、text/html
    produces: [ 'application/json' ], // 指定返回的内容类型，仅当 request 请求头中的(Accept)类型中包含该指定类型才返回
    securityDefinitions: {}, // 配置接口安全授权方式
    enableSecurity: false, // 是否启用授权，默认 false
    // enableValidate: true, // 是否启用参数校验，默认 true
    routerMap: false, // 是否启用自动生成路由(实验功能)，默认 true
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

  return {
    ...config,
    ...userConfig,
  };
};
