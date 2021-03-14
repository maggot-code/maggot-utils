/*
 * @Author: maggot-code
 * @Date: 2021-03-11 10:02:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-14 17:32:55
 * @Description: maggot utils axios inlet
 */
const setParam = require('./setParam').default;

const request = (axios, options) => axios(setParam(options));

const send = (axios) => (options) => request(axios, options);

const sendAll = (axios) => { }

module.exports = {
    Send: send,
    SendAll: sendAll
}
