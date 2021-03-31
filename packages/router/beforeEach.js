/*
 * @Author: maggot-code
 * @Date: 2021-03-02 10:01:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-31 15:31:28
 * @Description: maggot utils router prev guard
 */
const { hasString, hasBoolean } = require('../tool/common');
const { getToken } = require('../tool/cache');

const setTitle = (to, options) => {
    const { basetitle, deftitle, useTitle } = options;
    const title = to.meta.title || deftitle;

    if (useTitle) {
        window.document.title = `${title} - ${basetitle}`;
    } else {
        window.document.title = basetitle;
    }

}

const guard = (to, from, options) => {
    const { token, loginName, rootName, redirect } = options;
    const { meta } = to;
    const toName = to.name;
    const fromName = from.name;
    const baseToken = token || getToken();
    const baseLoginName = hasString(loginName) ? loginName : 'login';
    const baseRootName = hasString(rootName) ? rootName : 'root';
    const baseRedirect = hasBoolean(redirect) ? redirect : false;
    const redirectName = baseRedirect ? toName : baseRootName;

    if (!meta.power && toName !== baseLoginName) {
        return {}
    } else {
        if (baseToken && toName === baseLoginName) {
            // tips
            return { name: fromName }
        } else if (!baseToken && toName !== baseLoginName && toName !== fromName) {
            // tips
            return { name: baseLoginName, query: { redirect: redirectName, t: new Date().getTime() } }
        } else {
            return {}
        }
    }
}

export default (to, from, router) => {
    const { options } = router;

    setTitle(to, options);

    return guard(to, from, options);
}
