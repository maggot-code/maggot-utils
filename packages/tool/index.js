/*
 * @Author: maggot-code
 * @Date: 2021-03-02 09:23:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-11 12:24:40
 * @Description: maggot utils tool inlet
 */
// const common = require('./common');
// const cache = require('./cache');
// const date = require('./date');
import common from "./common";
import cache from "./cache";
import date from "./date";

// module.exports = {
//     ...common,
//     ...cache,
//     ...date
// }

export default {
    ...common,
    ...cache,
    ....date
}
