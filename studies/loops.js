// LOOPS 

// WHILE // 
// While loops are a type of loop that is run while a given condition is true
var exampleCurrentYear = 2000;
var yearsUntil2020 = 20;

function yearCountDown (yearInput) {
    while (yearInput < 2020) {
        yearInput++;
        yearsUntil2020--;
        console.log(yearsUntil2020);
    }
}

yearCountDown(exampleCurrentYear);

// FOR LOOP //
// A for loop has three components: initialization, condition, and incrementation/decrementation

function countUpToTwentyStartingAt (number) {
    for (let i = number; i < 21; i++) {
        console.log("Our current count is " + i);
    }
}

countUpToTwentyStartingAt(1);

// For-in loops
// For-in loops allow us to access and return data within an object's key-value pair

//returns the value of each key
var ericsCar = {
    "make": "Toyota",
    "model": "Rav4",
    "year": 2012,
    "color": "Silver",
    "wheels": 4
};

for (var key in ericsCar) {
    console.log(ericsCar[key]);
}

// Itterating //
// Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
// See above function named countUpToTwentyStartingAt about looping up to a given limit

//Loop
function countDownToZero (number) {
    for (let i = 0; i < number; number--) {
        console.log(number);
    }
}

countDownToZero(50);

// Loop over an Array, forwards and backwards //
// Array Looping Forward
var namesOfNewOrleansStreets = ["Aubry", "Baronne", "Canal", "Delechaise", "Erato", "Franklin"];

function loopForwardOverAnArray (input) {
    let i = 0;
    while (i < input.length) {
        console.log(input[i]);
        i++;
    }
}

loopForwardOverAnArray(namesOfNewOrleansStreets);

//Array Looping Backward
function loopBackwardsOverAnArray (input) {
    let i = input.length-1;
    while (i > -1) {
        console.log(input[i]);
        i--;
    }
}

loopBackwardsOverAnArray(namesOfNewOrleansStreets);


//Loop over an Object, forwards and backwards ( hint: keys = Object.keys(myObject); )

// Looping Forward
var jennasCar = {
    "make": "Ford",
    "model": "Escape",
    "year": 2012,
    "color": "Blue",
    "wheels": 4
};

function logCarDetails (car) {
  
  for (var key in car) {
      console.log(car[key]);
  }
}
 logCarDetails(jennasCar);


// Looping Backward //
function logObject (input) {
  var tempArray = [];
  
  function logObject (input) {
    for (var key in input) {
      tempArray.push(input[key]);
    }
  }

logObject(input);

    function loopBackwardsOverAnArray (input) {
        let i = input.length-1;
        while (i > -1) {
            console.log(input[i]);
            i--;
        } 
    } console.log(loopBackwardsOverAnArray(tempArray));

}

logObject(jennasCar);