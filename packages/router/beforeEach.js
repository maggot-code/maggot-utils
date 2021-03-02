/*
 * @Author: maggot-code
 * @Date: 2021-03-02 10:01:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-02 10:32:20
 * @Description: maggot utils router prev guard
 */
export default (to, from, next) => {
    console.log(to);
    console.log(from);
    console.log(next);
    next();
}
