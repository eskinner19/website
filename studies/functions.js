// Functions 
// * The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by?
// First, we must declare a function
function logYourNameInLowerCase (name) {
    console.log(name.toLowerCase());
}

var myName = "ERIC";

console.log(myName); // logs "ERIC"

// Next we call and pass param to run the function
logYourNameInLowerCase(myName); // logs "eric"

//* What’s the difference between a function’s parameters and arguments PASSED to a function?
// A parameter is the name for the palce that an argument passed. In the above example "name" is the parameter and "myName" is the arg
// Parameter is to car-seats, as Arguments are akin to passengers

//* What’s the syntax for a NAMED function?
// Example:
// function nameOfTheFunction (paramGoesHere) {
      //code to be run goes here, in the body
//}

//* How do we assign a function to a variable?
// You can assign a function to a variable by declaring a variable, and then initializing that variable as a function
// For example:

var nameSmall = logYourNameInLowerCase; //assigns nameSmall to = logYourNameInLowerCase



//* Functions can OPTIONALLY take inputs and OPTIONALLY return a single value, how do we specify inputs, and how do we return a value?
// Inputs are specified by what arguments pass into the parameter for a function
var myDogsName = 'Finley';
console.log(myDogsName); // logs 'Finley'

console.log(myDogsName); // logs 'Finley'
nameSmall(myDogsName); // logs 'finley'


// A function can specify what it will return, which then can set a variable to represent something else. 
// In this example, let's say I only like TV shows that don't kill my favorite character.

var favoriteTvShow = "Game of Thrones";
var secondFavoriteTvShow = "West World";

function myFavoriteShow (killedFavoriteCharacterThisWeek) {
  if (killedFavoriteCharacterThisWeek === true) {
    favoriteTvShow = secondFavoriteTvShow;
    return favoriteTvShow;
  }  else {
    return favoriteTvShow;
  }
}

// In the example below, Game of Thrones did NOT kill my favorite character this week, so it's still my favotire show.
//myFavoriteShow(false); // returns "Game of Thrones"


// In the example below, Game of Thrones DID kill my favotire character this week (damn you George R.R. Martin!) and moved to the bottom of my list, making what was previously my second fav show, now my favotire.
myFavoriteShow(true); // returns "West World"

// NOTE: Primitive (simple) values are passed to a function BY COPY, complex by reference. Try it!
// Simple: copied by valie
var DollarsInMyWalletThisMorning = 40;
var DollarsInMyWalletNow = DollarsInMyWalletThisMorning; 
    // Let's say I spend money at the store
console.log(DollarsInMyWalletNow - 20); // dollarsInMyWallet is now 20
console.log(DollarsInMyWalletThisMorning); // However, that doesn't change the fact that had 40 dollars in my wallet this morning

// Complex: copied by reference
var stuffInMyPockets = {
  "cellPhone": true,
  "wallet": true,
  "keys": true
  };


var stuffOnMyPerson = stuffInMyPockets;

// I take my cell phone out of my pockets
stuffOnMyPerson.cellPhone = false;

console.log(stuffOnMyPerson); // now includes "cellPhone": false

// * Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
var aNumberILike = 5;

function changeNumberILike (number) {
    var aNumberYouLike = 2;
    aNumberILike = 7;
}

console.log(aNumberILike); // logs 5
changeNumberILike(4); // performs the action, grabbing aNumberILike from the global scope
console.log(aNumberILike); // logs aNumberILike now as 7

// Scope within a function is not accessible:
// The below statement would return "Reference Error: aNumberYouLike is not defined", as it's not accessible outside of that function
// console.log(aNumberYouLike); 

//Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! 
// (See: our meeting-room app for an example!) (ALSO, see: Understanding JavaScript Closures with Ease)