'use strict';
/**
 * 基本原则：保证所有的接口status状态返回为200
 * 全局统一错误处理；
 * code值说明：
 *  - 200:操作成功
 *  - 110：没有权限，未登录
 *  - 422: 参数错误
 *  - 4xx : 一般是无权限
 *  - 5xx : 一般是服务端错误
 *  - 3306:数据库操作错误
 *  - 500：服务器内部错误
 *  - 8848:登录服出现错误
 *  - 8813:B站请求链接出错
 *  http-errors deprecated non-first-argument status code; replace with createError(699, ...) node_modules/koa/lib/context.js:97:11
 *  http-errors deprecated non-error status code; use only 4xx or 5xx status codes node_modules/koa/lib/context.js:97:11

 */

module.exports = () => {
  return async function errorHandler(ctx, next) {
    // get from config
    const responseMsg = ctx.app.config.responseMsg;
    // 获取请求参数
    const req_params = {
      req_query: ctx.query,
      req_body: ctx.request.body,
      req_params: ctx.params,
    };
    const req_type = ctx.method.toLowerCase();
    const req_router = ctx.path;
    let res_params;
    // 未出现异常
    let is_error = 0;
    try {
      ctx.logger.info({ Query: ctx.query, Body: ctx.request.body, Params: ctx.params, headers: ctx.headers });
      await next();
      console.log(11, ctx.body);
      const response = ctx.body;
      // 资源找不到
      if (response === undefined) {
        ctx.throw('测试', 699);
        // ctx.validate({
        //   id: { required: true },
        // }, ctx.body);
      }

      if (!ctx.body || !responseMsg.hasOwnProperty(ctx.body.code)) {
        ctx.body = responseMsg[404];
        // 直接渲染出404统一页面
        return;
      }
      // 处理返回值的data
      const finalRes = responseMsg[ctx.body.code];
      if (ctx.body.data || Object.getOwnPropertyNames(ctx.body).includes('data')) {
        finalRes.data = ctx.body.data;
      }
      // 处理message
      if (ctx.body.message) {
        finalRes.message = ctx.body.message;
      }
      if (ctx.body.data) {
        finalRes.data = ctx.body.data;
      } else {
        finalRes.data = ctx.app.returnFormat().data;
      }
      ctx.logger.info('[error_handler] interface final response result :', finalRes);
      res_params = finalRes;
      ctx.body = finalRes;
    } catch (err) {
      console.log(3333);
      console.log(err, err.status, err.statusCode, err.expose);
      // ctx.logger.error(err);
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志

      const status = err.status || 500;
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error = status === 500 && ctx.app.config.env === 'prod'
        ? 'Internal Server Error'
        : err.message;
      ctx.logger.warn(error);
      // 从 error 对象上读出各个属性，设置到响应中
      if (status === 500) {
        ctx.body = ctx.app.returnFormat(500, '当前站点出现未知错误，请联系管理员或者开发人员处理');
      } else if (status === 422) {
        ctx.body = ctx.app.returnFormat(93, '请求参数错误，无法实现当前操作');
      } else if (status === 400) {
        // 重定向
        ctx.status = 200;
        // ctx.body = ctx.app.returnFormat(200, '2233');
      } else {
        ctx.status = 200;
      }
      res_params = ctx.body;
      // 出现异常
      is_error = 1;
    }
    // 序列化参数对象
    const redisHSetKey = ctx.query.uid || 'test';
    // create_time
    const redisHSetField = (new Date()).getTime();
    const redisHSetValue = JSON.stringify({
      req_router,
      req_params: JSON.stringify(req_params),
      res_params: JSON.stringify({ code: res_params.code, message: res_params.message }),
      req_type,
      is_error,
    });
    // redis记录请求
    // ctx.app.cache.hSet(ctx.app.redis.get('vip'), redisHSetKey, redisHSetField, redisHSetValue);
  };
};
