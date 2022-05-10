'use strict';

/**
 * 全局捕获异常，返回约定外的异常、异常，统一返回code：500
 */

module.exports = () => {
  return async function errorHandler(ctx, next) {
    const { responseBodyMsg } = ctx.config;
    try {
      await next();
    } catch (err) {
      ctx.logger.error(err);
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      const status = err.status || 500;
      // 从 error 对象上读出各个属性，设置到响应中
      if (responseBodyMsg[status]) {
        // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
        ctx.body = ctx.helper.returnFormat(status, ctx.app.config.env === 'prod' ? responseBodyMsg[status] : err.message, false);
      } else {
        ctx.body = ctx.helper.returnFormat(110, '未知错误，建议邮件联系作者：fairyf@2925.com', false);
      }
    }
  };
};
