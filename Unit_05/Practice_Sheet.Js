/*
Lesson - Practice Sheet.
Date : 27, April, 2024.
*/


// Ques 1 : Create an array of number and take input from the user to add numbers to this array.

let input = require("readline-sync")
let num = input.question("How Many Number You Want To Add : ")
arr = []
for(let i = 0 ; i < num ; i++){
    let num1 = input.question("Enter The Number : ")
    num2 = Number.parseInt(num1)
    arr.push(num2)
}
console.log(arr)