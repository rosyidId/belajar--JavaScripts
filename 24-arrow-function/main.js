const bagus = function(name){
    return `Hello ${name}`;
}
console.log(bagus('rosyid'))

console.log("====================================")

// atau menggunakan arrow function
const jelek = nama => `Hello ${nama}`;

console.log(jelek('kamu'));

console.log("====================================")


// kalau parameternya lebih dari satu,ditulis pake tanda kurung
const makan = (tidur, begok) => `Good ${tidur}, ${begok}, `;

console.log(makan('bekerja', 'malam'));

console.log("====================================")
// Nilai balik yang berupa objek harus dibungkus pakai tanda kurung contohnya:
const ukm = (ali, daus)=> ({
    status : 'oke ' + ali,
    msg : `Good ${ali}, ${daus}`
})
console.log(ukm('mari ', 'makan'))
