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

arr2 = []
let num1 ;
do{
    num1 = input.question("Enter The Number : ")
    num2 = Number.parseInt(num1)
    arr2.push(num2)
}
while(num1 != 0)
console.log(arr2)


// Ques 3 : Filter for numbers divisible by 10 from a given array.
arr = [10, 20, 13, 40, 65, 46, 7, 80, 59]
let a = arr.filter((value) => {
    return value % 10 == 0  ; 
})
console.log(a)


// Ques 4 : Create an array of square of given numbers.
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
a = arr.map((value) => {
    return value*value
})
console.log(a)


// Ques 5 : Use reduce to calculate factorial of a given number from an array of first n natural number.
let fac = input.question("Enter Number For Factorial : ")
arr =[]
for (i=1 ; i <=fac ; i++){
    arr.push(i)
}
a = arr.reduce((x1, x2) => {
    return x1 * x2
})
console.log(a)