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