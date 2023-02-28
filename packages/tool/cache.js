/*
 * @Author: maggot-code
 * @Date: 2021-03-11 10:45:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-11 12:24:03
 * @Description: maggot utils tool cache
 */
// const Cookies = require('js-cookie');
// const { hasNumber, hasString } = require('./common');
import Cookies from "js-cookie";
import {hasNumber,hasString} from "./common";

const TOKENKEY = 'maggot_token';

const cacheMissError = (handle, value) => `${handle} : ${value} 需要字符串`;

/**
 * @description: 获取cookie
 * @param {String} cookieName cookie 名称
 * @return {* | Boolean} 获取的cookie值，如果没有则返回 false
 */
export const getCookie = (cookieName) => Cookies.get(cookieName) || false;

/**
 * @description: 设置cookie
 * @param {String} cookieName cookie 名称
 * @param {*} value cookie 值
 * @param {Number} overtime cookie 超时时间
 */
export const setCookie = (cookieName, value, overtime = 1) => Cookies.set(cookieName, value, { expires: hasNumber(overtime) ? overtime : 1 });

/**
 * @description: 删除cookie
 * @param {String || Null} cookieName cookie 名称
 */
export const delCookie = (cookieName = null) => {
    const remove = Cookies.remove;

    if (cookieName === null || hasString(cookieName)) {
        cookieName === null ? remove() : remove(cookieName);
    } else {
        console.error(cacheMissError('cookie name', cookieName));
    }
}

/**
 * @description: 获取 token
 * @return {* | Boolean} 获取的token值，如果没有则返回 false
 */
export const getToken = () => getCookie(TOKENKEY);

/**
 * @description: 设置 token
 * @param {*} token token值
 * @param {Number} overtime token 超时时间
 */
export const setToken = (token, overtime) => setCookie(TOKENKEY, token, overtime);

/**
 * @description: 删除token
 */
export const delToken = () => delCookie(TOKENKEY);

/**
 * @description: 短期缓存获取
 * @param {String} name 名称
 * @return {* | Boolean} 获取的缓存值，如果没有则返回 false
 */
export const shortCacheGet = (name) => JSON.parse(sessionStorage.getItem(name)) || false;

/**
 * @description: 短期缓存设置
 * @param {String} name 缓存名称
 * @param {*} jsonObject 缓存值
 */
export const shortCacheSet = (name, jsonObject) => sessionStorage.setItem(name, JSON.stringify(jsonObject));

/**
 * @description: 短期缓存删除
 * @param {String | Null} name 缓存名称
 */
export const shortCacheDel = (name = null) => {
    if (name === null || hasString(name)) {
        name === null ? sessionStorage.clear() : sessionStorage.removeItem(name);
    } else {
        console.error(cacheMissError('short cache name', name));
    }
}

/**
 * @description: 缓存获取
 * @param {String} name 名称
 * @return {* | Boolean} 获取的缓存值，如果没有则返回 false
 */
export const cacheGet = (name) => JSON.parse(localStorage.getItem(name)) || false;

/**
 * @description: 缓存设置
 * @param {String} name 缓存名称
 * @param {*} jsonObject 缓存值
 */
export const cacheSet = (name, jsonObject) => localStorage.setItem(name, JSON.stringify(jsonObject));

/**
 * @description: 缓存删除
 * @param {String | Null} name 缓存名称
 */
export const cacheDel = (name = null) => {
    if (name === null || hasString(name)) {
        name === null ? localStorage.clear() : localStorage.removeItem(name);
    } else {
        console.error(cacheMissError('cache name', name));
    }
}
