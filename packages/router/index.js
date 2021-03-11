/*
 * @Author: maggot-code
 * @Date: 2021-03-02 09:41:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-11 12:29:03
 * @Description: maggot utils router inlet
 */
const VueRouter = require('vue-router');
const baseBeforeFunc = require('./beforeEach');
const baseAfterFunc = require('./afterEach');

module.exports = {
    VueRouter: VueRouter.default,
    BeforeEach: baseBeforeFunc.default,
    AfterEach: baseAfterFunc.default
};
