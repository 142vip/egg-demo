'use strict';

const { Service } = require('egg');

/**
 * 处理业务，常用来操作数据库
 */
class UserService extends Service {
  /**
   * 创建用户
   * @param user
   * @return {Promise<user>}
   */
  async create(user) {
    const { ctx } = this;
    // 添加创建时间
    user.create_time = Date.now();
    return ctx.model.User.create(user);
  }

  /**
   * 根据用户ID更新信息
   * @param user
   * @return {Promise<*>}
   */
  async updateById(user) {
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
   * 查询
   * @return {Promise<*>}
   */
  async findAll() {
    const { ctx } = this;
    return ctx.model.User.findAll();
  }

  /**
   * 根据账号，查找用户信息
   * @param account
   * @return {Promise<any|Model|null>}
   */
  async findOneByAccount(account) {
    const { ctx } = this;
    return await ctx.model.user.findOne({
      where: { account },
    });
  }
}

module.exports = UserService;
