/* https://www.codewars.com/kata/526dbd6c8c0eb53254000110

In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore */

function alphanumeric(string) {
    if (string.split(' ').length > 1 || string.split('_').length > 1 || string.length === 0) return false;

    for (let i = 0; i < string.length; i++) {
        let code = string.toLowerCase().charCodeAt(i);
        if (code < 48 || (code > 57 && code < 97) || code > 122) return false
    }

    return true;
}