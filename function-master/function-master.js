//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var object = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};

function objectValues(object) {
    var result = [];
    for (var key in object) {
        result.push(object[key]);
    } return result;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//    debugger;
    var result = "";
        for (var key in object) {
        result = result + (key + ' ');
    } return ((result.slice(0, result.length-1)));
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var result = "";
        for (var key in object) {
            if (typeof object[key] === "string") {
                result = result + (object[key] + ' ');
            }
    } return ((result.slice(0, result.length-1)));
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true) {
        return 'array';
    } else if (typeof collection === 'object'){
        return 'object';
    } else {
        return "Error";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
//   debugger;
    var stringFirstLetter = string[0].toUpperCase();
    var result = stringFirstLetter + string.slice(1, string.length);
    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
//    debugger;
    var array = string.split(" ");
    var result = "";
    
    
    for (let i = 0; i < array.length; i++) {
        result = result + capitalizeWord(array[i]) + " ";
    }
    return result.slice(0, result.length-1);
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//    debugger;
    var result = object.name;
    
    return "Welcome " + capitalizeWord(result) + "!";
}


//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var name = capitalizeWord(object.name);
    var species = capitalizeWord(object.species);
    var result = name + " is a " + species;
    
    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//    debugger;
    var result = [];
    if (Array.isArray(object.noises) && object.noises.length > 1) {
        for (let i=0; i < object.noises.length; i++) {
            result = result + object.noises[i] + " ";
        }
    } else {
        result = "there are no noises ";
    }
    return result.slice(0, result.length-1);
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//    debugger;
    var array = string.split(" ");
    for (let i = 0; i < array.length; i++) 
        if (word === array[i]) {
            return true;
        } 
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    
function addFriend (name, object) {
//    debugger;
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    // /* global isFriend */
    // QUnit.test("isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise", function(assert){
    //   assert.equal(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
    //   assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);
    //   assert.equal(isFriend("chuck",{}), false);
    // });

function isFriend(name, object) {
//    debugger;
    if (object.hasOwnProperty('friends')) {
        for (let i = 0; i < object.friends.length; i++) 
            if (name === object.friends[i]) {
                return true;
            } 
    } return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


    // // QUnit.test("nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with", function(assert){
    //   var data = [
    //     {name: "Jimmy", friends:["Sara", "Liza"]},
    //     {name: "Bob", friends:[]},
    //     {name: "Liza", friends: ["Jimmy"]},
    //     {name: "Sara", friends: ["Jimmy"]}
    //   ];
    //   assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
    //   assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
    //   assert.deepEqual(nonFriends("Sara", data), ["Bob","Liza"]);


function nonFriends(name, people) { 
    var nonFriends = [];
    
    for (var i = 0; i < people.length; i++) {
        if (!isFriend(name, people[i]) && people[i].name !== name) {
           nonFriends.push(people[i].name); 
        }
    }
    return nonFriends;
}
    
//     var nonFriends = [];
//     var friendsList = [];
//     var allNames = [];
//     var personFriends = [];

//         for (let i = 0; i < people.length; i++) {
//             let personName = people[i].name;
//             allNames.push(personName);
//         } 
//             debugger;
//         for (let i = 0; i < people.length-1; i++) {
//             let friends = people[i].friends
//             friendsList.push(friends);
//         }
//         for (let i = 0; i < allNames.length-1; i++) {
//             var currentName = allNames[i];
            
//             if (friendsList.includes(currentName) === false && name !== name) {
//                 friendsList.push(currentName);
//             }
//         } return nonFriends;
// }


// console.log(data[0].friends[1]); // logs Liza
// console.log(data[1].friends[0]); // logs undefined
    
//   debugger;
    // var friends = [];
    // var peopleNames = [];
    
    // for (var i = var person = people.length; i--; ) {
    //     var person = people[i];
    // }
    // people.forEach(person => {
    //     if(person.name == name){
    //         friends = person.friends;
    //         friends.push(name);
    //     }
    //     peopleNames.push(person.name);
    // });
    
    // peopleNames.forEach(personName => {
    //     if(friends.includes(personName) == false){
    //         nonFriends.push(personName);
    //     }
    // })
    



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var data1 = {a: "one", b: "two", "hokey": false};

function updateObject(object, key, value) {
    //for (var key in object) {
        object[key] = value;
        return object;
}

updateObject(data1, "b", false);

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

    for (let i = 0; i < array.length; i++)
        if (object.hasOwnProperty(array[i])) {
            delete object[array[i]];
        } else {
            return object;
        }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    // /* global dedup */
    // QUnit.test( "dedup() : Should take an array and return an array with all the duplicates removed", function( assert ) {
    //   var arrayOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
    //   var arrayTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];
    //   assert.deepEqual(dedup(arrayOne), [1,2,3,4,5,"a","b","c"]);
    //   assert.deepEqual(dedup(arrayTwo), ["hello", "world"]);
    // });

function dedup(array) {
    var arrayDeDuped = [];
    
    for (let i = 0; i < array.length; i++) {
        if (arrayDeDuped.indexOf(array[i]) === -1) {
            arrayDeDuped.push(array[i]);
        } 
    } return arrayDeDuped;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}