# Password-Generator
An application to generate a random password based on criteria the user has selected.

## Project Requirements
* Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    * Length of password
      * At least 10 characters but no more than 64.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc)
  * Code should validate for each input and at least one character type should be selected

## Functionality
* A passwordOptions class is created to store all user selected options for creating the password.
    ```javascript
        class passwordOptions {
            constructor(passwordLength, isMixedCase, isLowerCase, isUpperCase, isNumericCharacters, isSpecialCharacters) {
                passwordLength = passwordLength;
                isMixedCase = isMixedCase,
                isLowerCase = isLowerCase,
                isUpperCase = isUpperCase,
                isNumericCharacters = isNumericCharacters,
                isSpecialCharacters = isSpecialCharacters
            }
    }
    ```

* Default value for length of password has be defined to simplify password generating.
    ```javascript
    userPasswordOptions.passwordLength = parseInt(prompt("How long would you like your password to be?", 14));
    ```
* Mixed Cases option has been added to simplify the user requiring to select both Lower and Upper cases
    ```javascript
      if (userPasswordOptions.passwordLength >= 10 && userPasswordOptions.passwordLength <= 64) {
         userPasswordOptions.isMixedCase = confirm("Would you like your password to consist of Mixed cases?");

        if (userPasswordOptions.isMixedCase != true) {
            userPasswordOptions.isLowerCase = confirm("Include Lowercase characters?");
            userPasswordOptions.isUpperCase = confirm("Include Uppercase characters?");
        }
        ....
    ```
## Preview
[Live Preview](https://dodzikojo.github.io/Password-Generator/ "Live Preview")