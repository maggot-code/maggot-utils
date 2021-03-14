/*
 * @Author: maggot-code
 * @Date: 2021-03-02 09:41:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-14 22:44:41
 * @Description: maggot utils router inlet
 */
const VueRouter = require('vue-router').default;
const baseBeforeFunc = require('./beforeEach').default;
const baseAfterFunc = require('./afterEach').default;

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

module.exports = {
    VueRouter: VueRouter,
    BeforeEach: baseBeforeFunc,
    AfterEach: baseAfterFunc
};
