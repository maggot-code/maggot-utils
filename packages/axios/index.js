/*
 * @Author: maggot-code
 * @Date: 2021-03-11 10:02:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-11 14:17:14
 * @Description: maggot utils axios inlet
 */
const setParam = require('./setParam').default;
const interceptRequest = require('./interceptRequest').default;
const interceptResponse = require('./interceptResponse').default;

const request = (axios, options) => axios(setParam(options));

const send = (axios) => (options) => request(axios, options);

const sendAll = (axios) => { }

module.exports = {
    InterceptRequest: interceptRequest,
    InterceptResponse: interceptResponse,
    Send: send,
    SendAll: sendAll
}
