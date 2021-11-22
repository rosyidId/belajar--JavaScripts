//  destructuring assigment kita pakai untuk membuat variabel-variabel baru dari elemen
// sebuah array atau atribut-atriut sebuah objek
// const arr = ['a','b','c', 'd'];

const [v1,v2,v3] = arr;


console.log(v1);
console.log(v2);
console.log(v3);

const obj = {
    name: 'pak boss',
    age: 40
};

const {name, age} = obj;

console.log(name);
console.log(age);

console.log("==============================")

const arr1 = [1,2,3,4];

const [pertama, kedua, ...sisanya] = arr1

console.log(pertama);
console.log(kedua);
console.log(sisanya);