'use strict';

/**
 * 路由入口
 * @param app
 */

const userRouter = require('./routers/user');

module.exports = app => {
  const { router, controller } = app;

  // 模块路由
  userRouter(app);

  // 自定义路由
  router.get('/', controller.home.index);
};
