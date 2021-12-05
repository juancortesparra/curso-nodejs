// let buffer = Buffer.alloc(4); solo 4 espacios en memoria
// let buffer = Buffer.from([2, 5, 1]); 4 numeros binarios en memoria
let buffer = Buffer.from('Juan');

// console.log(buffer.toString());

// --
let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}

console.log(abc.toString());

