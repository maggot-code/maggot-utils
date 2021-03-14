/*
 * @Author: maggot-code
 * @Date: 2021-03-11 10:05:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-14 23:56:44
 * @Description: maggot utils axios set param
 */
const { hasNumber, hasString } = require('../tool/common');

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
 * @param {Object} options 请求参数对象
 * @param {Object} attr 基础配置参数对象
 * @return {Object} config - 配置参数
 */
export default (options, attr = {}) => {
    const {
        withCredentials,
        timeout,
        responseType,
        responseEncoding,
        validateStatus
    } = attr;

    const config = {
        withCredentials: withCredentials || WITHCREDENTIALS,
        timeout: hasNumber(timeout) && timeout > 0 ? timeout : TIMEOUT,
        responseType: responseType || RESPONSETYPE,
        responseEncoding: responseEncoding || RESPONSEENCODING,
        validateStatus: validateStatus || VALIDATESTATUS,
    }

    const { tag } = options;
    const baseTag = hasString(tag) ? tag : 'default';

    return Object.assign({}, config, {
        ...options,
        requestTag: baseTag
    });
}
