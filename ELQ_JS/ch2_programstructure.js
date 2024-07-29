// Expressions and statements

let ten = 10;
console.log(ten * ten);
// → 100

let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105

let one = 1, two = 2;
console.log(one + two);
// → 3

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda

// Functions
// prompt('Enter Password');
// Executing a function is called invoking, calling, or applying it

let x = 30;
console.log("the value of x is", x);
// → the value of x is 30

// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is the square root of " +
// theNumber * theNumber);
// → 2 → 4


// Assignment
// Looping a Triangle

for(let i=0; i<=7; i++) {
    let row= '';
    for (let j=1; j<= i; j++) {
        row+= '#';
    }
    console.log(row);
}
       

for(let i=1; i<=100; i++) {
    if(i%3 === 0 && i%5 ===0) {
        console.log('Fizzbuzz');
    } else if (i%3 === 0){
        console.log('Fizz')
    } else if (i%5 === 0) {
        console.log('Buzz')
    } else {
        console.log('No divisiblity for number: ',i);
    }
}

// Chessboard

let chessboard= '';

for (let row=0; row<8; row++) {
    for (let col= 0; col<8; col++) {

        if((row + col) % 2 === 0 ) {
            chessboard += '#'
        } else {
            chessboard += ' '
        }
    }
    chessboard += '\n'
}

console.log(chessboard);