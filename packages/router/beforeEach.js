/*
 * @Author: maggot-code
 * @Date: 2021-03-02 10:01:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-03-11 00:04:07
 * @Description: maggot utils router prev guard
 */
const setTitle = (to, options) => {
    const { basetitle, deftitle } = options;
    const title = to.meta.title || deftitle;

    window.document.title = `${title} - ${basetitle}`;
}

const guard = (to, from, options) => {
    const { getToken } = options;
    const { meta } = to;
    const toName = to.name;
    const fromName = from.name;
    const token = getToken();

    if (!meta.power && toName !== 'login') {
        return {}
    } else {
        if (token && toName === 'login') {
            // tips
            return { name: fromName }
        } else if (!token && toName !== 'login' && toName !== fromName) {
            // tips
            return { name: 'login', query: { redirect: toName || 'root', t: new Date().getTime() } }
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
