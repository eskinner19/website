// Data Types
// Data types are the various ways that data is represented in Javascript. 

//Number: a number, whether it be a whole 
// Example
var theNumberFive = 5;
var milesInAMarathon = 26.2;

//  String: characters, this could be a word, sentence, or a single character. Stored in single or double qutes.
// Examples
var theNumberFiveAsAString = 'Five';
var stringWithDoubleQuotes = "Look Ma', I got double quotes!";

// Boolean: a true or false value
// Examples
var theSkyIsRed = false;
var theSkyIsBlue = true;

// Array: a zero indexed list that holds other data of other data types.
// Arrays are complex a data type.
// Example
var arrayOfOperatingSystems = ['Windows 10', 'OSX', 'Ubuntu', 'Linux'];

// Object: an unordered collection of data with key-value pairs. 
// Objects are a complex data type.
// Example
var carDetails = {
    "owner": "Eric",
    "make": "Toyota",
    "year": 2012,
    "is_manual": false,
};

// Functions: a block of code that takes one or more input called an "argument", and runs a sort of program.
// Functions are a complex data type
// functions are declared by declaring it as followed
function firstNameStartsWithCapitalE(firstName) {
    if (firstName[0] === 'E') {
        return true;
    } else {
        return false;
    }
}

// Functions need to be invoked before they are run. Most commonly, you also pass in a param for the function to evaluate.
// Functions are a compelx data type1   
var myFirstName = "Eric";

firstNameStartsWithCapitalE(myFirstName);


// undefined: the lack of value, which is uninitialized. undefined is not equal to null.
// Example: here we declare the variable, though we don't assign it anything.
var bike;

// Since we did not assign a value to bike, this will log "undefined" to the console
console.log(bike);

// null: an intentionally, devoid value. Note this that null is *not* equal to 0
var businessAddress = {
    "Address1": "925 Gravier Street",
    "Address2": null
};


// NaN: stands for 'not a number', although typeOf returns "number", NaN is an undefined or value that cannot be represented.
console.log(isNaN("six"));        // true
console.log(isNaN(6));         // false

// Infinity
// Infinity in JS represents the mathematical value of infinity
// Infinity is greater than any other number and a special value of Number within Javascript.



// console logs "Infinity"
console.log(Infinity); 

// also console logs "Infinity"
console.log(Infinity + 1);
console.log(Infinity * 123);

// logs zero
console.log(1 / Infinity);

// conversely, neegative infinity logs the same, albeit it is infinately lower than any other number
console.log(-Infinity);

/* What is the difference between simple and complex data types?
/ Simple Data Types: basic or "primative" data types are immutable
/ If an action, function, etc. if performed upon a simple data type, it returs a _new_ value, leaving the original value unchanged
/ Copied by _value_
/ If 
/ Some Examples are strings, booleans, numbers, and others
*/
var x = 1;
var y = x

y = y + 1;

console.log(x + x); // returns the result of (1 + 1); changing the value of what y was equal to had no affect, as y was simply the copied value of x

/*
/ Complex Data Types: a data-type that does not have a fixed size (can have data added or removed)
/ Copied by _reference_
/ Copied by reference means we assign complex data types' values are a _reference_ point to what their values are equal, the variables themselves don't actually hold the value.
/ Examples are objects, arrays, and functions
*/ 

var twoLetters = ["a", "b"];

function appendC (a) {
    a.push("c");
}

console.log(twoLetters); // returns [ 'a', 'b' ]
appendC(twoLetters); // preforms the function and _does_ change the value of two letters, as the function references and changes the value of twoLetters, instead of simply copying its value
console.log(twoLetters); // returns [ 'a', 'b', 'c' ]

// Hoisting
// Hoisting is the conecpt that the declaration of something gets moved to the top of a scope
// This means if we declare a variable's name on line 20, we can asign it in line 1
// Variables are hoisted by name this way, but not by value
// As a result of this, a best practice is to declare variables at the beginning of a scope

// Variables names are hoisted
a = 5; // assignment
console.log("Hello World");
var a; // declaration
console.log(a); // logs "5"

// Variables values are not hoisted
console.log(b); // logs "undefined" as we have access to the name b, but not the value
var b;
b = 4;
console.log(b); // logs "4" as we now have access to the name AND value of variable b