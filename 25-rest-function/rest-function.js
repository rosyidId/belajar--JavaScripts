// rest function adalah fungsi yang jumlah parameternya nggak terbatas

function sum(sumVal, ...params){
    return params.reduce((total, val) => total + val, sumVal)
}

console.log(sum(1,2,3,4))
console.log(sum(1,2,3,4,5,6))
console.log(sum(1,4,5,67,))