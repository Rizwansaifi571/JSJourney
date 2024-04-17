/*
Lesson : Function in JavaScript.
Date : 17, April, 2024.
*/

// Example : Code for function.

input = require("readline-sync")
length = input.question("Enter the Length : ")
width = input.question("Enter the width : ")
function Area(length, width) {
    return length * width;
}

let area = Area(length, width);
console.log("Area of the rectangle:", area);
