'use strict';

/**
 *
 * swagger支持的格式文件，校验规则可以和egg-validate套用
 * 参考：https://github.com/Yanshijie-EL/egg-swagger-doc
 * 使用：ctx.validate(ctx.rule.createResource, ctx.request.body);
 *
 */


const JsonBody = {
  code: { type: 'number', required: true, example: 0 },
  message: { type: 'string', required: true, example: 'success' },
  data: { type: 'Enum', required: true, example: [] },
};

const responseBody = {
  code: { type: 'number', required: true, example: 200 },
  message: { type: 'string', required: true, example: '请求成功' },
  result: { type: 'boolean', required: true, example: false },
};

module.exports = {
  responseBody,
  indexJsonBody: {
    ...JsonBody,
    data: { type: 'string', example: 'test' },
  },
};
