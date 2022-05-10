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
  const { router, controller, config } = app;

  // 模块路由
  userRouter(app);


  // 自定义路由
  router.get('/', controller.home.index);

  // 添加全局路由前缀 [可选，可用来更好的管理路由,但要注意swagger等静态资源的访问情况，可以答应router查看]

  if (config.env === 'prod') {
    router.prefix('/api/egg-demo');
    // console.log(router);
    // console.log(router.routes());
  }


  // config.env 获取运行是指定的环境 --env=xx 可以用来判断； 正式环境就不需要使用文档，一般只提供/api/项目名/版本号
  // console.log(config.env);
};
