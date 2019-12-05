/**
// Longest Word //
**/

function LongestWord(sen) { 
  
  var stringToArray = sen.split(" ");
  var illegalArray = ["!", "@", "#", "$", "%", "^", "&", "*", "<", "(", ")"];
  var allWordsSanitized = [];
  var wordToSanitized = [];
  var wordsLength = [];
  
  for (let i = 0; i < stringToArray.length; i++){
    var currentWord = stringToArray[i];
    var letterToSanitizedArray = [];
    
    for (let j = 0; j < currentWord.length; j++){
       // debugger;
      if (illegalArray.includes(currentWord[j])){
      } else {
        letterToSanitizedArray.push(currentWord[j]);
      }
    }
      wordToSanitized = letterToSanitizedArray.join('');
      allWordsSanitized.push(wordToSanitized);
  }
  for (let k = 0; k < allWordsSanitized.length; k++){
    wordsLength.push(allWordsSanitized[k]);
  }
  
    var sorted = allWordsSanitized.sort(function(a, b) {
    return b.length - a.length;
  });
  
  
  return sorted[0];
}       

/**
// First Factorial //
**/

function FirstFactorial(num) {
    var result = 1;
    
    for (let i = num; i > 0; i--){
        result = result * i;
    }

    return result; 
}

/**
// First Reverse //
**/

function FirstReverse(str) {
  var strReversed = '';
    for (let i = str.length-1; i > -1; i--){
      strReversed = strReversed + str[i];
    }
    
  
  return strReversed; 
         
}

/**
// Letter Changes //
**/

function LetterChanges(str) { 
	var result = "";
	var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
	
	for (let i = 0; i < str.length; i++){
		let stringCode = str.charCodeAt([i]);
		let stringCodePlusOne = String.fromCharCode(stringCode+1);
		let vowel = (String.fromCharCode(stringCode+1-32));

		if (stringCode < 65){
			result = result + str[i];
		} else if (vowels.indexOf(stringCodePlusOne) === -1){
			result = result + stringCodePlusOne;
		} else if ((vowels.indexOf(stringCodePlusOne) !== -1)){
			result = result + vowel;
		}
	}
	return result;
}

/**
// Simple Adding //
**/

function SimpleAdding(num) {
    var sum = 0;
    var count = 1;
    
    while (count < num+1){
      sum = sum + count;
      count++;
    }
    return sum; 
}

/**
// Letter Capitalize //
**/

function LetterCapitalize(str) { 
  var strToArray = str.split(" ");
  var wordsCapd = [];
  var capdString = "";
  // code goes here  
  for (let i = 0; i < strToArray.length; i++){
    wordsCapd.push(strToArray[i][0].toUpperCase() + (strToArray[i].slice(1)));
  }
  
  for (let j = 0; j < wordsCapd.length; j ++){
    capdString = capdString + wordsCapd[j] + " ";
  }
    return capdString;
}

/**
// Simple Symbols //
**/

function SimpleSymbols(str) { 

	for (let i = 0; i < str.length; i++){
			let currentLetter = str[i];

			if (64 < str.charCodeAt([i]) > 123){
				if (str.charCodeAt([i]-1) && str.charCodeAt([i]+1) === 43){
				}
			} else if (64 > str.charCodeAt([i]) || str.charCodeAt([i]) > 123){
				// do nothing
			} else if (str[i-1] !== '+' || str[i+1] !== '+'){
					return false;
			}
	}
	return true;
  // code goes here         
}


/**
// Check Nums //
**/

function CheckNums(num1,num2) { 
    if (num1 < num2) {
        return true;
    } else if (num1 === num2) {
        return -1;
    } else return false;
}

/**
// Time Convert //
**/

function TimeConvert(num) { 
	let hours = Math.floor(num / 60);
	let minutes = num % 60;

  return hours+ ":" + minutes; 
         
}


/**
// Alphabet Soup //
**/

function AlphabetSoup(str) {
  let strArray = str.split(""); 
  let sortedArray = strArray.sort().toString();
  let result = "";
  
  for (let i = 0; i < strArray.length; i++){
    result = result + strArray[i];
  }
    
  // code goes here  
  return result; 
         
}