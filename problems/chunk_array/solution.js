/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
  const arr1 = [];
    for(let i =0; i<arr.length;i+=size) {
      const chunk = arr.slice(i, i + size);
      arr1.push(chunk)
    }
    return arr1
};