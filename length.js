/**
 * 返回字符串的正确长度，包括了ES6中的情况，即码点大于0xFFFF的Unicode字符。
 * 
 * @param {string} str 需要计算长度的字符串
 * @return {number} result   字符串的长度
 */
function length(str) {
  var result = str.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

var s = '𠮷𠮷';

s.length // 4
length(s) // 2