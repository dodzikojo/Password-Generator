

class passwordOptions {
  constructor(passwordLength = 14, isMixedCase, isLowerCase, isUpperCase, isNumericCharacters, isSpecialCharacters) {
    passwordLength = passwordLength;
    isMixedCase = isMixedCase,
      isLowerCase = isLowerCase,
      isUpperCase = isUpperCase,
      isNumericCharacters = isNumericCharacters,
      isSpecialCharacters = isSpecialCharacters
  }


}

let userPasswordOptions = new passwordOptions();

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
  userPasswordOptions.passwordLength = parseInt(prompt("How long would you like your password to be?", 14));


  if (userPasswordOptions.passwordLength >= 10 && userPasswordOptions.passwordLength <= 64) {
    userPasswordOptions.isMixedCase = confirm("Would you like your password to consist of Mixed cases?");

    if (userPasswordOptions.isMixedCase != true) {

      userPasswordOptions.isLowerCase = confirm("Include Lowercase characters?");
      userPasswordOptions.isUpperCase = confirm("Include Uppercase characters?");

    }

    userPasswordOptions.isSpecialCharacters = confirm("Include special characters?");
    userPasswordOptions.isNumericCharacters = confirm("Include Numerical characters?");
  }
  else {
    alert("You need to enter a valid number between 10-64.");
  }
}

// Function for getting a random element from an array
function getRandom(arrayItem) {
  return item = arrayItem[Math.floor(Math.random() * arrayItem.length)];
}

// Function to generate password with user input
function generatePassword() {

  var generatedPassword = "";


  while (generatedPassword.length != userPasswordOptions.passwordLength) {
    if (userPasswordOptions.isMixedCase == true && generatedPassword.length != userPasswordOptions.passwordLength) {
      var randomItem = getRandom(lowerCasedCharacters);
      generatedPassword += randomItem;
      if (generatedPassword.length <= userPasswordOptions.passwordLength) {
        var randomItem = getRandom(upperCasedCharacters);
        generatedPassword += randomItem;
      }
    }

    if (userPasswordOptions.isNumericCharacters == true && generatedPassword.length != userPasswordOptions.passwordLength) {
      var randomItem = getRandom(numericCharacters);
      generatedPassword += randomItem;
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
  }

  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();

  
  var passwordText = document.querySelector('#password');

  if (userPasswordOptions.passwordLength >= 10 && userPasswordOptions.passwordLength <= 64) {
    if (userPasswordOptions.isNumericCharacters != false || userPasswordOptions.isSpecialCharacters != false || userPasswordOptions.isLowerCase != false || userPasswordOptions.isUpperCase != false) {
   
      var password = generatePassword();
      passwordText.value = password;
    }
    else {
      passwordText.value = "Unable to generate password. Check that all necessary information is provided."
    }
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);