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
  const userConfig = {}

  // cookie使用时候的key
  config.keys = appInfo.name + '_1600702277549_7136';

  // 中间件配置
  config.middleware = [];
  config.responseBodyMsg = {
    200: '请求成功',
    400: '',
    401: '未授权',
    404: '资源不存在',
    422: '参数错误',
    500: '内部服务异常',
    599: '返回为空',
  };

  // add your middleware config here
  config.middleware = [ 'errorHandler' ];

  // 定义项目启动端口
  config.cluster={
    listen:{
      port: 8848,
      path:'',
      hostname:'127.0.0.1'
    }
  }
  config.cluster = {
    listen: {
      port: 3459,
      path: '',
      hostname: '127.0.0.1',
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
