// Functions

const square = function(x) {
    return x*x;
}
console.log(square(5));

const makeNoise = function() {
console.log("Pling!");
};

makeNoise();
// → Pling!

const roundTo = function(n, step) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(23, 10));
// → 20

// Binding and Scopes
// Global → scope is the whole program

let x = 10;   // global
if (true) {
  let y = 20; // local to block
  var z = 30; // also global
}

const halve = function(n) {
    return n / 2;
  };
  
let n = 10;
console.log(halve(100));
// → 50

// Nested Scope

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };

    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(3);


console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}

// Arrow Functons

const square1 = (x) => { return x * x; };
const square2 = x => x * x;

function square3(x) { return x * x; }
console.log(square3(4, 5, "hedgehog"));
// → 16

console.log(square3("hedgehog", 4, 5,));

// function minus(a, b) {
//   if (b === undefined) return -a;
//   else return a - b;
// }

// console.log(minus(10));
// // → -10
// console.log(minus(10, 5));
// // → 5


// Assignment

// Minimum
function min(a,b) {
  if(a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(0,10));
console.log(min(0,-10));

// Recursion
function isEven(n) {
  if(n <0) {
    return 'Not a whole No';
  }
  let newNo= n-2;
  if(newNo%2===0) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Bean Counting

function countBs(str) {
  let count = 0;

  for(let i=0; i<str.length; i++) {
    if(str[i]==='B') {
      count++;
    }
  }

  return count;
}

console.log(countBs("Babbar Bhai Besty"));

function countChar(str, char) {
  let count = 0;

  for(let i=0; i<str.length; i++) {
    if(str[i]===char) {
      count++;
    }
  }
  return count;
}

console.log(countChar('Hello How High is the High Heels', 'H'));