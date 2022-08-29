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
  constructor(ctx) {
    super(ctx);
    this.userService = ctx.service.user;
  }

  /**
   * 添加用户
   * @router post /api/v1/user
   * @summary 添加用户
   * @description 添加用户
   * @request body createUserRule
   * @response 200
   */
  async 'post /api/v1/user'() {
    const { ctx, userService } = this;
    ctx.validate(ctx.rule.createUserRule, ctx.request.body);
    const { account, password } = ctx.request.body;
    // 判断账号是否存在
    const user = await userService.findUserByUserAccount(account);
    if (user != null) {
      ctx.body = dataResponse.returnFormat(false, '账号已存在', 200);
      return;
    }
    // 账号不存在，可以插入【注意密码要加密】
    await userService.createUser({
      account,
      password,
    });
    // 注意过滤不必要字段
    ctx.body = dataResponse.returnFormat(true);
  }

  /**
   * 更新用户信息
   * @router post /api/v1/user/info
   * @summary 更新用户信息
   * @response 200
   */
  async 'post /api/v1/user/info'() {
    const { ctx } = this;
    ctx.validate(ctx.rule.updateUserRule, ctx.request.body);
    const requestBody = ctx.request.body;
    await this.userService.updateUserById(requestBody);
    // 抛出异常
    dataResponse.throwFormat(400, '更新失败');
  }

  /**
   * 查询单条用户信息
   * @router post /api/v1/user/:id
   * @summary 查询单条用户信息
   * @response 200
   */
  async 'post /api/v1/user/{id}'() {
    const { ctx, userService } = this;
    ctx.validate(
      {
        id: { required: true, type: 'integer' },
      },
      ctx.params
    );
    const { id } = ctx.params;
    // 中间件封装了两种格式，注意区分
    const result = await userService.findUserById(id);
    ctx.body = dataResponse.returnFormat(result);
  }

  /**
   * 查询所有
   * @router post /api/v1/user/list
   * @summary 查询所有用户信息
   * @response 200
   */
  async 'post /api/v1/user/list'() {
    const { ctx } = this;
    const userList = this.userService.findUserList();
    ctx.body = dataResponse.returnFormat(userList, '请求成功');
  }
}

module.exports = UserController;
