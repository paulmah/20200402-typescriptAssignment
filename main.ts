console.log("hello!");


// edabit puzzle = Array of Multiples
var calcAgain:boolean = true // was already implicitly typed
console.log( "Array of Multiples" )
while (calcAgain) {
    let num: number = parseInt( prompt("Which number to you want multiples of" ) );
    let length: number = parseInt( prompt("how many multiples you want" ) );
    if ( length < 1 ) {
        console.log( "Number of multiples must be an integer 1 or larger")
    } else {
        console.log( arrayOfMultiples( num, length ) );
    }
    calcAgain = confirm( "Another Calculation?");
}

// edabit puzzle = Triangular Number Sequence
var calcAgain:boolean = true
console.log( "Triangular Number Sequence" )
while (calcAgain) {
    var n:number = parseInt( prompt("How many levels of triangle do you want" ) );
    // var n:number = parseInt( prompt("How many levels of triangle do you want" ):number );
    if ( n < 0 ) {
        console.log( "Number must be an integer 0 or larger")
    } else {
        console.log( triangle( n ) );
    }
    calcAgain = confirm( "Another Calculation?");
}

function arrayOfMultiples ( num: number, length: number ): number[] {
    var arrayOfMultiplesInst = [];
    for ( var i = 1; i <= length; i++ ) {
        arrayOfMultiplesInst.push( num * i );
    }
    return arrayOfMultiplesInst;
}

function triangle( n: number ): number {
	return ( n <= 1 ) ? n : ( n + triangle( n-1 ) );
}

