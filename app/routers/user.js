'use strict';

/**
 * 用户模块路由
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);

  router.post('/user', controller.user.create);
  router.get('/user/:id', controller.user.findOneByID);
};
