/*
 * @Author: maggot-code
 * @Date: 2021-03-11 10:02:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-11 10:08:43
 * @Description: maggot utils axios inlet
 */
import setParam from './setParam';
import interceptRequest from './interceptRequest';
import interceptResponse from './interceptResponse';

module.export = {
    Params: setParam,
    InterceptRequest: interceptRequest,
    InterceptResponse: interceptResponse
}
