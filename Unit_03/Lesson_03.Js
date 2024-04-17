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



// Example : Other method to creat and use the function . 

const product = (num1, num2) => {
    let pro = num1* num2;
    console.log("The product is :", pro);
}

product(25, 625)
