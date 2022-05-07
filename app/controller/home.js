'use strict';

const Controller = require('egg').Controller;
const { name, version, description, author } = require('../../package.json');
class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    ctx.body = {
      name, version, description, author,
    };
  }

}

module.exports = HomeController;
