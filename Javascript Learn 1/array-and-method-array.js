// manipu array

// 1. Menambahkan isi array

var arr = [];
arr[0] = "Enricho" ;
arr[1] = "Alkalas" ;
arr[2] = "Crapper Inside" ;
// arr[3] = "Lisa Mei Liana" ;
// console.log(arr);

// 2. Menghapus Array

// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan Isi Array

// for ( var i = 0; i < arr.length; i++ ) {
// 	console.log('Nama Mahasiswa Ke ' + ( i + 1 ) + ' Adalah ' + arr[i]);
// }

// Method Array
// 1. length ( Menghitung Semua Jumlah Index Array )
// 2. join ( Yang menggabungkan semua isi array dan menjadikannya string )
// 3. Push, Pop, Shift, Unshift ( Untuk Menambah / Menghapus Element Array)
// 4. Slice & Splice
// 5. Foreach & Map ( Untuk Melakukan Looping Pada Array )
// 6. Filter & Find ( Untuk Mencari Element Pada Array )s

// Method Array
// 1. Join
// console.log(arr.join(' '));

// 2. Push & Pop
// + Push ( Untuk Memasukan Element Baru Pada Array Di Bagian Akhir )
// + Pop ( Untuk Menghapus Element Akhir Pada Array)
// arr.push('Febrianti');
// arr.push('Febrianti', 'Dian Purnama');
// arr.pop();
// console.log(arr.join(' '));

// 3. Unshift & Shift
// Sama Seperti Push & Pop, Tetapi Bekerja Pada Element Pertama Pada Array
// arr.unshift("Iyan","Fikri");
// arr.shift();
// console.log(arr.join('-'));

// 4. Slice & Splice
// Slice = Mengiris Array ( Untuk Mengambil Beberapa Bagian Array Menjadi Array Yang Baru );
// Splice = Menyambung / Menambal Sebuah Array

// splice(index awal, mau dihapus bearap, mau ditambah element baru apa, dst.....)
// arr.splice(2,0,'Jakarta'); // Menambahkan
// arr.splice(0, 2, 'Jakarta','Depok');
// console.log(arr.join(' - '));

// slice(awal,akhir);
// var arr2 = arr.slice(1,3);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 5. For Each ( Kita tidak perlu bikin index, tidak perlu menentukan banyaknya looping, tidak perlu increment)
// var angka = [1,2,3,6,1,3,10,20,6,8,9];

// Looping Biasa
// for (var i = angka.length - 1; i >= 0; i--) {
// 	console.log(angka[i]);
// }

// function sendiri
// var cetak = function(e) {
// 	console.log(e);
// }

// angka.forEach(cetak);

// function expression
// angka.forEach(function(e) {
//  	console.log(e);
// });

// angka.foreach ( untuk setiap element angka ) 
// function(e) lakukan fungsi instruksi (console.log (e) )

// arr.forEach(function(e, i){
// 	console.log('Mahasiswa Ke - ' + ( i + 1 ) + ' Adalah : ' + e);
// })

// 6. Map ( Sama seperti foreach tetapi lebih baik, karena map mengembalikan array sedangkan foreach tidak )
// var angka2 = angka.map(function(e) {
//  	return e * 2; // Semua Index Di kalikan 2
// });

// console.log(angka2.join(' - '));

// // 7. Sort 
// console.log('Sebelum Di Urutkan : ' + angka.join(' - '));
// angka.sort();
// console.log('Sesudah Di Urutkan : ' + angka.join(' - '));

// Hasil diatas mengurutkan char pertamanya
// cara mengurutkan semuanya

// console.log('Sebelum Di Urutkan : ' + angka.join(' - '));
// angka.sort();
// console.log('Sesudah Di Urutkan Tanpa Function Pembeda Char : ' + angka.join(' - '));
// angka.sort(function(a,b){
// 	return a - b;
// });
// console.log('Sesudah Di Urutkan : ' + angka.join(' - '));

// 8. Filter ( Mengembalikan Banyak Nilai )
// var angka = [1,2,3,6,1,3,10,20,6,8,9];
// var angka2 = angka.filter(function(x){
// 	return x > 5;
// })
// console.log(angka2.join(' - '));

// 9. Find ( Mengembalikan 1 Nilai )
// var angka = [1,2,3,6,1,3,10,20,6,8,9];
// var angka2 = angka.find(function(x){
// 	return x > 5;
// })
// console.log(angka2);

