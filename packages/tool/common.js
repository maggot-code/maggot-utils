/*
 * @Author: maggot-code
 * @Date: 2021-03-11 10:45:49
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-11 12:24:24
 * @Description: maggot utils tool common
 */
import Flakeid from 'flakeid';

export const flake = new Flakeid({
    mid: new Date().getTime(),
    timeOffset: (new Date().getFullYear() - 1970) * 31536000 * 1000
})

export const hasNumber = num => typeof num === 'number';

export const hasString = str => typeof str === 'string';

export const hasArray = arr => arr instanceof Array;

export const hasUrl = url => {
    const reg = RegExp(/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/);
    return reg.test(url);
}