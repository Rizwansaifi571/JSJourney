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


// Ques 2 : Keep adding numbers to the array in ques1 until o is added to the array.

arr = []
let num1 ;
do{
    num1 = input.question("Enter The Number : ")
    num2 = Number.parseInt(num1)
    arr.push(num2)
}
while(num1 != 0)
console.log(arr)
