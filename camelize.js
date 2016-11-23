/**
 * @file 字符串转驼峰形式的方法
 * @author zhouqinghuai
 */

/**
 * 将字符串转成驼峰形式
 * 方法1：操作字符串数组
 *
 * @param {string} str 需要转换成驼峰形式的字符串
 * @return {number} 驼峰形式的字符串
 */
function camelize(str) {
    var strArr = str.split('-');
    for (var i = 1; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
    }
    return strArr.join('');
}

// test
camelize('get-attr'); // getAttr


/**
 * 将字符串转成驼峰形式（不推荐）
 * 方法2：操作字符数组
 *
 * @param {string} str 需要转换成驼峰形式的字符串
 * @return {number} 驼峰形式的字符串
 */
function camelize(str) {
    var strArr = str.split('');
    for (var i = 1; i < strArr.length; i++) {
        if (strArr[i] === '-') {
            // 删除'-'
            strArr.splice(i, 1);
            // 转大写
            if (i < strArr.length) {
                strArr[i] = strArr[i].toUpperCase();
            }
        }
    }
    return strArr.join('');
}

// test
camelize('get-attr'); // getAttr


/**
 * 将字符串转成驼峰形式
 * 方法3：利用正则表达式
 *
 * @param {string} str 需要转换成驼峰形式的字符串
 * @return {number} 驼峰形式的字符串
 */
function camelize(str) {
    var re = /-(\w)/g;
    return str.replace(re, function ($0, $1) {
        return $1.toUpperCase();
    });
}

// test
camelize('get-attr'); // getAttr


/**
 * 将字符串转成驼峰形式（同方法3）
 * 方法4：利用正则表达式（vue1.0源码）
 *
 * @param {string} str 需要转换成驼峰形式的字符串
 * @return {number} 驼峰形式的字符串
 */
var camelizeRE = /-(\w)/g;
function camelize(str) {
    return str.replace(camelizeRE, toUpper);
}

function toUpper(_, c) {
    return c ? c.toUpperCase() : '';
}

// test
camelize('get-attr'); // getAttr
