'use strict';

const { Service } = require('egg');


/**
 * 处理业务，常用来操作数据库
 */


class UserService extends Service {

  async create(user) {
    const { ctx, app } = this;
    return;
  }


  async update() {
    const { ctx, app } = this;
    return;
  }

  // 查询
  async find() {
    const { ctx, app } = this;
    return;

  }

}

module.exports = UserService;
