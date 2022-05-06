/*
 * @Description: 
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-21 23:37:55
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-21 23:44:56
 */
/* eslint valid-jsdoc: "off" */

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
  config.middleware = [];

  // 定义项目启动端口
  config.cluster={
    listen:{
      port: 3459,
      path:'',
      hostname:'127.0.0.1'
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
