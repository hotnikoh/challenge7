// let fruits = ["apple", "strawberry", "durian" ]
// fruits.forEach(function(item){
//     console.log(item);
// })

// let numbers = [1,2,3,10,9,2,2,1,4,5]
// let filteredItems = numbers.filter (function(item){
//     return item >=9
// })
// console.log(filteredItems);

console.log("==============");

let angkaUnik = [21, 19, 10, 89, 3, 20, 33, 34]

let minMax = angkaUnik [0]

for (let i = 1; i < angkaUnik.length; i++){
    if(angkaUnik[i] > minMax) {
        minMax = angkaUnik[i]
    }
}
console.log(minMax);

console.log("===============");

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
for (var i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
}
console.log(array1);

console.log("================");

let arr1 = [1, 2, 3]
let arr2 = [3, 4, 5]
for (let index=0; index<arr2.length; index++){
    arr1.push(arr2[i]);
}

console.log(arr1);

// soal