/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// https://leetcode.com/problems/set-matrix-zeroes/description/
var setZeroes = function (matrix) {
  const colLength = matrix[0].length;
  const rowLength = matrix.length;
  const indices = [];
  matrix.forEach((elem, index) => {
    elem.forEach((el, i) => {
      if (el === 0) indices.push([index, i]);
    });
  }); //O(mn)
  indices.forEach((elem) => {
    for (let i = 0; i < rowLength; i++) matrix[i][elem[1]] = 0;
    for (let j = 0; j < colLength; j++) matrix[elem[0]][j] = 0;
  });
};
