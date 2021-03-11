/*
 * @Author: maggot-code
 * @Date: 2021-03-02 09:17:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-11 12:39:57
 * @Description: maggot utils inlet
 */
const toolPackage = require('./packages/tool');
const routerPackage = require('./packages/router');
const axiosPackage = require('./packages/axios');

module.exports = {
    MGrouter: routerPackage,
    MGaxios: axiosPackage,
    ...toolPackage
}
