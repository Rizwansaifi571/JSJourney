/*
Lesson - Map Filter and Reduce Function.
Date : 27, April, 2024.
*/


// Map Function.
let arr = [45, 23, 21]
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return (value + index)
})
console.log(a)


// Filter Function.
arr = [45, 23, 21, 0, 3, 5]
a = arr.filter((a) => {
    return a < 10
})
console.log(a)


// Reduce Function. 
arr = [1, 2, 3, 4, 5]
a = arr.reduce((h1, h2) => {
    return h1 + h2
})
console.log(a)