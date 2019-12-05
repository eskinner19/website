/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Open up the file functions.js in your editor.
// Implement a function called search with a signature of search(animals, name) { //... } that:
// Takes a paramater representing an Array of animals.
// Takes a paramater representing a String, the name of an animal on which to perform a search.
// Looks through the animals Array, and returns the animal's Object if an animal with that name exists.
// Returns null if no animal with that name exists
// Use the search bar at the top of the page to make sure your function works.


function search (animals, name) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name.toLowerCase() === name.toLowerCase()) {
            return animals[i];
        }
    } return null;
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Write a function called replace with a signature of replace(animals, name, replacement) { //... } that:
// Takes 3 parameters, an Array of animals, a name of an animal on which to perform a search, and an Object that represents the replacement animal.
// If an animal with that name exists within the animals Array, replace it's entire Object with the replacement Object.
// Otherwise do nothing.
// Test it on the website.

function replace (animals, name, replacement) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name.toLowerCase() === name.toLowerCase()) {
            animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove (animals, name) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name.toLowerCase() === name.toLowerCase()) {
            animals.splice([i], 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Write a function called add with a signature of add(animals, animal) { //... } that:
// Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
// Checks that the animal Object has a name property with a length > 0.
// Checks that the animal Object has a species property with a length > 0.
// Has a unique name, meaning no other animals have that name.
// Adds this new Object to the animals Array, only if all the other conditions pass.
// Make sure it works.
// This is called data validation and it's extremely important in web development!

function add (animals, animal) {
    if (animal.name.length === 0 || animal.species.length === 0) {
        return; // alert("Error, please check you name or species");
    }
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name.toLowerCase() === animal.name.toLowerCase()) {
            return; // alert ("An animal already exists with this name");
        }
    } animals.push(animal);
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
