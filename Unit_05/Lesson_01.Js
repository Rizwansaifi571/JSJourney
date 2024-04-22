/*
Lesson - Basic of Arrays.
Date : 22, April, 2024.
*/

// Example : Synatax of array.

let arr1 = [26, "January", false, null]
console.log(arr1)

// Example : Finding and accessing values in array.

let numbers = [1, 7, 9, 21]
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[4])    // Undefined
console.log(numbers.length)

// Example : Changing the values of element from an array.

numbers = [7, 2, 40, 9]
numbers[2] = 8    // Update Value of an element
console.log(numbers)

// Example : typeof operator on array.

let arr2 = [1, 7, 9]
console.log(typeof arr2)


// Example : Print all element with the help of for loop.

arr2 = [4, 5, 67, 8, 52, 8, 59, 45, 48, 84]
n = arr2.length
for (let i=0; i<n; i++){
    console.log(arr2[i])
}