/*
Lesson - String.
Date : 21, April, 2024.
*/

// Example : Syntax for string.

let name1 = "Rzwan"
let name2 = 'Harry'
let name3 = `Potter`
console.log(name1)
console.log(name2)
console.log(name3)

// Example : Template String.

let Sentence = `This "is" Rizwan's Pen.`
console.log(Sentence)

// Example : Code for Interpolation.

let name = "Rizwan"
let a = `This is ${name}`
let a1 = "This is ${name}"
console.log(a)
console.log(a1)    // only backtics used in interpolation.


// Example : Code for Escape Sequence Character.

// let name4 = 'Adam D' Agelo'   --> Cause error.

// Now, We can use single quote escape sequence to solve this problem.
let name4 = 'Adam D\' Angelo'
console.log(name4)


/*
Other Escape Sequence are as following.
\n  --> NewLine 
\t  --> Tab 
\r  --> Carriage Return 
*/


