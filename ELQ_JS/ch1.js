//Strings

`Down on the sea`
"Lie on the ocean"
'Float on the ocean'

"This is the first line\nAnd this is the second" // after n stuff does to next line

`half of 100 is ${100 / 2}` // 50

// Unary Operations => single

console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string

// Binary operations => 2 things
console.log(- (10 - 2))
// → -8

console.log(3 > 2)
// → true
console.log(3 < 2)
// → false

console.log("Aardvark" < "Zoroaster")
// → true, bcz of length

// Logical Operations
console.log(true && false)
// → false
console.log(true && true)
// → true

console.log(false || true)
// → true
console.log(false || false)
// → false

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

// Automatic Type Conversion

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true