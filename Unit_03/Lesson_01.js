/*
Lesson : For loops and there types.
Date : 17, April, 2024.
*/

// Example : Function for finding factorial using for loop.

const input = require("readline-sync")

let num = input.question("Enter number for factorial : ")
let fact = 1
for (let i=1 ; i<=num ; i++){
    fact *=  i
}
console.log("Factorial of", num+ "! is", fact );