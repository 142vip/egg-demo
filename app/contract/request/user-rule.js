'use strict';

// 用户添加
exports.createUserRule = {
  account: { type: 'string', required: true },
  password: { type: 'string', required: true },
};

// 用户信息更新
exports.updateUserRule = {
  account: { type: 'string', required: true },
  password: { type: 'string', required: true },
};
