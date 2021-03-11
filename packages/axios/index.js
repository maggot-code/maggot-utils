/*
 * @Author: maggot-code
 * @Date: 2021-03-11 10:02:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-11 12:15:39
 * @Description: maggot utils axios inlet
 */
const setParam = require('./setParam');
const interceptRequest = require('./interceptRequest');
const interceptResponse = require('./interceptResponse');

module.export = {
    Params: setParam,
    InterceptRequest: interceptRequest,
    InterceptResponse: interceptResponse
}
