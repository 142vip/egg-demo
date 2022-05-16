'use strict';

/**
 * 处理响应结果,将返回结果进行封装
 *
 */

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
  return async function responseHandler(ctx, next) {
    // 执行业务，并返回结果
    const response = await next();
    ctx.logger.info(`responseHandler信息：${JSON.stringify(response)}`);
    // 对返回结果进行分类
    if (typeof response === 'object' && Object.keys(response).includes('result')) {
      ctx.body = response;
      return;
    }
    // 其他部分，不做处理
  };
};
