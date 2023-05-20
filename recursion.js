// RECURSSION
// Note: Recursive functions must have a base case when they return without calling the function again, otherwise they can never finish executing.
// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
    // Only change code below this line
    if ( n <= 0) {
      return 0
    } else {
      return sum(arr, n-1) + arr[n - 1]
    }
  
    // Only change code above this line
  }

//   write a recursive function that returns an array containing the numbers 1 through n.
//   This function will need to accept an argument, n, representing the final number.
//   Then it will need to call itself with progressively smaller values of n until it reaches 1. You could write the function as follows:
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));

//   The value [1, 2, 3, 4, 5] will be displayed in the console.
//   At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing.
//   This happens because the push happens last, after the recursive call has returned.
//   At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].

// We have defined a function called countdown with one parameter (n). The function should use
// recursion to return an array containing the integers n through 1 based on the n parameter.
// If the function is called with a number less than 1, the function should return an empty array. 
// For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. 
// Your function must use recursion by calling itself and must not use loops of any kind.

// Only change code below this line
function countdown(n){
    if ( n < 1) {
      return []
    } else {
      const count = countdown(n - 1)
      count.unshift(n)
      return count 
    }
  }
  // Only change code above this line

//   We have defined a function named rangeOfNumbers with two parameters. The function should 
//   return an array of integers which begins with a number represented by the startNum parameter
//   and ends with a number represented by the endNum parameter. The starting number will always
//   be less than or equal to the ending number. Your function must use recursion by calling itself and
//   not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } else {
      const numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }