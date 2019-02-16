// Pengelolaan Penumpang
var penumpang = ['Enrihco', 'Lisa Mei Liana', 'Alkalas'];

// Tambah Penumpang
var tambahPenumpang = function(namaPenumpang, penumpang) {
	// Jika angkot kosong
	if ( penumpang.length == 0 ) {
		// tambah penumpang di awal array
		penumpang.push(namaPenumpang);
		// kembalikan isi array & keluar dari function
		return penumpang;
	} else {
	// telusuri seluruh kursi dari awal
		for (var i = 0; i < penumpang.length; i++) {
			// jika ada kursi kosong
			if ( penumpang[i] == undefined ) {
				// tambah penumpang di kursi tersebut
				penumpang[i] = namaPenumpang;
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
			
			// jika sudah ada nama yang sama
			else if ( penumpang[i] == namaPenumpang ) {
				// tampilkan pesan kesalahannya
				console.log(namaPenumpang + ' Sudah Ada Di Dalam Angkot.');
				// kembalikan isi array & keluar dari function
				return penumpang;
			}

			// jika seluruh kursi terisi
			else if ( i == penumpang.length - 1 ) {
				// tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array & keluar dari function
				return penumpang;
			}
		}
	}
}

// Kurang Penumpang

var hapusPenumpang = function(namaPenumpang,penumpang) {
	// angkot kosong
	if ( penumpang.length == 0 ) {
		console.log('Angkot Masih Kosong.');
	} else {
		for ( var i = 0; i < penumpang.length; i++ ) {
			if ( penumpang[i] == namaPenumpang ) {
				penumpang[i] = undefined
			} else if ( i == penumpang.length - 1 ) {
				console.log(namaPenumpang + ' tidak ada di dalam angkot.');
			}
		}
	}
	return penumpang;
}

/*
	tambahPenumpang()
	2 Parameter :
	- Nama Penumpang
	- array Penumpang

	Rules :
	- jika angkot kosong, penumpang naik duduk di kursi pertama
	- penumpang berikutnya duduk di kursi selanjutnya berurutan
	- jika ada kursi kosong (karena penumpang turun), penumpang yang naik berikutnya
	  duduk di kursi kosong terlebih dahulu
	- asumsikan kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik
	- nama penumpang tidak boleh sama, untuk menghindari kebingungan ketika nanti penumpang turun

	kurangPenumpang()
	2 Parameter :
	- Nama penumpang
	- array penumpang

	RUles :
	- jka angkot kosong, tampilkan angkot kosong
	- jika ada penumpang yang namanya sesuai, hapus nama penumpang pada array dengan memberi nilai
	  undefined
	- jika tidak ada penumpang yang namanya sesuai, tampilkan pesan kesalahannya

*/