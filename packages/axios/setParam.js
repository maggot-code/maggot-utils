/*
 * @Author: maggot-code
 * @Date: 2021-03-11 10:05:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-11 10:46:38
 * @Description: maggot utils axios set param
 */
import { hasNumber, hasString } from '../tool/common';

// timeout 指定请求超时的毫秒数(0 表示无超时时间)
// 如果请求会话了超过 timeout 的时间，请求将被中断
const TIMEOUT = 0;
// responseType 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
const RESPONSETYPE = "json";
// responseEncoding表示用于解码响应的编码
// Note: Ignored for responseType of 'stream' or client-side requests
const RESPONSEENCODING = "utf8";
// withCredentials 表示跨域请求时是否需要使用凭证
const WITHCREDENTIALS = true;
// validateStatus 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
// 如果 validateStatus 返回 true (或者设置为 null 或 undefined)，promise 将被 resolve; 否则，promise 将被 rejecte
const VALIDATESTATUS = (status) => status < 400;

/**
 * @description: 用于初始化axios对象的配置方法，并将初始设置与扩展参数合并
 * @param {String} tag 为该次请求标记标签属性，用于中断时区分并行请求
 * @param {Object} options 配置基础参数对象:
 * @param Boolean options.withCredentials 跨域请求时是否需要使用凭证
 * @param Number options.timeout 指定请求超时的毫秒数(0 表示无超时时间)
 * @param String options.responseType 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
 * @param String options.responseEncoding 表示用于解码响应的编码
 * @param Function options.validateStatus 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
 * @param {Object} headers 请求头参数对象
 * @return {Object} config - 配置参数
 */
export default (tag, options, headers = {}) => {
    const {
        withCredentials,
        timeout,
        responseType,
        responseEncoding,
        validateStatus
    } = options;

    const config = {
        requestTag: hasString(tag) ? tag : 'default',
        withCredentials: withCredentials || WITHCREDENTIALS,
        timeout: hasNumber(timeout) && timeout > 0 ? timeout : TIMEOUT,
        responseType: responseType || RESPONSETYPE,
        responseEncoding: responseEncoding || RESPONSEENCODING,
        validateStatus: validateStatus || VALIDATESTATUS,
        headers: Object.assign({}, {
            'Access-Control-Allow-Origin': window.location.origin,
        }, headers)
    }

    return config;
}
