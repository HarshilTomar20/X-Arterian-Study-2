const accoundId = 112233;
let accountEmail = "harshil@gmail.com";
var accountPassword = "123456";
accountCity = "Jaipur";
accountEmail="harshil20@gmail.com";
let accoundState;

{/* Prefer Not to use Var bvz of issue of block scope and functional scope */}

accountId = 2;
console.log(accoundId);
console.log([accoundId, accountEmail, accountPassword, accountCity]);
console.log(accoundState);