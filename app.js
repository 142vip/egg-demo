'use strict';
/*
 * @Description: 项目启动文件
 * @Version: Beata1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-28 00:39:48
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-10-08 21:40:19
 */

const initRedis = require('./app/cache/index');
class AppBootHook {
  constructor(app) {
    this.app = app;
    this.logger = app.logger;
    this.config = app.config;
    this.startTime = Date.now();
  }

  configWillLoad() {
    // 此时 config 文件已经被读取并合并，但是还并未生效
    // 这是应用层修改配置的最后时机
    // 注意：此函数只支持同步调用


  }
  async didLoad() {
    // 挂载redis 并扩展|增强 ctx.app对象上的redis
    const { app } = this;
    this.app.redis = await initRedis(app.redis);
    try {
      // 所有的配置已经加载完毕
      // 可以用来加载应用自定义的文件，启动自定义的服务
      await app.model.sync({
        alter: true, // 数据库表按照模型调整；
        force: false, // 数据库表不强制删除后重建
      });
    } catch (e) {
      this.app.logger.error('----------- sequelize model and database sync failed ,please check your sequelize config  -----------');
    }
  }

  async willReady() {
    // 所有的插件都已启动完毕，但是应用整体还未 ready
    // 可以做一些数据初始化等操作，这些操作成功才会启动应用

    // 例如：从数据库加载数据到内存缓存
  }

  async didReady() {
    // 应用已经启动完毕
    const { logger, config, startTime } = this;
    const { hostname, port } = config.cluster.listen;
    logger.info(`[egg-swagger-doc](${Date.now() - startTime}ms) 接口文档请访问：http://${hostname}:${port}/swagger-ui.html`);
  }

  async serverDidReady() {
    // http / https server 已启动，开始接受外部请求
    // 此时可以从 app.server 拿到 server 的实例
    // this.app.server.on('timeout', () => {
    //   // handle socket timeout
    //   this.app.logger.info('---------socket timeout---------');
    //   // this.app.logger.info(socket);
    //   // this.app.logger.info('---------socket timeout---------');
    // });
  }
}

module.exports = AppBootHook;
