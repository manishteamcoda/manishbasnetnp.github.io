// max function
function max(a, b) {
    return (a > b) ? a : b;
}

// maxOfThree function
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

// isVowel function
function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

// sum function
function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// multiply function
function multiply(numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}

// reverse function
function reverse(str) {
    return str.split('').reverse().join('');
}

// findLongestWord function
function findLongestWord(words) {
    return words.reduce((maxLength, word) => Math.max(maxLength, word.length), 0);
}

// filterLongWords function
function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

// myFunctionTest function
function myFunctionTest(expected, func) {
    const result = func();
    if (result === expected) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED. Expected " + expected + " but got " + result;
    }
}

// Test cases
console.log("Expected output of max(20,10) is 20 and " + myFunctionTest(20, function() { return max(20, 10); }));
console.assert(max(20, 10) === 20, "Expected output of max(20,10) is 20");

console.log("Expected output of maxOfThree(5,4,44) is 44 and " + myFunctionTest(44, function() { return maxOfThree(5, 4, 44); }));
console.assert(maxOfThree(5, 4, 44) === 44, "Expected output of maxOfThree(5,4,44) is 44");

console.log("Expected output of isVowel('a') is true and " + myFunctionTest(true, function() { return isVowel('a'); }));
console.assert(isVowel('a') === true, "Expected output of isVowel('a') is true");

console.log("Expected output of isVowel('b') is false and " + myFunctionTest(false, function() { return isVowel('b'); }));
console.assert(isVowel('b') === false, "Expected output of isVowel('b') is false");

console.log("Expected output of sum([1,2,3,4]) is 10 and " + myFunctionTest(10, function() { return sum([1, 2, 3, 4]); }));
console.assert(sum([1, 2, 3, 4]) === 10, "Expected output of sum([1,2,3,4]) is 10");

console.log("Expected output of multiply([1,2,3,4]) is 24 and " + myFunctionTest(24, function() { return multiply([1, 2, 3, 4]); }));
console.assert(multiply([1, 2, 3, 4]) === 24, "Expected output of multiply([1,2,3,4]) is 24");

console.log("Expected output of reverse('jag testar') is 'ratset gaj' and " + myFunctionTest('ratset gaj', function() { return reverse('jag testar'); }));
console.assert(reverse('jag testar') === 'ratset gaj', "Expected output of reverse('jag testar') is 'ratset gaj'");

console.log("Expected output of findLongestWord(['apple', 'banana', 'cherry']) is 6 and " + myFunctionTest(6, function() { return findLongestWord(['apple', 'banana', 'cherry']); }));
console.assert(findLongestWord(['apple', 'banana', 'cherry']) === 6, "Expected output of findLongestWord(['apple', 'banana', 'cherry']) is 6");

console.log("Expected output of filterLongWords(['apple', 'banana', 'cherry'], 5) is ['banana', 'cherry'] and " + myFunctionTest(['banana', 'cherry'].toString(), function() { return filterLongWords(['apple', 'banana', 'cherry'], 5).toString(); }));
console.assert(filterLongWords(['apple', 'banana', 'cherry'], 5).toString() === ['banana', 'cherry'].toString(), "Expected output of filterLongWords(['apple', 'banana', 'cherry'], 5) is ['banana', 'cherry']");




const a = [1, 3, 5, 3, 3];

// a) Multiply each element by 10
const multipliedByTen = a.map(function(elem) {
    return elem * 10;
});
console.log("Array elements multiplied by 10:", multipliedByTen);

// b) Return array with all elements equal to 3
const allThrees = a.map(function() {
    return 3;
});
console.log("Array with all elements equal to 3:", allThrees);

// c) Return the product of all elements
const productOfAllElements = a.reduce(function(prevValue, elem) {
    return prevValue * elem;
}, 1);
console.log("Product of all elements:", productOfAllElements);

// Original code for reference and further use
const b = a.map(function(elem, i, array) {
  return elem + 3;
});
console.log(b);

const c = a.filter
