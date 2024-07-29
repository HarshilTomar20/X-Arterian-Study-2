let score = "33";
let score2= "33A";
let score3= null;
let score4= true;
// const {score}= req.body;

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number

let valueInNumber2= Number(score2);
console.log(typeof valueInNumber2); // Nan => Not a Number

let valueInNumber3= Number(score3);
console.log(typeof valueInNumber3); // 0

let valueInNumber4= Number(score4);
console.log(typeof valueInNumber4); // 1



let igLoggedIn= 1;
let booleanigLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanigLoggedIn); 
// 1=> true, 0=> value

let randomNumber = 77;
let stringNumber = String(randomNumber);
console.log(typeof stringNumber); // string

// Operations :

let str1= "hello";
let str2= " harshil";
let str3= str1 + str2;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); //32