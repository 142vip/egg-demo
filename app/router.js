'use strict';

/**
 * 路由入口,包含所有路由
 *
 * 关于路由建议：
 * - 安全考虑，所有路由采用GET、POST，特殊情况除外
 * - 路由命名不应该暴露功能，通过接口文档交付前端
 * - 对待查询，可以采用路由params传参,也非常推荐query、body来传参
 *
 */

const userRouter = require('./routers/user');

module.exports = app => {
  const { router, controller } = app;

  // 模块路由
  userRouter(app);

  // 自定义路由
  router.get('/', controller.home.index);
};
