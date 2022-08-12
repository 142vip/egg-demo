'use strict';

const DataResponse = require('./data-response');

/**
 * 单例
 * @param classFile
 */
function getSingleton(classFile) {
  if (this[classFile.name] == null) {
    this[classFile.name] = new classFile();
  }
  return this[classFile.name];
}

exports.getSingleton = getSingleton;
exports.dataResponse = getSingleton(DataResponse);
exports.constants = require('./constants');
