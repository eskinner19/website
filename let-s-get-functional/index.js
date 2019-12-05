// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-eric-skinner');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */



// ### 1: `maleCount`
//  - **Given**: An array of objects
//  - **Objective**: Find the number of male customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**: use `filter`

var maleCount = function(array) {

    let result = [];
    _.filter(array, function(value, index, collection) {
        let person = array[index];
        if (person.gender === 'male') {
            result.push(person.name);
        }});
        return result.length;
};


// ### 2: `femaleCount`
//  - **Objective**: Find the number of female customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**: use `reduce`

var femaleCount = function(array) {
  return _.reduce(array, function(previousResult, currentValue, index){
      if (currentValue.gender === 'female') {
          previousResult++;
      } return previousResult;
  }, 0);
};


// ### 3: `oldestCustomer`
//  - **Objective**: Find the oldest customer's name
//  - **Input**: `Array`
//  - **Output**: `String`
//  - **Constraints**:

function reduce (array, action, seed) {
    for (let i = 0; i < array.length; i++) {
        if (seed !== undefined) {
            seed = action(seed, array[i], i);
        } else {
            seed = array[0];
            } 
    } return seed;
}

var oldestCustomer = function(array) {
  let oldestPerson = {age: null, name: null};
  return _.reduce(array, function(previousResult, currentValue, index){

      if (oldestPerson.age < currentValue.age) {
      oldestPerson.age = currentValue.age;
      oldestPerson.name = currentValue.name;

      } return oldestPerson.name;
  });
};

// ### 4: `youngestCustomer`
//  - **Objective**: Find the youngest customer's name
//  - **Input**: `Array`
//  - **Output**: `String`
//  - **Constraints**:


var youngestCustomer = function(array) {
  let youngestPerson = {age: Infinity, name: null};
  return reduce(array, function(previousResult, currentValue, index){

      if (youngestPerson.age > currentValue.age) {
      youngestPerson.age = currentValue.age;
      youngestPerson.name = currentValue.name;

      } return youngestPerson.name;
  });
};


// ### 5: `averageBalance`
//  - **Objective**: Find the average balance of all customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**:


var averageBalance = function(array) {
    
    let allBalancesRaw = [];
  
    _.map(array, function(element, index, array) {
        allBalancesRaw.push(element.balance);
    });

    let allBlancesWithoutDollarSign = [];
  
    _.map(allBalancesRaw, function(element, index, array) {
        allBlancesWithoutDollarSign.push(element.slice(1,2) + element.slice(3));
    });

    let allBlanacesStringToNumber = [];
  
    _.map(allBlancesWithoutDollarSign, function(element, index, array) {
        allBlanacesStringToNumber.push(parseFloat(element));
    });

    let allBalancesTotal = null;
  
    _.map(allBlanacesStringToNumber, function(element, index, array) {
        allBalancesTotal += element;
    });

    let avgBalanceAsNumber = (allBalancesTotal/allBalancesRaw.length);
    
    return avgBalanceAsNumber;

};


// ### 6: `firstLetterCount`
//  - **Objective**: Find how many customer's names begin with a given letter
//  - **Input**: `Array`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:

var firstLetterCount = function(array, letter) {
    var letterLower = letter.toLowerCase();
    var firstLetterArray = [];
    var count = 0;

    _.map(array, function(element, index, array){
        firstLetterArray.push(customers[index].name[0].toLowerCase());
    	if (firstLetterArray[index] === letterLower){
		    count++;
    	}
    });
	return count;
};


// ### 7: `friendFirstLetterCount`
//  - **Objective**: Find how many friends of a given customer have names that start with a given letter
//  - **Input**: `Array`, `Customer`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:


var friendFirstLetterCount = function(array, customer, letter) {
    var letterLower = letter.toLowerCase();
	var currentCustomerFriends = [];
	var firstLetterArray =[];
	var count = 0;

	_.each(array, function(element, index, collection){
		let currentCustomer = element.name;

		if (currentCustomer === customer){
			currentCustomerFriends = element.friends;
			_.map(currentCustomerFriends, function(element, index, array){
				let currentFriend = currentCustomerFriends[index];

				firstLetterArray.push(currentFriend.name[0].toLowerCase());
				if (firstLetterArray[index] === letterLower){
					count++;
				}
			});
		}
	}); return count;
};
    

// ### 8: `friendsCount`
//  - **Objective**: Find the customers' names that have a given customer's name in their friends list
//  - **Input**: `Array`, `Name`
//  - **Output**: `Array`
//  - **Constraints**:


var friendsCount = function(array, name) {
	var peopleWithNameInFriendsArray = [];

	_.each(array, function(element, index, collection){
		var currentCustomer = element.name;
		let currentCustomerFriends = element.friends;

		_.map(currentCustomerFriends, function(element, index, array){
			var currentFriend = currentCustomerFriends[index];

			if (currentFriend.name === name) {
				peopleWithNameInFriendsArray.push(currentCustomer);
			}
		});
	});
	return peopleWithNameInFriendsArray;
};

// ### 9: `topThreeTags`
//  - **Objective**: Find the three most common tags among all customers' associated tags
//  - **Input**: `Array`
//  - **Output**: `Array`
//  - **Constraints**:


var topThreeTags = function(array) {
	var topThreeTags = [];
	var allCustomerTags = [];
	var tagsCounted = {};
	var allTagsSorted = [];
	var maxValue = 0;

	_.each(array, function(element, index, array){
		var currentCustomer = element;
		var currentCustomerTags = currentCustomer.tags;
		
		_.each (currentCustomerTags, function(element, index, collection){
			allCustomerTags.push(currentCustomerTags[index]);
		});
	});
			console.log(allCustomerTags);

		reduce(allCustomerTags, function(tagsCounted, i){
			let tag = i;
			
			if (tagsCounted.hasOwnProperty(tag) === true){
				tagsCounted[tag]++;
			} else {
				tagsCounted[tag] = 1;
			}
			return tagsCounted;
		},tagsCounted);


		_.map(tagsCounted, function(value, key, collection){
			if(value >= maxValue){
				allTagsSorted.unshift(key);
				maxValue = value;
			}
			else{
			allTagsSorted.push(key);
			}
		});
		topThreeTags = _.first(allTagsSorted, 3);
		return topThreeTags;
};

// topThreeTags(customers); //prints [ 'veniam', 'aliqua', 'Lorem' ]

// ### 10: `genderCount`
//  - **Objective**: Create a summary of genders, the output should be:
// ```javascript
// {
//     male: 3,
//     female: 4,
//     transgender: 1
// }
// ```
//  - **Input**: `Array`
//  - **Output**: `Object`
//  - **Constraints**: Use `reduce`

var genderCount = function(array) {
	var genderList = [];
	var countOfGender = {};

	_.map(array, function(element, index, array){
		genderList.push(element.gender);
	});

	genderList.reduce(function(genderList, gender){
		if (countOfGender.hasOwnProperty(gender) === true){
			countOfGender[gender]++;
		} else {
			countOfGender[gender] = 1;
		}
	}, countOfGender);

	return countOfGender;
};

// genderCount(customers); // returns { female: 4, male: 3, transgender: 1 }




// ## Step 3: Submit
//  - When you are passing all tests, run `os submit`
//  - Select your current session
//  - Select `Let's Get Functional`
//  - If you pass all tests, you will get a green light!




//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
