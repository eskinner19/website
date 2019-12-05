/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables 
 * are named identifiers that can point to values of a particular type, like a Number, String, 
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we 
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our 
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName; 

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized 
 * it to anything 
 */ 
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


// Let
// The keyword "let" can assign a value in a similar way that var does
// Let is different, however, in it's scope; let is block scoped

// var example
function logVar() {
  var a = 123;
  if (1 < 2) {
    var a = 321;  // in this line, we're reassigning a to be equal to 321, as it's the same variable as above.
    console.log(a);  // 321
  }
  console.log(a);  // 321
}

// let example
function logLet() {
  let x = 123;
  if (1 < 2) {
    let x = 321;  // different variable
    console.log(x);  // this will log '321; within this scope, let is equal to '321'
  }
  console.log(x);  // this will log '321; within this scope, let is equal to '123'
}


// Const
// The keyword "const" can assign a value in a similar way that var does
// Similar to let, constants are alsoblock scoped
// Unlike let, a const value cannot be overwritten within the same scope, doing so throws errors

// Example that would throw errors
function tryToOverwriteConst () {
  const x = 123;
//  const x = 321;  // running this uncommented will result in "Syntax error: Duplicate declaration "x"
                  // this is because constants cannot be overwritten
}

// Example that would not throw errors
// In this example, we would not get errors as a result of the fact that const is block scoped and we are assigning the const x in different scopes
function logConst() {
  const x = 123;
  if (1 < 2) {
    const x = 321;  // different variable
    console.log(x);  // this will log '321; within this scope, let is equal to '321'
  }
  console.log(x);  // this will log '321; within this scope, let is equal to '123'
}