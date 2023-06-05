//çok boyutlu array çalışmaları yapalım

const cokBoyutlu = [
  [-3, -2, -1],
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12, 45, 77], 13, 14, 15,
];

let ilkOge = cokBoyutlu[0];
let a = cokBoyutlu[1][2];
let b = cokBoyutlu[4][cokBoyutlu[4].length - 1];

console.log(ilkOge); //[-3, -2, -1]
console.log(a); //3
console.log(b); //77
