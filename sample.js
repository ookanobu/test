// サンプルの JavaScript ファイル
// 配列の合計を計算する関数
function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

// 配列の最大値を求める関数
function maxArray(arr) {
  return Math.max(...arr);
}

// テスト用の配列
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('配列の合計:', sumArray(numbers));
console.log('配列の最大値:', maxArray(numbers));

// 配列の最小値を求める関数
function minArray(arr) {
  return Math.min(...arr);
}

console.log('配列の最小値:', minArray(numbers));


