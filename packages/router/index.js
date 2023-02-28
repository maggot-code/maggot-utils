/*
 * @Author: maggot-code
 * @Date: 2021-03-02 09:41:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-09-16 17:05:24
 * @Description: maggot utils router inlet
 */
// const VueRouter = require('vue-router');
// const baseBeforeFunc = require('./beforeEach').default;
// const baseAfterFunc = require('./afterEach').default;
import VueRouter from "vue-router";
import baseBeforeFunc from "./beforeEach";
import baseAfterFunc from "./afterEach";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// module.exports = {
//     VueRouter: VueRouter,
//     BeforeEach: baseBeforeFunc,
//     AfterEach: baseAfterFunc
// };
export default {
    VueRouter: VueRouter,
    BeforeEach: baseBeforeFunc,
    AfterEach: baseAfterFunc
}
