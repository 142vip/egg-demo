'use strict';

/**
 * 用户模块路由
 *
 * - 可以使用egg-swagger-doc的注解路由
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/user', controller.user.create);
  router.get('/user/:id', controller.user.findOneByID);
};
