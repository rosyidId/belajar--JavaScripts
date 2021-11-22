/*
    Spread-oprator adalah tanda tiga titik(...)
    yang bisa di pakai untuk beberapa keperluan.
    Pertama untuk mengkopi array atau objek
*/ 

const arr1 = [1,2,3,4];
const arr2 = [...arr1];

console.log('arr1 = ', arr1);
console.log('arr2 = ', arr2);
console.log(arr1 === arr2);

const obj1 = {
    name : 'aa',
    age : 40
};

const obj2 = {...obj1};
console.log(obj2);



console.log("==================================")
// contoh menggabungkan array atau obj
const arr3 = [1,2];
const arr4 = ['a','b'];
const arr5 = [...arr3, '++', ...arr4];

console.log(arr5);

const obj3 ={
    nama : 'aa',
    umur : 20
}

const obj4 = {
    negara : 'ID',
    kota : 'M'
}

const obj5 = {
    ...obj3,
    ...obj4,
    height: 180
}
console.log(obj5);