'use strict';

const { Controller } = require('egg');
const { dataResponse } = require('../common/utils');

/**
 *  控制层，主要功能：
 *  1、  确定参数，进行参数校验和转换
 *  2、  调用service逻辑
 *  3、  返回接口响应
 *
 */

/**
 * @Controller user模块
 */
class UserController extends Controller {
  /**
   * 添加用户
   * @router post /api/v1/user
   * @summary 添加用户
   * @description 添加用户
   * @request body createUserRule
   * @response 200
   */
  async createUser() {
    const { ctx } = this;
    // 参数校验
    ctx.validate(ctx.rule.createUserRule, ctx.request.body);
    const { account, password } = ctx.request.body;
    const { user: userService } = ctx.service;
    // 判断账号是否存在
    const user = await userService.findOneByAccount(account);
    if (user != null) {
      ctx.body = dataResponse.returnFormat(200, '账号已存在', false);
      return;
    }
    // 账号不存在，可以插入【注意密码要加密】
    const result = await userService.create({
      account,
      password,
    });
    // 注意过滤不必要字段
    ctx.body = dataResponse.returnFormat(result);
  }

  /**
   * 更新用户信息
   * @router post /api/v1/user/info
   * @summary 更新用户信息
   * @response 200
   */
  async 'post /api/v1/user/info'() {
    const { ctx } = this;
    ctx.throw('xxx', 400);
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
