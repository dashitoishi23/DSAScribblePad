/**
 * @param {number} numRows
 * @return {number[][]}
 */
//https://leetcode.com/problems/pascals-triangle/
var generate = function (numRows) {
  const triangle = [[1], [1, 1]];
  if (numRows === 1) return [[1]];
  for (let i = 2; i < numRows; i++) {
    const arr = [1];
    for (let j = 1; j <= i - 1; j++) {
      arr.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
    }
    arr.push(1);
    triangle.push(arr);
  }

  return triangle;
};
