'use strict';

/**
 * 统一返回
 * @param result  响应结果 Array|Object|boolean
 * @param message 响应信息
 * @param code  响应状态码
 * 调佣示例：
 *    - returnFormat(false)
 *    - returnFormat(false,"操作失败")
 *    - returnFormat(false,"操作失败",200)
 */
function returnFormat(result, message = '请求成功', code = 200) {
  return { result, message, code };
}

/**
 * 返回异常抛出, 全局捕获
 * @param code 接口响应码
 * @param msg  自定义消息
 */
function throwFormat(code, msg) {
  throw { status: code, msg };
}

/**
 * OAuth2 返回格式封装，抛出异常
 * @param result
 * @param message
 * @param code
 */
function throwOauthFormat(result, message = '请求成功', code = 200) {
  throw {
    status: 200,
    response: returnFormat(result, message, code),
  };
}

module.exports = {
  returnFormat,
  throwFormat,
  throwOauthFormat,
};
