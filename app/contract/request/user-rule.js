'use strict';

// 用户添加
const createUserDto = {
  account: { type: 'string', required: true },
  password: { type: 'string', required: true },
};

module.exports = {
  createUserDto,
};
