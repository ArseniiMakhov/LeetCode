/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let arr1 = [];
    for (var i=0; i<=arr.length - 1; i++) {
      arr1.push(fn(arr[i], i))
    }
    return arr1;
};