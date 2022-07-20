'use strict';

/**
 *  扩展app对象功能，此处定义的方法、变量，可以通过app.xxx直接使用
 *  example: const xxx=app.xxx
 *  参考：https://www.eggjs.org/zh-CN/basics/extend
 */

/**
 * 统一返回
 * @param result  响应结果 Array|Object|boolean
 * @param message 响应信息
 * @param code  响应状态码
 * @return {{result, code: number, message: string}}
 * 调佣示例：
 *    - returnFormat(false)
 *    - returnFormat(false,"操作失败")
 *    - returnFormat(false,"操作失败",200)
 */

function returnFormat(result, message = '', code = 200) {
  return { result, message, code };
}


module.exports = {
  returnFormat,
};
