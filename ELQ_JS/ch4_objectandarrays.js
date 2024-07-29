let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3

//null.length;
// → TypeError: null has no properties

// Methods
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]

let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true

//The binary in operator, when applied to a string and an object, tells you whether that object has a property with that name.The binary in operator, when applied to a string and an object, tells you whether that object has a property with that name.

console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]
//Object.values → ["0", "0", "2"]

let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

function remove(array, index) {
return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

// String Properties

console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5

console.log("one two three".indexOf("ee"));
// → 11

console.log("  okay \n ".trim());
// → okay  , removes whitespace

// Assignment

// Sum of Range
function range(a, b) {
  let sum= 0;

  for(let i=a; i<=b; i++) {
    sum+=i;
  }

  return sum;
}

console.log(range(1,10));

// Reverse an Array

function reverseArray(array) {
  let reversedArray=[];
  for(let i= array.length; i>=0; i--) {
    reversedArray.push(array[i]);
  }

  return reversedArray;
}

function reverseArrayInPlace(array) {
  for(let i=0; i<(array.length/2); i++ ) {
    let temp= arr[i];
    arr[i]= array[array.length - i];
    array[array.length -i] = temp;
  }

  return array;
}

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n === 0) return list.value;
  else return nth(list.rest, n - 1);
}

// TODO
function deepEqual(a, b) {
  if(a===n) return true;

  if(a===null && b===null) return true;
  if(a=== undefined && b=== undefined) return true;
}