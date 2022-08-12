'use strict';

const { responseHeader } = require('../common/utils/constants');
const { dataResponse } = require('../common/utils');
const { responseBodyMessage } = require('../../config/config.prod');
/**
 * 全局捕获异常，返回约定外的异常、异常，统一返回code：500
 */
module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      ctx.logger.warn(err);
      const status = err.status || 500;
      const errorMessage =
        ctx.app.config.env === 'prod'
          ? responseBodyMessage[status]
          : err.message;
      if (responseBodyMessage[status]) {
        // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
        ctx.body = dataResponse.returnFormat(false, errorMessage, status);
      } else {
        ctx.body = dataResponse.returnFormat(
          false,
          '未知错误，建议邮件联系作者：fairy_demo@2925.com',
          110
        );
      }
    } finally {
      ctx.status = 200;
      ctx.setHeader(responseHeader);
    }
  };
};
