// Eloquent Javascript Chapter Problems


/**
 * 
 *  Chapter 1
 * 
 */

// No challenge(s) provided


/**
 * 
 *  Chapter 2
 * 
 */

// Challenege 1
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

function writePound (){
  for (let i = 1; i < 8; i ++){
    console.log('#'.repeat([i]));
  }
}

writePound();

// Challenge 2
// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

function fizzbuzz() {
    for (let i = 1; i < 101; i++)
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else console.log(i);
}

fizzbuzz();


// Challenge 3
// Chess board
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chess board.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

function chessBoard(number) {
    for (let i = 0; i < number; i++)
    console.log(" # # # # \n" + "# # # #");
}

chessBoard(4);

// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

function chessBoardNTimes(number) {
    for (let i = 0; i < number; i++){
      let firstLine = " #";
      let secondLine = "# ";
      console.log(firstLine.repeat(number) + "\n" + secondLine.repeat(number));
    }

}

chessBoardNTimes(9);



/**
 * 
 *  Chapter 3
 * 
 */

// 1
// Minimum
// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. 
// Write a function min that takes two arguments and returns their minimum.

// Your code here.

function min(num1, num2) {
    if (num1 > num2) {
      return num2;
    } else
    return num1;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


// // 2
// Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. 
// Here’s another way to define whether a positive whole number is even or odd:
// * Zero is even.
// * One is odd.
// * For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// Your code here.

function isEven(current) {
  if (current < 0) {
      current = (current * -1);
  }
  
  function find(current) {
    if (current === 2) {
      return true;
    } else if (current === 1) {
      return false;
    } else {
      return find(current - 2);
    }
  }
  return find(current);
}

isEven(-2);


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// 3
// Bean counting
// You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

var countChar = function(string, target){
    let count = 0;
    
  for (let i = 0; i < string.length; i++){
      if (target === string[i]){
        count++;
      }
  } return count;
};

// console.log(countBs("BBC"));  //rewrote and function no longer returns 2, as the first itteration did not take a target param
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4


/**
 * 
 *  Chapter 4
 * 
 */

// Exercise 1: The sum of a range


function range(start, end, step){
  let total = 0;
  //let count = start;
  let rangeArray = [];
  
  if (step === undefined){
    step = 1;
  }
  
  if (step > 0){
    while (start <= end) {
      rangeArray.push(start);
      total += start;
      start += step;
    }
  } else if (step < 0){
      while (start >= end) {
      rangeArray.push(start);
      total += start;
      start += step;
    }
  }

  console.log(total);
  return rangeArray;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


// Exercise 2: Reversing an array

function reverseArray(array) {
  var arrayInReverse = [];
		array.forEach(function(element, index, array) {
			arrayInReverse.unshift(array[index]);
		});
		return arrayInReverse;
}


function reverseArrayInPlace(array) {
	var earlyElement = null;
	var laterElement= null;
	var halfArrayLength = Math.floor((array.length)/2);

	for (let i = 0; i < halfArrayLength; i++){
		earlyElement = array[i];
		laterElement = array[array.length - i - 1];
		array[i] = laterElement;
		array[array.length - i - 1] = earlyElement;
	}
		return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]



// Exercise 3: A list

function arrayToList(array){
  let list = null;
  
  for (let i = array.length - 1; i > -1; i--){
    list = {value: array[i], rest: list};
  }
  return list;
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}


function listToArray(list){
  let array = [];
  
  for (let node = list; node; node = node.rest){
    if (node === null){
      } else {
        array.push(node.value);
      }
  }
  return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]


function prepend (element, list) {
  let newList;
  newList = {value: element, rest: list};
  return newList;
}

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}


function nth (list, number) {
	var resultArray = [];

  function lookForIndex(list, number){

    if (list === null){
      return resultArray[number];
    } else {
      resultArray.push(list.value);
			return lookForIndex(list.rest, number);
    }
  } 
	return lookForIndex(list, number);	
}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


// Exercise 4: Deep comparison

function deepEqual(val1, val2) {
  if (val1 === val2) {
    return true;
  }
  
  if (val1 === null || val2 === null) {
    return false;
  }
  
  if (typeof val1 != "object" || typeof val2 != "object"){
    return false;
  }
  
  let keys1 = Object.keys(val1);
  let keys2 = Object.keys(val2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  
  for (let key of keys1) {
    if (!keys2.includes(key)){
    return false;
    } else if (!deepEqual(val1[key], val2[key])) {
      return false;
    }
  }
  return true;
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true



/**
 * 
 *  Chapter 5
 * 
 */

// Exercise 1: Flatten Arrays
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

var accumulator = [];

var flattenArrays = arrays.reduce(function(accumulator, currentValue){
 	return accumulator.concat(currentValue);
},accumulator);

flattenArrays; // returns [1, 2, 3, 4, 5, 6]



// Exercise 2: Everything
// Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

// Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

// Every as a Loop
function every(array, test){

	for (let i = 0; i < array.length; i++){
		let currentIndex = array[i];

		if (test(currentIndex) === false){
			return false;
		} else if (test(currentIndex) === true){
			// do nothing and keep
		}
	}
	return true;
}

// Every via .some
function everyViaSome(array, action) {
  return !array.some(n => !action(n));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


// Exercise 3: Dominant writing direction

// Write a function that computes the dominant writing direction in a string of text. 
// Remember that each script object has a direction property that can be "ltr" (left-to-right), "rtl" (right-to-left), or "ttb" (top-to-bottom).
// The dominant direction is the direction of a majority of the characters that have a script associated with them. 
// The characterScript and countBy functions defined earlier in the chapter are probably useful here.


//NOTE TO SELF: this code uses dependencies and WILL NOT run in cloud9. To run, go to https://eloquentjavascript.net/code/#5 or import the files they mention there.
function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

// Hints
// Your solution might look a lot like the first half of the textScripts example. 
// You again have to count characters by a criterion based on characterScript, and then filter out the part of the result that refers to uninteresting (script-less characters).
// Finding the direction with the highest character count can be done with reduce. 
// If it’s not clear how, refer back to the example earlier in the chapter, where reduce was used to find the script with the most characters.