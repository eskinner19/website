// OPERATORS

// ASSIGNMENT //
// Assignement operators are how to assign data to a named variable, let, or constant
const pastryWeek = true;
let challengeNumber = [1, 2, 3,];
var currentBaker = "Paul";

// UNARY OPERATOR //
// An operation that takes one operand/arg and does an action
// Unary Operator Examples: +, -, *, /, %, <, >, !

// ARITHMETIC OPERATOR //
// An operator where a mathematic operation is preformed
// + add
// - subtract
// * multiply
// / divide
// % modulo; divides the inputted numbers and returns the remainder

// COMPARISON //
// Comparison: runs a comparison and returns a boolean value
console.log(2 > 3); // false
console.log(2 >= 2); // true
console.log(2 + 2 > 3 + 1); // false

// STRICT COMPARISON //
// strict comparison contains three equal signs, evaluating value AND type
// non-strict compares value only; this should almost never be used unless there's a specific reason to
console.log(3 === 3); // true
console.log(2 === 4); //false
console.log(2 !== 4); // true
console.log(2 == '2'); // true


// LOGICAL //
// ! is a bang, this inverts the truth/false value
console.log(2 !== 4); //returns true, as this is evaluating if "2 is not equal to 4" is true or false

// && 
// AND: both conditions must be true for the entire statment to resolve to true
console.log(2 + 2 === 4 && 3 + 4 === 7); // true
console.log(2 + 2 === 4 && 3 + 4 === 8); // false

// || 
// OR: either condition must be true to resolve to true
console.log(2 + 2 === 4 || 3 + 4 === 100); // true
console.log(2 + 2 === 100 || 3 + 4 === 100); // false


//  (!, typeOf, -)// 
// ! is a bang, this inverts the truth/false value
console.log(2 !== 4); //returns true, as this is evaluating if "2 is not equal to 4" is true or false

// typeOf 
// evaluates the data-type of a value
console.log(typeof 2); // returns number
console.log(typeof true); //returns boolean

// -
// flips the positive/negative of a numbers value
var a = 3;
var b = -3

console.log(-a); //logs -3
console.log(-b); // logs 3

// Ternary 
// Evaluates a conditional, useful when there are only returns in a function

function shouldYouYawn(areYouSleepy) {
  return (areYouSleepy ? "Yes, you should yawn" : "No, you shouldn't yawn");
}

console.log(shouldYouYawn(true)); // returns "Yes, you should yawn"

console.log(shouldYouYawn(false)); // "No, you shouldn't yawn"