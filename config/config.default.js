/*
 * @Description: 开发环境下的配置文件
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-23 23:24:42
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-23 23:34:43
 */
'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  // 系统配置 例如 mysql redis 都可以在这里配置
  const config ={};
  // 用户自定义配置，例如服务基础配置
  const userConfig={}

  // cookie使用时候的key
  config.keys = appInfo.name + '_1600702277549_7136';

  // 中间件配置
  config.middleware = [];

  // 定义项目启动端口
  config.cluster={
    listen:{
      port: 8848,
      path:'',
      hostname:'127.0.0.1'
    }
  }

  return {
    ...config,
    ...userConfig,
  };
};
