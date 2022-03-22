// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

const arr = [23, 71, 33, 82, 1]
const exp = [15, 28, 4, 2, 43]
const list = [19, 5, 42, 2, 77]
// 實作程式碼寫在這裡
list.sort(function(a, b) {
  return a - b;
});
console.log(list[0] + list[1]);

// 最終結果應該要印出7
arr.sort(function(a, b) {
  return a - b;
});
console.log(arr[0] + arr[1]);

exp.sort(function(a, b) {
  return a - b;
});
console.log(exp[0] + exp[1]);