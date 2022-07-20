/*
 * @Description: 封装常用工具方法
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-12-18 23:28:14
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-12-18 23:30:59
 */
'use strict';

/**
 * 扩展ctx.helper对象，此处定义的方法、变量， 可以通过ctx.helper.xx使用
 * 参考：https://www.eggjs.org/zh-CN/basics/extend
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
function returnFormat(result, message = '请求成功', code = 200) {
  return { result, message, code };
}

module.exports = {
  returnFormat,
};
