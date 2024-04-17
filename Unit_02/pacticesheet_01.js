/*
Lesson : Practice Sheet
Date : 17, April, 2024.
*/

// Ques 1 : Use logical operator to find whether the age of a person lies between 10 and 20 ?

const input = require('readline-sync');
// let age = input.question("Enter your age: ");
// if (age > 10 && age <20){
//     console.log(age, ",Your age lies between 10 and 20.")
// }
// else{
//     console.log(age, ",Your age doesn't lies bwteen 10 and 20.")
// }


// Ques 2 : Demonstrate the use of Switch case Statement in JavaScript.

// let age1 = input.question("Enter your age : ")
// switch (age1){
//     case "12" : 
//     console.log("Your age is 12");
//     case "13" : 
//     console.log("Your age is 13");
//     break
//     case "14" : 
//     console.log("Your age is 14");
//     case "15" : 
//     console.log("Your age is 15");
//     default : 
//     console.log("Your age is not special");
// }


// Ques 3 : Write a Java Script program to find whether a number is divisible by 2 or 3 .

// num = input.question("Enter the number : ")
// if (num % 2 == 0 && num % 3 == 0){
//     console.log(num, "is divisible by both 2 and 3.")
// }
// else if (num % 2 == 0){
//     console.log(num, "is only divisible by 2.")
// }
// else if (num % 3 == 0){
//     console.log(num, "is only divisible by 3.")
// }
// else{
//     console.log(num, "is not divisible by both 2 and 3.")
// }


// Ques 4 : Print "you can drive " or "You cannot Drive " base on age being greater than 18 using ternary operator.

age2 = input.question("Enter your age : ")
console.log("You can ",(age2 >= 18 ? "Drive !!" : "not Drive !!!") )