/*
 * @Description: redis关于string类型数据结构的封装
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-12-09 23:42:08
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-12-09 23:43:54
 */


'use strict';

class redisString {
  constructor(redis) {
    this.redis = redis;
  }
  /**
   *
   * @param {string} key 存储在redis中的键
   * @param {string||array||object} value 需要存储的值
   */
  async set(key, value) {
    const { redis } = this;
    // 采用redis默认存储时间
    await redis.set(key, JSON.stringify(value));
  }

  /**
   *
   * @param {string} key 存储在redis中的键
   * @param {string||array||object} value 需要存储的值
   * @param {bigint} seconds 过期时间，支持秒的时间戳，即：10位
   */
  async setEx(key, value, seconds) {
    const { redis } = this;
    await redis.set(key, JSON.stringify(value), 'EX', seconds);

  }
  /**
   *
   * @param {string} key 存储在redis中的键
   * @param {string||array||object} value 需要存储的值
   * @param {bigint} milliSecond 过期时间，支持毫秒的时间戳，即：13位
   */
  async setPx(key, value, milliSecond) {
    const { redis } = this;
    await redis.set(key, JSON.stringify(value), 'PX', milliSecond);

  }
  /**
   *
   * @param {string} key 存储在redis中的键
   */
  async get(key) {
    const { redis } = this;
    const value = await redis.get(key);
    try {
      return JSON.parse(value);
    } catch (error) {
      console.info('redis string get function:', key, value);
      return value;
    }
  }
  /**
   * 如果 key 不存在，那么 key 的值会先被初始化为 0 ，然后再执行 INCRBY 命令。
   * @param {string} key 键
   * @param {int} rank 添加/减少量
   * @return 加上指定的增量值之后， key 的值。
   */
  async incrCountByRank(key, rank) {
    const { redis } = this;
    return redis.incrby(key, rank);
  }
  async scanAll(patternStr) {
    const { redis } = this;
    let result = [ 0 ]; // 存放cursor 游标
    let stringKeyArr = [];
    // 循环遍历
    do {
      // 按照redis默认游标走10
      result = await redis.scan(result[0], 'MATCH', patternStr);
      stringKeyArr = stringKeyArr.concat(result[1]);
    } while (result[0] !== '0');

    // 处理成[{filed:value}]
    const res = [];
    console.log(stringKeyArr);
    for (let index = 0; index < stringKeyArr.length; index++) {
      const key = stringKeyArr[index];
      const value = await this.get(key);
      res[index] = {
        key, value,
      };
    }
    return res;
  }

  // 测试redis
  test() {
    const { redis } = this;
    return redis;
  }
}


module.exports = redisString;
