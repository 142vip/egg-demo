'use strict';
/**
 * 处理业务，常用来操作数据库
 */

const { Service } = require('egg');

/**
 * @typedef {Object} UserService
 */
class UserService extends Service {
  /**
   * 创建用户
   * @param user
   */
  async createUser(user) {
    const { ctx } = this;
    // 添加创建时间
    user.create_time = Date.now();
    return ctx.model.User.create(user);
  }

  /**
   * 根据用户ID更新信息
   * @param user
   */
  async updateUserById(user) {
    const { ctx } = this;
    // 更新修改时间
    user.update_time = Date.now();

    return ctx.model.User.update(user, {
      where: {
        id: user.id,
      },
    });
  }

  /**
   * 查询所有用户列表
   */
  async findUserList() {
    const { ctx } = this;
    return ctx.model.User.findAll();
  }

  /**
   * 根据账号，查找用户信息
   * @param account
   */
  async findUserByUserAccount(account) {
    const { ctx } = this;
    return await ctx.model.User.findOne({
      where: { account },
    });
  }

  /**
   * 根据id，查询用户信息
   */
  async findUserById(id) {
    const { ctx } = this;
    return await ctx.model.User.findOne({
      where: { id },
    });
  }
}

module.exports = UserService;
