function sum() {
	var result = 0 ;

	for ( var i = 0; i < arguments.length; i++ ) {
		result += arguments[i];
	}

	return result ;
}

let test = sum(5,6,4);
console.log(test) ;