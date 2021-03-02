/*
 * @Author: maggot-code
 * @Date: 2021-03-02 09:17:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-02 09:42:51
 * @Description: maggot utils inlet
 */
const toolPackage = require('./packages/tool');
const routerPackage = require('./packages/router');
const axiosPackage = require('./packages/axios');

module.exports = {
    MGtool: toolPackage,
    MGrouter: routerPackage,
    MGaxios: axiosPackage
}
