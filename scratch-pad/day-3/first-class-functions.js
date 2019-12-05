// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, 
 * which could be a String or Number, 
 * return a Function    x
 * function tests whether a given value is greater than the base
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value) {
        return value > base;
    };

    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
     return function(value) {
        return value < base;
    };   
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character,
 * which will be a single character,
 * return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    return function(firstStringChar) {
        if (startsWith.toLowerCase() ===  firstStringChar[0].toLowerCase()) {
         return true;
        } else if (startsWith.toLowerCase() !==  firstStringChar[0].toLowerCase()) {
         return false;
        } else
        return "something else";
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //

    return function(string) {
        var lastChar = string[string.length-1];
        
        if (endsWith.toLowerCase() ===  lastChar.toLowerCase()) {
         return true;
        } else if (endsWith.toLowerCase() !==  lastChar.toLowerCase()) {
         return false;
        }
    };    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings,
 * modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
//    YOUR CODE BELOW HERE //
    var arrayForModifiedStrings = [];
    
    for (var i = 0; i < strings.length; i++) {
        arrayForModifiedStrings.push(modify(strings[i]));
    }
    return arrayForModifiedStrings;
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
 
 /* My notes:
 GIVEN an array of strings
 GIVEN a function to test strings
 Run strings through function test()
 IF all tests pass, return true
 ELSE return false
 */
function allStringsPass(strings, test) {
//    YOUR CODE BELOW HERE //
    
    for (let i = 0; i < strings.length; i++) {
        if ( !test(strings[i])) {
            return false;
        }   
    } return true;
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}