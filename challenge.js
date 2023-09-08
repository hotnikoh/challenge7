/**
 * Menggabungkan Array dengan Spesifik
 * Memiliki dua array, arr1 = [1, 2, 3] dan arr2 = ['a', 'b', 'c']. 
 * Gabungkan kedua array tersebut sehingga mendapatkan hasil ['a', 1, 'b', 2, 'c', 3].
 */

let kumpulanAngka = [1, 2, 3];
let kumpulanHuruf = ["a", "b", "c"];

// let hasilGabungan = kumpulanHuruf.concat(kumpulanHuruf);

let hasilGabungan1 = [];

for (let index=0; index < kumpulanHuruf.length; index++){
    hasilGabungan1.push(kumpulanHuruf[index])
    hasilGabungan1.push(kumpulanAngka[index])
}
console.log(hasilGabungan1);
