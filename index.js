/*
 * @Author: maggot-code
 * @Date: 2021-03-02 09:17:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-11 12:39:57
 * @Description: maggot utils inlet
 */
// const toolPackage = require('./packages/tool');
// const routerPackage = require('./packages/router');
// const axiosPackage = require('./packages/axios');
import toolPackage from "./packages/tool";
import routerPackage from "./packages/router";
import axiosPackage from "./packages/axios";

// module.exports = {
//     MGrouter: routerPackage,
//     MGaxios: axiosPackage,
//     ...toolPackage
// }
export default {
    MGrouter: routerPackage,
    MGaxios: axiosPackage,
    ...toolPackage
}
