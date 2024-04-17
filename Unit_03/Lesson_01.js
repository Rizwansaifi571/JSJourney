/*
Lesson : For loops and there types.
Date : 17, April, 2024.
*/

// Example : Function for finding factorial using for loop.

const input = require("readline-sync")

// let num = input.question("Enter number for factorial : ")
// let fact = 1
// for (let i=1 ; i<=num ; i++){
//     fact *=  i
// }
// console.log("Factorial of", num+ "! is", fact );


// Example : example for for-in loop.

let obj = {
    Rizwan : 95, 
    Jai : 94, 
    Aman : 90, 
    Vishal : 80, 
    Dev : 85
}

for (let a in obj){
    console.log("Marks of", a, ":", obj[a])
}
