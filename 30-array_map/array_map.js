/* 
    Fungsi array.map mungkin salah satu yang nanti paling sering kita pakai
    untuk bikin list.Fungsi ini memungkinkan kita melakukan sesuatu
    dengan setiap elemen di sebuah array terus mengembalikannya sebagai array baru tanpa memodifikasi array sumbernya
*/ 
const arr = [5,6,7];

const kuadrat = arr.map(val =>{
    return val * val;
});

console.log(kuadrat)