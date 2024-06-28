// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
function calculateSum (a,b){
    return (a + b)
}

var a = 4;
var b = 5;
console.log(calculateSum(5, 3));

// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
function isEven (num){
    return (num % 2 === 0);
}

console.log(isEven(4));
console.log(isEven(5));

// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
function findMax(arr) {
    if (arr.length === 0) {
      throw new Error("Array is empty");
    }
    
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }

  console.log(findMax([1, 2, 3, 4, 5])); 
  console.log(findMax([-10, -5, 0, 5, 10]));

  // 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.
  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  console.log(reverseString("hello"));

  //5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
  function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
  }

  console.log(filterOddNumbers([1, 2, 3, 4, 5]));

  //6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
  function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }

  console.log(sumArray([1, 2, 3, 4, 5]));

  // 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
  function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
  }

  console.log(sortArray([5, 3, 8, 1, 2]));

  // 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized.
  function capitalizeFirstLetter(str) {
    if (str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  console.log(capitalizeFirstLetter("capitalize"));