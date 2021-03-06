'use strict';

const Controller = require('egg').Controller;
const { name, version, description, author } = require('../../package.json');
const { returnFormat } = require('../utils');

/**
 * @Controller home测试模块
 */
class HomeController extends Controller {
  /**
   * @router get /index
   * @summary 接口测试
   * @description 项目基础接口测试
   * @response 200 responseBody 响应失败
   * @return {Promise<*>}
   */
  async index() {
    const { ctx } = this;
    ctx.body = returnFormat({
      name,
      version,
      description,
      author,
    });
  }
}

module.exports = HomeController;
