'use strict';
/**
 * 简单用户表，用来参考数据库查询操作
 */
const { BIGINT, STRING } = require('sequelize');

module.exports = app =>
  app.model.define(
    'user',
    {
      id: {
        filed: 'id',
        type: BIGINT(10),
        primaryKey: true,
        //  自增
        autoIncrement: true,
        comment: '用户Id，主键',
      },
      account: {
        filed: 'account',
        type: STRING(20),
        allowNull: false,
        comment: '用户账号',
      },
      password: {
        filed: 'password',
        type: STRING(255),
        allowNull: false,
        comment: '用户密码',
      },
      create_time: {
        filed: 'create_time',
        type: BIGINT(13),
        allowNull: false,
        defaultValue: () => new Date().getTime(),
        comment: '创建时间',
      },
      update_time: {
        filed: 'update_time',
        type: BIGINT(13),
        allowNull: false,
        defaultValue: 0,
        comment: '修改时间',
      },
      delete_time: {
        filed: 'delete_time',
        type: BIGINT(13),
        allowNull: false,
        defaultValue: 0,
        comment: '删除时间',
      },
    },
    {
      // 指定数据库中对应的tbl_user表
      tableName: 'tbl_user',
      freezeTableName: false,
      // 是否自动添加时间戳createAt，updateAt
      timestamps: false,
    }
  );
