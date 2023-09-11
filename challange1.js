/**
 * Susun ulang array
 * 
 * Diberikan array [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]. 
 * Urutkan array ini dari yang terkecil ke terbesar, kemudian balikkan urutannya. 
 * Setelah itu, hapus angka yang sama sehingga setiap angka hanya muncul sekali.
 * 
 * Bisa menggunakan built in function. Kisi2 sebagai berikut:
 * 1. Urutkan array terlebih dahulu
 * 2. Balik urutan array tersebut
 * 3. Hapus angka yang duplikat
 */

let angkaKumupulan =[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// Output : [9, 6, 5, 4, 3, 2, 1]

angkaKumupulan.sort(function(a,b){
    return a - b
})
console.log(angkaKumupulan + " ==> terkecil ke terbesar");

angkaKumupulan.sort(function(a,b){
    return b - a
})
console.log(angkaKumupulan + " ==> terkecil ke terbesar");