function randomWord(wordLength, mode = "any") {
let lowerOrUpper = Math.round(Math.random() * 10);
let lowerAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y", "z"]
let upperAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W", "X","Y", "Z"]
let specialCharacters = ["/","!","@",".","?", "%", ")", "(","$","#",":",";", "~", "^", "]", "[","}", "{","=","+", "-", "_","§",",",">","<","|","\\","'",'"',"*","&","`","ª","º","°","¬","¨","¢","£","¹","²", "³"];
let numbers = ["1","2","3","4","5","6","7", "8","9","0"];
let word;
let j;
let atualLocation;
let testRegex = /undefined/g;
switch(mode) {
    case "any":
for(let i = 0; i < wordLength; i++) {
if(lowerOrUpper < 3) {
	atualLocation = lowerOrUpper;
    j = Math.round(Math.random() * (25 - 0) + 0);
    if (word == undefined) {
    word = lowerAlphabet[j];
    lowerOrUpper = Math.round(Math.random() * 10);
    }
    else {
    word += lowerAlphabet[j];
    lowerOrUpper = Math.round(Math.random() * 10);
    }
}
else if (lowerOrUpper < 6){
	atualLocation = lowerOrUpper;
    j = Math.round(Math.random() * (25 - 0) + 0);
    if (word == undefined) {
    word = upperAlphabet[j];
    lowerOrUpper = Math.round(Math.random() * 10);
    }
    else {
    word += upperAlphabet[j];
    lowerOrUpper = Math.round(Math.random() * 10);
    }
}
else if (lowerOrUpper < 9){
	atualLocation = lowerOrUpper;
    j = Math.round(Math.random() * (9 - 0) + 0);
    if (word == undefined) {
    word = numbers[j];
    lowerOrUpper = Math.round(Math.random() * 10);
    }
    else {
    word += numbers[j];
    lowerOrUpper = Math.round(Math.random() * 10);
}
}
    else {
	atualLocation = lowerOrUpper;
    j = Math.round(Math.random() * (42 - 0) + 0);
    if (word == undefined) {
    word = specialCharacters[j];
     lowerOrUpper = Math.round(Math.random() * 10);
    }
    else {
    word += specialCharacters[j];
    lowerOrUpper = Math.round(Math.random() * 10);
    }
    }
      if(testRegex.test(word)) {
        console.log("Error!");
        console.log("Location = " + atualLocation);
        console.log("J = " + j);
        console.log("i = " + i);
        if (atualLocation < 3 || atualLocation < 6) {
		console.log("Letter is undefined!");
		}
		else if (atualLocation < 9) {
		console.log("Number is undefined!");
		}
		else {
		console.log("Special Char is undefined!");
		}
        console.log("mode = " + mode);
        i = wordLength;
        }
}
    break;
    case "onlyNumbers":
for(let i = 0; i < wordLength; i++) {
    j = Math.round(Math.random() * (9 - 0) + 0);
    if (word == undefined) {
    word = numbers[j];
    }
    else {
    word += numbers[j];
}
        if(testRegex.test(word)) {
        console.log("Error!");
        console.log("J = " + j);
        console.log("i = " + i);
        console.log("Number is undefined!");
        console.log("mode = " + mode);
        i = wordLength;
        }
}
        break;
    case "onlyOneSpecialCharacter":
     for(let i = 0; i < wordLength - 1; i++) {
if(lowerOrUpper < 5) {
	atualLocation = lowerOrUpper;
    j = Math.round(Math.random() * (25 - 0) + 0);
    if (word == undefined) {
    word = lowerAlphabet[j];
    lowerOrUpper = Math.round(Math.random() * 10);
    }
    else {
    word += lowerAlphabet[j];
    lowerOrUpper = Math.round(Math.random() * 10);
    }
}
else {
	atualLocation = lowerOrUpper;
    j = Math.round(Math.random() * (25 - 0) + 0);
    if (word == undefined) {
    word = upperAlphabet[j];
    lowerOrUpper = Math.round(Math.random() * 10);
    }
    else {
    word += upperAlphabet[j];
    lowerOrUpper = Math.round(Math.random() * 10);
    }
}
      if(testRegex.test(word)) {
        console.log("Error!");
        console.log("J = " + j);
        console.log("i = " + i);
        console.log("Letter is undefined!");
        console.log("Location = " + atualLocation);
        i = wordLength;
        }
}
j = Math.round(Math.random() * (42 - 0) + 0);
    word += specialCharacters[j];
     if(testRegex.test(word)) {
        console.log("Error!");
        console.log("J = " + j);
        console.log("Special Character is undefined!");
        console.log("mode = " + mode);
        }
        break;
     case "onlyOneNumber":
   for(let i = 0; i < wordLength - 1; i++) {
if(lowerOrUpper < 5) {
	atualLocation = lowerOrUpper;
    j = Math.round(Math.random() * (25 - 0) + 0);
    if (word == undefined) {
    word = lowerAlphabet[j];
    lowerOrUpper = Math.round(Math.random() * 10);
    }
    else {
    word += lowerAlphabet[j];
    lowerOrUpper = Math.round(Math.random() * 10);
    }
}
else {
	atualLocation = lowerOrUpper;
    j = Math.round(Math.random() * (25 - 0) + 0);
    if (word == undefined) {
    word = upperAlphabet[j];
    lowerOrUpper = Math.round(Math.random() * 10);
    }
    else {
    word += upperAlphabet[j];
    lowerOrUpper = Math.round(Math.random() * 10);
    }
}
      if(testRegex.test(word)) {
        console.log("Error!");
        console.log("Location = " + atualLocation);
        console.log("J = " + j);
        console.log("i = " + i);
        console.log("Letter is undefined!");
        console.log("mode = " + mode);
        i = wordLength;
        }
}
	j = Math.round(Math.random() * (9 - 0) + 0);
    word += numbers[j];
     if(testRegex.test(word)) {
        console.log("Error!");
        console.log("J = " + j);
        console.log("Number is undefined!");
        console.log("mode = " + mode);
        }
        break;
    case "onlyLetters":
        for(let i = 0; i < wordLength; i++) {
if(lowerOrUpper < 5) {
	atualLocation = lowerOrUpper;
    j = Math.round(Math.random() * (25 - 0) + 0);
    if (word == undefined) {
    word = lowerAlphabet[j];
	lowerOrUpper = Math.round(Math.random() * 10);

    }
    else {
    word += lowerAlphabet[j];
	lowerOrUpper = Math.round(Math.random() * 10);

    }
}
else {
	atualLocation = lowerOrUpper;
    j = Math.round(Math.random() * (25 - 0) + 0);
    if (word == undefined) {
    word = upperAlphabet[j];
	lowerOrUpper = Math.round(Math.random() * 10);
    }
    else {
    word += upperAlphabet[j];
	lowerOrUpper = Math.round(Math.random() * 10);
    }
}
      if(testRegex.test(word)) {
        console.log("Error!");
		console.log("Location = " + atualLocation);
        console.log("J = " + j);
        console.log("i = " + i);
        console.log("Letter is undefined!");
        console.log("mode = " + mode);
        i = wordLength;
        }
}
        break;
    case "onlySpecialCharacters":
    for(let i = 0; i < wordLength; i++) {
    j = Math.round(Math.random() * (42 - 0) + 0);
    if (word == undefined) {
    word = specialCharacters[j];
    }
    else {
    word += specialCharacters[j];
}
        if(testRegex.test(word)) {
        console.log("Error!");
        console.log("J = " + j);
        console.log("i = " + i);
        console.log("Special Character is undefined!");
        console.log("mode = " + mode);
        i = wordLength;
        }
}
        break;
    case "simple":
for(let i = 0; i < wordLength - 3; i++) {
    j = Math.round(Math.random() * (9 - 0) + 0);
    if (word == undefined) {
    word = numbers[j];
    }
    else {
    word += numbers[j];
        if(testRegex.test(word)) {
        console.log("Error!");
        console.log("J = " + j);
        console.log("i = " + i);
        console.log("Number is undefined!");
        console.log("mode = " + mode);
        i = wordLength;
        }
}
}
    j = Math.round(Math.random() * (25 - 0) + 0);
    word += lowerAlphabet[j];
      if(testRegex.test(word)) {
        console.log("Error!");
        console.log("J = " + j);
        console.log("Lower Alphabet is undefined!");
        console.log("mode = " + mode);
        }
    j = Math.round(Math.random() * (25 - 0) + 0);
    word += upperAlphabet[j];
     if(testRegex.test(word)) {
        console.log("Error!");
        console.log("J = " + j);
        console.log("Upper Alphabet is undefined!");
        console.log("mode = " + mode);
        }
    j = Math.round(Math.random() * (42 - 0) + 0);
    word += specialCharacters[j];
     if(testRegex.test(word)) {
        console.log("Error!");
        console.log("J = " + j);
        console.log("Special Character is undefined!");
        console.log("mode = " + mode);
        }
        break;
    default:
        return console.log("Enter a valid value for the second argument, or leave it empty!");
        break;
}
return console.log(word);
}
console.log("Write randomWord(the length of the word, the type of the sequence (choices: any,simple,onlyNumbers,onlySpecialCharacters,onlyLetters, onlyOneSpecialCharacter, onlyOneSpecialCharacter.))")