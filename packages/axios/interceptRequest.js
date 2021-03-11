/*
 * @Author: maggot-code
 * @Date: 2021-03-11 10:04:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-11 16:17:40
 * @Description: maggot utils axios intercept request
 */
const { flake } = require('../tool/common');
export default (instance) => {
    instance.interceptors.request.use(config => {
        config.requestId = flake.gen();

        return config;
    }, error => new Promise.reject(error));
}
