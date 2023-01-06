// Pseudo code
// Generate a password when the button is clicked
// Present a series of prompts for password criteria
// Length of password
// At least 10 characters but no more than 64.
  // Prompt:  How long would you like your password to be?(10-64)

var passwordLength;
var isLowerCase = false;
var isUpperCase = false;
var isNumericCharacters = false;
var isSpecialCharacters = false;


//   if(typeof(passwordLength) == 'number'){
//     console.log ("Well done!It's a number");
//   }
//   else {
//   console.log ("You need to select a number");
// }

if(isNaN(passwordLength)){
  alert("it is a valid number");
}else {
  alert("it is not a valid number");
}



  // Validation:
   //  Ensure that input is numerical and falls within the required specifications.
// Character types
// Lowercase
  // Confirm Prompt: Do you want lowercase  characters in your password?
// Uppercase
  // Confirm Prompt: Do you want uppercase characters in your password?
// Numeric
  //Confirm  Prompt: Do you want numeric characters in your password?
// Special characters ($@%&*, etc)
  //Confirm  Prompt: Do you want special characters in your password?
// Code should validate for each input and at least one character type should be selected
  // Minimum requirement: length of characters and at least one character type
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

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');


  var passwordLength = parseInt(prompt("How long would you like your password to be?"));
  console.log (typeof(passwordLength));

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);