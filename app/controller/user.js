'use strict';

const { Controller } = require('egg');
const { dataResponse } = require('../common/utils');

/**
 *  控制层，主要功能：
 *  1、  确定参数，进行参数校验和转换
 *  2、  调用service逻辑
 *  3、  返回接口响应
 */

/**
 * @Controller user模块
 */
class UserController extends Controller {
  /**
   * @router post /api/v1/user
   * @summary 添加用户
   * @description 创建用户
   * @request body createUserDto user 用户账号、密码
   * @response 200 responseBody 响应响应成功
   */
  async create() {
    const { ctx } = this;
    // 参数校验
    ctx.validate(ctx.rule.createUserRule, ctx.request.body);
    const { account, password } = ctx.request.body;
    // 判断账号是否存在
    const user = await ctx.service.user.findOneByAccount(account);
    if (user) {
      ctx.body = ctx.helper.returnFormat(200, '账号已存在', false);
      return;
    }
    // 账号不存在，可以插入【注意密码要加密】
    const result = await ctx.service.user.create({
      account,
      password,
    });
    // 注意过滤不必要字段
    return await ctx.helper.returnFormat(result, '操作成功', 200);
  }

  /**
   *  更新
   */
  async update() {
    const { ctx } = this;
    ctx.throw('xxx', 400);
    // throw new HttpException('当前子用户名已存在', 200);
    // throw new Error(111);
  }

  /**
   * 查询单条数据
   */
  async findOneByID() {
    const { ctx } = this;
    ctx.validate({
      id: { required: true, type: 'bigint' },
    });
    const { id } = ctx.query;
    // 中间件封装了两种格式，注意区分
    const result = await ctx.service.user.findOneByID(id);
    ctx.body = dataResponse.returnFormat(result);
  }

  /**
   * 查询所有
   * @router post /api/v1/user/list
   * @summary 查询所有用户信息
   * @response 200
   */
  async findUserList() {
    const { ctx } = this;
    ctx.body = dataResponse.returnFormat([]);
  }
}

// 导出
module.exports = UserController;
