'use strict';

const { Controller } = require('egg');

/**
 *  控制层，主要功能：
 *  1、  确定参数，进行参数校验和转换
 *  2、  调用service逻辑
 *  3、  返回接口响应
 */
class UserController extends Controller {
  constructor() {
    super();
    this.rule = {
      name: 2112,
    };
  }

  // 添加
  async create() {
    const { ctx } = this;
    // 参数校验

    // 调用service
  }

  // 更新
  async update() {
    const { ctx } = this;
    ctx.throw();
    // throw new HttpException('当前子用户名已存在', 200);
    // throw new Error(111);
  }

  // 查询单条数据
  async findOneByID() {
    const { ctx } = this;
  }

  // 查询所有
  async findAll() {}
}

// 导出
module.exports = UserController;
