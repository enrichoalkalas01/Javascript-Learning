// Pilihan Mengulang Game
var question = true ;

while ( question ) {
	// Menangkap Pilihan Player
	var p = prompt('Pilih : Gajah, Semut, Orang');


	// Menangkap Pilihan Computer
	// Membangkitkan Bilangan Random
	var comp = Math.random()

	if (comp < 0.34) {
		comp = 'gajah';
	} else if ( comp >= 0.34 && comp <= 0.67 ) {
		comp = 'orang';
	} else {
		comp = 'semut';
	}

	var result = '';

	// Menentukan Rules
	if ( p == comp ) {
		result = 'Draw';
	} else if ( p == 'gajah' ) {
		
		// Operator Ternary	
		result = ( comp == 'orang' ) ? 'Winner' : 'Lose' ;
		
		// if ( comp == 'orang' ) {
		// 	result = 'Winner';
		// } else {
		// 	result = 'Lose';
		// }
	} else if ( p == 'orang' ) {
		result = ( comp == 'gajah' ) ? 'Lose' : 'Winner' ;
	} else if ( p == 'semut' ) {
		result = ( comp == 'orang' ) ? 'Lose' : 'Winner' ;
	} else {
		result = 'Wrong Input !!!' ;
	}

	// Tampilkan Hasilnya
	alert('You Choose : ' + p + ' And Computer Choose : ' + comp + '\n And The Result Is : You ' + result );

	question = confirm('Again ?');
}

alert('Thank You For Playing');