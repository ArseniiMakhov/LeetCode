/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = s.trim().split(' ').reverse()
    let filtered = str.filter(e => e !== '')
    return filtered.join(' ')
};