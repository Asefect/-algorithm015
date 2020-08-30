/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let k = 0;
  let j = height.length - 1;
  let res = 0;
  while (k < height.length) {
    i = k;
    j = height.length - 1;
    while (i >= 0) {
      const temp = Math.min(height[j], height[i]) * (j - i);
      if (res < temp) {
        res = temp;
      }
      i--;
      j--;
    }
    k++;
  }
  return res;
};