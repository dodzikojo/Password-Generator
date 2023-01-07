

class passwordOptions  {
  constructor(passwordLength, isMixedCase, isLowerCase, isUpperCase, isNumericCharacters, isSpecialCharacters){
    passwordLength = passwordLength;
    isMixedCase = isMixedCase,
    isLowerCase = isLowerCase,
    isUpperCase = isUpperCase,
    isNumericCharacters = isNumericCharacters,
    isSpecialCharacters = isSpecialCharacters
  }
 

}

let userPasswordOptions = new passwordOptions();


// Code should validate for each input and at least one character type should be selected

// Once prompts are answered then the password should be generated and displayed in an alert or written to the page

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  userPasswordOptions.passwordLength = parseInt(prompt("How long would you like your password to be?",10));


  if (userPasswordOptions.passwordLength >= 10 && userPasswordOptions.passwordLength <= 64 ) {
    userPasswordOptions.isMixedCase = confirm("Would you like your password to consist of Mixed cases?");
  
    if (userPasswordOptions.isMixedCase != true) {
  
      userPasswordOptions.isLowerCase = confirm("Include Lowercase only? Otherwise, Upper Case would be used.");
  
      if (userPasswordOptions.isLowerCase != true) {
        userPasswordOptions.isUpperCase = true;
      }
    }

    userPasswordOptions.isSpecialCharacters = confirm("Include special characters?")
  }
  else {
    alert("You need to enter a valid number between 10-64");
  }

  console.log(userPasswordOptions);
}

// Function for getting a random element from an array
function getRandom(arrayItem) {
  return item = arrayItem[Math.floor(Math.random()*arrayItem.length)];
}

// Function to generate password with user input
function generatePassword() {
  // getPasswordOptions();

  var generatedPassword = "";




  for (let index = 0; generatedPassword.length <= userPasswordOptions.passwordLength; index++) {

    if (userPasswordOptions.isMixedCase == true && generatedPassword.length != userPasswordOptions.passwordLength) {
      var randomItem = getRandom(lowerCasedCharacters);
      generatedPassword += randomItem;
      if (generatedPassword.length != userPasswordOptions.passwordLength) {
        var randomItem = getRandom(upperCasedCharacters);
        generatedPassword += randomItem;
      }
      
    }

    if (userPasswordOptions.isLowerCase == true && generatedPassword.length != userPasswordOptions.passwordLength) {
      var randomItem = getRandom(lowerCasedCharacters);
      generatedPassword += randomItem;
    }

    if (userPasswordOptions.isUpperCase == true && generatedPassword.length != userPasswordOptions.passwordLength) {
      var randomItem = getRandom(upperCasedCharacters);
      generatedPassword += randomItem;
    }

    if (userPasswordOptions.isSpecialCharacters == true && generatedPassword.length != userPasswordOptions.passwordLength) {
      var randomItem = getRandom(specialCharacters);
      generatedPassword += randomItem;
    }
    // console.log("counter is: "+index);
  }

  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);