/* 
  Write an algorithm that takes an array of number as input and calculate
  the sum of those numbers.

  Define the Time complexity of tha algorithm and determine what the lowest possible
  Time Complexity is for this problem.
*/

const addConstNumbers = (array) => {

    return array[0] + array[1] + array[2]
}

console.log(addConstNumbers([1, 3, 10]))

const addNumbers = (array) => {
    let result = 0
    array.forEach(num => {
        result += num
    })

    return result
}

// Linear Time Complexity 0(6)

console.log(addNumbers([1,3,10]))


const addRecurse = (array) => {
    if (array.length === 0) {
        return 0
    } else {
        return array[0] + addRecurse(array.slice(1))
    }
}

// Linear Time Complexity 0(n)

console.log(addRecurse([1,3,10]))
