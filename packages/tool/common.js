/*
 * @Author: maggot-code
 * @Date: 2021-03-11 10:45:49
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-11 11:10:06
 * @Description: maggot utils tool common
 */
import Flakeid from 'flakeid';

const flake = new Flakeid({
    mid: new Date().getTime(),
    timeOffset: (new Date.getFullYear() - 1970) * 31536000 * 1000
})

const hasNumber = num => typeof num === 'number';

const hasString = str => typeof str === 'string';

const hasArray = arr => arr instanceof Array;

const hasUrl = url => {
    const reg = RegExp(/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/);
    return reg.test(url);
}

export default {
    flake,
    hasNumber,
    hasString,
    hasArray,
    hasUrl
}