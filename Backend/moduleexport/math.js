// app.js
const math = require('./math');
const stringUtils = require('./stringUtils');

const sum = math.add(5, 3);
const difference = math.subtract(5, 3);
const capitalized = stringUtils.capitalize('hello');
const reversed = stringUtils.reverse('world');

console.log(`Sum: ${sum}`); 
console.log(`Difference: ${difference}`); 
console.log(`Capitalized: ${capitalized}`); 
console.log(`Reversed: ${reversed}`); 