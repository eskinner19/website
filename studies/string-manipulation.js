// String manipulation
// Strings have built-in methods which allow us to return a string in a variety of ways

var testString = "My name is Eric";
var hello = "hello!";

testString.slice(12,15);

// Some examples
testString.length; // returns 15
testString.toLowerCase(); // returns "my name is eric"
testString.toUpperCase(); // shouts back 'MY NAME IS ERIC'
testString.split(" "); // returns [ 'My', 'name', 'is', 'Eric' ]
testString.charAt(1); // returns "y"
testString.slice(11,15); // returns "Eric"

var greeting = testString + ", " + hello;
console.log(greeting); // would log "My name is Eric, hello!"; concats the strings together


// an exhaustive list of what string methods are available are under String.prototype via the console