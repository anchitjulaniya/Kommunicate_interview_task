/**
 * 3. Write a javascript function that prints the reverse of a number. Example: if
the number is 149, then output should be 941.
 * 
 */


function reverseNumber(number) {
    let numberStr = number.toString();
    
    let reversedStr = numberStr.split('').reverse().join('');
   
    return parseInt(reversedStr, 10);
}

console.log(reverseNumber(149));  // Output: 941
console.log(reverseNumber(12345));  // Output: 54321
