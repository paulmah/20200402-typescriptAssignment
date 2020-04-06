console.log("hello!");
// edabit puzzle = Array of Multiples
var calcAgain = true; // was already implicitly typed
console.log("Array of Multiples");
while (calcAgain) {
    var num = parseInt(prompt("Which number to you want multiples of"));
    var length_1 = parseInt(prompt("how many multiples you want"));
    if (length_1 < 1) {
        console.log("Number of multiples must be an integer 1 or larger");
    }
    else {
        console.log(arrayOfMultiples(num, length_1));
    }
    calcAgain = confirm("Another Calculation?");
}
// edabit puzzle = Triangular Number Sequence
var calcAgain = true;
console.log("Triangular Number Sequence");
while (calcAgain) {
    var n = parseInt(prompt("How many levels of triangle do you want"));
    // var n:number = parseInt( prompt("How many levels of triangle do you want" ):number );
    if (n < 0) {
        console.log("Number must be an integer 0 or larger");
    }
    else {
        console.log(triangle(n));
    }
    calcAgain = confirm("Another Calculation?");
}
function arrayOfMultiples(num, length) {
    var arrayOfMultiplesInst = [];
    for (var i = 1; i <= length; i++) {
        arrayOfMultiplesInst.push(num * i);
    }
    return arrayOfMultiplesInst;
}
function triangle(n) {
    return (n <= 1) ? n : (n + triangle(n - 1));
}
