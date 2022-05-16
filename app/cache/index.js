'use strict';

/**
 *  redis缓存封装,在egg-redis模块上进行分类操作扩展
 */

const redisString = require('./redis/string');
const redisHash = require('./redis/hash');
const redisList = require('./redis/list');
const redisSet = require('./redis/set');


/**
 *
 * @param redis  redis对象
 * 注意调用方式： app.redis._string|_hash|_list|_set.xxxx  命名下划线不一样，是为了避免对象聚合时，属性重合
 * @return
 */
async function initRedis(redis) {
  const _redis = {
    _string: new redisString(redis),
    _list: new redisList(redis),
    _hash: new redisHash(redis),
    _set: new redisSet(redis),
  };
    // 原来考虑是redis替换，后来觉得不妥，将自己封装的_redis和redis的两个对象聚合，是比较好的处理方式
    // Object.assign()方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target)
    // Object.assign()方法的第一个参数是目标对象，后面的参数都是源对象。
  return Object.assign(redis, _redis);
}

module.exports = initRedis;
