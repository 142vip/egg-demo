/*
 * @Description:
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-21 23:37:55
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-21 23:44:56
 */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1600702277549_7136';

  // add your middleware config here
  config.middleware = [ 'errorHandler' ];

  // 定义项目启动端口
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

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
