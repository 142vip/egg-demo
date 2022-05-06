/*
 * @Description: 封装常用工具方法
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-12-18 23:28:14
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-12-18 23:30:59
 */


'use strict';


exports.returnFormat = (code = 200, msg = '请求成功', result = {

}) => {
  return { code, msg, result }
}


// module.exports = {
//   returnFormat
// }