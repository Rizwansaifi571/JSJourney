/*
Lesson - String Function.
Date : 21, April, 2024.
*/

// Example 1 : Basic Function.

let name1  = "Harry"
console.log(name1.length)
console.log(name1.toUpperCase())
console.log(name1.toLowerCase())


// Example 2 : Slicing of string.
 
name1 = "Harry"
console.log(name1.slice(2, 4))
console.log(name1.slice(1, 4))
console.log(name1.slice(2))


// Example 3 : More functions

name1 = "Harry Bhai"
let newname = name1.replace("Bhai", "Bhau")
console.log(newname)


name1 = 'Harry'
let name2 = "Naman"
let name3 = name1.concat(name2, "Yes!")
console.log(name3)


name1 = '    Harry    '
newname = name1.trim()
console.log(newname)