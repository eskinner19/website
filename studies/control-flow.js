// Control-Flow

var nola = "New Orleans";
var chicago = "Chicago";

// If Else: A conditional statement determines which section of code is ran, based the truth or falseness of a given condition
// If Else compares two things. If you wanted to evaluate more, you can run additional "Else if" statements as needed


// If: starts the conditional; is the first comparison
function greetByAreaCode(currentCity) {
    if (currentCity === "New Orleans") {
        console.log("Welcome to the 504!");

// Else-if: in the event that the "if" is not true, this would be the next condition to be evaluated
    } else if (currentCity === "Minneapolis") {
        console.log("Welcome to the 612!");
//Else: is the final comparison of an "if" or "else if" comparison. This comparison is the default in the case that neither the "if" nor "else if" statement are true.
    } else {
        console.log("Unable to determine which greeting should be displayed.");
    }
}

greetByAreaCode(nola);
// Returns "Welcome to the 504" as New Orleans is the current city

greetByAreaCode(chicago);
// Returns "Unable to determine which greeting should be displayed." as none of the previous conditions are met


// Switch: runs a section of code based on the condition of an input. In some cases, these can be cleaner than "If" statements
var companyName = 'Campbells';

    switch (companyName) {
        case 'Nike':
            console.log('Just Do it.');
            break;
        case 'Campbells':
            console.log('Mm mm good!');
            break;
        case 'Rouses':
            console.log('The best cooks and chefs shop at Rouses.');
            break;
        case 'Gatorade':
            console.log('Is it in you?');
            break;
        default:
            console.log('Unable to determine the tagline of this company');
            break;
}

// Truthy and Falsey
// Be careful, as certan statments will return true or false, despite not being strictly equal to true or false

console.log(Boolean(NaN)); // returns => false
console.log(Boolean(-1)); // returns => true