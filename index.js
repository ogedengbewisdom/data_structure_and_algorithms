/* You got a list of items, where every item has a value and weight. 
You got a bag that holds a maximum weight of X.
Write a program that maximizes the value of the items you put into the bag whilst ensuring that you
dont exceed the maximum weight. */

const items = [
    {
        id: "a",
        val: 10,
        w: 3
    },
    {
        id: "b",
        val: 6,
        w: 8
    },
    {
        id: "c",
        val: 3,
        w: 3
    }
]

const maxWeight = 8;

const bag = ["a", "c"] // solution

/* Value: 13
Weight: 6 (<8) 
*/

const codeBag = items.slice(-1, 3)
console.log(codeBag)


/* 
write a function that takes one number as an input and then builds the sum of all the number leading up to that number
*/

// const sumUp = (num) => {
//     let result = 0
//     for ( let i = 0; i <= num; i++) {
//         result += i
//     }

//     return result
// }

// let start = performance.now()
// sumUp(10)
// let end = performance.now()
// console.log(end - start)

// for better performance for this problem can be solved without looping

// const sumUp = (n) => {
//     return (n /2) * (n + 1)
// }

// let start = performance.now()
// sumUp(10000)
// let end = performance.now()
// console.log(end - start)

